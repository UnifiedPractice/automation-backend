import {BASEPATHS} from '../../../helper'
import {API} from '../../../helper'
import {CONSTANTS} from '../../../helper'
import * as settingsFixtures from './../../../tests/scheduling/calendar/fixtures/settings.fixtures'
import * as timeoffsFixtures from './../../../tests/scheduling/calendar/fixtures/timeoffs.fixtures'
import * as roomsReservationsFixtures from './../../../tests/scheduling/calendar/fixtures/roomsReservations.fixtures'
import * as appointmentsFixtures from './../../../tests/scheduling/calendar/fixtures/appointments.fixtures'

let requestQueryString = {'StartDate': CONSTANTS.startDate,'EndDate': CONSTANTS.endDate};

let requestHeaders: { [key: string]: number | string } = {'TenantId': CONSTANTS.tenantId,'ObjectId': CONSTANTS.objectId};

/**
 * send request to GET /calendar/events
 * @returns {Object} response
 */
function getAllCalendarEvents(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events`,
        qs: requestQueryString,
        headers: requestHeaders
    });

};

/**
 * send request to GET /calendar/events/{id}
 * @param {number} eventId
 * @returns {Object} response
 */
function getCalendarEvent(eventId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/${eventId}`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /calendar/availabilities
 * @returns {Object} response
 */
function getAllCalendarAvailabilities(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/availabilities`,
        qs: requestQueryString,
        headers: requestHeaders
    });
};

/**
 * send request to GET /calendar/availabilities/{resourceType}
 * @param {String} resourceType 
 * @returns {Object} response
 */
function getCalendarAvailabilitiesByResourceType(resourceType: String): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/availabilities/${resourceType}`,
        qs: requestQueryString,
        headers: requestHeaders
    });
};

/**
 * send request to GET /calendar/settings
 * @returns {Object} response
 */
function getAllCalendarSettings(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/settings`,
        headers: requestHeaders
    });
};

/**
 * send request to PUT /calendar/settings
 * @returns {Object} response
 */
function updateCalendarSettings(): Cypress.ObjectLike {
    requestHeaders['Client'] ='ehr';
    return cy.request({
        method: 'PUT',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/settings`,
        headers: requestHeaders,
        body: settingsFixtures.validSettingsPayload
    });
};

/**
 * send request to GET /calendar/view-settings
 * @returns {Object} response
 */
function getAllCalendarViewSettings(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/view-settings`,
        headers: requestHeaders
    });
};

/**
 * send request to PUT /calendar/view-settings
 * @returns {Object} response
 */
function updateCalendarViewSettings(payload: any): Cypress.ObjectLike {
    return cy.request({
        method: 'PUT',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/view-settings`,
        headers: requestHeaders,
        body: payload
    });
};

/**
 * send request to PUT /calendar/user-settings
 * @returns {Object} response
 */
function updateCalendarUserSettings(): Cypress.ObjectLike {
    return cy.request({
        method: 'PUT',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/user-settings`,
        headers: requestHeaders,
        body: settingsFixtures.validUserSettingsPayload
    });
};

/**
 * send request to POST /calendar/events/timeoffs
 * @returns {Object} response
 */
function addCalendarTimeoffs(): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/timeoffs`,
        headers: requestHeaders,
        body: timeoffsFixtures.validTimeoffsPayload
    });
};

/**
 * send request to PATCH /calendar/events/timeoffs/{id}
 * @returns {Object} response
 */
function updateCalendarTimeoffs(timeoffId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'PATCH',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/timeoffs/${timeoffId}`,
        headers: requestHeaders,
        body: timeoffsFixtures.validUpdateTimeoffsPayload
    });
};

/**
 * send request to DELETE /calendar/events/timeoffs/{id}
 * @returns {Object} response
 */
function deleteCalendarTimeoffs(timeoffId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'DELETE',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/timeoffs/${timeoffId}`,
        headers: requestHeaders,
        body: {}
    });
};

/**
 * send request to POST /calendar/events/rooms-reservations
 * @returns {Object} response
 */
function addCalendarRoomsReservations(): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/rooms-reservations`,
        headers: requestHeaders,
        body: roomsReservationsFixtures.validRoomsReservationsPayload
    });
};

/**
 * send request to PATCH /calendar/events/rooms-reservations
 * @returns {Object} response
 */
function updateCalendarRoomsReservations(): Cypress.ObjectLike {
    return cy.request({
        method: 'PATCH',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/rooms-reservations`,
        headers: requestHeaders,
        body: roomsReservationsFixtures.validUpdateRoomsReservationsPayload
    });
};

/**
 * send request to DELETE /calendar/events/rooms-reservations/{id}
 * @returns {Object} response
 */
function deleteCalendarRoomsReservations(roomReservationId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'DELETE',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/rooms-reservations/${roomReservationId}`,
        headers: requestHeaders
    });
};

/**
 * send request to GET calendar/events/{id}/appointments
 * @param {number} eventId 
 * @returns {Object} response
 */
function getCalendarAppointmentByEventId(eventId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/${eventId}/appointments`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /calendar/events/{id}/legacyId
 * @param {number} eventId 
 * @returns {Object} response
 */
function getCalendarLegacyIdByEventId(eventId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/${eventId}/legacyId`,
        headers: requestHeaders
    });
};

/**
 * send request to POST /calendar/events/appointments
 * @returns {Object} response
 */
function addCalendarAppointments(): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/appointments`,
        headers: requestHeaders,
        body: appointmentsFixtures.validAppointmentsPayload
    });
};

/**
 * send request to PATCH /calendar/events/appointments/{id}
 * @returns {Object} response
 */
function updateCalendarAppointments(appointmentId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'PATCH',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/appointments/${appointmentId}`,
        headers: requestHeaders,
        body: appointmentsFixtures.validUpdateAppointmentsPayload,
        failOnStatusCode: false
    });
};

/**
 * send request to DELETE /calendar/events/appointments/{id}
 * @returns {Object} response
 */
function deleteCalendarAppointments(appointmentId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'DELETE',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/appointments/${appointmentId}`,
        headers: requestHeaders,
        body: appointmentsFixtures.validDeletePayload
    });
};

/**
 * send request to GET /calendar/events/appointments/{id}
 * @param {number} appointmentId 
 * @returns {Object} response
 */
function getCalendarAppointmentById(appointmentId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/appointments/${appointmentId}`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /calendar/events/appointments/{id}/set
 * @param {number} appointmentId 
 * @returns {Object} response
 */
function getCalendarAppontmentSetById(appointmentId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/appointments/${appointmentId}/set`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /calendar/events/appointments/{id}/future-recurrents
 * @param {number} appointmentId 
 * @returns {Object} response
 */
function getCalendarAppointmentFutureRecurrentsById(appointmentId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/appointments/${appointmentId}/future-recurrents`,
        headers: requestHeaders
    });
};

/**
 * send request to POST /calendar/events/appointments/first-visits
 * @returns {Object} response
 */
function addAppointmentsFirstVisits(): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/appointments/first-visits`,
        headers: requestHeaders,
        body: [1]
    });
};

/**
 * send request to POST /calendar/events/appointments/scheduling-conflicts
 * @returns {Object} response
 */
function addAppointmentsSchedulingConflicts(): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/appointments/scheduling-conflicts`,
        headers: requestHeaders,
        body: appointmentsFixtures.validSchedulingConflictsPayload
    });
};

/**
 * send request to GET /calendar/events/appointments/{patientId}/defaults
 * @param {number} patientId 
 * @returns {Object} response
 */
function getCalendarAppontmentDefaultsByPatientId(patientId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/appointments/${patientId}/defaults`,
        headers: requestHeaders
    });
};

/**
 * send request to PUT /calendar/events/appointments/{id}/reject
 * @returns {Object} response
 */
function updateAppointmentsReject(appointmentId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/appointments/${appointmentId}/reject`,
        headers: requestHeaders,
        body: appointmentsFixtures.validAppointmentRejectPayload,
        failOnStatusCode: false
    });
};

/**
 * send request to GET /calendar/events/appointments/{id}/legacyId
 * @param {number} appointmentId 
 * @returns {Object} response
 */
function getCalendarAppointmentLegacyIdById(appointmentId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/appointments/${appointmentId}/legacyId`,
        headers: requestHeaders
    });
};

export {
    getAllCalendarEvents,
    getCalendarEvent,
    getAllCalendarAvailabilities,
    getCalendarAvailabilitiesByResourceType,
    getAllCalendarSettings,
    updateCalendarSettings,
    getAllCalendarViewSettings,
    updateCalendarViewSettings,
    updateCalendarUserSettings,
    addCalendarTimeoffs,
    updateCalendarTimeoffs,
    deleteCalendarTimeoffs,
    addCalendarRoomsReservations,
    updateCalendarRoomsReservations,
    deleteCalendarRoomsReservations,
    getCalendarAppointmentByEventId,
    getCalendarLegacyIdByEventId,
    addCalendarAppointments,
    getCalendarAppointmentById,
    updateCalendarAppointments,
    deleteCalendarAppointments,
    getCalendarAppontmentSetById,
    getCalendarAppointmentFutureRecurrentsById,
    addAppointmentsFirstVisits,
    addAppointmentsSchedulingConflicts,
    getCalendarAppontmentDefaultsByPatientId,
    updateAppointmentsReject,
    getCalendarAppointmentLegacyIdById
};