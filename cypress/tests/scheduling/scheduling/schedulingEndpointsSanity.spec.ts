import * as schedulingEndpoints from '../../../services/scheduling/scheduling/scheduling.endpoints'
import * as schedulingAssertions from '../../../services/scheduling/scheduling/scheduling.assertions'
import * as schedulingHelpers from '../../../services/scheduling/scheduling/scheduling.helpers'
import * as commonAssertions from '../../../services/common.assertions'
import * as groupFixtures from './../../../tests/scheduling/scheduling/fixtures/groups.fixtures'
import * as schedulingRuleFixtures from './../../../tests/scheduling/scheduling/fixtures/schedulingRules.fixtures'
import * as shiftFixtures from './../../../tests/scheduling/scheduling/fixtures/shifts.fixtures'
import { CONSTANTS } from '../../../helper'

describe('Scheduling Endpoints - Sanity Tests', () => {
    let ruleId: number;
    let insertedRuleId: number;
    let groupId: number;
    let groupOverrideId: number;
    let schedulingRuleOverrideId: number;
    let shiftId: number;
    let shiftMakeupId: number;
    
    context('scheduling GET /groups', () => {
        it('should get all scheduling groups', () => {
            const response = schedulingEndpoints.getAllSchedulingGroups();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                schedulingAssertions.assertGetAllSchedulingGroups(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling POST /groups', () => {
        it('should create a new scheduling group', () => {
            const response = schedulingEndpoints.addGroup();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertAddGroup(response);
                groupId = schedulingHelpers.getData(response);
                //override the groupId value from the fixture with the new value
                groupFixtures.updateGroupPayload.id = groupId;
                groupFixtures.overrideGroupPayload.groupId = groupId;

            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling PUT /group/{id', () => {
        it('should update a scheduling group', () => {
            const response = schedulingEndpoints.updateGroup(groupId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertUpdateGroup(response, groupId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling DELETE /group/{id}', () => {
        it('should delete a scheduling group', () => {
            const response = schedulingEndpoints.deleteGroup(groupId);
            response.then((response: any) => () => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertDeleteGroup(response, groupId);
            });
        });
    });

    context('scheduling POST /group/override', () => {
        it ('should create a new scheduling group override', () => {
            const response = schedulingEndpoints.addGroupOverride();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertAddGroupOverride(response);
                groupOverrideId = schedulingHelpers.getData(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling PUT /group/override/{id}', () => {
        it('should update a scheduling group override', () => {
            const response = schedulingEndpoints.updateGroupOverride(groupOverrideId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertUpdateGroupOverride(response, groupOverrideId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context ('scheduling DELETE /group/override/{id}', () => {
        it('should delete a scheduling group override', () => {
            const response = schedulingEndpoints.deleteGroupOverride(groupOverrideId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertDeleteGroupOverride(response, groupOverrideId);
            });
        });
    });

    context('scheduling GET /schedulingrules',() =>{
        it('should get all scheduling rules', () => {
            const response = schedulingEndpoints.getAllSchedulingRules();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                schedulingAssertions.assertGetAllSchedulingRules(response);
                ruleId = schedulingHelpers.getRuleId(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling GET /schedulingrule/{id}', () => {
        it('should get a scheduling rule by its Id', () => {
            const response = schedulingEndpoints.getSchedulingRule(ruleId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertGetSchedulingRule(response, ruleId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling POST /schedulingrule', () => {
        it('should create a new scheduling rule', () => {
            const response = schedulingEndpoints.addSchedulingRule();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertAddSchedulingRule(response);
                insertedRuleId = schedulingHelpers.getData(response);
                //override the Id value from the fixture with the new value
                schedulingRuleFixtures.updateSchedulingRulePayload.id = insertedRuleId;
                schedulingRuleFixtures.overrideSchedulingRulePayload.schedulingRuleId = insertedRuleId;
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling PUT /schedulingrule/{id}', () => {
        it('should update a scheduling rule', () => {
            const response = schedulingEndpoints.updateSchedulingRule(insertedRuleId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertUpdateSchedulingRule(response, insertedRuleId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling DELETE /schedulingrule/{id}', () => {
        it('should delete a scheduling rule', () => {
            const response = schedulingEndpoints.deleteSchedulingRule(insertedRuleId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertDeleteSchedulingRule(response,insertedRuleId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        })
    })

    context('scheduling POST /schedulingrule/override', () => {
        it('should create a scheduling rule override', () => {
            const response = schedulingEndpoints.addSchedulingRuleOverride();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertAddSchedulingRuleOverride(response);
                schedulingRuleOverrideId = schedulingHelpers.getData(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling PUT /schedulingrule/override/{id}', () => {
        it('should update a scheduling rule override', () => {
            const response = schedulingEndpoints.updateSchedulingRuleOverride(schedulingRuleOverrideId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertUpdateSchedulingRuleOverride(response, schedulingRuleOverrideId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context ('scheduling DELETE /schedulingrule/override/{id}', () => {
        it('should delete a scheduling rule override', () => {
            const response = schedulingEndpoints.deleteSchedulingRuleOverride(schedulingRuleOverrideId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertDeleteSchedulingRuleOverride(response, schedulingRuleOverrideId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        })
    })

    context('scheduling GET /unavailabilities', () => {
        it('should get all scheduling unavailabilities', () => {
            const response = schedulingEndpoints.getAllSchedulingUnavailabilities();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                schedulingAssertions.assertGetAllSchedulingUnavailabilities(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling GET /availabilities', () => {
        it('should get all scheduling availabilities', () => {
            const response = schedulingEndpoints.getAllSchedulingAvailabilities();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                schedulingAssertions.assertGetAllSchedulingAvailabilities(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling GET /schedulingrule-events', () => {
        it('should get all scheduling rule events', () => {
            const response = schedulingEndpoints.getAllScedulingRuleEvents();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                schedulingAssertions.assertGetAllSchedulingRuleEvents(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling POST /shift', () => {
        it('should create a scheduling shift', () => {
            const response = schedulingEndpoints.addShift();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertAddShift(response);
                shiftId = schedulingHelpers.getData(response);
                //override the Id value from the fixture with the new value
                shiftFixtures.updateShiftPayload.id = shiftId;
                shiftFixtures.validShiftMakeupPayload.shiftId = shiftId;
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling GET /shift/{id}', () => {
        it('should get a scheduling shift', () => {
            const response = schedulingEndpoints.getScedulingShift(shiftId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertGetSchedulingShift(response,shiftId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling PUT /shift/{id}', () => {
        it('should update a scheduling shift', () => {
            const response = schedulingEndpoints.updateShift(shiftId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertUpdateShift(response, shiftId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling POST /shift/makeup', () => {
        it('should create a scheduling shift makeup', () => {
            const response = schedulingEndpoints.addShiftMakeup();
            response.then((response:any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertAddShiftMakeup(response);
                shiftMakeupId = schedulingHelpers.getData(response);
            });
        });
    });

    context('scheduling PUT /shift/makeup/{id}', () => {
        it('should update a scheduling shift makeup', () => {
            const response = schedulingEndpoints.updateShiftMakeup(shiftMakeupId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertUpdateShiftMakeup(response, shiftMakeupId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });
    
    context('scheduling DELETE /shift/makeup/{id}', () => {
        it('should delete a scheduling shift makeup', () => {
            const response = schedulingEndpoints.deleteShiftMakeup(shiftMakeupId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertDeleteShiftMakeup(response, shiftMakeupId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context ('scheduling DELETE /shift/{id}', () => {
        it('should delete a scheduling shift', () => {
            const response = schedulingEndpoints.deleteShift(shiftId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertDeleteShift(response, shiftId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

});

