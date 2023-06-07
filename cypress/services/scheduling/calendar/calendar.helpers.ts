import * as settingsFixtures from './../../../tests/scheduling/calendar/fixtures/settings.fixtures'

/**
 * 
 * @param {Object} response 
 * @returns first eventId from the response
 */
function getEventId(response: any) {
    let eventIds: number[] = [];
    response.body.forEach((item: any) => {
        eventIds.push(item.id ? item.id : null);
    });
    expect(eventIds).to.not.be.undefined.and.to.not.be.empty;
    return eventIds[0];
};

/**
 * 
 * @param {Object} response 
 * @returns resourceColorSettings
 */
function getResourceSettings(response: any) {
    let resourceSettings: any;
    resourceSettings = response.body.clinicSetting.resourceColorSettings;
    resourceSettings.forEach((setting: any) => {
        setting.eventResourceType = setting.resourceType;
        delete setting.resourceType;
    });
    expect(resourceSettings).to.not.be.undefined;
    return resourceSettings;
}

/**
 * 
 * @param {Object} response 
 * @returns otherColors
 */
function getOtherColors(response: any) {
    let otherColors: settingsFixtures.otherColorsInterface;
    otherColors = response.body.clinicSetting.otherColors;
    expect(otherColors).to.not.be.undefined;
    return otherColors;
}

/**
 * 
 * @param {Object} response 
 * @returns calendarViewSettingsPayload
 */
function getCalendarViewSettingsPayload(response: any) {
    let calendarViewSettingsPayload: any;
    calendarViewSettingsPayload = response.body
    expect(calendarViewSettingsPayload).to.not.be.undefined;
    return calendarViewSettingsPayload
}

/**
 * 
 * @param {Object} response 
 * @returns first appointmentId from the response
 */
function getAppointmentId(response: any) {
    let appointmentIds: number[] = [];
    response.body.forEach ((item: any) => {
        appointmentIds.push(item.type === 'Appointment' ? item.id : null);
    });
    expect(appointmentIds).to.not.be.undefined.and.to.not.be.empty;
    return appointmentIds[0];
};

/**
 * 
 * @param {Object} response 
 * @returns first patientId from the response
 */
function getPatientId(response: any) {
    let patientIds: number[] = [];
    response.body.forEach ((item: any) => {
        patientIds.push(item.properties.Appointment.patientId ? item.properties.Appointment.patientId : null);
    });
    expect(patientIds).to.not.be.undefined.and.to.not.be.empty;
    return patientIds[0];
};

/**
 * 
 * @param {Object} response 
 * @returns dataId
 */
function getDataId (response: any) {
    let dataId: number;
    dataId = response.body.data;
    expect(dataId).to.not.be.undefined;
    return dataId;
};

export {
    getEventId,
    getResourceSettings,
    getOtherColors,
    getCalendarViewSettingsPayload,
    getAppointmentId,
    getPatientId,
    getDataId
}