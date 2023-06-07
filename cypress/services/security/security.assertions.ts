import {CONSTANTS} from "./../../helper";

/**
 * 
 * @param {Object} response - POST /appointments/{id}
 * @param {number} appointmentId - appointment Id
 */
function assertAddAppointmentsSecurity(response:any, appointmentId: number) {
    expect(response.body.data).equals(appointmentId);
    expect(response.body.data).to.not.be.undefined;
    expect(typeof response.body.data).equals('number');
    expect(response.body.messages).to.be.an('array');
};

/**
 * 
 * @param {Object} response - GET /metabase/sso
 */
function assertGetMetabaseSso(response: any) {
    expect(response.body).to.not.be.undefined.and.to.be.html;
};

/**
 * 
 * @param {Object} response - GET /metabase/dashboard/{id}
 */
function assertGetMetabaseDashboardById(response: any) {
    expect(response.body.metabaseIframeURL).to.exist.and.not.be.undefined;
    expect(typeof response.body.metabaseIframeURL).equals('string');
}

export {
    assertAddAppointmentsSecurity,
    assertGetMetabaseSso,
    assertGetMetabaseDashboardById
}