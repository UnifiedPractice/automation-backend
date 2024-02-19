import {BASEPATHS} from './../../helper'
import {API} from './../../helper'
import {CONSTANTS} from './../../helper'

let cardsQueryString = {'patientId': CONSTANTS.patientId};
let fullsteamQueryString = {'paymentCode': CONSTANTS.billingPaymentCode};
let requestHeaders: { [key: string]: number | string } = {'TenantId': CONSTANTS.tenantId,'ObjectId': CONSTANTS.objectId, 'Client': CONSTANTS.client};

/**
 * send request to GET /accounts/{id}
 * @param {number} accountId 
 * @returns {Object} response
 */
function getAccountsById(accountId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.billingBasePath}/accounts/${accountId}`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /cards
 * @returns {Object} response
 */
function getCards(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.billingBasePath}/cards`,
        qs: cardsQueryString,
        headers: requestHeaders
    });
};

/**
 * send request to GET /charges/cancellation/{calendarAppointmentId}
 * @param {number} calendarAppointmentId 
 * @returns {Object} response
 */
function getChargesCancellationByCalendarAppointmentId(calendarAppointmentId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.billingBasePath}/charges/cancellation/${calendarAppointmentId}`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /charges/cancellation/{calendarAppointmentId}
 * @returns {Object} response
 */
function getChargesCancellation(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.billingBasePath}/charges/cancellation`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /fullsteam/sso
 * @returns {Object} response
 */
function getFullsteamSso(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.billingBasePath}/fullsteam/sso`,
        headers: requestHeaders,
        failOnStatusCode: false
    });
};

/**
 * send request to GET /fullsteam/patient-payment-verify
 * @returns {Object} response
 */
function getFullsteamPatientPaymentVerify(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.billingBasePath}/fullsteam/patient-payment-verify`,
        qs: fullsteamQueryString,
        headers: requestHeaders
    });
};

export {
    getAccountsById,
    getCards,
    getChargesCancellationByCalendarAppointmentId,
    getChargesCancellation,
    getFullsteamSso,
    getFullsteamPatientPaymentVerify
}