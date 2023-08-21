const now = new Date();

const constants = {
    tenantId: 8,
    objectId: 77,
    streamTenantId: 111,
    streamObjectId: 9915,
    streamClinicUid: 'EBB1414A-C470-4CFD-B655-76FE5BF7C95A',
    client: 'ehr',
    appointmentId: 51258,
    calendarAppointmentId: 12,
    personId: 95,
    streamPersonId: 9923,
    startDate: '2020-07-03',
    endDate: '2020-7-03',
    startTime: '08:00:00',
    endTime: '12:00:00',
    locationId: 108,
    roomId: 15,
    practitionerId: 0,
    patientId: 108,
    insurancePatientId: 12080,
    serviceId: 80,
    groupId: 313,
    billingAccountId: 12,
    billingPaymentCode: '5D3E7038-4BF5-4A51-AAA7-5B650A4EE36C',
    eventTypes: ["Appointment","TimeOff","ReservedRoom","PublicHoliday","SchedulingRule"],
    resourceTypes: ["Location","Room","Service","Practitioner","Patient"],
    countryCode: 'US',
    timestamp: `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
    timestampPlusOneHour: `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()+1}:${now.getMinutes()}:${now.getSeconds()}`
}


export {
    constants
}