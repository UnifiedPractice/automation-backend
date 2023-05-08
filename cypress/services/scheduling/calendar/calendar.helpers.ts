/**
 * 
 * @param {Object} response 
 * @returns first eventId from the response
 */
function getEventId(response: any) {
    let eventIds: number[] = [];
    response.body.forEach((item: any) => {
        eventIds.push(item.id ? item.id : null);
    });
    expect(eventIds).to.not.be.undefined.and.to.not.be.empty;
    return eventIds[0];
};

/**
 * 
 * @param {Object} response 
 * @returns first appointmentId from the response
 */
function getAppointmentId(response: any) {
    let appointmentIds: number[] = [];
    response.body.forEach ((item: any) => {
        appointmentIds.push(item.type === 'Appointment' ? item.id : null);
    });
    expect(appointmentIds).to.not.be.undefined.and.to.not.be.empty;
    return appointmentIds[0];
};

/**
 * 
 * @param {Object} response 
 * @returns first patientId from the response
 */
function getPatientId(response: any) {
    let patientIds: number[] = [];
    response.body.forEach ((item: any) => {
        patientIds.push(item.properties.Appointment.patientId ? item.properties.Appointment.patientId : null);
    });
    expect(patientIds).to.not.be.undefined.and.to.not.be.empty;
    return patientIds[0];
};

export {
    getEventId,
    getAppointmentId,
    getPatientId
}