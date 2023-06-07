import {BASEPATHS} from './../../helper'
import {API} from './../../helper'
import {CONSTANTS} from './../../helper'

let requestQueryString = {'CalendarAppointmentId': CONSTANTS.calendarAppointmentId}

let requestHeaders: { [key: string]: number | string } = {'TenantId': CONSTANTS.tenantId,'ObjectId': CONSTANTS.objectId, 'Client': CONSTANTS.cliend};

/**
 * send request to GET /charts
 * @returns {Object} response
 */
function getCharts(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.chartingBasePath}/charts`,
        qs: requestQueryString,
        headers: requestHeaders
    });
};

/**
 * send reqest to GET /charts/{calendarAppointmentId}
 * @param {number} calendarAppointmentId 
 * @returns {Object} response
 */
function getChartsByCalendarAppointmentId(calendarAppointmentId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.chartingBasePath}/charts/${calendarAppointmentId}`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /charts/unsigned-charts
 * @returns {Object} response
 */
function getUnsignedCharts(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.chartingBasePath}/charts/unsigned-charts`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /templates/{id}
 * @param {number} templateId 
 * @returns {Object} response
 */
function getTemplatesById(templateId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.chartingBasePath}/templates/${templateId}`,
        headers: requestHeaders
    });
};

export {
    getCharts,
    getChartsByCalendarAppointmentId,
    getUnsignedCharts,
    getTemplatesById
}