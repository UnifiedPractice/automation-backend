import * as schedulingEndpoints from '../../../services/scheduling/scheduling/scheduling.endpoints'
import * as schedulingAssertions from '../../../services/scheduling/scheduling/scheduling.assertions'
import * as schedulingHelpers from '../../../services/scheduling/scheduling/scheduling.helpers'
import * as commonAssertions from '../../../services/common.assertions'
import * as groupFixtures from './../../../tests/scheduling/scheduling/fixtures/groups.fixtures'
import { CONSTANTS } from '../../../helper'
import { resolve } from 'cypress/types/bluebird'

describe('Scheduling GET Endpoints - Sanity Tests', () => {
    let ruleId: Number;
    let groupId: number;
    
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
                groupId = schedulingHelpers.getGroupId(response);
                //override the groupId value from the fixture with the new value
                groupFixtures.overrideGroupPayload.groupId = groupId

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
        it('should create a new scheduling group override', () => {
            const response = schedulingEndpoints.addGroupOverride();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertAddGroupOverride(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling PUT /group/override/{id}', () => {
        it.skip('should update a scheduling group override', () => {
            const response = schedulingEndpoints.updateGroupOverride(groupId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertUpdateGroupOverride(response, groupId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context ('scheduling DELETE /group/override/{id}', () => {
        it.skip('should delete a scheduling group override', () => {
            const response = schedulingEndpoints.deleteGroupOverride(groupId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertDeleteGroupOverride(response, groupId);
            });
        });
    });

    context('scheduling GET /schedulingrules',() =>{
        it.skip('should get all scheduling rules', () => {
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
        it.skip('should get a scheduling rule by its Id', () => {
            const response = schedulingEndpoints.getSchedulingRule(ruleId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertGetSchedulingRule(response, ruleId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

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

    context('scheduling GET /shift/{id}', () => {
        it('should get a scheduling shift by its Id', () => {
            const response = schedulingEndpoints.getScedulingShift(1);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                schedulingAssertions.assertGetSchedulingShift(response,1);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

});

