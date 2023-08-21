import {faker} from '@faker-js/faker';
import {CONSTANTS} from './../../../helper'

const validNotesPayload = {
    patientId: CONSTANTS.patientId,
    text: `${faker.random.words(3)}`,
    printsOnSchedule: true
  }

  const validUpdateNotesPayload = {
    text: `${faker.random.words(5)}`,
    printsOnSchedule: false
  }

  export {
    validNotesPayload,
    validUpdateNotesPayload
  }