import {CONSTANTS} from "./../../helper";

/**
 * 
 * @param {Object} response - POST /appointments/{id}
 * @param {number} appointmentId - appointment Id
 */
function assertAddAppointmentsNotifications(response: any, appointmentId: number) {
    expect(response.body.data).equals(appointmentId);
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number');
    expect(response.body.messages).to.be.an('array');
};

/**
 * 
 * @param {Object} response - GET /notification/{personId}
 * @param {number} personId  - person Id
 */
function assertGetNotificationByPersonId(response: any, personId: number){
    expect(response.body[0].personId).equals(personId);
    expect(response.body[0].entityType).equals(CONSTANTS.eventTypes[0]);
}

export {
    assertAddAppointmentsNotifications,
    assertGetNotificationByPersonId
}