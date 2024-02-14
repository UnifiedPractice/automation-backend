import * as commonAssertions from './../../services/common.assertions'
import * as billingEndpoints from './../../services/billing/billing.endpoints'
import * as billingAssertions from './../../services/billing/billing.assertions'
import { CONSTANTS } from '../../helper'

describe('Billing Endpoints - Sanity Tests', () => {
    let billingAccountId: number = CONSTANTS.billingAccountId;
    let calendarAppointmentId: number = CONSTANTS.calendarAppointmentId;

    context('billing - accounts GET /accounts/{id}', () =>{
        it('should get the billing account by id', () => {
            const response = billingEndpoints.getAccountsById(billingAccountId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                billingAssertions.assertGetAccountsById(response, billingAccountId)
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('billing - cards GET /cards', () => {
        it('should get the cards for a patient', () => {
            const response = billingEndpoints.getCards();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('billing - charges GET /charges/... endpoints', () => {
        it('should GET /charges/cancellation/{calendarAppointmentId}', () => {
            const response = billingEndpoints.getChargesCancellationByCalendarAppointmentId(calendarAppointmentId);
            response.then((response: any) => {
                billingAssertions.assertGetChargesCancellation(response);
            });
        });

        it('should GET /charges/cancellation', () => {
            const response = billingEndpoints.getChargesCancellation();
            response.then((response: any) => {
                billingAssertions.assertGetChargesCancellation(response);
            });
        });
    });

    context('billing - fullsteam GET /fullsteam/... endpoints', () => {
        it('should GET /fullsteam/sso', () => {
            const response = billingEndpoints.getFullsteamSso();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                billingAssertions.assertErrorOnGetFullsteamSSo(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });

        it('should GET /fullsteam/patient-payment-verify', () => {
            const response = billingEndpoints.getFullsteamPatientPaymentVerify();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                billingAssertions.assertGetFullsteamPatientPaymentVerify(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });
});