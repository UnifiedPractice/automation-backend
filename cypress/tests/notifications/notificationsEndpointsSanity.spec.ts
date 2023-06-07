import * as commonAssertions from './../../services/common.assertions'
import * as notificationsEndpoints from './../../services/notifications/notifications.endpoints'
import * as notificationsAssertions from './../../services/notifications/notifications.assertions'
import { CONSTANTS } from './../../helper'

describe('Notifications Endpoints - Sanity Tests', () => {
    let appointmentId: number;
    let personId: number;

    context('notifications POST /appointments/{id}', () => {
        it('should create a appointment notification', () => {
            appointmentId = CONSTANTS.appointmentId;
            const response = notificationsEndpoints.addAppointmentsNotifications(appointmentId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                notificationsAssertions.assertAddAppointmentsNotifications(response, appointmentId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context ('notifications GET /notification/{personId}', () => {
        it('should get a notification by personId', () => {
            personId = CONSTANTS.personId;
            const response = notificationsEndpoints.getNotificationByPersonId(personId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                notificationsAssertions.assertGetNotificationByPersonId(response, personId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });
});

