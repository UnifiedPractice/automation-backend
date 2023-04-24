import * as calendarEndpoints from './../../../services/scheduling/calendar/calendar.endpoints'
import * as calendarAssertions from './../../../services/scheduling/calendar/calendar.assertions'
import * as calendarHelpers from    './../../../services/scheduling/calendar/calendar.helpers'
import * as commonAssertions from './../../../services/common.assertions'
import { CONSTANTS } from '../../../helper'

describe('Calendar GET Endpoints - Sanity Tests', () => {
    let eventId: Number
    let appointmentId: Number
    let patientId: Number

    context('calendar GET /calendar/events',  () => {
        it('should get all calendar events',  () => {
            const response = calendarEndpoints.getAllCalendarEvents();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGetArray(response);
                calendarAssertions.assertGetAllCalendarEvents(response);
                eventId = calendarHelpers.getEventId(response);
                appointmentId = calendarHelpers.getAppointmentId(response);
                patientId = calendarHelpers.getPatientId(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

     });

     context('calendar GET /calendar/events/{id}',  () => {
        it('should get a calendar event by its Id',  () => {
            const response = calendarEndpoints.getCalendarEvent(eventId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                calendarAssertions.assertGetCalendarEvent(response, eventId);
            });     
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar GET /calendar/availabilities', () => {
        it('should get all calendar availabilities', () => {
            const response = calendarEndpoints.getAllCalendarAvailabilities();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGetArray(response);
                calendarAssertions.assertGetAllCalendarAvailabilities(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar GET /calendar/availabilities/{resourceType}', () => {
        it('should get the calendar availabilities by resourceType', () => {
            CONSTANTS.resourceTypes.forEach((resourceType:any) => {
                const response = calendarEndpoints.getCalendarAvailabilitiesByResourceType(resourceType);
                response.then((response: any) => {
                    commonAssertions.assertIsSuccessfullGetArray(response);
                    calendarAssertions.assertGetCalendarAvailabilitiesByResourceType(response);
                });
                commonAssertions.assertResponseJsonContentType(response);
            });
        });
    });

    context('calendar GET /calendar/settings', () => {
        it('should get all calendar settings', () => {
            const response = calendarEndpoints.getAllCalendarSettings();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                calendarAssertions.assertgetAllCalendarSettings(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar GET /calendar/view-settings', () => {
        it('should get all calendar view settings', () => {
            const response = calendarEndpoints.getAllCalendarViewSettings();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                calendarAssertions.assertGetAllCalendarViewSettings(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar GET calendar/events/{id}/appointments', () => {
        it('should get all calendar appointments by eventId', () => {
            const response = calendarEndpoints.getCalendarAppointmentByEventId(eventId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                calendarAssertions.assertGetCalendarAppointmentByEventId(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar GET /calendar/events/{id}/legacyId', () => {
        it('should get the calendar legacyId by eventId', () => {
            const response = calendarEndpoints.getCalendarLegacyIdByEventId(eventId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                calendarAssertions.asserrtGetCalendarLegacyIdByEventId(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar GET /calendar/events/appointments/{id}', () => {
        it('should get the calendar appointment by its Id', () => {
            const response = calendarEndpoints.getCalendarAppointmentById(appointmentId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                calendarAssertions.assertGetCalendarAppointmentById(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar GET /calendar/events/appointments/{id}/set', () => {
        it('should get the calendar appointment set by appointmentId', () => {
            const response = calendarEndpoints.getCalendarAppontmentSetById(appointmentId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGetArray(response);
                calendarAssertions.assertGetCalendarAppontmentSetById(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar GET /calendar/events/appointments/{id}/future-recurrents', () => {
        it('should get the calendar appointment future recurents by appointmentId', () => {
            const response = calendarEndpoints.getCalendarAppointmentFutureRecurrentsById(appointmentId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGetArray(response);
                calendarAssertions.assertGetCalendarAppointmentFutureRecurrentsById(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar GET /calendar/events/appointments/{patientId}/defaults', () => {
        it('should get the calendar appointment defaults by patientId', () => {
            const response = calendarEndpoints.getCalendarAppontmentDefaultsByPatientId(patientId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                calendarAssertions.assertGetCalendarAppontmentDefaultsByPatientId(response);
            });
            commonAssertions.assertResponseJsonContentType;
        });
    });

    context('calendar GET /calendar/events/appointments/{id}/legacyId', () => {
        it ('should get the calendar appointment legacyId by appointmentId', () => {
            const response = calendarEndpoints.getCalendarAppointmentLegacyIdById(appointmentId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                calendarAssertions.assertGetCalendarAppointmentLegacyIdById(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });
});