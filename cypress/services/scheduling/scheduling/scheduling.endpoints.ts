import {BASEPATHS} from "../../../helper";
import {API} from "../../../helper";
import {CONSTANTS} from "../../../helper";
import * as groupFixtures from './../../../tests/scheduling/scheduling/fixtures/groups.fixtures';
import * as schedulingRuleFixtures from './../../../tests/scheduling/scheduling/fixtures/schedulingRules.fixtures'
import * as shiftFixtures from './../../../tests/scheduling/scheduling/fixtures/shifts.fixtures'

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
function updateGroup(groupId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'PUT',
        url: `${API}${BASEPATHS.schedulingBasePath}/group/${groupId}`,
        headers: requestHeaders,
        body: groupFixtures.updateGroupPayload
    });
};

/**
 * send request to DELETE /group/{id}
 * @returns {Object} response
 */
function deleteGroup(groupId: number): Cypress.ObjectLike {
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
function updateGroupOverride(groupId: number): Cypress.ObjectLike {
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
function deleteGroupOverride(groupId: number): Cypress.ObjectLike {
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
        headers: requestHeaders,
        qs: requestQueryString
    });
};

/**
 * send request to GET /schedulingrule/{id}
 * @param {number} ruleId 
 * @returns {Object} response
 */
function getSchedulingRule(ruleId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/schedulingrule/${ruleId}`,
        headers: requestHeaders
    });
};

/**
 * send request to PUT /schedulingrule
 * @param {number} ruleId 
 * @returns {Object} response
 */
function updateSchedulingRule(ruleId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'PUT',
        url: `${API}${BASEPATHS.schedulingBasePath}/schedulingrule/${ruleId}`,
        headers: requestHeaders,
        body: schedulingRuleFixtures.updateSchedulingRulePayload
    });

};

/**
 * send request to DELETE /schedulingrule/{id}
 * @param {number} ruleId
 * @returns {Object} response
 */
function deleteSchedulingRule(ruleId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'DELETE',
        url: `${API}${BASEPATHS.schedulingBasePath}/schedulingrule/${ruleId}`,
        headers: requestHeaders
    });
};

/**
 * send request to POST /schedulingrule
 * @returns {Object} response
 */
function addSchedulingRule(): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.schedulingBasePath}/schedulingrule`,
        headers: requestHeaders,
        body: schedulingRuleFixtures.validSchedulingRulePayload
    });
};

/**
 * send request to POST /schedulingrule/override
 * @returns {Object} response
 */
function addSchedulingRuleOverride(): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.schedulingBasePath}/schedulingrule/override`,
        headers: requestHeaders,
        body: schedulingRuleFixtures.overrideSchedulingRulePayload
    });
};

/**
 * send request to PUT /schedulingrule/override/{id}
 * @param {number} ruleId
 * @returns {Object} response
 */
function updateSchedulingRuleOverride(ruleId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'PUT',
        url: `${API}${BASEPATHS.schedulingBasePath}/schedulingrule/override/${ruleId}`,
        headers: requestHeaders,
        body: schedulingRuleFixtures.updateOverrideSchedulingRulePayload
    });
};

/**
 * send request to DELETE /schedulingrule/override/{id}
 * @param {number} ruleId
 * @returns {Object} response
 */
function deleteSchedulingRuleOverride(ruleId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'DELETE',
        url: `${API}${BASEPATHS.schedulingBasePath}/schedulingrule/override/${ruleId}`,
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
 * send request to POST /shift
 * @returns {Object} response
 */
function addShift(): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.schedulingBasePath}/shift`,
        headers: requestHeaders,
        body: shiftFixtures.validShiftPayload
    });
};

/**
 * send request to GET /shift/{id}
 * @param {number} shiftId
 * @returns {Object} response
 */
function getScedulingShift(shiftId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/shift/${shiftId}`,
        headers: requestHeaders
    });
};

/**
 * send request to PUT /shift/{id}
 * @param {number} shiftId
 * @returns {Object} response
 */
function updateShift(shiftId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'PUT',
        url: `${API}${BASEPATHS.schedulingBasePath}/shift/${shiftId}`,
        headers: requestHeaders,
        body: shiftFixtures.updateShiftPayload
    });
};

/**
 * send request to DELETE /shift/{id}
 * @param {number} ruleId
 * @returns {Object} response
 */
function deleteShift(shiftId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'DELETE',
        url: `${API}${BASEPATHS.schedulingBasePath}/shift/${shiftId}`,
        headers: requestHeaders
    });
};

/**
 * send request to POST /shift/makeup
 * @returns {Object} response
 */
function addShiftMakeup(): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.schedulingBasePath}/shift/makeup`,
        headers: requestHeaders,
        body: shiftFixtures.validShiftMakeupPayload
    });
};

/**
 * send request to PUT /shift
 * @returns {Object} response
 * @param {number} shiftId - the shift Id
 */
function updateShiftMakeup(shiftId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'PUT',
        url: `${API}${BASEPATHS.schedulingBasePath}/shift/makeup/${shiftId}`,
        headers: requestHeaders,
        body: shiftFixtures.updateShiftPayload
    });
};

/**
 * send request to DELETE /shift/makeup/{id}
 * @param {number} ruleId
 * @returns {Object} response
 */
function deleteShiftMakeup(shiftId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'DELETE',
        url: `${API}${BASEPATHS.schedulingBasePath}/shift/makeup/${shiftId}`,
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
    updateSchedulingRule,
    deleteSchedulingRule,
    addSchedulingRule,
    addSchedulingRuleOverride,
    updateSchedulingRuleOverride,
    deleteSchedulingRuleOverride,
    getAllSchedulingUnavailabilities,
    getAllSchedulingAvailabilities,
    getAllScedulingRuleEvents,
    addShift,
    getScedulingShift,
    updateShift,
    deleteShift,
    addShiftMakeup,
    updateShiftMakeup,
    deleteShiftMakeup
}