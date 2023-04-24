import {CONSTANTS} from "../../../helper";

/**
 * Assert getting calendar events
 * @param {Object} response - GET /calendar/events response
 * @param {Number} index - index for each event
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
 * @param {Number} eventId - the event Id
 */
function assertGetCalendarEvent (response: any, eventId: Number) {
    expect(response.body.id).equal(eventId)
    expect(response.body.createdBy).equal(`${CONSTANTS.objectId}`);
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
 * Assert getting calendar view-settings
 * @param {Object} response - GET /calendar/view-settings response
 */
function assertGetAllCalendarViewSettings(response: any) {
    //TODO
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
 * Assert getting appointment defaults by patientId
 * @param {Object} response - GET /calendar/events/appointments/{patientId}/defaults
 */
function assertGetCalendarAppontmentDefaultsByPatientId(response: any) {
    //TODO
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
    assertGetAllCalendarViewSettings,
    assertGetCalendarAppointmentByEventId,
    asserrtGetCalendarLegacyIdByEventId,
    assertGetCalendarAppointmentById,
    assertGetCalendarAppontmentSetById,
    assertGetCalendarAppointmentFutureRecurrentsById,
    assertGetCalendarAppontmentDefaultsByPatientId,
    assertGetCalendarAppointmentLegacyIdById
};