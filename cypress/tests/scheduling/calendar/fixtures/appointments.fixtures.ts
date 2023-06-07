import {faker} from '@faker-js/faker';
import {CONSTANTS} from './../../../../helper'

const practitioners = {
    role: 'Main',
    practitionerId: CONSTANTS.objectId
};

const recurrenceRule = {
    frequencyType: 'Weekly',
    byDay: [
        'Sunday'
    ],
    interval: 1,
    count: 1,
    endTime: ''
};

const patient = {
    firstName: `${faker.name.firstName}`,
    middleName: `${faker.name.middleName}`,
    lastName: `${faker.name.lastName}`,
    gender: {
        gender: 'M',
        otherGender: 'none'
    },
    dateOfBirth: '2000-05-24T08:41:36.978Z',
    phone: {
        number: `${faker.phone.number('0123456789')}`,
        type: 'Mobile'
    },
    heardAboutClinic: `${faker.random.word}`,
    email: `${faker.internet.email}`,
    address: {
        addressLine1: `${faker.address.streetAddress}`,
        addressLine2: `${faker.address.buildingNumber}`,
        zipCode: `${faker.address.zipCodeByState("NY")}`,
        city: 'New York',
        state: 'NY',
        countryCode: 'US'
    },
    isExisting: true,
    redFlags: 'none',
    sendSmsReminders: true
};

const notificationsSettings = {
    type: 'Created',
    sms: true,
    email: true
};

const validAppointmentsPayload = {
    patientId: CONSTANTS.patientId,
    startTime: CONSTANTS.timestamp,
    practitioners: [{...practitioners}],
    serviceForNewPatient: true,
    serviceId: CONSTANTS.serviceId,
    locationId: CONSTANTS.locationId,
    roomId: CONSTANTS.roomId,
    reasonForVisit: `${faker.random.words(2)}`,
    appointmentType: 'SelfPay',
    acceptedState: 'Confirmed',
    rRule: {...recurrenceRule},
    checkForConflicts: false,
    createNewPatient: true,
    patient: {...patient},
    sendNotifications: true,
    notificationsSettings: [{...notificationsSettings}],
    doNotChargeCancellationFee: true,
    creditCard: 0
};

const validUpdateAppointmentsPayload = {
    patientId: CONSTANTS.patientId,
    startTime: CONSTANTS.timestamp,
    practitioners: [{...practitioners}],
    serviceForNewPatient: true,
    serviceId: CONSTANTS.serviceId,
    locationId: CONSTANTS.locationId,
    roomId: CONSTANTS.roomId,
    reasonForVisit: `${faker.random.words(2)}`,
    appointmentType: 'SelfPay',
    acceptedState: 'Confirmed',
    rRule: {...recurrenceRule},
    sendNotifications: true,
    notificationsSettings: [{...notificationsSettings}],
    modificationBehavior: 'ThisEvent',
    checkForConflicts: false,
    checkForIntakes: true,
    acceptAppointment: true,
    doNotChargeCancellationFee: true,
    creditCard: 0,
    noShowCancellationFee: 0
};

const validDeletePayload = {
    cancelReason: `${faker.random.words(5)}`,
    cancelledByType: 'Clinic',
    cancelBehavior: 'ThisEvent',
    cancellationFee: 0
};

const validSchedulingConflictsPayload = {
    patientId: CONSTANTS.patientId,
    startTime: CONSTANTS.timestamp,
    practitioners: [{...practitioners}],
    service: {
        id: CONSTANTS.serviceId,
        role: 'ForNew'
    },
    roomId: CONSTANTS.roomId,
    locationId: CONSTANTS.locationId,
    rRule: {...recurrenceRule},
    excludeAppointmentId: 0,
    checkForExisting: true
};

const validAppointmentRejectPayload = {
    id: -1
}

export {
    validAppointmentsPayload,
    validUpdateAppointmentsPayload,
    validDeletePayload,
    validSchedulingConflictsPayload,
    validAppointmentRejectPayload
}