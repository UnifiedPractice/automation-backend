import {BASEPATHS} from './../../helper'
import {API} from './../../helper'
import {CONSTANTS} from './../../helper'
import * as securityFixtures from './../../tests/security/fixtures/security.fixtures'

let requestQueryString = {'return_to': '0'}

let requestHeaders: { [key: string]: number | string } = {'TenantId': CONSTANTS.tenantId,'ObjectId': CONSTANTS.objectId, 'Client': CONSTANTS.cliend};

/**
 * send request to POST /appointments/{id}
 * @param {number} appointmentId 
 * @returns {Object} response
 */
function addAppointmentsSecurity(appointmentId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.securityBasePath}/appointments/${appointmentId}`,
        headers: requestHeaders,
        body: securityFixtures.validAppointmentsSecurityPayload
    });
};

/**
 * send request to GET /metabase/sso
 * @returns {Object} response
 */
function getMetabaseSso(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.securityBasePath}/metabase/sso`,
        headers: requestHeaders,
        qs: requestQueryString
    });
};

/**
 * send request to GET /metabase/dashboard/{id}
 * @param {number} dashboardId 
 * @returns {Object} response
 */
function getMetabaseDashboardById(dashboardId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.securityBasePath}/metabase/dashboard/${dashboardId}`,
        headers: requestHeaders
    });
};

export {
    addAppointmentsSecurity,
    getMetabaseSso,
    getMetabaseDashboardById
}