import {CONSTANTS} from './../../../helper'
import {faker} from '@faker-js/faker'

export const validAppointmentsSecurityPayload = {
    appointmentId: CONSTANTS.appointmentId,
    eventName: `${faker.random.words(2)}`,
    futureAppointmentIds: [0]
};