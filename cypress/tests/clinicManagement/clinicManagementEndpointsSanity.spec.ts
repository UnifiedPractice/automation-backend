import * as commonAssertions from './../../services/common.assertions'
import * as clinicManagementEndpoints from './../../services/clinicManagement/clinicManagement.endpoints'
import * as clinicManagementAssertions from './../../services/clinicManagement/clinicManagement.assertions'
import { CONSTANTS } from '../../helper'


describe('Clinic Management Endpoints - Sanity Tests', () => {
    let locationId: number;
    let serviceId: number;
    let noteId: number;
    let calendarAppointmentId: number = CONSTANTS.calendarAppointmentId;
    let patientId: number = CONSTANTS.patientId;
    let clinicUid: string;
    let organizationInfoBody: any;
    let validPatchPatientsPayload: any;
    let patientCode: string;
    let personId: number;
    let trainingVideoId: number;
    let streamChannelId: string;

    context('clinic management - catalog GET /catalog/... endpoints', () => {
        it('should GET /catalog/countries', () => {
            const response = clinicManagementEndpoints.getCatalogCountries();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                clinicManagementAssertions.assertGetCatalogCountries(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /catalog/states', () => {
            const response = clinicManagementEndpoints.getCatalogStates();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                clinicManagementAssertions.assertGetCatalogStates(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });
    context('clinic management - clinicManagement GET /... endpoints', () => {
        it('should GET /locations', () => {
            const response = clinicManagementEndpoints.getLocations();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                clinicManagementAssertions.assertGetLocations(response);
                locationId = response.body[0].id;
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /practitioners', () => {
            const response = clinicManagementEndpoints.getPractitioners();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                clinicManagementAssertions.assertGetPractitioners(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /services', () => {
            const response = clinicManagementEndpoints.getServices();
            response.then((response:any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                clinicManagementAssertions.assertGetServices(response);
                serviceId = response.body[0].id;
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /services/{id}', () => {
            const response = clinicManagementEndpoints.getServicesById(serviceId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetServicesById(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('clinic management - clinic note CRUD /notes/... endpoints', () => {
        it('should POST /notes', () => {
            const response = clinicManagementEndpoints.addNotes();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertAddNotes(response);
                noteId = response.body.data;
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /notes', () => {
            const response = clinicManagementEndpoints.getNotes();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                clinicManagementAssertions.assertGetNotes(response, noteId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should PUT /notes/{id}', () => {
            const response = clinicManagementEndpoints.updateNotes(noteId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertUpdateNotes(response, noteId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should DELETE /notes/{id}', () => {
            const response = clinicManagementEndpoints.deleteNotes(noteId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertDeleteNotes(response, noteId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('clinic management - locations GET /locations/{id}', () => {
        it('should GET /location/{id}', () => {
            const response = clinicManagementEndpoints.getLocationById(locationId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetLocationById(response, locationId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('clinic management - onboardingForms GET /onboardingforms/... endpoints', () => {
        it('should GET /onboardingforms/appointment/{calendarAppointmentId}' , () => {
            const response = clinicManagementEndpoints.getOnboardingFormsByCalendarAppointmentId(calendarAppointmentId);
            response.then((response:any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                clinicManagementAssertions.assertGetOnboardingFormsByCalendarAppointmentId(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /onboardingforms/patient/{id}', () => {
            const response = clinicManagementEndpoints.getOnboardingFormsByPatientId(patientId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                clinicManagementAssertions.assertGetOnboardingFormsByPatientId(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /onboardingforms/patient/{id}/status', () => {
            const response = clinicManagementEndpoints.getOnboardingFormsStatusByPatientId(patientId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetOnboardingFormsStatusByPatientId(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('clinic management - organization GET/POST .../organization/... endpoints', () => {
        it('should GET /organization', () => {
            const response = clinicManagementEndpoints.getOrganization();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetOrganization(response);
                clinicUid = response.body.uniqueId;
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
        
        it('should GET /organization/organizationinfo', () => {
            const response = clinicManagementEndpoints.getOrganizationInfo();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetOrganizationInfo(response);
                organizationInfoBody = response.body;
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should POST /organization/organizationinfo', () => {
            const response = clinicManagementEndpoints.addOrganizationInfo(organizationInfoBody);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertAddOrganizationInfo(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /anonymous/organization/{clinicUid}', () => {
            const response = clinicManagementEndpoints.getAnonymousOrganizationByClinicUid(clinicUid);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetAnonymousOrganizationByClinicUid(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('clinic management - patientPortal GET/PUT /patient-portal/... endpoints', () => {
        it('should GET /patient-portal/invite-count', () => {
            const response = clinicManagementEndpoints.getPatientPortalInviteCount();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetPatientPortalInviteCount(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should PUT /patient-portal/domain-name/{name}', () => {
            //TODO: Implement this test
            //...
        });
    });

    context('clinic management - patients CRUD /patients/... endpoints', () => {
        it('should GET /patients/{id}', () => {
            const response = clinicManagementEndpoints.getPatientsById(patientId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetPatientsById(response, patientId);
                validPatchPatientsPayload = response.body;
                validPatchPatientsPayload.firstName = 'John';
                patientCode = validPatchPatientsPayload.patientCode;
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should PATCH /patients/id', () => {
            const response = clinicManagementEndpoints.patchPatientsById(patientId, validPatchPatientsPayload);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertPatchPatientsById(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /patients/code/{code}', () => {
            const response = clinicManagementEndpoints.getPatientsByPatientCode(patientCode);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetPatientsByPatientCode(response, patientCode);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /patients/{id}/onboardingForms', () => {
            const response = clinicManagementEndpoints.getPatientsOnboardingForms(patientId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetOnboardingFormsByPatientId(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /patients', () => {
            const response = clinicManagementEndpoints.getPatients();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetPatients(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should POST /patients', () => {
            const response = clinicManagementEndpoints.addPatients();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertAddPatients(response);
                patientId = response.body.data;
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /patients/filter', () => {
            const response = clinicManagementEndpoints.getPatientsFilter(patientId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                clinicManagementAssertions.assertGetPatientsFilter(response);                
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /patients/{id}/insurance', () => {
            const response = clinicManagementEndpoints.getPatientsInsuranceById(CONSTANTS.insurancePatientId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                clinicManagementAssertions.assertGetPatientsInsuranceById(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET patients/{id}/primary-practitioner', () => {
            const response = clinicManagementEndpoints.patchPatientsPrimaryPractitioner(patientId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertPatchPatientsPrimaryPractitioner(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should PUT /patients/{id}/red-flags', () => {
            const response = clinicManagementEndpoints.updatePatientsRedFlags(patientId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertUpdatePatientsRedFlags(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });
    
    context('clinic management - persons GET /persons/... endpoints', () => {
        it('should GET /persons', () => {
            const response = clinicManagementEndpoints.getPersons();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                clinicManagementAssertions.assertGetPersons(response);
                personId = response.body[0].id;
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /person/{id}', () => {
            const response = clinicManagementEndpoints.getPersonById(personId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetPersonById(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });
    context('clinic management - practitioners GET /practitioners/... endpoints', () => {
        it('should GET /practitioners/{id}', () => {
            const response = clinicManagementEndpoints.getPractitionersById(CONSTANTS.objectId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetPractitionersById(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /practitioners/{id}/service', () => {
            const response = clinicManagementEndpoints.getPractitionersServiceById(CONSTANTS.objectId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetPractitionersServiceById(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('clinic management - stream CRUD /stream/... endpoints', () => {
        it('should POST /stream/channel', () => {
            const response = clinicManagementEndpoints.addStreamChannel();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertAddStreamChannel(response);
                streamChannelId = response.body.data.channels[0].channelId;
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should PATCH /stream/channel/{channelId}/users', () => {
            const response = clinicManagementEndpoints.patchStreamChannelUsers(streamChannelId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertPatchStreamChannelUsers(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
        
        it('should GET /stream/channels', () => {
            const response = clinicManagementEndpoints.getStreamChannels();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetStreamChannels(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should PATCH /stream/user/{personId}', () => {
            const response = clinicManagementEndpoints.patchStreamUserByPersonId(CONSTANTS.streamPersonId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertPatchStreamChannelUsers(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /stream/avatar', () => {
            const response = clinicManagementEndpoints.getStreamAvatar();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetStreamAvatar(response);
            });
            commonAssertions.assertResponseImageContentType(response);
        });

        it('should POST /anonymous/stream/channel', () => {
            const response = clinicManagementEndpoints.addAnonymousStreamChannel();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertAddAnonymousStreamChannel(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('clinic management - training videos CRUD /trainig-video/... endpoints', () => {
        it('should POST /training-videos', () => {
           const response = clinicManagementEndpoints.addTrainingVideos();
           response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertAddUpdateOrDeleteTrainingVideos(response);
                trainingVideoId = response.body.data;
           });
           commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /training-videos', () => {
           const response = clinicManagementEndpoints.getTrainingVideos();
           response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertGetTrainingVideos(response);
           });
           commonAssertions.assertResponseJsonContentType(response);
        });
        
        it('should PUT /training-videos/{id}', () => {
            const response = clinicManagementEndpoints.updateTrainingVideos(trainingVideoId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertAddUpdateOrDeleteTrainingVideos(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should DELETE /training-videos/{id}', () => {
            const response = clinicManagementEndpoints.deleteTrainingVideos(trainingVideoId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertAddUpdateOrDeleteTrainingVideos(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('clinic management - unifiedpay POST /unifiedpay/ticket endpoint', () => {
        it('should POST /unifiedpay/ticket', () => {
            const response = clinicManagementEndpoints.addUnifiedpayTicket();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                clinicManagementAssertions.assertAddUnifiedpayTicket(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });
});