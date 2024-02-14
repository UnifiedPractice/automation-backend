/**
 * 
 * @param {Object} response - GET /accounts/{id}
 * @param clientId - accountId
 */
function assertGetAccountsById(response: any, clientId: number) {
    expect(response.body).to.have.property('clientId').and.to.be.a('number');
    expect(response.body.clientId).equals(clientId);
    expect(response.body).to.have.property('credit').and.to.be.a('number');
    expect(response.body).to.have.property('insuranceDue').and.to.be.a('number');
    expect(response.body).to.have.property('clientDue').and.to.be.a('number');
    expect(response.body).to.have.property('properties').and.to.be.an('Object');
};

/**
 * 
 * @param {Object} response - GET /charges/cancellation
 */
function assertGetChargesCancellation(response: any) {
    expect(response.status).to.satisfy((status: any) => {
        return status === 200 || status === 204;  
      });
};

/**
 * 
 * @param {Object} response - GET /fullsteam/sso
 */
function assertGetFullsteamSso(response: any) {
    expect(response.body).to.have.property('authenticationKey').and.to.be.a('string');
    expect(response.body).to.have.property('expirationDateUtc').and.to.be.a('string');
    expect(response.body).to.have.property('actionGuid').and.to.be.a('string');
    expect(response.body).to.have.property('isSuccessful').and.to.be.a('boolean');
    expect(response.body).to.have.property('responseCode').and.to.be.a('string');
    expect(response.body).to.have.property('responseDetails').and.to.be.an('array');
    expect(response.body).to.have.property('durationInMilliseconds').and.to.be.a('number');
};

/**
 * 
 * @param {Object} response - GET /fullsteam/sso for clinics without the Fullsteam module
 */
function assertErrorOnGetFullsteamSSo (response: any) {
    expect(response.status).equals(400);
    expect(response.body[0].type).equals("Warning");
    expect(response.body[0].description).equals("Can't find FullSteam in clinic setting.");
};

/**
 * 
 * @param {Object} response - GET /fullsteam/patient-payment-verify
 */
function assertGetFullsteamPatientPaymentVerify(response: any){
    expect(response.body).to.have.keys('entityId','clinicId','clinicLogo','clinicUid','clinicName','patientId','patientCode','patientName','patientZipCode','appointmentDate','authorId','calendarEventId','amount','servicesAmount','productsAmount','copayAmount','collectingCopayAmount','isCollectingCopay','unallocatedAmount','adjustment','saleType','isValid','message');
};

export {
    assertGetAccountsById,
    assertGetChargesCancellation,
    assertGetFullsteamSso,
    assertErrorOnGetFullsteamSSo,
    assertGetFullsteamPatientPaymentVerify
}