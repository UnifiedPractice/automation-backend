/**
 * 
 * @param {Object} response 
 * @returns first eventId from the response
 */
function getEventId(response: any) {
    let eventIds: Number[] = [];
    response.body.forEach((item: any) => {
        eventIds.push(item.id ? item.id : null);
    });
    return eventIds[0];
};

/**
 * 
 * @param {Object} response 
 * @returns first appointmentId from the response
 */
function getAppointmentId(response: any) {
    let appointmentIds: Number[] = [];
    response.body.forEach ((item: any) => {
        appointmentIds.push(item.type === 'Appointment' ? item.id : null);
    });
    return appointmentIds[0];
};

/**
 * 
 * @param {Object} response 
 * @returns first patientId from the response
 */
function getPatientId(response: any) {
    let patientIds: Number[] = [];
    response.body.forEach ((item: any) => {
        patientIds.push(item.properties.Appointment.patientId ? item.properties.Appointment.patientId : null);
    });
    return patientIds[0];
};

export {
    getEventId,
    getAppointmentId,
    getPatientId
}