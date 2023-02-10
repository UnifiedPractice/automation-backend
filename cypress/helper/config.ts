const stage = Cypress.env('stage');
const CURRENT_STAGE = getStagePrefix(stage);

export default {
    stage: stage,
    API: `https://ehr.api.core${CURRENT_STAGE}unifiedpractice.com/api`,
    BASEPATHS: {
        schedulingBasePath: Cypress.env('schedulingBasePath'),
        billingBasePath: Cypress.env('billingBasePath'),
        chartingBasePath: Cypress.env('chartingBasePath'),
        notificationsBasePath: Cypress.env('notificationsBasePath'),
        securityBasePath: Cypress.env('securityBasePath'),
        clinicBasePath: Cypress.env('clinicBasePath')
    }

}

function getStagePrefix (stage: string){
    switch(stage.toLowerCase()) {
        case 'development': return '.development.';
        case 'staging': return '.staging.';
        case 'production': return '.';
        default: return '.staging.';
    }
}