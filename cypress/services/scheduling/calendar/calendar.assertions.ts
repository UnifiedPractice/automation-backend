import {CONSTANTS} from "../../../helper";

function assertGetAllCalendarEvents (response: any) {
    expect(response.status).equal(200);
    expect(response.body).not.null;
    expect(response.body).to.be.a('array');
    response.body.forEach((item: any, index:number) => {
        expect(item.id).exist;
        expect(item.type).oneOf(CONSTANTS.eventTypes);
        expect(item.startTime).contain(CONSTANTS.startDate);
        expect(item.eventResources[index].id).exist;
        expect(item.eventResources[index].type).exist;
    })
}

function assertGetCalendarEvent (response: any) {
    expect(response.status).equal(200);
    expect(response.body).not.null;
    expect(response.body.createdBy).equal(`${CONSTANTS.objectId}`)
    
}

function assertGetAllCalendarAvailabilities (response: any) {
    expect(response.status).equal(200);
    expect(response.body).to.be.a('array');
    
}

function assertGetCalendarAvailabilitiesByEventType (response: any) {
    expect(response.status).equal(200);
    expect(response.body).to.be.a('array');
    
}

function assertgetAllCalendarSettings (response: any) {
    expect(response.status).equal(200);
    expect(response.body).not.null;
}

function assertGetAllCalendarViewSettings(response: any) {
    expect(response.status).equal(200);
    expect(response.body).not.null;
}

export {
    assertGetAllCalendarEvents,
    assertGetCalendarEvent,
    assertGetAllCalendarAvailabilities,
    assertGetCalendarAvailabilitiesByEventType,
    assertgetAllCalendarSettings,
    assertGetAllCalendarViewSettings
}