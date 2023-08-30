import { any, resolve } from "cypress/types/bluebird";
import {CONSTANTS} from "../../../helper";

/**
 * Assert getting scheduling groups
 * @param {Object} response - GET /groups response
 */
function assertGetAllSchedulingGroups (response: any) {
    expect(response.body).to.be.an('array');
    if (response.body.length!=0) {
        response.body.forEach((item: any) => {
            expect(item).to.have.property('id').and.to.be.a('number');
            expect(item).to.have.property('name').and.to.be.a('string');
            expect(item).to.have.property('startDate').and.to.be.a('string');
            expect(item).to.have.property('endDate').and.to.be.a('string');
            expect(item).to.have.property('supervisorId').and.to.be.a('number');
            expect(item).to.have.property('overrides').and.to.be.an('array');
            expect(item).to.have.property('resources').and.to.be.an('array');
        });
    };
};

/**
 * Assert posting a scheduling group
 * @param {Object} response - POST /group response
 */
function assertAddGroup (response: any) {
    expect(response.body.data).to.not.be.undefined;
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert updating a scheduling group
 * @param {Object} response - PUT /group/{id} response
 */
function assertUpdateGroup (response: any, groupId: number) {
    expect(response.body.data).equals(groupId);
    expect(response.body.data).to.not.be.undefined;
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert deleting a scheduling group
 * @param {Object} response - DELETE /group/{id} response
 */
function assertDeleteGroup (response: any) {
    expect(response.body).to.be.undefined;
};

/**
 * Assert posting a scheduling group override
 * @param {Object} response - POST /group/override response
 */
function assertAddGroupOverride (response: any) {
    expect(response.body.data).to.not.be.undefined;
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert updating a scheduling group override
 * @param {Object} response - PUT /group/override/{id} response
 */
function assertUpdateGroupOverride (response: any,groupId: number) {
    expect(response.body.data).equals(groupId);
    expect(response.body.data).to.not.be.undefined;
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert deleting a scheduling group override
 * @param {Object} response - Delete /group/override/{id} response
 */
function assertDeleteGroupOverride (response: any, groupId: number) {
    expect(response.body).to.have.property('data').and.to.be.a('number').equals(groupId);
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert getting scheduling rules
 * @param {Object} response - GET /schedulingrules response
 */
function assertGetAllSchedulingRules(response: any) {
    expect(response.body).to.be.an('array');
    response.body.forEach((item: any) => {
         assertGetSchedulingRule({ body: item }, item.id);
    });
};

/**
 * Assert getting scheduling rules by ID
 * @param {Object} response  - GET /schedulingrule/{id} response
 * @param {number} ruleId  - the rule Id
 */
function assertGetSchedulingRule(response: any, ruleId: number) {
    expect(response.body).to.have.property('id').and.to.be.a('number').equals(ruleId);
    expect(response.body).to.have.property('locationId').and.to.be.a('number');
    if (response.body.group) {
        expect(response.body).to.have.property('group').and.to.be.an('Object');
        if(Object.keys(response.body.group).length!=0) {
            expect(Object.keys(response.body.group)).to.deep.equal(['id', 'name', 'startDate', 'endDate', 'supervisorId', 'overrides']);
        };
    };    
    expect(response.body).to.have.property('allServices').and.to.be.a('boolean');
    expect(response.body).to.have.property('allRooms').and.to.be.a('boolean');
    expect(response.body).to.have.property('availableForEhr').and.to.be.a('boolean');
    expect(response.body).to.have.property('availableForPatientPortal').and.to.be.a('boolean');
    expect(response.body).to.have.property('startDate').and.to.be.a('string');
    expect(response.body).to.have.property('endDate').and.to.be.a('string');
    expect(response.body).to.have.property('recurrenceRule').and.to.be.an('Object');
    if(Object.keys(response.body.recurrenceRule).length!=0) {
        expect(Object.keys(response.body.recurrenceRule)).to.deep.equal(['frequencyType', 'byDay', 'interval', 'endTime']);
    };
    expect(response.body).to.have.property('resources').and.to.be.an('array');
    expect(response.body).to.have.property('overrides').and.to.be.an('array');
    expect(response.body).to.have.property('timeIntervals').and.to.be.an('array');
    if (response.body.timeIntervals.length!=0) {
        response.body.timeIntervals.forEach((item: any) => {
            expect(item).to.have.property('startTime').and.to.be.a('string');
            expect(item).to.have.property('endTime').and.to.be.a('string');
        });
    };
};

/**
 * Assert updating a scheduling rule
 * @param {Object} response - PUT /schedulingrule/{id} response
 * @param ruleId - the rule Id
 */
function assertUpdateSchedulingRule(response: any, ruleId: number) {
    expect(response.body.data).equals(ruleId);
    expect(response.body.data).to.not.be.undefined;
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert deleting a scheduling rule
 * @param {Object} response - DELETE /schedulingrule/{id} response
 * @param {number} ruleId - the rule Id
 */
function assertDeleteSchedulingRule(response: any, ruleId: number) {
    expect(response.body).to.have.property('data').and.to.be.a('number').equals(ruleId);
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert posting a scheduling rule
 * @param {Object} response - POST /schedulingrule response
 */
function assertAddSchedulingRule(response: any) {
    expect(response.body.data).to.not.be.undefined;
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert posting a scheduling rule override
 * @param {Object} response - POST /schedulingrule/override response
 */
function assertAddSchedulingRuleOverride(response: any) {
    expect(response.body.data).to.not.be.undefined;
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert updating a scheduling rule override
 * @param {Object} response - PUT /schedulingrule/override/{id} response
 * @param {number} ruleId - the ruleId
 */
function assertUpdateSchedulingRuleOverride (response: any, ruleId: number) {
    expect(response.body.data).equals(ruleId);
    expect(response.body.data).to.not.be.undefined;
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert deleting a scheduling rule override
 * @param {Object} response - DELETE /schedulingrule/override/{id} response
 * @param {number} ruleId - the rule Id
 */
function assertDeleteSchedulingRuleOverride(response: any, ruleId: number) {
    expect(response.body).to.have.property('data').and.to.be.a('number').equals(ruleId);
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert getting scheduling unavailabilities
 * @param {Object} response - GET /unavailabilities response
 */
function assertGetAllSchedulingUnavailabilities(response: any) {
    if (response.body.length!=0) {
        expect(response.body).to.be.an('array');
        response.body.forEach((item: any) => {
            expect(item).to.have.property('calendarEventId').and.to.be.a('number');
            expect(item).to.have.property('resourceType').and.to.be.a('string');
            expect(item).to.have.property('startDate').and.to.be.a('string');
            expect(item).to.have.property('endDate').and.to.be.a('string');
            expect(item).to.have.property('practitionerIds').and.to.be.an('array');
            expect(item).to.have.property('roomIds').and.to.be.an('array');
            expect(item).to.have.property('recurrenceRule').and.to.be.a('string');
            expect(item).to.have.property('locationId').and.to.be.a('number');
            expect(item).to.have.property('reason').and.to.be.a('string');
        });
    };
};

/**
 * Assert getting scheduling availabilities
 * @param {Object} response - GET /availabilities response
 */
function assertGetAllSchedulingAvailabilities(response: any) {
    if (response.body.length!=0) {
        expect(response.body).to.be.an('array');
        response.body.forEach((item: any) => {
            expect(item).to.have.property('startTime').and.to.be.a('string');
            expect(item).to.have.property('endTime').and.to.be.a('string');
            expect(item).to.have.property('resource').and.to.be.an('Object');
            if(Object.keys(item.resource).length!=0) {
                expect(Object.keys(item.resource)).to.deep.equal(['id', 'type', 'availableFor', 'availableForAllServices', 'availableForAllRooms', 'isSupervising', 'groupId']);
                item.resource.availableFor.forEach((availableResource: any) => {
                    expect(availableResource).to.have.property('id').and.to.be.a('number');
                    expect(availableResource).to.have.property('type').and.to.be.a('string');
                    if(availableResource.role) {
                        expect(availableResource).to.have.property('role').and.to.be.a('string');
                    };
                    if(availableResource.properties) {
                        expect(availableResource).to.have.property('properties').and.to.be.an('Object');
                    };
                });
            };
        });
    };
};

/**
 * Assert getting scheduling rule events
 * @param {Object} response - GET /schedulingrule-events response
 */
function assertGetAllSchedulingRuleEvents(response: any) {
    if (response.body.length!=0) {
        expect(response.body).to.be.an('array');
        response.body.forEach((item: any) => {
            expect(item).to.have.property('id').and.to.be.a('number');
            expect(item).to.have.property('type').and.to.be.a('string');
            expect(item).to.have.property('title').and.to.be.a('string');
            expect(item).to.have.property('description').and.to.be.a('string');
            expect(item).to.have.property('startTime').and.to.be.a('string');
            expect(item).to.have.property('endTime').and.to.be.a('string');
            expect(item).to.have.property('startUtcTime').and.to.be.a('string');
            expect(item).to.have.property('endUtcTime').and.to.be.a('string');
            expect(item).to.have.property('allDay').and.to.be.a('boolean');
            expect(item).to.have.property('updatedBy').and.to.be.a('string');
            expect(item).to.have.property('updatedOn').and.to.be.a('string');
            expect(item).to.have.property('updatedByClient').and.to.be.a('string');
            expect(item).to.have.property('createdBy').and.to.be.a('string');
            expect(item).to.have.property('createdOn').and.to.be.a('string');
            expect(item).to.have.property('createdByClient').and.to.be.a('string');
            expect(item).to.have.property('groupId').and.to.be.a('number');
            expect(item).to.have.property('recurrenceSetId').and.to.be.a('number');
            expect(item).to.have.property('recurrenceRule').and.to.be.an('Object');
            expect(item).to.have.property('isCancelled').and.to.be.a('boolean');
            expect(item).to.have.property('eventResources').and.to.be.an('array');
            expect(item).to.have.property('properties').and.to.be.an('Object');
        });
    };
};

/**
 * Assert posting a shift
 * @param {Object} response - POST /shift response
 */
function assertAddShift(response: any) {
    expect(response.body.data).to.not.be.undefined;
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
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
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert deleting a scheduling shift
 * @param {Object} response - DELETE /shift/{id} response
 * @param {number} shiftId - the shift Id
 */
function assertDeleteShift(response: any, shiftId: number) {
    expect(response.body).to.have.property('data').and.to.be.a('number').equals(shiftId);
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert posting a shift makeup
 * @param {Object} response - POST /shift/makeup response
 */
function assertAddShiftMakeup(response: any) {
    expect(response.body.data).to.not.be.undefined;
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert updating a scheduling shift makeup
 * @param {Object} response - PUT /shift/makeup/{id} response
 */
function assertUpdateShiftMakeup(response: any, shiftId: number) {
    expect(response.body.data).equals(shiftId);
    expect(response.body.data).to.not.be.undefined;
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert deleting a scheduling shift makeup
 * @param {Object} response - DELETE /shift/makeup/{id} response
 * @param {number} shiftId - the shift Id
 */
function assertDeleteShiftMakeup(response: any, shiftId: number) {
    expect(response.body).to.have.property('data').and.to.be.a('number').equals(shiftId);
    expect(response.body).to.have.property('messages').and.to.be.an('array');
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