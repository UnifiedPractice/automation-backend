const now = new Date();

const constants = {
    tenantId: 8,
    objectId: 77,
    cliend: 'ehr',
    appointmentId: 51258,
    personId: 95,
    startDate: '2020-07-03',
    endDate: '2020-7-03',
    startTime: '08:00:00',
    endTime: '12:00:00',
    locationId: 108,
    roomId: 15,
    practitionerId: 0,
    patientId: 108,
    serviceId: 80,
    groupId: 313,
    eventTypes: ["Appointment","TimeOff","ReservedRoom","PublicHoliday","SchedulingRule"],
    resourceTypes: ["Location","Room","Service","Practitioner","Patient"],
    timestamp: `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
    timestampPlusOneHour: `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()+1}:${now.getMinutes()}:${now.getSeconds()}`
}


export {
    constants
}