import * as schedulingEndpoints from './../../../services/scheduling/scheduling/scheduling.endpoints'
import * as schedulingAssertions from './../../../services/scheduling/scheduling/scheduling.assertions'
import * as schedulingHelpers from './../../../services/scheduling/scheduling/scheduling.helpers'
import * as commonAssertions from './../../../services/common.assertions'
import { CONSTANTS } from '../../../helper'

describe('Scheduling GET Endpoints - Sanity Tests', () => {
    let ruleId: Number

    context('scheduling GET /groups', () => {
        it('should get all scheduling groups', () => {
            const response = schedulingEndpoints.getAllSchedulingGroups();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGetArray(response);
                schedulingAssertions.assertGetAllSchedulingGroups(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling GET /schedulingrules',() =>{
        it.skip('should get all scheduling rules', () => {
            const response = schedulingEndpoints.getAllSchedulingRules();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGetArray(response);
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
                commonAssertions.assertIsSuccessfullGet(response);
                schedulingAssertions.assertGetSchedulingRule(response, ruleId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling GET /unavailabilities', () => {
        it('should get all scheduling unavailabilities', () => {
            const response = schedulingEndpoints.getAllSchedulingUnavailabilities();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGetArray(response);
                schedulingAssertions.assertGetAllSchedulingUnavailabilities(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling GET /availabilities', () => {
        it('should get all scheduling availabilities', () => {
            const response = schedulingEndpoints.getAllSchedulingAvailabilities();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGetArray(response);
                schedulingAssertions.assertGetAllSchedulingAvailabilities(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling GET /schedulingrule-events', () => {
        it('should get all scheduling rule events', () => {
            const response = schedulingEndpoints.getAllScedulingRuleEvents();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGetArray(response);
                schedulingAssertions.assertGetAllSchedulingRuleEvents(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('scheduling GET /shift/{id}', () => {
        it('should get a scheduling shift by its Id', () => {
            const response = schedulingEndpoints.getScedulingShift(1);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullGet(response);
                schedulingAssertions.assertGetSchedulingShift(response,1);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

});