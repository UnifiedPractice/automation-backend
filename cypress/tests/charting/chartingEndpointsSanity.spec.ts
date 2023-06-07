import * as commonAssertions from './../../services/common.assertions'
import * as chartingEndpoints from './../../services/charting/charting.endpoints'
import * as chartingAssertions from './../../services/charting/charting.assertions'
import { CONSTANTS } from '../../helper'

describe('Charting Endpoints - Sanity Tests', () => {
    let calendarAppointmentId: number

    context('charting GET /charts', () => {
        it('should get all the charts for an appointment', () => {
            const response = chartingEndpoints.getCharts();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                chartingAssertions.assertGetCharts(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('charting GET /chars/{calendarAppointmentId}', () => {
        it('should get the charts by Calendar Appointment Id', () => {
            calendarAppointmentId = CONSTANTS.calendarAppointmentId;
            const response = chartingEndpoints.getChartsByCalendarAppointmentId(calendarAppointmentId);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponseArray(response);
                chartingAssertions.assertGetChartsByCallendarAppointmentId(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('charting GET /charts/unsigned-charts', () => {
        it('should get all the unsigned charts', () =>{
            const response = chartingEndpoints.getUnsignedCharts();
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                chartingAssertions.assertGetUnsignedCharts(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });

    context('charting GET /templates/{id}', () => {
        it('should get the templates by Id', () => {
            const response = chartingEndpoints.getTemplatesById(0);
            response.then((response: any) => {
                commonAssertions.assertIsSuccessfullResponse(response);
                chartingAssertions.assertGetTemplatesById(response);
            });
            commonAssertions.assertResponseJsonContentType(response);
        });
    });
});