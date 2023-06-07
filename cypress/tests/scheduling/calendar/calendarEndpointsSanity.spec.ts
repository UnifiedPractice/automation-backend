import * as calendarEndpoints from './../../../services/scheduling/calendar/calendar.endpoints'
import * as calendarAssertions from './../../../services/scheduling/calendar/calendar.assertions'
import * as calendarHelpers from    './../../../services/scheduling/calendar/calendar.helpers'
import * as commonAssertions from './../../../services/common.assertions'
import * as settingsFixtures from './../../../tests/scheduling/calendar/fixtures/settings.fixtures'
import * as roomsReservationsFixtures from './../../../tests/scheduling/calendar/fixtures/roomsReservations.fixtures'
import * as appointmentsFixtures from './../../../tests/scheduling/calendar/fixtures/appointments.fixtures'
import { CONSTANTS } from '../../../helper'

describe('Calendar GET Endpoints - Sanity Tests', () => {
    let eventId: number;
    let appointmentId: number;
    let insertedAppointmentId: number;
    let patientId: number;
    let validViewSettingsPayload: string;
    let timeoffId: number;
    let roomReservationId: number;
    
    context('calendar GET /calendar/events',  () => {
        it('should get all calendar events',  () => {
            const response = calendarEndpoints.getAllCalendarEvents();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
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
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertGetCalendarEvent(response, eventId);
            });     
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar GET /calendar/availabilities', () => {
        it('should get all calendar availabilities', () => {
            const response = calendarEndpoints.getAllCalendarAvailabilities();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
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
                    commonAssertions.assertIsSuccessfullResponseArray(response);
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
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertgetAllCalendarSettings(response);
                settingsFixtures.validSettingsPayload.resourceSettings = calendarHelpers.getResourceSettings(response);
                settingsFixtures.validSettingsPayload.otherColors = calendarHelpers.getOtherColors(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar PUT /calendar/settings', () => {
        it('should update the calendar settings', ()=> {
            const response = calendarEndpoints.updateCalendarSettings();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertUpdateCalendarSettings(response,settingsFixtures.validSettingsPayload.id);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar GET /calendar/view-settings', () => {
        it('should get all calendar view settings', () => {
            const response = calendarEndpoints.getAllCalendarViewSettings();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertGetAllCalendarViewSettings(response);
                validViewSettingsPayload = calendarHelpers.getCalendarViewSettingsPayload(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context ('calendar PUT /calendar/view-settings', () => {
        it('should update the calendar view settings', () => {
            const response = calendarEndpoints.updateCalendarViewSettings(validViewSettingsPayload);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertUpdateCalendarViewSettings(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar PUT /calendar/user-settings', () => {
        it('should update the calendar user settings', () => {
            const response = calendarEndpoints.updateCalendarUserSettings();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertUpdateCalendarUserSettings(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar POST /calendar/events/timeoffs', () => {
        it('should create a calendar event timeoff', () => {
            const response = calendarEndpoints.addCalendarTimeoffs();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertAddCalendarTimeoffs(response);
                timeoffId = calendarHelpers.getDataId(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar PATCH /calendar/events/timeoffs/{id}', () => {
        it('should update the calendar event timeoff', () => {
            const response = calendarEndpoints.updateCalendarTimeoffs(timeoffId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertUpdateCalendarTimeoffs(response,timeoffId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar DELETE /calendar/events/timeoffs/{id}', () => {
        it('should delete the calendar event timeoff', () => {
            const response = calendarEndpoints.deleteCalendarTimeoffs(timeoffId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertDeleteCalendarTimeoffs(response,timeoffId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar POST /calendar/events/rooms-reservations', () => {
        it('should create a room reservation', () => {
            const response = calendarEndpoints.addCalendarRoomsReservations();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertAddCalendarRoomsReservations(response);
                roomReservationId = roomsReservationsFixtures.validRoomsReservationsPayload.id;
            });
            ////the response body is absent from swagger
        });
    });

    context('calendar PATCH /calendar/events/rooms-reservations', () => {
        it('should update the room reservation', () => {
            const response = calendarEndpoints.updateCalendarRoomsReservations();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertUpdateCalendarRoomsReservations(response);
            });
            //the response body is absent from swagger
        });
    });

    context('calendar DELETE /calendar/events/rooms-resercations/{id}', () => {
        it('should delete the room reservation', () => {
            const response = calendarEndpoints.deleteCalendarRoomsReservations(roomReservationId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertDeleteCalendarRoomsReservations(response,roomReservationId);
            });
            //the response body is absent from swagger
        });
    });

    context('calendar GET calendar/events/{id}/appointments', () => {
        it('should get all calendar appointments by eventId', () => {
            const response = calendarEndpoints.getCalendarAppointmentByEventId(eventId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertGetCalendarAppointmentByEventId(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar GET /calendar/events/{id}/legacyId', () => {
        it('should get the calendar legacyId by eventId', () => {
            const response = calendarEndpoints.getCalendarLegacyIdByEventId(eventId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.asserrtGetCalendarLegacyIdByEventId(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar POST /calendar/events/appointments', () => {
        it('should create a new appointment', () => {
            const response = calendarEndpoints.addCalendarAppointments();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertAddCalendarAppointments(response);
                insertedAppointmentId = calendarHelpers.getDataId(response);
                appointmentsFixtures.validAppointmentRejectPayload.id = insertedAppointmentId;
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar GET /calendar/events/appointments/{id}', () => {
        it('should get the calendar appointment by its Id', () => {
            const response = calendarEndpoints.getCalendarAppointmentById(appointmentId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertGetCalendarAppointmentById(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar PATCH /calendar/events/appointments/{id}', () => {
        it('should fail to update an Accepted appointment', () => {
            const response = calendarEndpoints.updateCalendarAppointments(insertedAppointmentId);
            response.then((response: any) => {
                calendarAssertions.assertErrorOnUpdateCalendarAppointments(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should update a calendar appointment', () => {
            //TODO: Implement this test
            //...
        });
    });

    context('calendar DELETE /calendar/events/appointments/{id}', () => {
        it('should delete a calendar appointment', () => {
            const response = calendarEndpoints.deleteCalendarAppointments(insertedAppointmentId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertDeleteCalendarAppointmens(response, insertedAppointmentId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar GET /calendar/events/appointments/{id}/set', () => {
        it('should get the calendar appointment set by appointmentId', () => {
            const response = calendarEndpoints.getCalendarAppontmentSetById(appointmentId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                calendarAssertions.assertGetCalendarAppontmentSetById(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar GET /calendar/events/appointments/{id}/future-recurrents', () => {
        it('should get the calendar appointment future recurents by appointmentId', () => {
            const response = calendarEndpoints.getCalendarAppointmentFutureRecurrentsById(appointmentId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                calendarAssertions.assertGetCalendarAppointmentFutureRecurrentsById(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar POST /calendar/events/appointments/first-visits', () => {
        it('should create an appointment first visit', () => {
            const response = calendarEndpoints.addAppointmentsFirstVisits();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertAddAppointmentsFirstVisits(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar POST /calendar/events/appointments/scheduling-conflicts', () => {
        it('should create an appointment scheduling conflict', () => {
            const response = calendarEndpoints.addAppointmentsSchedulingConflicts();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertAddAppointmentsSchedulingConflicts(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('calendar GET /calendar/events/appointments/{patientId}/defaults', () => {
        it('should get the calendar appointment defaults by patientId', () => {
            const response = calendarEndpoints.getCalendarAppontmentDefaultsByPatientId(patientId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertGetCalendarAppontmentDefaultsByPatientId(response);
            });
            commonAssertions.assertResponseJsonContentType;
        });
    });

    context('calendar PUT /calendar/events/appointments/{id}/reject', () => {
        it('should fail to reject a Canceled appointment', () => {
            const response = calendarEndpoints.updateAppointmentsReject(insertedAppointmentId);
            response.then((response: any) => {
                calendarAssertions.assertErrorOnRejectCalendarAppointments(response);
            });
            //commonAssertions.assertResponseJsonContentType(response);
        });

        it('should reject a calendar appointment', () => {
            //TODO: Implement this test
            //...
        });
    });

    context('calendar GET /calendar/events/appointments/{id}/legacyId', () => {
        it ('should get the calendar appointment legacyId by appointmentId', () => {
            const response = calendarEndpoints.getCalendarAppointmentLegacyIdById(appointmentId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                calendarAssertions.assertGetCalendarAppointmentLegacyIdById(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });
});