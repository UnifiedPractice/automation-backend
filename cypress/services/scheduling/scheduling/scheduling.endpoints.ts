import {BASEPATHS} from "../../../helper";
import {API} from "../../../helper";
import {CONSTANTS} from "../../../helper";
import * as groupFixtures from './../../../tests/scheduling/scheduling/fixtures/groups.fixtures'

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
 * send request to POST /group
 * @returns {Object} response
 */
function addGroup(): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.schedulingBasePath}/group`,
        headers: requestHeaders,
        body: groupFixtures.validGroupPayload
    });
};

/**
 * send request to PUT /group/{id}
 * @returns {Object} response
 */
function updateGroup(groupId: Number): Cypress.ObjectLike {
    return cy.request({
        method: 'PUT',
        url: `${API}${BASEPATHS.schedulingBasePath}/group/${groupId}`,
        headers: requestHeaders,
        body: groupFixtures.validGroupPayload
    });
};

/**
 * send request to DELETE /group/{id}
 * @returns {Object} response
 */
function deleteGroup(groupId: Number): Cypress.ObjectLike {
    return cy.request({
        method: 'DELETE',
        url: `${API}${BASEPATHS.schedulingBasePath}/group/${groupId}`,
        headers: requestHeaders
    });
};

/**
 * send request to POST /group/override
 * @returns {Object} response
 */
function addGroupOverride(): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.schedulingBasePath}/group/override`,
        headers: requestHeaders,
        body: groupFixtures.overrideGroupPayload
    });
};

/**
 * send request to PUT /group/override/{id}
 * @returns {Object} response
 */
function updateGroupOverride(groupId: Number): Cypress.ObjectLike {
    return cy.request({
        method: 'PUT',
        url: `${API}${BASEPATHS.schedulingBasePath}/group/override/${groupId}`,
        headers: requestHeaders,
        body: groupFixtures.updateOverrideGroupPayload
    });
};

/**
 * send request to DELETE /group/{id}
 * @returns {Object} response
 */
function deleteGroupOverride(groupId: Number): Cypress.ObjectLike {
    return cy.request({
        method: 'DELETE',
        url: `${API}${BASEPATHS.schedulingBasePath}/group/override/${groupId}`,
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
    addGroup,
    updateGroup,
    deleteGroup,
    addGroupOverride,
    updateGroupOverride,
    deleteGroupOverride,
    getAllSchedulingRules,
    getSchedulingRule,
    getAllSchedulingUnavailabilities,
    getAllSchedulingAvailabilities,
    getAllScedulingRuleEvents,
    getScedulingShift
}