import {BASEPATHS} from "../../../helper";
import {API} from "../../../helper";
import {CONSTANTS} from "../../../helper";

let requestQueryString = {'StartDate': CONSTANTS.startDate,'EndDate': CONSTANTS.endDate};

let requestHeaders = {'TenantId': CONSTANTS.tenantId,'ObjectId': CONSTANTS.objectId};

/**
 * send request to GET /groups
 * @returns {Object} response
 */
function getAllSchedulingGroups(): Cypress.ObjectLike {
    return cy.request({
       method: 'GET',
       url: `${API}${BASEPATHS.schedulingBasePath}/groups`,
       headers: requestHeaders
    });
};

/**
 * send request to GET /schedulingrules
 * @returns {Object} response
 */
function getAllSchedulingRules(): Cypress.ObjectLike {
    return cy.request ({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/schedulingrules`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /schedulingrule/{id}
 * @param {Number} ruleId 
 * @returns {Object} response
 */
function getSchedulingRule(ruleId: Number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/schedulingrule/${ruleId}`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /unavailabilities
 * @returns {Object} response
 */
function getAllSchedulingUnavailabilities(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/unavailabilities`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /availabilities
 * @returns {Object} response
 */
function getAllSchedulingAvailabilities(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/availabilities`,
        qs: requestQueryString,
        headers: requestHeaders
    });
};

/**
 * send request to GET /schedulingrule-events
 * @returns {Object} response
 */
function getAllScedulingRuleEvents(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/schedulingrule-events`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /shift/{id}
 * @param {Number} shiftId
 * @returns {Object} response
 */
function getScedulingShift(shiftId: Number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/shift/${shiftId}`,
        headers: requestHeaders
    });
};

export{
    getAllSchedulingGroups,
    getAllSchedulingRules,
    getSchedulingRule,
    getAllSchedulingUnavailabilities,
    getAllSchedulingAvailabilities,
    getAllScedulingRuleEvents,
    getScedulingShift
}