import {faker} from '@faker-js/faker';
import {CONSTANTS} from './../../../helper'

const validCreatePatientsPayload = {
    firstName: `${faker.name.firstName('male')}`,
    middleName: `${faker.name.middleName('male')}`,
    lastName: `${faker.name.lastName('male')}`,
    gender: {
        gender: 'F',
        otherGender: ''
    },
    dateOfBirth: CONSTANTS.timestamp,
    phone: {
        number: '555-555-555',
        type: 'Mobile'
    },
    heardAboutClinic: 'From a friend',
    email: `${faker.internet.email()}`,
    address: {
        addressLine1: `${faker.address.streetAddress()}`,
        addressLine2: '',
        zipCode: `${faker.address.zipCodeByState('NY')}`,
        city: "New York",
        state: "NY",
        countryCode: "US"
    },
    isExisting: true,
    redFlags: "none",
    sendSmsReminders: true,
    receiveMarketingEmail: true
};

const validPatchPatientsPrimaryPractitionerPayload = {
    primaryPractitionerId: CONSTANTS.objectId
};

const validUpdatePatientsRedFlagsPayload = {
    redFlags: `${faker.random.words(3)}`
};

export {
    validCreatePatientsPayload,
    validPatchPatientsPrimaryPractitionerPayload,
    validUpdatePatientsRedFlagsPayload    
}