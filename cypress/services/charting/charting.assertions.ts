import {CONSTANTS} from "./../../helper";

/**
 * 
 * @param {Object} response - GET /charts
 */
function assertGetCharts(response: any) {
    // Assert the existence and defined values of keys in the response
    expect(response.body).to.have.property('id').and.to.be.a('number');
    expect(response.body).to.have.property('status').and.to.be.a('string');
    expect(response.body).to.have.property('checkedOut').and.to.be.a('boolean');
    expect(response.body).to.have.property('patient').and.to.be.a('number');
};

/**
 * 
 * @param {Object} response - GET /charts/{calendarAppointmentId}
 */
function assertGetChartsByCallendarAppointmentId(response: any) {
    // Assert the existence and defined values of keys in the response
    expect(response.body[0]).to.have.property('id').and.to.be.a('number');
    expect(response.body[0]).to.have.property('status').and.to.be.a('string');
    expect(response.body[0]).to.have.property('checkedOut').and.to.be.a('boolean');
    expect(response.body[0]).to.have.property('patient').and.to.be.a('number');
};

/**
 * 
 * @param {Object} response - GET /charts/unsigned-charts
 */
function assertGetUnsignedCharts(response: any) {
    expect(response.body).to.have.property('unsignedIntakes').and.to.be.an('array');
    expect(response.body).to.have.property('totalCount').and.to.be.a('number');
};

/**
 * 
 * @param {Object} response - GET /templates/{id}
 */
function assertGetTemplatesById(response: any) {
    expect(response.body).to.have.property('id').and.to.be.a('string');
    expect(response.body).to.have.property('name').and.to.be.a('string');
    expect(response.body.name).equals('Acupuncture');
    expect(response.body).to.have.property('sections').and.to.be.an('array');
};

export {
    assertGetCharts,
    assertGetChartsByCallendarAppointmentId,
    assertGetUnsignedCharts,
    assertGetTemplatesById
}