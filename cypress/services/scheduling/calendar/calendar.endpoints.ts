import {BASEPATHS} from '../../../helper'
import {API} from '../../../helper'
import {CONSTANTS} from "../../../helper";

let requestQueryString = {'StartDate': CONSTANTS.startDate,'EndDate': CONSTANTS.endDate}

let requestHeaders = {'TenantId': CONSTANTS.tenantId,'ObjectId': CONSTANTS.objectId}

function getAllCalendarEvents(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events`,
        qs: requestQueryString,
        headers: requestHeaders
    })

}

function getCalendarEvent(eventId: any): Cypress.ObjectLike {

    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/events/${eventId}`,
        headers: requestHeaders
    })
}

function getAllCalendarAvailabilities(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/availabilities`,
        qs: requestQueryString,
        headers: requestHeaders
    })
}

function getCalendarAvailabilitiesByResourceType(resourceType: any): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/availabilities/${resourceType}`,
        qs: requestQueryString,
        headers: requestHeaders
    })
}

function getAllCalendarSettings(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/settings`,
        headers: requestHeaders
    })
}

function getAllCalendarViewSettings(): Cypress.ObjectLike {
    return cy.request({
        method: 'GET',
        url: `${API}${BASEPATHS.schedulingBasePath}/calendar/view-settings`,
        headers: requestHeaders
    })
}

export {
    getAllCalendarEvents,
    getCalendarEvent,
    getAllCalendarAvailabilities,
    getCalendarAvailabilitiesByResourceType,
    getAllCalendarSettings,
    getAllCalendarViewSettings
}