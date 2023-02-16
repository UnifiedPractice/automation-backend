import * as calendarEndpoints from './../../../services/scheduling/calendar/calendar.endpoints'
import * as calendarAssertions from './../../../services/scheduling/calendar/calendar.assertions'
import * as commonAssertions from './../../../services/common.assertions'
import { CONSTANTS } from '../../../helper'

describe('Calendar GET Endpoints - Sanity Tests', () => {
    let eventId: Number
    let appointmentId: Number
    let patientId: Number

    context('calendar GET /calendar/events',  () => {
        it('should get all calendar events',  () => {
            const request = calendarEndpoints.getAllCalendarEvents();
            request.then((response: any) => {
                commonAssertions.assertIsSuccessfullGetArray(response);
                calendarAssertions.assertGetAllCalendarEvents(response);
                eventId = response.body[0].id;
                appointmentId = getAppointmentId(response);
                patientId = getPatientId(response);
            });
            commonAssertions.assertResponseJsonContentType(request);
        });

     });

     context('calendar GET /calendar/events/{id}',  () => {
        it('should get a calendar event by its Id',  () => {
            const request = calendarEndpoints.getCalendarEvent(eventId);
            request.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                calendarAssertions.assertGetCalendarEvent(response);
                expect(response.body.id).equal(eventId);
            });     
            commonAssertions.assertResponseJsonContentType(request);
        });
    });

    context('calendar GET /calendar/availabilities', () => {
        it('should get all calendar availabilities', () => {
            const request = calendarEndpoints.getAllCalendarAvailabilities();
            request.then((response: any) => {
                commonAssertions.assertIsSuccessfullGetArray(response);
                calendarAssertions.assertGetAllCalendarAvailabilities(response);
            });
            commonAssertions.assertResponseJsonContentType(request);
        });
    });

    context('calendar GET /calendar/availabilities/{resourceType}', () => {
        it('should get the calendar availabilities by resourceType', () => {
            CONSTANTS.resourceTypes.forEach((resourceType:any) => {
                const request = calendarEndpoints.getCalendarAvailabilitiesByResourceType(resourceType);
                request.then((response: any) => {
                    commonAssertions.assertIsSuccessfullGetArray(response);
                    calendarAssertions.assertGetCalendarAvailabilitiesByResourceType(response);
                });
                commonAssertions.assertResponseJsonContentType(request);
            });
        });
    });

    context('calendar GET /calendar/settings', () => {
        it('should get all calendar settings', () => {
            const request = calendarEndpoints.getAllCalendarSettings();
            request.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                calendarAssertions.assertgetAllCalendarSettings(response);
            });
            commonAssertions.assertResponseJsonContentType(request);
        });
    });

    context('calendar GET /calendar/view-settings', () => {
        it('should get all calendar view settings', () => {
            const request = calendarEndpoints.getAllCalendarViewSettings();
            request.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                calendarAssertions.assertGetAllCalendarViewSettings(response);
            });
            commonAssertions.assertResponseJsonContentType(request);
        });
    });

    context('calendar GET calendar/events/{id}/appointments', () => {
        it('should get all calendar appointments by eventId', () => {
            const request = calendarEndpoints.getCalendarAppointmentByEventId(eventId);
            request.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                calendarAssertions.assertGetCalendarAppointmentByEventId(response);
            });
            commonAssertions.assertResponseJsonContentType(request);
        });
    });

    context('calendar GET /calendar/events/{id}/legacyId', () => {
        it('should get the calendar legacyId by eventId', () => {
            const request = calendarEndpoints.getCalendarLegacyIdByEventId(eventId);
            request.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                calendarAssertions.asserrtGetCalendarLegacyIdByEventId(response);
            });
            commonAssertions.assertResponseJsonContentType(request);
        });
    });

    context('calendar GET /calendar/events/appointments/{id}', () => {
        it('should get the calendar appointment by its Id', () => {
            const request = calendarEndpoints.getCalendarAppointmentById(appointmentId);
            request.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                calendarAssertions.assertGetCalendarAppointmentById(response);
            });
            commonAssertions.assertResponseJsonContentType(request);
        });
    });

    context('calendar GET /calendar/events/appointments/{id}/set', () => {
        it('should get the calendar appointment set by appointmentId', () => {
            const request = calendarEndpoints.getCalendarAppontmentSetById(appointmentId);
            request.then((response: any) => {
                commonAssertions.assertIsSuccessfullGetArray(response);
                calendarAssertions.assertGetCalendarAppontmentSetById(response);
            });
            commonAssertions.assertResponseJsonContentType(request);
        });
    });

    context('calendar GET /calendar/events/appointments/{id}/future-recurrents', () => {
        it('should get the calendar appointment future recurents by appointmentId', () => {
            const request = calendarEndpoints.getCalendarAppointmentFutureRecurrentsById(appointmentId);
            request.then((response: any) => {
                commonAssertions.assertIsSuccessfullGetArray(response);
                calendarAssertions.assertGetCalendarAppointmentFutureRecurrentsById(response);
            });
            commonAssertions.assertResponseJsonContentType(request);
        });
    });

    context('calendar GET /calendar/events/appointments/{patientId}/defaults', () => {
        it('should get the calendar appointment defaults by patientId', () => {
            const request = calendarEndpoints.getCalendarAppontmentDefaultsByPatientId(patientId);
            request.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                calendarAssertions.assertGetCalendarAppontmentDefaultsByPatientId(response);
            });
            commonAssertions.assertResponseJsonContentType;
        });
    });

    context('calendar GET /calendar/events/appointments/{id}/legacyId', () => {
        it ('should get the calendar appointment legacyId by appointmentId', () => {
            const request = calendarEndpoints.getCalendarAppointmentLegacyIdById(appointmentId);
            request.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                calendarAssertions.assertGetCalendarAppointmentLegacyIdById(response);
            });
            commonAssertions.assertResponseJsonContentType(request);
        });
    });
});

function getAppointmentId(response: any) {
    let appointmentIds: Number[] = [];
    response.body.forEach ((item: any) => {
        appointmentIds.push(item.type === 'Appointment' ? item.id : null);
    });
    return appointmentIds[0];
};

function getPatientId(response: any) {
    let patientIds: Number[] = [];
    response.body.forEach ((item: any) => {
        patientIds.push(item.properties.Appointment.patientId);
    });
    return patientIds[0];
};