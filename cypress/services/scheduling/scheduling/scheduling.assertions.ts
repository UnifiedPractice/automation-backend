import { any, resolve } from "cypress/types/bluebird";
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
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number');
    expect(response.body.messages).to.be.an('array');
};

/**
 * Assert updating a scheduling group
 * @param {Object} response - PUT /group/{id} response
 */
function assertUpdateGroup (response: any, groupId: number) {
    expect(response.body.data).equals(groupId);
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number');
    expect(response.body.messages).to.be.an('array');
};

/**
 * Assert deleting a scheduling group
 * @param {Object} response - DELETE /group/{id} response
 */
function assertDeleteGroup (response: any, groupId: number) {
    //TODO
};

/**
 * Assert posting a scheduling group override
 * @param {Object} response - POST /group/override response
 */
function assertAddGroupOverride (response: any) {
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number');
    expect(response.body.messages).to.be.an('array');
};

/**
 * Assert updating a scheduling group override
 * @param {Object} response - PUT /group/override/{id} response
 */
function assertUpdateGroupOverride (response: any,groupId: number) {
    expect(response.body.data).equals(groupId);
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number');
    expect(response.body.messages).to.be.an('array');
};

/**
 * Assert deleting a scheduling group override
 * @param {Object} response - Delete /group/override/{id} response
 */
function assertDeleteGroupOverride (response: any,groupId: number) {
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
 * @param {number} ruleId  - the rule Id
 */
function assertGetSchedulingRule(response: any, ruleId: number) {
    expect(response.body.id).equals(ruleId);
};

/**
 * Assert updating a scheduling rule
 * @param {Object} response - PUT /schedulingrule/{id} response
 * @param ruleId - the rule Id
 */
function assertUpdateSchedulingRule(response: any, ruleId: number) {
    expect(response.body.data).equals(ruleId);
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number');
    expect(response.body.messages).to.be.an('array');
};

/**
 * Assert deleting a scheduling rule
 * @param {Object} response - DELETE /schedulingrule/{id} response
 * @param {number} ruleId - the rule Id
 */
function assertDeleteSchedulingRule(response: any, ruleId: number) {
    //TODO
};

/**
 * Assert posting a scheduling rule
 * @param {Object} response - POST /schedulingrule response
 */
function assertAddSchedulingRule(response: any) {
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number');
    expect(response.body.messages).to.be.an('array');
};

/**
 * Assert posting a scheduling rule override
 * @param {Object} response - POST /schedulingrule/override response
 */
function assertAddSchedulingRuleOverride(response: any) {
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number');
    expect(response.body.messages).to.be.an('array');
};

/**
 * Assert updating a scheduling rule override
 * @param {Object} response - PUT /schedulingrule/override/{id} response
 * @param {number} ruleId - the ruleId
 */
function assertUpdateSchedulingRuleOverride (response: any, ruleId: number) {
    expect(response.body.data).equals(ruleId);
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number');
    expect(response.body.messages).to.be.an('array');
};

/**
 * Assert deleting a scheduling rule override
 * @param {Object} response - DELETE /schedulingrule/override/{id} response
 * @param {number} ruleId - the rule Id
 */
function assertDeleteSchedulingRuleOverride(response: any, ruleId: number) {
    //TODO
};

/**
 * Assert getting scheduling unavailabilities
 * @param {Object} response - GET /unavailabilities response
 */
function assertGetAllSchedulingUnavailabilities(response: any) {
    //TODO
};

/**
 * Assert getting scheduling availabilities
 * @param {Object} response - GET /availabilities response
 */
function assertGetAllSchedulingAvailabilities(response: any) {
    //TODO
};

/**
 * Assert getting scheduling rule events
 * @param {Object} response - GET /schedulingrule-events response
 */
function assertGetAllSchedulingRuleEvents(response: any) {
    //TODO
};

/**
 * Assert posting a shift
 * @param {Object} response - POST /shift response
 */
function assertAddShift(response: any) {
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number')
    expect(response.body.messages).to.be.an('array');
};

/**
 * Assert getting scheduling shifts by ID
 * @param {Object} response - GET /shift/{id} response
 * @param {number} shiftId - the shift Id
 */
function assertGetSchedulingShift(response: any, shiftId: number) {
    expect(response.body.id).equals(shiftId);
};

/**
 * Assert updating a scheduling shift
 * @param {Object} response - PUT /shift/{id} response
 */
function assertUpdateShift(response: any, shiftId: number) {
    expect(response.body.data).equals(shiftId);
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number');
    expect(response.body.messages).to.be.an('array');
};

/**
 * Assert deleting a scheduling shift
 * @param {Object} response - DELETE /shift/{id} response
 * @param {number} shiftId - the shift Id
 */
function assertDeleteShift(response: any, shiftId: number) {
    //TODO
};

/**
 * Assert posting a shift makeup
 * @param {Object} response - POST /shift/makeup response
 */
function assertAddShiftMakeup(response: any) {
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number')
    expect(response.body.messages).to.be.an('array');
};

/**
 * Assert updating a scheduling shift makeup
 * @param {Object} response - PUT /shift/makeup/{id} response
 */
function assertUpdateShiftMakeup(response: any, shiftId: number) {
    expect(response.body.data).equals(shiftId);
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number');
    expect(response.body.messages).to.be.an('array');
};

/**
 * Assert deleting a scheduling shift makeup
 * @param {Object} response - DELETE /shift/makeup/{id} response
 * @param {number} shiftId - the shift Id
 */
function assertDeleteShiftMakeup(response: any, shiftId: number) {
    //TODO
};

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
    assertUpdateSchedulingRule,
    assertDeleteSchedulingRule,
    assertAddSchedulingRule,
    assertAddSchedulingRuleOverride,
    assertUpdateSchedulingRuleOverride,
    assertDeleteSchedulingRuleOverride,
    assertGetAllSchedulingUnavailabilities,
    assertGetAllSchedulingAvailabilities,
    assertGetAllSchedulingRuleEvents,
    assertAddShift,
    assertUpdateShift,
    assertDeleteShift,
    assertGetSchedulingShift,
    assertAddShiftMakeup,
    assertUpdateShiftMakeup,
    assertDeleteShiftMakeup
}