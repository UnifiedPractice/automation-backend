import {BASEPATHS} from './../../helper'
import {API} from './../../helper'
import {CONSTANTS} from './../../helper'
import * as notificationsFixtures from './../../tests/notifications/fixtures/notifications.fixtures'

let requestQueryString: { [key: string]: number | string } = {'NotificationTypes': 'PractitionerAcceptConfirmation','EntityTypes': CONSTANTS.eventTypes[0]};

let requestHeaders: { [key: string]: number | string } = {'TenantId': CONSTANTS.tenantId,'ObjectId': CONSTANTS.objectId, 'Client': CONSTANTS.cliend};

/**
 * send request to POST /appointments/{id}
 * @param {number} appointmentId 
 * @returns {Object} response
 */
function addAppointmentsNotifications(appointmentId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.notificationsBasePath}/appointments/${appointmentId}`,
        headers: requestHeaders,
        body: notificationsFixtures.validAppointmentsNotificationsPayload
    });
};

/**
 * send request to GET /notification/{personId}
 * @param {number} personId 
 * @returns {Object} response
 */
function getNotificationByPersonId(personId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.notificationsBasePath}/notification/${personId}`,
        qs: requestQueryString,
        headers: requestHeaders
    })
}

export {
    addAppointmentsNotifications,
    getNotificationByPersonId
}