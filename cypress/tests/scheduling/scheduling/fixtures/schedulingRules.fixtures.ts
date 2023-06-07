import {faker} from '@faker-js/faker';
import {CONSTANTS} from './../../../../helper'

const recurrenceRule = {
    frequencyType: 'None',
    byDay: [
        'Sunday'
    ],
    interval: 0,
    count: 0,
    endTime: CONSTANTS.timestamp
};

const resources = {
    resourceId: 0,
    resourceType: CONSTANTS.resourceTypes[1]

};

const timeIntervals = {
    startTime: CONSTANTS.startTime,
    endTime: CONSTANTS.endTime
};

const validSchedulingRulePayload = {
    availableForEhr: true,
    availableForPatientPortal: true,
    locationId: CONSTANTS.locationId,
    practitionerId: CONSTANTS.practitionerId,
    groupId: CONSTANTS.groupId,
    startDate: CONSTANTS.timestamp,
    endDate: CONSTANTS.timestamp,
    recurrenceRule: {...recurrenceRule},
    resources: [{...resources}],
    timeIntervals: [{...timeIntervals}]
};

const updateSchedulingRulePayload = {
    id: 0,
    ...validSchedulingRulePayload,
    availableForPatientPortal: false
};

const overrideSchedulingRulePayload = {
    schedulingRuleId: 0,
    ...validSchedulingRulePayload
};

const updateOverrideSchedulingRulePayload = {
    ...overrideSchedulingRulePayload,
    availableForPatientPortal: false
};

export {
    validSchedulingRulePayload,
    updateSchedulingRulePayload,
    overrideSchedulingRulePayload,
    updateOverrideSchedulingRulePayload
}