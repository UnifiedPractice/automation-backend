import {CONSTANTS} from './../../../helper'

export const validAppointmentsNotificationsPayload = {
    appointmentId: CONSTANTS.appointmentId,
    notificationType: 'AppointmentCreatedEvent',
    recurrentModificationBehavior: 'ThisEvent'
};