const now = new Date();

const constants = {
    tenantId: 8,
    objectId: 77,
    startDate: '2020-07-03',
    endDate: '2020-7-03',
    eventTypes: ["Appointment","TimeOff","ReservedRoom","PublicHoliday","SchedulingRule"],
    resourceTypes: ["Location","Room","Service","Practitioner","Patient"],
    timestamp: `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
}


export {
    constants
}