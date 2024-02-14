import { cli } from 'cypress';
import {BASEPATHS} from './../../helper'
import {API} from './../../helper'
import {CONSTANTS} from './../../helper'
import * as clinicNotesFixtures from './../../tests/clinicManagement/fixtures/clinicNotes.fixtures'
import * as patientsFixtures from './../../tests/clinicManagement/fixtures/patients.fixtures'
import * as trainingVideosFixtures from './../../tests/clinicManagement/fixtures/trainingVideos.fixtures'
import * as streamFixtures from './../../tests/clinicManagement/fixtures/stream.fixtures'

let countryCode: { [key: string]: number | string }  = {'CountryCode': CONSTANTS.countryCode};
let patientId: { [key: string]: number | string } = {'PatientId': CONSTANTS.patientId};
let dateTime: { [key: string]: number | string } = {'dateTime': CONSTANTS.timestamp}
let patientsQs: { [key: string]: number | string } = {'FirstName': 'John', 'Page': 1, 'Count': 10};
let trainingVideosQs: { [key: string]: number | string } = {'Page': 1, 'Count': 10};
let streamAvatarQs: { [key: string]: number | string } = {'token': '1vBTwNb2%2bOrQi24FUmEk5CJfiqdteK0h6s1ItseWf7hQhaZ9N5oyNGgvP8r30PYTKrd0awo9fpYycuG81GJaTBE70YBHaHptONu3LAeR7nTfBwxiRGS3chqwaUNNHjtAgIHHNHGu0LmDxQlk%2fkGsfv4Mgcus38NgyMGcdixmWv4bFDVfLOuah8HfVwECvmOEUsAvas3p%2f2SGbaq%2fHPzOHQ%3d%3d'}

let requestHeaders: { [key: string]: number | string } = {'TenantId': CONSTANTS.tenantId,'ObjectId': CONSTANTS.objectId, 'Client': CONSTANTS.client};
let streamRequestHeaders: { [key: string]: number | string } = {'TenantId': CONSTANTS.streamTenantId,'ObjectId': CONSTANTS.streamObjectId, 'Client': CONSTANTS.client};

/**
 * send request to GET /catalog/countries
 * @returns {Object} response
 */
function getCatalogCountries(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/catalog/countries`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /catalog/states
 * @returns {Object} response
 */
function getCatalogStates(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/catalog/states`,
        qs: countryCode,
        headers: requestHeaders
    });
};

/**
 * send request to GET /locations
 * @returns {Object} response
 */
function getLocations(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/locations`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /practitioners
 * @returns {Object} response
 */
function getPractitioners(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/practitioners`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /services
 * @returns {Object} response
 */
function getServices(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/services`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /services/{id}
 * @returns {Object} response
 */
function getServicesById(serviceId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/services/${serviceId}`,
        headers: requestHeaders
    });
};

/**
 * send request to POST /notes
 * @returns {Object} response
 */
function addNotes(): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.clinicBasePath}/notes`,
        headers: requestHeaders,
        body: clinicNotesFixtures.validNotesPayload
    });
};

/**
 * send request to GET /notes
 * @returns {Object} response
 */
function getNotes(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/notes`,
        qs: patientId,
        headers: requestHeaders
    });
};

/**
 * send request to PUT /notes/{id}
 * @returns {Object} response
 */
function updateNotes(noteId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'PUT',
        url: `${API}${BASEPATHS.clinicBasePath}/notes/${noteId}`,
        headers: requestHeaders,
        body: clinicNotesFixtures.validUpdateNotesPayload
    });
};

/**
 * send request to DELETE /notes/{id}
 * @returns {Object} response
 */
function deleteNotes(noteId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'DELETE',
        url: `${API}${BASEPATHS.clinicBasePath}/notes/${noteId}`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /locations/{id}
 * @param {number} locationId - the location Id
 * @returns {Object} response
 */
function getLocationById(locationId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/locations/${locationId}`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /onboardingforms/appointment/{calendarAppointmentId}
 * @param {number} calendarAppointmentId - the calendar appointment Id
 * @returns {object} response
 */
function getOnboardingFormsByCalendarAppointmentId(calendarAppointmentId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/onboardingforms/appointment/${calendarAppointmentId}`,
        qs: patientId,
        headers: requestHeaders
    });
};

/**
 * send request to GET /onboardingforms/patient/{id}
 * @param {number} patientId - the patient Id
 * @returns 
 */
function getOnboardingFormsByPatientId(patientId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/onboardingforms/patient/${patientId}`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /onboardingforms/patient/{id}/status
 * @param {number} patientId - the patient Id
 * @returns {Object} response
 */
function getOnboardingFormsStatusByPatientId(patientId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/onboardingforms/patient/${patientId}/status`,
        qs: dateTime,
        headers: requestHeaders
    });
};

/**
 * send request to GET /organization
 * @returns {Object} response
 */
function getOrganization(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/organization`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /organization/organizationinfo
 * @returns {Object} response
 */
function getOrganizationInfo(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/organization/business-info`,
        headers: requestHeaders
    });
};

/**
 * send request to POST /organization/organizationinfo
 * @param {Object} organizationInfoBody - the request body
 * @returns {Object} response
 */
function patchOrganizationInfo(organizationInfoBody: any): Cypress.ObjectLike{
    return cy.request({
        method: 'PATCH',
        url: `${API}${BASEPATHS.clinicBasePath}/organization/business-info`,
        headers: requestHeaders,
        body: organizationInfoBody
    });
};

/**
 * send request to GET /anonymous/organization/{clinicUid}
 * @param {string} clinicUid - clinic Uid
 * @returns {Object} response
 */
function getAnonymousOrganizationByClinicUid(clinicUid: string): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/anonymous/organization/${clinicUid}`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /patient-portal/invite-count
 * @returns {object} response
 */
function getPatientPortalInviteCount(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/patient-portal/invite-count`,
        headers: requestHeaders
    });
};

/**
 * send request to PUT /patient-portal/domain-name/{name}
 * @param {string} domainName - the name
 * @returns {Object} response
 */
function updatePatientPortalDomainName(domainName: string): Cypress.ObjectLike {
    return cy.request({
        method: 'PUT',
        url: `${API}${BASEPATHS.clinicBasePath}/patient-portal/domain-name/${domainName}`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /patients/{id}
 * @param {number} patientId - the patient Id
 * @returns {Object} response
 */
function getPatientsById(patientId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/patients/${patientId}`,
        headers: requestHeaders
    });
};

/**
 * send request to PATCH /patients/{id}
 * @param {number} patientId - the patient Id
 * @returns {Object} response
 */
function patchPatientsById(patientId: number, payload: any): Cypress.ObjectLike {
    return cy.request({
        method: 'PATCH',
        url: `${API}${BASEPATHS.clinicBasePath}/patients/${patientId}`,
        headers: requestHeaders,
        body: payload
    });
};

/**
 * send request to GET /patients/code/{code}
 * @param {string} patientCode - the patient code
 * @returns {Object} response
 */
function getPatientsByPatientCode(patientCode: string): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/patients/code/${patientCode}`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /patients/{id}/onboardingForms
 * @param {number} patientId - the patient id
 * @returns {Object} response
 */
function getPatientsOnboardingForms(patientId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/patients/${patientId}/onboardingForms`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /patients
 * @returns {Object} response
 */
function getPatients(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/patients`,
        qs: patientsQs,
        headers: requestHeaders
    });
};

/**
 * send request to POST /patients
 * @returns {Object} response
 */
function addPatients() : Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.clinicBasePath}/patients`,
        headers: requestHeaders,
        body: patientsFixtures.validCreatePatientsPayload
    });
};

/**
 * send request to GET /patients/filter
 * @param {number} patientId - the patient Id
 * @returns {Object} response
 */
function getPatientsFilter(patientId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/patients/filter`,
        qs:  {'Ids': patientId},
        headers: requestHeaders
    });
};

/**
 * send request to GET /patients/{id}/insurance
 * @param {number} patientId - the patient Id
 * @returns {Object} response
 */
function getPatientsInsuranceById(patientId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/patients/${patientId}/insurance`,
        headers: requestHeaders
    });
};

/**
 * send request to GET patients/{id}/primary-practitioner
 * @param {number} patientId - the patient Id
 * @returns {Object} response
 */
function patchPatientsPrimaryPractitioner(patientId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'PATCH',
        url: `${API}${BASEPATHS.clinicBasePath}/patients/${patientId}/primary-practitioner`,
        headers: requestHeaders,
        body: patientsFixtures.validPatchPatientsPrimaryPractitionerPayload
    });
};

/**
 * send request to PUT /patients/{id}/red-flags
 * @param {number} patientId - the patient Id
 * @returns {Object} response
 */
function updatePatientsRedFlags(patientId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'PUT',
        url: `${API}${BASEPATHS.clinicBasePath}/patients/${patientId}/red-flags`,
        headers: requestHeaders,
        body: patientsFixtures.validPatchPatientsPrimaryPractitionerPayload
    });
};

/**
 * send request to GET /persons
 * @returns {Object} response
 */
function getPersons(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/persons`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /person/{id}
 * @param {number} personId - the person Id
 * @returns {Object} response
 */
function getPersonById(personId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/person/${personId}`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /practitioners/{id}
 * @param {number} practitionerId - the practitioner Id
 * @returns {Object} response
 */
function getPractitionersById(practitionerId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/practitioners/${practitionerId}`,
        headers: requestHeaders
    });
};

/**
 * send request to GET /practitioners/{id}/service
 * @param {number} practitionerId - the practitioner Id
 * @returns {Object} response
 */
function getPractitionersServiceById(practitionerId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/practitioners/${practitionerId}/service`,
        headers: requestHeaders
    });
};

/**
 * send request to POST /stream/channel
 * @returns {Object} response
 */
function addStreamChannel(): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.clinicBasePath}/stream/channel`,
        headers: streamRequestHeaders,
        body: streamFixtures.validStreamChannelPayload
    });
};

/**
 * send request to PATCH /stream/channel/{channelId}/users
 * @returns {Object} response
 */
function patchStreamChannelUsers(channelId: string): Cypress.ObjectLike {
    return cy.request({
        method: 'PATCH',
        url: `${API}${BASEPATHS.clinicBasePath}/stream/channel/${channelId}/users`,
        headers: streamRequestHeaders,
        body: streamFixtures.validPatchStreamChannelUsersPayload
    });
};

/**
 * send request to GET /stream/channels
 * @returns {Object} response
 */
function getStreamChannels(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/stream/channels`,
        headers: streamRequestHeaders
    });
};

/**
 * send request to PATCH /stream/user/{personId}
 * @returns {Object} response
 */
function patchStreamUserByPersonId(personId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'PATCH',
        url: `${API}${BASEPATHS.clinicBasePath}/stream/user/${personId}`,
        headers: streamRequestHeaders,
        body: streamFixtures.validPatchStreamUserPayload
    });
};

/**
 * send request to GET /stream/avatar
 * @returns {Object} response
 */
function getStreamAvatar(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/stream/avatar`,
        qs: streamAvatarQs,
        headers: streamRequestHeaders
    });
};

/**
 * send request to POST /anonymous/stream/channel
 * @returns {Object} response
 */
function addAnonymousStreamChannel(): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.clinicBasePath}/anonymous/stream/channel`,
        headers: streamRequestHeaders,
        body: streamFixtures.validAnonymousStreamChannelPayload
    });
};

/**
 * send request to POST /training-videos
 * @returns {Object} response
 */
function addTrainingVideos(): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.clinicBasePath}/training-videos`,
        headers: requestHeaders,
        body: trainingVideosFixtures.validAddTrainingVideoPayload
    });
};

/**
 * send request to GET /training-videos
 * @returns {Object} response
 */
function getTrainingVideos(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.clinicBasePath}/training-videos`,
        qs: trainingVideosQs,
        headers: requestHeaders
    });
};

/**
 * send request to PUT /training-videos/{id}
 * @param {number} trainingVideoId - the training-video Id
 * @returns {Object} response
 */
function updateTrainingVideos(trainingVideoId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'PUT',
        url: `${API}${BASEPATHS.clinicBasePath}/training-videos/${trainingVideoId}`,
        headers: requestHeaders,
        body: trainingVideosFixtures.validAddTrainingVideoPayload
    });
};

/**
 * send request to DELETE /training-videos/{id}
 * @param {number} trainingVideoId - the training-video Id
 * @returns {Object} response
 */
function deleteTrainingVideos(trainingVideoId: number): Cypress.ObjectLike {
    return cy.request({
        method: 'DELETE',
        url: `${API}${BASEPATHS.clinicBasePath}/training-videos/${trainingVideoId}`,
        headers: requestHeaders
    });
};

/**
 * send request to POST /unifiedpay/ticket
 * @returns {Object} response
 */
function addUnifiedpayTicket(): Cypress.ObjectLike {
    return cy.request({
        method: 'POST',
        url: `${API}${BASEPATHS.clinicBasePath}/unifiedpay/ticket`,
        headers: requestHeaders
    });
};

export {
    getCatalogCountries,
    getCatalogStates,
    getLocations,
    getPractitioners,
    getServices,
    getServicesById,
    addNotes,
    getNotes,
    updateNotes,
    deleteNotes,
    getLocationById,
    getOnboardingFormsByCalendarAppointmentId,
    getOnboardingFormsByPatientId,
    getOnboardingFormsStatusByPatientId,
    getOrganization,
    getOrganizationInfo,
    patchOrganizationInfo,
    getAnonymousOrganizationByClinicUid,
    getPatientPortalInviteCount,
    updatePatientPortalDomainName,
    getPatientsById,
    patchPatientsById,
    getPatientsByPatientCode,
    getPatientsOnboardingForms,
    getPatients,
    addPatients,
    getPatientsFilter,
    getPatientsInsuranceById,
    patchPatientsPrimaryPractitioner,
    updatePatientsRedFlags,
    getPersons,
    getPersonById,
    getPractitionersById,
    getPractitionersServiceById,
    addStreamChannel,
    patchStreamChannelUsers,
    getStreamChannels,
    patchStreamUserByPersonId,
    getStreamAvatar,
    addAnonymousStreamChannel,
    addTrainingVideos,
    getTrainingVideos,
    updateTrainingVideos,
    deleteTrainingVideos,
    addUnifiedpayTicket
}