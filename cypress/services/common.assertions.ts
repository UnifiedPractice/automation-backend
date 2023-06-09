
/**
 * Assert response content type is JSON
 * @param {Object} response 
 */
function assertResponseJsonContentType (response: any) {
    response.its('headers').its('content-type').should('include', 'application/json');
};

/**
 * Assert GET was successfull
 * @param {Object} response 
 */
function assertIsSuccessfullResponse(response: any) {
    expect(response.status).equals(200);
    //expect(response.body).not.null; /*comment should be removed when we have valid data */
};

/**
 * Assert GET was successfull and its body is an array
 * @param {Object} response 
 */
function assertIsSuccessfullResponseArray(response: any) {
    expect(response.status).equals(200);
    //expect(response.body).not.null; /*comment should be removed when we have valid data */
    expect(response.body).to.be.a('array');
};

export {
    assertResponseJsonContentType,
    assertIsSuccessfullResponse,
    assertIsSuccessfullResponseArray
};