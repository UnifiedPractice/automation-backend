import * as settingsFixtures from './../../../tests/scheduling/calendar/fixtures/settings.fixtures'
import {CONSTANTS} from "../../../helper";

/**
 * Assert getting calendar events
 * @param {Object} response - GET /calendar/events response
 * @param {number} index - index for each event
 */
function assertGetAllCalendarEvents (response: any) {
    response.body.forEach((item: any, index:number) => {
        expect(item.id).exist;
        expect(item.type).oneOf(CONSTANTS.eventTypes);
        expect(item.startTime).contain(CONSTANTS.startDate);
        expect(item.eventResources[index].id).exist;
        expect(item.eventResources[index].type).exist;
    });
};

/**
 * Assert getting calendar events by ID
 * @param {Object} response - GET /calendar/events/{id} response
 * @param {number} eventId - the event Id
 */
function assertGetCalendarEvent (response: any, eventId: number) {
    expect(response.body.id).equals(eventId)
    expect(response.body.createdBy).equals(`${CONSTANTS.objectId}`);
};

/**
 * Assert getting calendar availabilities
 * @param {Object} response  - GET /calendar/availabilities response
 */
function assertGetAllCalendarAvailabilities (response: any) {
    //TODO    
};

/**
 * Assert getting calendar availabilities by Resource Type
 * @param {Object} response - GET /calendar/availabilities/{resourceType} response
 */
function assertGetCalendarAvailabilitiesByResourceType (response: any) {
    //TODO
    
};

/**
 * Assert getting calendar settings
 * @param {Object} response - GET /calendar/settings response
 */
function assertgetAllCalendarSettings (response: any) {
    //TODO
};

/**
 * Assert updating calendar settings
 * @param {Object} response - PUT /calendar/settings response
 */
function assertUpdateCalendarSettings (response: any, settingsId: number) {
    expect(response.body.data).equals(settingsId);
};

/**
 * Assert getting calendar view-settings
 * @param {Object} response - GET /calendar/view-settings response
 */
function assertGetAllCalendarViewSettings(response: any) {
    //TODO
};

/**
 * Assert updating calendar view settings
 * @param {Object} response - PUT /calendar/view-settings response
 */
function assertUpdateCalendarViewSettings (response: any) {
    expect(response.body.data).equals(0);
};

/**
 * Assert updating calendar user settings
 * @param {Object} response - PUT /calendar/user-settings response
 */
function assertUpdateCalendarUserSettings (response: any) {
    expect(response.body.data).equals(settingsFixtures.validUserSettingsPayload.id);
};

/**
 * Assert adding calendar events timeoffs
 * @param {Object} response - POST /calendar/events/timeoffs
 */
function assertAddCalendarTimeoffs(response: any) {
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number')
    expect(response.body.messages).to.be.an('array');
};

/**
 * Assert updating calendar events timeoffs
 * @param {Object} response - PATCH /calendar/events/timeoffs/{id}
 */
function assertUpdateCalendarTimeoffs(response: any, timeoffId: number) {
    expect(response.body.data).equals(timeoffId);
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number')
    expect(response.body.messages).to.be.an('array');
};

/**
 * Assert deleting calendar events timeoffs
 * @param {Object} response - DELETE /calendar/events/timeoffs/{id}
 */
function assertDeleteCalendarTimeoffs(response: any, timeoffId: number) {
    expect(response.body.data).equals(timeoffId);
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number')
    expect(response.body.messages).to.be.an('array');
};

/**
 * Assert adding calendar events rooms-reservations
 * @param {Object} response - POST /calendar/events/rooms-reservations
 */
function assertAddCalendarRoomsReservations(response: any) {
    //the response body is absent from swagger
};

/**
 * Assert updating calendar events rooms-reservations
 * @param {Object} response - PATCH /calendar/events/rooms-reservations
 */
function assertUpdateCalendarRoomsReservations(response: any) {
    //the response body is absent from swagger
};

/**
 * Assert deleting calendar events rooms-reservations
 * @param {Object} response - DELETE /calendar/events/rooms-reservations/{id}
 */
function assertDeleteCalendarRoomsReservations(response: any, roomReservationId: number) {
    //the response body is absent from swagger
};

/**
 * Assert getting appointments by eventId
 * @param {Object} response - GET calendar/events/{id}/appointments
 */
function assertGetCalendarAppointmentByEventId(response: any) {
    //TODO
};

/**
 * Assert getting appointment legacyId by appointmentID
 * @param {Object} response - GET /calendar/events/{id}/legacyId
 */
function asserrtGetCalendarLegacyIdByEventId(response: any) {
    //TODO
};

/**
 * Assert adding calendar events appointments
 * @param {Object} response - POST /calendar/events/appointments
 */
function assertAddCalendarAppointments(response: any) {
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number')
    expect(response.body.messages).to.be.an('array');
};

/**
 * Assert updating an Accepted appointment will fail
 * @param {Object} response 
 */
function assertErrorOnUpdateCalendarAppointments (response: any) {
    expect(response.status).equals(400);
    expect(response.body[0].type).equals("Warning");
    expect(response.body[0].description).equals("Cancellation fee cannot be collected unless the appointment is marked as no show.");
};

/**
 * Assert deleting calendar appointments
 * @param {Object} response - DELETE /calendar/events/appointments/{id}
 */
function assertDeleteCalendarAppointmens(response: any, appointmentId: number) {
    expect(response.body.data).equals(appointmentId);
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number')
    expect(response.body.messages).to.be.an('array');
}

/**
 * Assert getting appointment by appointmentId
 * @param {Object} response - GET/calendar/events/appointments/{id}
 */
function assertGetCalendarAppointmentById(response: any) {
    //TODO
};

/**
 * Assert getting appointment set by appointmentId
 * @param {Object} response - GET /calendar/events/appointments/{id}/set
 */
function assertGetCalendarAppontmentSetById(response: any) {
    //TODO
};

/**
 * Assert getting appointment future-recurrents by appointmentId
 * @param {Object} response GET /calendar/events/appointments/{id}/future-recurrents
 */
function assertGetCalendarAppointmentFutureRecurrentsById(response: any) {
    //TODO
};

/**
 * Assert adding appointment first-visits
 * @param {Object} response POST /calendar/events/appointments/first-visits
 */
function assertAddAppointmentsFirstVisits(response: any) {
    expect(response.body.data).exist;
    expect(response.body.messages).exist
}

/**
 * Assert adding appointment scheduling-conflivcts
 * @param {Object} response POST /calendar/events/appointments/scheduling-conflicts
 */
function assertAddAppointmentsSchedulingConflicts(response: any) {
    expect(response.body.data).exist;
    expect(response.body.messages).exist
}

/**
 * Assert getting appointment defaults by patientId
 * @param {Object} response - GET /calendar/events/appointments/{patientId}/defaults
 */
function assertGetCalendarAppontmentDefaultsByPatientId(response: any) {
    //TODO
};

/**
 * Assert rejecting an Accepted appointment will fail
 * @param {Object} response 
 */
function assertErrorOnRejectCalendarAppointments (response: any) {
    expect(response.status).equals(405);
    //expect(response.body[0].type).equals("Error");
    //expect(response.body[0].description).equals("Can not reject appointment with state : Cancelled.");
};

/**
 * Assert getting appointment legacyId by appointmentId
 * @param {Object} response - GET /calendar/events/appointments/{id}/legacyId
 */
function assertGetCalendarAppointmentLegacyIdById(response: any) {
    //TODO
};

export {
    assertGetAllCalendarEvents,
    assertGetCalendarEvent,
    assertGetAllCalendarAvailabilities,
    assertGetCalendarAvailabilitiesByResourceType,
    assertgetAllCalendarSettings,
    assertUpdateCalendarSettings,
    assertGetAllCalendarViewSettings,
    assertUpdateCalendarViewSettings,
    assertUpdateCalendarUserSettings,
    assertAddCalendarTimeoffs,
    assertUpdateCalendarTimeoffs,
    assertDeleteCalendarTimeoffs,
    assertAddCalendarRoomsReservations,
    assertUpdateCalendarRoomsReservations,
    assertDeleteCalendarRoomsReservations,
    assertGetCalendarAppointmentByEventId,
    asserrtGetCalendarLegacyIdByEventId,
    assertAddCalendarAppointments,
    assertGetCalendarAppointmentById,
    assertErrorOnUpdateCalendarAppointments,
    assertDeleteCalendarAppointmens,
    assertGetCalendarAppontmentSetById,
    assertGetCalendarAppointmentFutureRecurrentsById,
    assertAddAppointmentsFirstVisits,
    assertAddAppointmentsSchedulingConflicts,
    assertGetCalendarAppontmentDefaultsByPatientId,
    assertErrorOnRejectCalendarAppointments,
    assertGetCalendarAppointmentLegacyIdById
};