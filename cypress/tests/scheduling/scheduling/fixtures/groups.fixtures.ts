import {faker} from '@faker-js/faker';
import {CONSTANTS} from './../../../../helper'

const groupName = 'Test group (autogenerated) - ';
const groupResources = {
    internId: 1,
    pairedInternId: 1
};

const validGroupPayload = {
    name: `${groupName}${faker.datatype.uuid()}`,
    supervisorId: 1,
    startDate: CONSTANTS.timestamp,
    endDate: '2024-12-31 23:59:59.9990000',
    resources: [{...groupResources}]
};

const updateGroupPayload = {
    id: 0,
    ...validGroupPayload,
    endDate: CONSTANTS.timestamp
};

const overrideGroupPayload = {
    groupId: 0,
    ...updateGroupPayload
};

const updateOverrideGroupPayload = {
    ...overrideGroupPayload,
    endDate: CONSTANTS.timestamp
};

export {
    validGroupPayload,
    updateGroupPayload,
    overrideGroupPayload,
    updateOverrideGroupPayload
}