import * as commonAssertions from './../../services/common.assertions'
import * as securityEndpoints from './../../services/security/security.endpoints'
import * as securityAssertions from './../../services/security/security.assertions'
import { CONSTANTS } from '../../helper'

describe('Security Endpoints - Sanity Tests', () => {
    let appointmentId: number;

    context('security POST /appointments/{id}', () => {
        it('should create an appointment security', () => {
            appointmentId = CONSTANTS.appointmentId;
            const response = securityEndpoints.addAppointmentsSecurity(appointmentId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                securityAssertions.assertAddAppointmentsSecurity(response, appointmentId);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('security GET /metabse/sso', () => {
        it('should get the metabase sso', () => {
            const response = securityEndpoints.getMetabaseSso();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                securityAssertions.assertGetMetabaseSso(response);
            });
        });
    });

    context('security GET /metabase/dashboard/{id}', () => {
        it('should get the metabase dashboard by its Id', () => {
            const response = securityEndpoints.getMetabaseDashboardById(0);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                securityAssertions.assertGetMetabaseDashboardById(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });
});