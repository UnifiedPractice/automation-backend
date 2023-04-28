import {CONSTANTS} from "../../../helper";

/**
 * Assert getting scheduling groups
 * @param {Object} response - GET /groups response
 */
function assertGetAllSchedulingGroups (response: any) {
    //TODO
};

/**
 * Assert posting a scheduling group
 * @param {Object} response - POST /group response
 */
function assertAddGroup (response: any) {
    //TODO
};

/**
 * Assert updating a scheduling group
 * @param {Object} response - PUT /group/{id} response
 */
function assertUpdateGroup (response: any, groupId: Number) {
    //expect(response.body.id).equal(groupId);
};

/**
 * Assert deleting a scheduling group
 * @param {Object} response - DELETE /group/{id} response
 */
function assertDeleteGroup (response: any, groupId: Number) {
    //TODO
};

/**
 * Assert posting a scheduling group override
 * @param {Object} response - POST /group/override response
 */
function assertAddGroupOverride (response: any) {
    //TODO
};

/**
 * Assert updating a scheduling group override
 * @param {Object} response - PUT /group/override/{id} response
 */
function assertUpdateGroupOverride (response: any,groupId: Number) {
    //TODO
};

/**
 * Assert deleting a scheduling group override
 * @param {Object} response - Delete /group/override/{id} response
 */
function assertDeleteGroupOverride (response: any,groupId: Number) {
    //TODO
};

/**
 * Assert getting scheduling rules
 * @param {Object} response - GET /schedulingrules response
 */
function assertGetAllSchedulingRules(response: any) {
    //TODO
};

/**
 * Assert getting scheduling rules by ID
 * @param {Object} response  - GET /schedulingrule/{id} response
 * @param {Number} ruleId  - the rule Id
 */
function assertGetSchedulingRule(response: any, ruleId: Number) {
    expect(response.body.id).equal(ruleId);
};

/**
 * Assert getting scheduling unavailabilities
 * @param {Object} response - GET /unavailabilities response
 */
function assertGetAllSchedulingUnavailabilities(response: any) {
    //TODO
}

/**
 * Assert getting scheduling availabilities
 * @param {Object} response - GET /availabilities response
 */
function assertGetAllSchedulingAvailabilities(response: any) {
    //TODO
}

/**
 * Assert getting scheduling rule events
 * @param {Object} response - GET /schedulingrule-events response
 */
function assertGetAllSchedulingRuleEvents(response: any) {
    //TODO
}

/**
 * Assert getting scheduling shifts by ID
 * @param {Object} response - GET /shift/{id} response
 * @param {Number} shiftId - the shift Id
 */
function assertGetSchedulingShift(response: any, shiftId: Number) {
    expect(response.body.id).equal(shiftId);
}

export {
    assertGetAllSchedulingGroups,
    assertAddGroup,
    assertUpdateGroup,
    assertDeleteGroup,
    assertAddGroupOverride,
    assertUpdateGroupOverride,
    assertDeleteGroupOverride,
    assertGetAllSchedulingRules,
    assertGetSchedulingRule,
    assertGetAllSchedulingUnavailabilities,
    assertGetAllSchedulingAvailabilities,
    assertGetAllSchedulingRuleEvents,
    assertGetSchedulingShift
}