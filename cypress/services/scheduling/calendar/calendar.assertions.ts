import * as settingsFixtures from './../../../tests/scheduling/calendar/fixtures/settings.fixtures'
import {CONSTANTS} from "../../../helper";
import { resolve } from 'cypress/types/bluebird';

/**
 * Assert getting calendar events
 * @param {Object} response - GET /calendar/events response
 * @param {number} index - index for each event
 */
function assertGetAllCalendarEvents (response: any) {
    response.body.forEach((item: any) => {
        expect(item).to.have.property('id').and.to.be.a('number');
        expect(item).to.have.property('type').and.to.be.a('string').oneOf(CONSTANTS.eventTypes);
        expect(item).to.have.property('startTime').and.to.be.a('string').contain(CONSTANTS.startDate);
        expect(item).to.have.property('endTime').and.to.be.a('string').contain(CONSTANTS.startDate);
        expect(item).to.have.property('startUtcTime').and.to.be.a('string').contain(CONSTANTS.startDate);
        expect(item).to.have.property('endUtcTime').and.to.be.a('string').contain(CONSTANTS.startDate);
        expect(item).to.have.property('allDay').and.to.be.a('boolean');
        expect(item).to.have.property('updatedBy').and.to.be.a('string');
        expect(item).to.have.property('updatedOn').and.to.be.a('string');
        expect(item).to.have.property('updatedByClient').and.to.be.a('string');
        expect(item).to.have.property('createdBy').and.to.be.a('string');
        expect(item).to.have.property('createdOn').and.to.be.a('string');
        expect(item).to.have.property('createdByClient').and.to.be.a('string');
        expect(item).to.have.property('isCancelled').and.to.be.a('boolean');
        expect(item).to.have.property('eventResources').and.to.be.an('array');
        item.eventResources.forEach((eventResource: any) => {
            expect(eventResource).to.have.property('id').and.to.be.a('number');
            expect(eventResource).to.have.property('type').and.to.be.a('string');
            if(eventResource.role) {
                expect(eventResource).to.have.property('role').and.to.be.a('string');
            };
            if(eventResource.properties) {
                expect(eventResource).to.have.property('properties').and.to.be.an('Object');
            };
        });
        expect(item).to.have.property('properties').and.to.be.an('Object');
        if(Object.keys(item.properties).length!=0){
            expect(Object.keys(item.properties)).to.deep.equal(['Appointment', 'SchedulingRule']);
        };
    });
};

/**
 * Assert getting calendar events by ID
 * @param {Object} response - GET /calendar/events/{id} response
 * @param {number} eventId - the event Id
 */
function assertGetCalendarEvent (response: any, eventId: number) {
    expect(response.body).to.have.property('createdByUser').and.to.be.a('string');
    expect(response.body).to.have.property('updatedByUser').and.to.be.a('string');
    expect(response.body).to.have.property('id').and.to.be.a('number').equals(eventId);
    expect(response.body).to.have.property('type').and.to.be.a('string');
    expect(response.body).to.have.property('startTime').and.to.be.a('string');
    expect(response.body).to.have.property('endTime').and.to.be.a('string');
    expect(response.body).to.have.property('startUtcTime').and.to.be.a('string');
    expect(response.body).to.have.property('endUtcTime').and.to.be.a('string');
    expect(response.body).to.have.property('allDay').and.to.be.a('boolean');
    expect(response.body).to.have.property('updatedBy').and.to.be.a('string');
    expect(response.body).to.have.property('updatedOn').and.to.be.a('string');
    expect(response.body).to.have.property('updatedByClient').and.to.be.a('string');
    expect(response.body).to.have.property('createdBy').and.to.be.a('string').equals(`${CONSTANTS.objectId}`);
    expect(response.body).to.have.property('createdOn').and.to.be.a('string');
    expect(response.body).to.have.property('createdByClient').and.to.be.a('string');
    expect(response.body).to.have.property('isCancelled').and.to.be.a('boolean');
    expect(response.body).to.have.property('eventResources').and.to.be.an('array');
    response.body.eventResources.forEach((eventResource: any) => {
        expect(eventResource).to.have.property('id').and.to.be.a('number');
        expect(eventResource).to.have.property('type').and.to.be.a('string');
        if(eventResource.role) {
            expect(eventResource).to.have.property('role').and.to.be.a('string');
        };
        if(eventResource.properties) {
            expect(eventResource).to.have.property('properties').and.to.be.an('Object');
        };
    });
    expect(response.body).to.have.property('properties').and.to.be.an('Object');
    if(Object.keys(response.body.properties).length!=0){
        expect(Object.keys(response.body.properties)).to.deep.equal(['Appointment', 'SchedulingRule']);
    };
};

/**
 * Assert getting calendar availabilities
 * @param {Object} response  - GET /calendar/availabilities response
 */
function assertGetAllCalendarAvailabilities (response: any) {
    if (response.body.length!=0) {
        response.body.forEach((item: any) => {
            expect(item).to.have.property('startTime').and.to.be.a('string');
            expect(item).to.have.property('endTime').and.to.be.a('string');
            expect(item).to.have.property('resource').and.to.be.an('Object');
            if(Object.keys(item.resource).length!=0) {
                expect(Object.keys(item.resource)).to.deep.equal(['id', 'type', 'availableFor', 'availableForAllServices', 'availableForAllRooms', 'isSupervising', 'groupId']);
                item.resource.availableFor.forEach((availableResource: any) => {
                    expect(availableResource).to.have.property('id').and.to.be.a('number');
                    expect(availableResource).to.have.property('type').and.to.be.a('string');
                    if(availableResource.role) {
                        expect(availableResource).to.have.property('role').and.to.be.a('string');
                    };
                    if(availableResource.properties) {
                        expect(availableResource).to.have.property('properties').and.to.be.an('Object');
                    };
                });
            };
        });
    };
};

/**
 * Assert getting calendar availabilities by Resource Type
 * @param {Object} response - GET /calendar/availabilities/{resourceType} response
 */
function assertGetCalendarAvailabilitiesByResourceType (response: any) {
    assertGetAllCalendarAvailabilities(response);    
};

/**
 * Assert getting calendar settings
 * @param {Object} response - GET /calendar/settings response
 */
function assertgetAllCalendarSettings (response: any) {
    if (response.body.length!=0) {
        expect(response.body).to.have.property('clinicSetting').and.to.be.an('Object');
        if(Object.keys(response.body.clinicSetting).length!=0) {
            expect(Object.keys(response.body.clinicSetting)).to.deep.equal(['resourceColorSettings', 'otherColors']);
            response.body.clinicSetting.resourceColorSettings.forEach((item: any)=> {
                expect(item).to.have.property('resourceType').and.to.be.a('string');
                expect(item).to.have.property('resourceId').and.to.be.a('number');
                expect(item).to.have.property('hexColorCode').and.to.be.a('string');
            });
        };
        expect(response.body).to.have.property('userSetting').and.to.be.an('Object');
        if(Object.keys(response.body.userSetting).length!=0) {
            expect(Object.keys(response.body.userSetting)).to.deep.equal(['rememberCalendarView']);
        };
    };
};

/**
 * Assert updating calendar settings
 * @param {Object} response - PUT /calendar/settings response
 */
function assertUpdateCalendarSettings (response: any, settingsId: number) {
    expect(response.body).to.have.property('data').and.to.be.a('number').equals(settingsId);;
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert getting calendar view-settings
 * @param {Object} response - GET /calendar/view-settings response
 */
function assertGetAllCalendarViewSettings(response: any) {
    if (response.body.length!=0) {
        expect(response.body).to.have.property('colorCodeBy').and.to.be.a('string');
        expect(response.body).to.have.property('resourceView').and.to.be.a('number');
        expect(response.body).to.have.property('calendarView').and.to.be.a('string');
        expect(response.body).to.have.property('viewScaling').and.to.be.a('number');
        expect(response.body).to.have.property('showCancelled').and.to.be.a('boolean');
        expect(response.body).to.have.property('showAppointmentsOnly').and.to.be.a('boolean');
        expect(response.body).to.have.property('panelHidden').and.to.be.a('boolean');
        expect(response.body).to.have.property('resourceFilters').and.to.be.an('array');
        if (response.body.resourceFilters.length!=0) {
            response.body.resourceFilters.forEach((item: any) => {
                expect(item).to.have.property('resourceType').and.to.be.a('string');
                expect(item).to.have.property('resourceId').and.to.be.a('number');
            });
        };
    };
};

/**
 * Assert updating calendar view settings
 * @param {Object} response - PUT /calendar/view-settings response
 */
function assertUpdateCalendarViewSettings (response: any) {
    expect(response.body).to.have.property('data').and.to.be.a('number').equals(0);;
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert updating calendar user settings
 * @param {Object} response - PUT /calendar/user-settings response
 */
function assertUpdateCalendarUserSettings (response: any) {
    expect(response.body).to.have.property('data').and.to.be.a('number').equals(settingsFixtures.validUserSettingsPayload.id);
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert adding calendar events timeoffs
 * @param {Object} response - POST /calendar/events/timeoffs
 */
function assertAddCalendarTimeoffs(response: any) {
    expect(response.body.data).to.not.be.undefined;
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert updating calendar events timeoffs
 * @param {Object} response - PATCH /calendar/events/timeoffs/{id}
 */
function assertUpdateCalendarTimeoffs(response: any, timeoffId: number) {
    expect(response.body.data).equals(timeoffId);
    expect(response.body.data).to.not.be.undefined;
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert deleting calendar events timeoffs
 * @param {Object} response - DELETE /calendar/events/timeoffs/{id}
 */
function assertDeleteCalendarTimeoffs(response: any, timeoffId: number) {
    expect(response.body.data).equals(timeoffId);
    expect(response.body.data).to.not.be.undefined;
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert adding calendar events rooms-reservations
 * @param {Object} response - POST /calendar/events/rooms-reservations
 */
function assertAddCalendarRoomsReservations(response: any) {
    //the response body is absent from swagger
};

/**
 * Assert updating calendar events rooms-reservations
 * @param {Object} response - PATCH /calendar/events/rooms-reservations
 */
function assertUpdateCalendarRoomsReservations(response: any) {
    //the response body is absent from swagger
};

/**
 * Assert deleting calendar events rooms-reservations
 * @param {Object} response - DELETE /calendar/events/rooms-reservations/{id}
 */
function assertDeleteCalendarRoomsReservations(response: any, roomReservationId: number) {
    //the response body is absent from swagger
};

/**
 * Assert getting appointments by eventId
 * @param {Object} response - GET calendar/events/{id}/appointments
 */
function assertGetCalendarAppointmentByEventId(response: any, eventId: number) {
    expect(response.body).to.have.property('id').and.to.be.a('number').equals(eventId);
    expect(response.body).to.have.property('uniqueId').and.to.be.a('string');
    expect(response.body).to.have.property('eventId').and.to.be.a('number');
    expect(response.body).to.have.property('legacyId').and.to.be.a('number');
    expect(response.body).to.have.property('appointmentType').and.to.be.a('string');
    expect(response.body).to.have.property('appointmentState').and.to.be.a('string');
    expect(response.body).to.have.property('patientFormsStatus').and.to.be.a('string');
    expect(response.body).to.have.property('serviceForNewPatient').and.to.be.a('boolean');
    expect(response.body).to.have.property('patientId').and.to.be.a('number');
    expect(response.body).to.have.property('sendNotifications').and.to.be.a('boolean');
    expect(response.body).to.have.property('notificationSettings').and.to.be.an('array');
    response.body.notificationSettings.forEach((notificationSetting: any) => {
        expect(notificationSetting).to.have.property('type').and.to.be.a('string');
        expect(notificationSetting).to.have.property('sms').and.to.be.a('boolean');
        expect(notificationSetting).to.have.property('email').and.to.be.a('boolean');
    });
    expect(response.body).to.have.property('rescheduled').and.to.be.a('boolean');
    expect(response.body).to.have.property('cancellationFeeCollected').and.to.be.a('boolean');
    expect(response.body).to.have.property('receiveEmail').and.to.be.a('boolean');
    expect(response.body).to.have.property('receiveSms').and.to.be.a('boolean');
    expect(response.body).to.have.property('amountCharged').and.to.be.a('number');
    expect(response.body).to.have.property('amountCollected').and.to.be.a('number');
    expect(response.body).to.have.property('createdByUser').and.to.be.a('string');
    expect(response.body).to.have.property('updatedByUser').and.to.be.a('string');
    expect(response.body).to.have.property('type').and.to.be.a('string');
    expect(response.body).to.have.property('startTime').and.to.be.a('string');
    expect(response.body).to.have.property('endTime').and.to.be.a('string');
    expect(response.body).to.have.property('startUtcTime').and.to.be.a('string');
    expect(response.body).to.have.property('endUtcTime').and.to.be.a('string');
    expect(response.body).to.have.property('allDay').and.to.be.a('boolean');
    expect(response.body).to.have.property('updatedBy').and.to.be.a('string');
    expect(response.body).to.have.property('updatedOn').and.to.be.a('string');
    expect(response.body).to.have.property('updatedByClient').and.to.be.a('string');
    expect(response.body).to.have.property('createdBy').and.to.be.a('string');
    expect(response.body).to.have.property('createdOn').and.to.be.a('string');
    expect(response.body).to.have.property('createdByClient').and.to.be.a('string');
    expect(response.body).to.have.property('isCancelled').and.to.be.a('boolean');
    expect(response.body).to.have.property('eventResources').and.to.be.an('array');
    response.body.eventResources.forEach((eventResource: any) => {
        expect(eventResource).to.have.property('id').and.to.be.a('number');
        expect(eventResource).to.have.property('type').and.to.be.a('string');
        if(eventResource.role) {
            expect(eventResource).to.have.property('role').and.to.be.a('string');
        };
        if(eventResource.properties) {
            expect(eventResource).to.have.property('properties').and.to.be.an('Object');
        };
    });
    expect(response.body).to.have.property('properties').and.to.be.an('Object');
};

/**
 * Assert getting appointment legacyId by appointmentID
 * @param {Object} response - GET /calendar/events/{id}/legacyId
 */
function asserrtGetCalendarLegacyIdByEventId(response: any) {
    expect(response.body).to.be.a('number');
};

/**
 * Assert adding calendar events appointments
 * @param {Object} response - POST /calendar/events/appointments
 */
function assertAddCalendarAppointments(response: any) {
    expect(response.body.data).to.not.be.undefined;
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * Assert updating an Accepted appointment will fail
 * @param {Object} response 
 */
function assertErrorOnUpdateCalendarAppointments (response: any) {
    expect(response.status).equals(400);
    expect(response.body[0].type).equals("Warning");
    expect(response.body[0].description).equals("Cancellation policy is not supported by this organization.");
};

/**
 * Assert deleting calendar appointments
 * @param {Object} response - DELETE /calendar/events/appointments/{id}
 */
function assertDeleteCalendarAppointmens(response: any, appointmentId: number) {
    expect(response.body.data).equals(appointmentId);
    expect(response.body.data).to.not.be.undefined;
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
}

/**
 * Assert getting appointment by appointmentId
 * @param {Object} response - GET/calendar/events/appointments/{id}
 */
function assertGetCalendarAppointmentById(response: any, eventId: number) {
    assertGetCalendarAppointmentByEventId(response, eventId);
};

/**
 * Assert getting appointment set by appointmentId
 * @param {Object} response - GET /calendar/events/appointments/{id}/set
 */
function assertGetCalendarAppontmentSetById(response: any, eventId: number) {
    if (response.body.length!=0) {
        assertGetCalendarAppointmentByEventId(response, eventId);
    };
};

/**
 * Assert getting appointment future-recurrents by appointmentId
 * @param {Object} response GET /calendar/events/appointments/{id}/future-recurrents
 */
function assertGetCalendarAppointmentFutureRecurrentsById(response: any, eventId: number) {
    if (response.body.length!=0) {
        assertGetCalendarAppointmentByEventId(response, eventId);
    };
};

/**
 * Assert adding appointment first-visits
 * @param {Object} response POST /calendar/events/appointments/first-visits
 */
function assertAddAppointmentsFirstVisits(response: any) {
    expect(response.body).to.have.property('data').and.to.be.an('array');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
}

/**
 * Assert adding appointment scheduling-conflivcts
 * @param {Object} response POST /calendar/events/appointments/scheduling-conflicts
 */
function assertAddAppointmentsSchedulingConflicts(response: any) {
    expect(response.body).to.have.property('data').and.to.be.an('array');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
}

/**
 * Assert getting appointment defaults by patientId
 * @param {Object} response - GET /calendar/events/appointments/{patientId}/defaults
 */
function assertGetCalendarAppontmentDefaultsByPatientId(response: any) {
    expect(response.body).to.have.property('serviceId').and.to.be.a('number');
    //expect(response.body).to.have.property('appointmentType').and.to.be.a('string');
    expect(response.body).to.have.property('notificationSettings').and.to.be.an('array');
    response.body.notificationSettings.forEach((item: any) => {
        expect(item).to.have.property('type').and.to.be.a('string');
        expect(item).to.have.property('sms').and.to.be.a('boolean');
        expect(item).to.have.property('email').and.to.be.a('boolean');
    });
    expect(response.body).to.have.property('sendNotifications').and.to.be.a('boolean');
};

/**
 * Assert rejecting an Accepted appointment will fail
 * @param {Object} response 
 */
function assertErrorOnRejectCalendarAppointments (response: any) {
    expect(response.status).equals(405);
    //expect(response.body[0].type).equals("Error");
    //expect(response.body[0].description).equals("Can not reject appointment with state : Cancelled.");
};

/**
 * Assert getting appointment legacyId by appointmentId
 * @param {Object} response - GET /calendar/events/appointments/{id}/legacyId
 */
function assertGetCalendarAppointmentLegacyIdById(response: any) {
    expect(response.body).to.be.a('number');
};

export {
    assertGetAllCalendarEvents,
    assertGetCalendarEvent,
    assertGetAllCalendarAvailabilities,
    assertGetCalendarAvailabilitiesByResourceType,
    assertgetAllCalendarSettings,
    assertUpdateCalendarSettings,
    assertGetAllCalendarViewSettings,
    assertUpdateCalendarViewSettings,
    assertUpdateCalendarUserSettings,
    assertAddCalendarTimeoffs,
    assertUpdateCalendarTimeoffs,
    assertDeleteCalendarTimeoffs,
    assertAddCalendarRoomsReservations,
    assertUpdateCalendarRoomsReservations,
    assertDeleteCalendarRoomsReservations,
    assertGetCalendarAppointmentByEventId,
    asserrtGetCalendarLegacyIdByEventId,
    assertAddCalendarAppointments,
    assertGetCalendarAppointmentById,
    assertErrorOnUpdateCalendarAppointments,
    assertDeleteCalendarAppointmens,
    assertGetCalendarAppontmentSetById,
    assertGetCalendarAppointmentFutureRecurrentsById,
    assertAddAppointmentsFirstVisits,
    assertAddAppointmentsSchedulingConflicts,
    assertGetCalendarAppontmentDefaultsByPatientId,
    assertErrorOnRejectCalendarAppointments,
    assertGetCalendarAppointmentLegacyIdById
};