import * as calendarEndpoints from './../../../services/scheduling/calendar/calendar.endpoints'
import * as calendarAssertions from './../../../services/scheduling/calendar/calendar.assertions'
import * as commonAssertions from './../../../services/common.assertions'
import { CONSTANTS } from '../../../helper'
import { any } from 'cypress/types/bluebird'

describe('Calendar GET Endpoints - Sanity Tests', () => {
    let eventId:any

    context('calendar GET /calendar/events',  () => {
        it('should get all calendar events',  () => {
            const request = calendarEndpoints.getAllCalendarEvents();
            request.then((response: any) => {
                calendarAssertions.assertGetAllCalendarEvents(response);
                eventId = response.body[0].id;
            })
            commonAssertions.assertResponseJsonContentType(request);
        })

     })

     context('calendar GET /calendar/events/{id}',  () => {
        it('should get a calendar event by its Id',  () => {
            const request = calendarEndpoints.getCalendarEvent(eventId);
            request.then((response: any) => {
                calendarAssertions.assertGetCalendarEvent;
                expect(response.body.id).equal(eventId)
            })
                
            commonAssertions.assertResponseJsonContentType(request);
        })
    })

    context('calendar GET /calendar/availabilities', () => {
        it('should get all calendar availabilities', () => {
            const request = calendarEndpoints.getAllCalendarAvailabilities();
            request.then(calendarAssertions.assertGetAllCalendarAvailabilities);
            commonAssertions.assertResponseJsonContentType(request);
        })
    })

    context('calendar GET /calendar/availabilities/{resourceType}', () => {
        it('should get the calendar availabilities by resourceType', () => {
            CONSTANTS.resourceTypes.forEach((resourceType:any) => {
                const request = calendarEndpoints.getCalendarAvailabilitiesByResourceType(resourceType);
                request.then(calendarAssertions.assertGetCalendarAvailabilitiesByEventType);
                commonAssertions.assertResponseJsonContentType(request);
            })
        })
    })

    context('calendar GET /calendar/settings', () => {
        it('should get all calendar settings', () => {
            const request = calendarEndpoints.getAllCalendarSettings();
            request.then(calendarAssertions.assertgetAllCalendarSettings);
            commonAssertions.assertResponseJsonContentType(request);
        })
    })

    context('calendar GET /calendar/view-settings', () => {
        it('should get all calendar view settings', () => {
            const request = calendarEndpoints.getAllCalendarViewSettings();
            request.then(calendarAssertions.assertGetAllCalendarViewSettings);
            commonAssertions.assertResponseJsonContentType(request);
        })
    })
})
