import {BASEPATHS} from '../../../helper'
import {API} from '../../../helper'
import {CONSTANTS} from "../../../helper";

let requestQueryString = {'StartDate': CONSTANTS.startDate,'EndDate': CONSTANTS.endDate};

let requestHeaders = {'TenantId': CONSTANTS.tenantId,'ObjectId': CONSTANTS.objectId};

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
    getAllCalendarViewSettings,
    getCalendarAppointmentByEventId,
    getCalendarLegacyIdByEventId,
    getCalendarAppointmentById,
    getCalendarAppontmentSetById,
    getCalendarAppointmentFutureRecurrentsById,
    getCalendarAppontmentDefaultsByPatientId,
    getCalendarAppointmentLegacyIdById
};