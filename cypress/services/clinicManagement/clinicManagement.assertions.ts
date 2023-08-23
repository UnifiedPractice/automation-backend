import { CONSTANTS } from "../../helper";

/**
 * 
 * @param {Object} response - GET /catalog/countries
 */
function assertGetCatalogCountries(response: any) {
    expect(response.body).to.be.an('array');
    response.body.forEach((item: any) => {
        expect(item).to.have.property('code').and.to.be.a('string');
        expect(item).to.have.property('name').and.to.be.a('string');
    });
};

/**
 * 
 * @param {Object} response - GET /catalog/states
 */
function assertGetCatalogStates(response: any) {
    expect(response.body).to.be.an('array');
    response.body.forEach((item: any) => {
        expect(item).to.have.property('code').and.to.be.a('string');
        expect(item).to.have.property('name').and.to.be.a('string');
    });
};

/**
 * 
 * @param {Object} response - GET /locations
 */
function assertGetLocations(response: any) {
    expect(response.body).to.be.an('array');
    response.body.forEach((item: any) => {
        expect(item).to.have.property('name').and.to.be.a('string');
        expect(item).to.have.property('timezone').and.to.be.a('string');
        expect(item).to.have.property('rooms').and.to.be.an('array');
        item.rooms.forEach((room: any) => {
            expect(room).to.have.property('name').and.to.be.a('string');
            expect(room).to.have.property('id').and.to.be.a('number');
            expect(room).to.have.property('isActive').and.to.be.a('boolean');
            expect(room).to.have.property('properties').and.to.be.a('Object');
        });
        expect(item).to.have.property('id').and.to.be.a('number');
        expect(item).to.have.property('isActive').and.to.be.a('boolean');
        expect(item).to.have.property('properties').and.to.be.a('Object');
    });
};

/**
 * 
 * @param {Object} response - GET /practitioners
 */
function assertGetPractitioners(response: any) {
    expect(response.body).to.be.an('array');
    response.body.forEach((item: any) => {
        expect(item).to.have.property('uniqueId').and.to.be.a('string');
        expect(item).to.have.property('userId').and.to.be.a('number');
        expect(item).to.have.property('firstname').and.to.be.a('string');
        expect(item).to.have.property('lastname').and.to.be.a('string');
        expect(item).to.have.property('role').and.to.be.a('string');
        expect(item).to.have.property('phoneNumbers').and.to.be.an('array');
        expect(item).to.have.property('emails').and.to.be.an('array');
        expect(item).to.have.property('address').and.to.be.a('Object');
        if(item.address.addressLine1 in item.address){
            expect(Object.keys(item.address)).to.deep.equal(['addressLine1', 'addressLine2', 'zipCode', 'city', 'stateName', 'stateCode', 'countryName', 'countryCode']);
        };
        expect(item).to.have.property('recieveEmail').and.to.be.a('boolean');
        expect(item).to.have.property('recieveSMS').and.to.be.a('boolean');
        expect(item).to.have.property('autoAcceptAppointments').and.to.be.a('boolean');
        expect(item).to.have.property('id').and.to.be.a('number');
        expect(item).to.have.property('isActive').and.to.be.a('boolean');
        expect(item).to.have.property('relatedResources').and.to.be.an('array');
        item.relatedResources.forEach((relatedResource: any) => {
            expect(relatedResource).to.have.property('id').and.to.be.a('number');
            expect(relatedResource).to.have.property('type').and.to.be.a('string');
        });
    });
};

/**
 * 
 * @param {Object} response - GET /services
 */
function assertGetServices(response: any) {
    response.body.forEach((item: any) => {
        expect(item).to.have.property('durationForNewPatient').and.to.be.a('number');
        expect(item).to.have.property('durationForExistingPatient').and.to.be.a('number');
        expect(item).to.have.property('durationInMinutesForNewPatient').and.to.be.a('number');
        expect(item).to.have.property('durationInMinutesForExistingPatient').and.to.be.a('number');
        if(item.description){
            expect(item).to.have.property('description').and.to.be.a('string');
        };
        expect(item).to.have.property('allowOnlineScheduling').and.to.be.a('boolean');
        expect(item).to.have.property('schemaSlotForNewPatient').and.to.be.an('array');
        //expect(Object.keys(item.schemaSlotForNewPatient)).equals(['bookType', 'duration', 'durationInMinutes'])
        item.schemaSlotForNewPatient.forEach((schemSlot: any, index: number) => {
            const correspondingItem = item.schemaSlotForForExistingPatient[index];
            expect(schemSlot).to.have.property('bookType').and.to.be.a('number');
            expect(schemSlot).to.have.property('duration').and.to.be.a('number');
            expect(schemSlot).to.have.property('durationInMinutes').and.to.be.a('number');
            expect(Object.keys(schemSlot)).to.deep.equal(Object.keys(correspondingItem));
        });
        expect(item).to.have.property('supportsTelehealth').and.to.be.a('boolean');
        expect(item).to.have.property('supportsCancellationPolicy').and.to.be.a('boolean');
        expect(item).to.have.property('cancellationFee').and.to.be.a('number');
        expect(item).to.have.property('name').and.to.be.a('string');
        expect(item).to.have.property('hasSchemaForNewPatient').and.to.be.a('boolean');
        expect(item).to.have.property('hasSchemaForExistingPatient').and.to.be.a('boolean');
        expect(item).to.have.property('id').and.to.be.a('number');
        expect(item).to.have.property('isActive').and.to.be.a('boolean');
        expect(item).to.have.property('relatedResources').and.to.be.an('array');
        item.relatedResources.forEach((relatedResource: any) => {
            expect(relatedResource).to.have.property('id').and.to.be.a('number');
            expect(relatedResource).to.have.property('type').and.to.be.a('string');
        });
    });
};

/**
 * 
 * @param {Object} response - GET /services
 */
function assertGetServicesById(response: any) {
    expect(response.body).to.have.property('durationForNewPatient').and.to.be.a('number');
    expect(response.body).to.have.property('durationForExistingPatient').and.to.be.a('number');
    expect(response.body).to.have.property('durationInMinutesForNewPatient').and.to.be.a('number');
    expect(response.body).to.have.property('durationInMinutesForExistingPatient').and.to.be.a('number');
    if(response.body.description){
        expect(response.body).to.have.property('description').and.to.be.a('string');
    };
    expect(response.body).to.have.property('allowOnlineScheduling').and.to.be.a('boolean');
    expect(response.body).to.have.property('schemaSlotForNewPatient').and.to.be.an('array');
    response.body.schemaSlotForNewPatient.forEach((schemaSlot: any, index: number) => {
        const correspondingItem = response.body.schemaSlotForForExistingPatient[index];
        expect(schemaSlot).to.have.property('bookType').and.to.be.a('number');
        expect(schemaSlot).to.have.property('duration').and.to.be.a('number');
        expect(schemaSlot).to.have.property('durationInMinutes').and.to.be.a('number');
        expect(Object.keys(schemaSlot)).to.deep.equal(Object.keys(correspondingItem));
    });
    expect(response.body).to.have.property('supportsTelehealth').and.to.be.a('boolean');
    expect(response.body).to.have.property('supportsCancellationPolicy').and.to.be.a('boolean');
    expect(response.body).to.have.property('cancellationFee').and.to.be.a('number');
    expect(response.body).to.have.property('name').and.to.be.a('string');
    expect(response.body).to.have.property('hasSchemaForNewPatient').and.to.be.a('boolean');
    expect(response.body).to.have.property('hasSchemaForExistingPatient').and.to.be.a('boolean');
    expect(response.body).to.have.property('id').and.to.be.a('number');
    expect(response.body).to.have.property('isActive').and.to.be.a('boolean');
    expect(response.body).to.have.property('relatedResources').and.to.be.an('array');
    response.body.relatedResources.forEach((relatedResource: any) => {
        expect(relatedResource).to.have.property('id').and.to.be.a('number');
        expect(relatedResource).to.have.property('type').and.to.be.a('string');
    });
    
};

/**
 * 
 * @param {Object} response - POST /notes
 */
function assertAddNotes(response: any) {
    expect(response.body).to.have.property('data').and.to.be.a('number').and.to.not.be.undefined;
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * 
 * @param {Object} response - GET /notes
 * @param {number} noteId - the note Id
 */
function assertGetNotes(response: any, noteId: number) {
    //verify that the last object from the response is the newly added note
    const lastObject = response.body[response.body.length - 1];
    expect(lastObject.id).equals(noteId);

    expect(response.body).to.be.an('array');
    response.body.forEach((item: any) => {
        expect(item).to.have.property('id').and.to.be.a('number');
        expect(item).to.have.property('patientId').and.to.be.a('number');
        expect(item).to.have.property('authorName').and.to.be.a('string');
        expect(item).to.have.property('authorId').and.to.be.a('number');
        expect(item).to.have.property('text').and.to.be.a('string');
        expect(item).to.have.property('lastUpdate').and.to.be.a('string');
        expect(item).to.have.property('createDate').and.to.be.a('string');
        expect(item).to.have.property('isDeleted').and.to.be.a('boolean');
        expect(item).to.have.property('printsOnSchedule').and.to.be.a('boolean');
    });
};

/**
 * 
 * @param {Object} response - PUT /notes/{id}
 * @param {number} noteId - the note Id
 */
function assertUpdateNotes(response: any, noteId: number) {
    expect(response.body).to.have.property('data').and.to.be.a('number').and.to.not.be.undefined;
    expect(response.body).to.have.property('messages').and.to.be.an('array');
    expect(response.body.data).equals(noteId);
};

/**
 * 
 * @param {Object} response - DELETE /notes/{id}
 * @param {number} noteId - the note Id
 */
function assertDeleteNotes(response: any, noteId: number) {
    expect(response.body).to.have.property('data').and.to.be.a('number').and.to.not.be.undefined;
    expect(response.body).to.have.property('messages').and.to.be.an('array');
    expect(response.body.data).equals(noteId);
};

/**
 * 
 * @param {Object} response - GET /locations/{id}
 * @param {number} locationId - the location Id
 */
function assertGetLocationById(response: any, locationId: number) {
    expect(response.body).to.have.property('name').and.to.be.a('string');
    expect(response.body).to.have.property('timezone').and.to.be.a('string');
    expect(response.body).to.have.property('email').and.to.be.a('string');
    //expect(response.body).to.have.property('latitude').and.to.be.a('number');
    //expect(response.body).to.have.property('longitude').and.to.be.a('number');
    expect(response.body).to.have.property('countryCode').and.to.be.a('string');
    expect(response.body).to.have.property('countryName').and.to.be.a('string');
    expect(response.body).to.have.property('stateCode').and.to.be.a('string');
    expect(response.body).to.have.property('stateName').and.to.be.a('string');
    expect(response.body).to.have.property('city').and.to.be.a('string');
    //expect(response.body).to.have.property('zipCode').and.to.be.a('string');
    expect(response.body).to.have.property('addressLine1').and.to.be.a('string');
    expect(response.body).to.have.property('addressLine2').and.to.be.a('string');
    expect(response.body).to.have.property('rooms').and.to.be.an('array');
    response.body.rooms.forEach((room: any) => {
        expect(room).to.have.property('name').and.to.be.a('string');
        expect(room).to.have.property('id').and.to.be.a('number');
        expect(room).to.have.property('isActive').and.to.be.a('boolean');
        expect(room).to.have.property('properties').and.to.be.a('Object');
    });
    expect(response.body).to.have.property('id').and.to.be.an('number');
    expect(response.body).to.have.property('isActive').and.to.be.an('boolean');
    expect(response.body).to.have.property('properties').and.to.be.an('Object');
    expect(response.body.id).equals(locationId);
};

/**
 * 
 * @param {Object} response - GET /onboardingforms/appointment/{calendarAppointmentId}
 */
function assertGetOnboardingFormsByCalendarAppointmentId(response: any) {
    expect(response.body).to.be.an('array');
    response.body.forEach((item: any) => {
        expect(item).to.have.property('clinicFormId').and.to.be.a('number');
        expect(item).to.have.property('name').and.to.be.a('string');
        expect(item).to.have.property('isSigned').and.to.be.a('boolean');
        expect(item).to.have.property('isAccepted').and.to.be.a('boolean');
        expect(item).to.have.property('formType').and.to.be.a('string');
    });
};

/**
 * 
 * @param {Object} response - GET /onboardingforms/patient/{id}
 */
function assertGetOnboardingFormsByPatientId(response: any) {
    expect(response.body).to.be.an('array');
    response.body.forEach((item: any) => {
        expect(item).to.have.property('signed').and.to.be.a('boolean');
        expect(item).to.have.property('accepted').and.to.be.a('boolean');
        expect(item).to.have.property('clinicFormId').and.to.be.a('number');
        expect(item).to.have.property('formType').and.to.be.a('string');
    });
};

/**
 * 
 * @param {Object} response - GET /onboardingforms/patient/{id}/status
 */
function assertGetOnboardingFormsStatusByPatientId(response: any) {
    expect(response.body).equals('NotCompleted')
};

/**
 * 
 * @param {Object} response - GET /organization
 */
function assertGetOrganization(response: any) {
    expect(response.body).to.have.property('uniqueId').and.to.be.a('string');
    expect(response.body).to.have.property('name').and.to.be.a('string');
    expect(response.body).to.have.property('type').and.to.be.a('string');
    expect(response.body).to.have.property('settings').and.to.be.an('Object');
    expect(response.body).to.have.property('modules').and.to.be.an('array');
    response.body.modules.forEach((item: any) => {
        expect(item).to.have.property('id').and.to.be.a('number');
        expect(item).to.have.property('name').and.to.be.a('string');
        expect(item).to.have.property('type');
        expect(typeof item.type).to.satisfy((type: any) => {
            return type === 'string' || type === 'number';  
          });
        expect(item).to.have.property('activationDate').and.to.be.a('string');
    })
    expect(response.body).to.have.property('uid').and.to.be.a('string');
    expect(response.body).to.have.property('id').and.to.be.a('number');
    expect(response.body).to.have.property('pricingPlanId').and.to.be.a('number');
    expect(response.body).to.have.property('properties').and.to.be.an('Object');
    expect(response.body.id).equals(CONSTANTS.tenantId);
};

/**
 * 
 * @param {Object} response - GET /organization/organizationinfo
 */
function assertGetOrganizationInfo(response: any) {
    expect(response.body).to.have.property('uniqueId').and.to.be.a('string');
    expect(response.body).to.have.property('type').and.to.be.a('string');
    expect(response.body).to.have.property('organizationName').and.to.be.a('string');
    expect(response.body).to.have.property('providerName').and.to.be.a('string');
    expect(response.body).to.have.property('paymentTypes').and.to.be.an('Object');
    if(Object.keys(response.body.paymentTypes).length!=0){
        expect(Object.keys(response.body.paymentTypes)).to.deep.equal(['useCash','useCheck','useVisa','useMasterCard','useAmex','useEFT','useInsurance']);
    };
    expect(response.body).to.have.property('organizationAddress').and.to.be.an('Object');
    if(Object.keys(response.body.organizationAddress).length!=0){
        expect(Object.keys(response.body.organizationAddress)).to.deep.equal(['countryCode','stateCode','city','addressLine1','addressLine2','countryName','stateName']);
    };
    expect(response.body).to.have.property('phoneNumber1').and.to.be.a('string');
    expect(response.body).to.have.property('emailAddress1').and.to.be.a('string');
    expect(response.body).to.have.property('webAddress1').and.to.be.a('string');
    expect(response.body).to.have.property('properties').and.to.be.an('Object');
};

/**
 * 
 * @param {Object} response - POST /organization/organizationinfo
 */
function assertAddOrganizationInfo(response: any) {
    expect(response.body).to.have.property('data').and.to.be.a('boolean');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * 
 * @param {Object} response - GET /anonymous/organization/{clinicUid}
 */
function assertGetAnonymousOrganizationByClinicUid(response: any){
    expect(response.body).to.have.property('usePatientPortal').and.to.be.a('boolean');
    expect(response.body).to.have.property('useStreamChat').and.to.be.a('boolean');
    expect(response.body).to.have.property('hasPatientPortalModule').and.to.be.a('boolean');
    expect(response.body).to.have.property('hasStreamChatModule').and.to.be.a('boolean');
    expect(response.body).to.have.property('pricingPlanId').and.to.be.a('number');
};

/**
 * 
 * @param {Object} response - GET /patient-portal/invite-count
 */
function assertGetPatientPortalInviteCount(response: any) {
    expect(response.body).to.have.property('inviteCount').and.to.be.a('number');
};

/**
 * 
 * @param {Object} response - PUT /patient-portal/domain-name/{name}
 */
function assertUpdatePatientPortalDomainName(response: any) {
    //TO DO
};

/**
 * 
 * @param {Object} response - GET /patients/{id}
 * @param {number} patientId - the patient Id
 */
function assertGetPatientsById(response: any, patientId: number) {
    expect(response.body).to.have.property('id').and.to.be.a('number');
    expect(response.body.id).equals(patientId);
    expect(response.body).to.have.property('patientCode').and.to.be.a('string');
    expect(response.body).to.have.property('firstName').and.to.be.a('string');
    expect(response.body).to.have.property('lastName').and.to.be.a('string');
    expect(response.body).to.have.property('gender').and.to.be.an('Object');
    if(Object.keys(response.body.gender).length=0){
        expect(Object.keys(response.body.gender)).to.deep.equal(['type']);
    };
    expect(response.body).to.have.property('dateOfBirth').and.to.be.a('string');
    expect(response.body).to.have.property('phoneNumbers').and.to.be.an('array');
    expect(response.body).to.have.property('emails').and.to.be.an('array');
    expect(response.body).to.have.property('recieveEmail').and.to.be.a('boolean');
    expect(response.body).to.have.property('recieveSMS').and.to.be.a('boolean');
    expect(response.body).to.have.property('address').and.to.be.an('Object');
    expect(response.body).to.have.property('isExisting').and.to.be.a('boolean');
    expect(response.body).to.have.property('redFlags').and.to.be.a('string');
    expect(response.body).to.have.property('hasPatientPortalAccount').and.to.be.a('boolean');
};

/**
 * 
 * @param {Object} response - PUT /patients/{id}
 */
function assertPatchPatientsById(response: any) {
    expect(response.body).to.have.property('data').and.to.be.a('number');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * 
 * @param {Object} response - GET /patients/code/{code}
 * @param patientCode - the patient code
 */
function assertGetPatientsByPatientCode(response: any, patientCode: string) {
    expect(response.body).to.have.property('id').and.to.be.a('number');
    expect(response.body).to.have.property('patientCode').and.to.be.a('string');
    expect(response.body.patientCode).equals(patientCode);
    expect(response.body).to.have.property('firstName').and.to.be.a('string');
    expect(response.body).to.have.property('lastName').and.to.be.a('string');
    expect(response.body).to.have.property('gender').and.to.be.an('Object');
    if(Object.keys(response.body.gender).length=0){
        expect(Object.keys(response.body.gender)).to.deep.equal(['type']);
    };
    expect(response.body).to.have.property('dateOfBirth').and.to.be.a('string');
    expect(response.body).to.have.property('phoneNumbers').and.to.be.an('array');
    expect(response.body).to.have.property('emails').and.to.be.an('array');
    expect(response.body).to.have.property('recieveEmail').and.to.be.a('boolean');
    expect(response.body).to.have.property('recieveSMS').and.to.be.a('boolean');
    expect(response.body).to.have.property('address').and.to.be.an('Object');
    expect(response.body).to.have.property('isExisting').and.to.be.a('boolean');
    expect(response.body).to.have.property('redFlags').and.to.be.a('string');
    expect(response.body).to.have.property('hasPatientPortalAccount').and.to.be.a('boolean');
};

/**
 * 
 * @param {Object} response - GET /patients
 */
function assertGetPatients(response: any) {
    expect(response.body).to.have.property('currentPage').and.to.be.a('number');
    expect(response.body).to.have.property('pageSize').and.to.be.a('number');
    expect(response.body).to.have.property('totalCount').and.to.be.a('number');
    expect(response.body).to.have.property('items').and.to.be.a('array');
    response.body.items.forEach((item: any) =>{
        expect(item).to.have.property('id').and.to.be.a('number');
        expect(item).to.have.property('patientCode').and.to.be.a('string');
        expect(item).to.have.property('firstName').and.to.be.a('string');
        expect(item).to.have.property('lastName').and.to.be.a('string');
    });
};

/**
 * 
 * @param {Object} response - POST /patients
 */
function assertAddPatients(response: any) {
    expect(response.body).to.have.property('data').and.to.be.a('number').and.to.not.be.undefined;
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * 
 * @param {Object} response - GET /patients/filter
 */
function assertGetPatientsFilter(response: any) {
    expect(response.body).to.be.an('array');
    response.body.forEach((item: any) => {
        expect(item).to.have.property('id').and.to.be.a('number');
        expect(item).to.have.property('patientCode').and.to.be.a('string');
        expect(item).to.have.property('firstName').and.to.be.a('string');
        expect(item).to.have.property('middleName').and.to.be.a('string');
        expect(item).to.have.property('lastName').and.to.be.a('string');
        expect(item).to.have.property('gender').and.to.be.an('Object');
        if(Object.keys(item.gender).length=0){
            expect(Object.keys(item.gender)).to.deep.equal(['type', 'otherGender']);
        };
        expect(item).to.have.property('dateOfBirth').and.to.be.a('string');
        expect(item).to.have.property('phoneNumbers').and.to.be.an('array');
        item.phoneNumbers.forEach((phoneNumber: any) =>{
            expect(phoneNumber).to.have.property('number').and.to.be.a('string');
            expect(phoneNumber).to.have.property('type').and.to.be.a('string');
        });
        expect(item).to.have.property('emails').and.to.be.an('array');
        item.emails.forEach((email: any) =>{
            expect(email).to.be.a('string');
        });
        expect(item).to.have.property('recieveEmail').and.to.be.a('boolean');
        expect(item).to.have.property('recieveSMS').and.to.be.a('boolean');
        expect(item).to.have.property('address').and.to.be.an('Object');
        if(Object.keys(item.address).length!=0){
            expect(Object.keys(item.address)).to.deep.equal(['addressLine1', 'addressLine2', 'zipCode', 'city', 'stateName', 'countryName', 'countryCode']);
        };
        expect(item).to.have.property('isExisting').and.to.be.a('boolean');
        expect(item).to.have.property('redFlags').and.to.be.a('string');
        expect(item).to.have.property('hasPatientPortalAccount').and.to.be.a('boolean');
    });
};

/**
 * 
 * @param {Object} response - GET /patients/{id}/insurance
 */
function assertGetPatientsInsuranceById(response: any) {
    expect(response.body).to.be.an('array');
    response.body.forEach((item: any) => {
        expect(item).to.have.property('insuranceType').and.to.be.a('string');
    });
};

/**
 * 
 * @param {Object} response - GET patients/{id}/primary-practitioner 
 */
function assertPatchPatientsPrimaryPractitioner(response: any) {
    expect(response.body).to.have.property('data').and.to.be.a('number').and.to.not.be.undefined;
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * 
 * @param {Object} response - PUT /patients/{id}/red-flags
 */
function assertUpdatePatientsRedFlags(response: any) {
    expect(response.body).to.have.property('data').and.to.be.a('number').and.to.not.be.undefined;
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * 
 * @param {Object} response - GET /persons
 */
function assertGetPersons(response: any) {
    expect(response.body).to.be.an('array');
    expect(response.body[0]).to.have.property('uniqueId').and.to.be.a('string');
    expect(response.body[0]).to.have.property('userId').and.to.be.a('number');
    expect(response.body[0]).to.have.property('firstname').and.to.be.a('string');
    expect(response.body[0]).to.have.property('middlename').and.to.be.a('string');
    expect(response.body[0]).to.have.property('lastname').and.to.be.a('string');
    expect(response.body[0]).to.have.property('role').and.to.be.a('string');
    expect(response.body[0]).to.have.property('recieveEmail').and.to.be.a('boolean');
    expect(response.body[0]).to.have.property('recieveSMS').and.to.be.a('boolean');
    expect(response.body[0]).to.have.property('autoAcceptAppointments').and.to.be.a('boolean');
    expect(response.body[0]).to.have.property('id').and.to.be.a('number');
    expect(response.body[0]).to.have.property('isActive').and.to.be.a('boolean');
    expect(response.body[0]).to.have.property('relatedResources').and.to.be.an('array');
    expect(response.body[0]).to.have.property('properties').and.to.be.an('Object');
};

/**
 * 
 * @param {Object} response - GET /person/{id}
 */
function assertGetPersonById(response: any) {
    expect(response.body).to.have.property('uniqueId').and.to.be.a('string');
    expect(response.body).to.have.property('userId').and.to.be.a('number');
    expect(response.body).to.have.property('firstname').and.to.be.a('string');
    expect(response.body).to.have.property('middlename').and.to.be.a('string');
    expect(response.body).to.have.property('lastname').and.to.be.a('string');
    expect(response.body).to.have.property('role').and.to.be.a('string');
    expect(response.body).to.have.property('phoneNumbers').and.to.be.an('array');
    expect(response.body).to.have.property('emails').and.to.be.an('array');
    expect(response.body).to.have.property('address').and.to.be.an('Object');
    if(Object.keys(response.body.address).length!=0){
        expect(Object.keys(response.body.address)).to.deep.equal(['addressLine1', 'addressLine2', 'zipCode', 'city', 'stateCode', 'countryCode']);
    };
    expect(response.body).to.have.property('recieveEmail').and.to.be.a('boolean');
    expect(response.body).to.have.property('recieveSMS').and.to.be.a('boolean');
    expect(response.body).to.have.property('autoAcceptAppointments').and.to.be.a('boolean');
    expect(response.body).to.have.property('id').and.to.be.a('number');
    expect(response.body).to.have.property('isActive').and.to.be.a('boolean');
    expect(response.body).to.have.property('properties').and.to.be.an('Object');
};

/**
 * 
 * @param {Object} response - GET /practitioners/{id}
 */
function assertGetPractitionersById(response: any) {
    expect(response.body).to.have.property('uniqueId').and.to.be.a('string');
    expect(response.body).to.have.property('userId').and.to.be.a('number');
    expect(response.body).to.have.property('firstname').and.to.be.a('string');
    expect(response.body).to.have.property('lastname').and.to.be.a('string');
    expect(response.body).to.have.property('role').and.to.be.a('string');
    expect(response.body).to.have.property('phoneNumbers').and.to.be.an('array');
    response.body.phoneNumbers.forEach((phoneNumber: any) =>{
        expect(phoneNumber).to.have.property('number').and.to.be.a('string');
        expect(phoneNumber).to.have.property('type').and.to.be.a('string');
    });
    expect(response.body).to.have.property('emails').and.to.be.an('array');
    response.body.emails.forEach((email: any) =>{
        expect(email).to.be.a('string');
    });
    expect(response.body).to.have.property('address').and.to.be.an('Object');
    if(Object.keys(response.body.address).length!=0){
        expect(Object.keys(response.body.address)).to.deep.equal(['countryCode']);
    };
    expect(response.body).to.have.property('recieveEmail').and.to.be.a('boolean');
    expect(response.body).to.have.property('recieveSMS').and.to.be.a('boolean');
    expect(response.body).to.have.property('preferredLocation').and.to.be.a('number');
    expect(response.body).to.have.property('autoAcceptAppointments').and.to.be.a('boolean');
    expect(response.body).to.have.property('id').and.to.be.a('number');
    expect(response.body).to.have.property('isActive').and.to.be.a('boolean');
    expect(response.body).to.have.property('relatedResources').and.to.be.an('array');
    response.body.relatedResources.forEach((relatedResource: any) =>{
        expect(relatedResource).to.have.property('id').and.to.be.a('number');
        expect(relatedResource).to.have.property('type').and.to.be.a('string');
    });
    expect(response.body).to.have.property('properties').and.to.be.an('Object');
};

/**
 * 
 * @param {Object} response - GET /practitioners/{id}/service
 */
function assertGetPractitionersServiceById(response: any) {
    expect(response.body).to.have.property('name').and.to.be.a('string');
    expect(response.body).to.have.property('hasSchemaForNewPatient').and.to.be.a('boolean');
    expect(response.body).to.have.property('hasSchemaForExistingPatient').and.to.be.a('boolean');
    expect(response.body).to.have.property('id').and.to.be.a('number');
    expect(response.body).to.have.property('isActive').and.to.be.a('boolean');
    expect(response.body).to.have.property('relatedResources').and.to.be.an('array');
    response.body.relatedResources.forEach((relatedResource: any) =>{
        expect(relatedResource).to.have.property('id').and.to.be.a('number');
        expect(relatedResource).to.have.property('type').and.to.be.a('string');
    });
    expect(response.body).to.have.property('properties').and.to.be.an('Object');
};

/**
 * 
 * @param {Object} response - POST /stream/channel
 */
function assertAddStreamChannel(response: any) {
    expect(response.body).to.have.property('data').and.to.be.an('Object');
    if(Object.keys(response.body.data).length!=0){
        expect(Object.keys(response.body.data)).to.deep.equal(['pricingPlanId', 'userToken', 'streamUserId', 'channels']);
    };
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * 
 * @param {Object} response - PATCH /stream/channel/{channelId}/users
 */
function assertPatchStreamChannelUsers(response: any) {
    expect(response.body).to.have.property('data').and.to.be.a('boolean');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * 
 * @param {Object} response - GET /stream/channels
 */
function assertGetStreamChannels(response:any) {
    expect(response.body).to.have.property('pricingPlanId').and.to.be.a('number');
    expect(response.body).to.have.property('userToken').and.to.be.a('string');
    expect(response.body).to.have.property('streamUserId').and.to.be.a('string');
    expect(response.body).to.have.property('channels').and.to.be.an('array');
}

/**
 * 
 * @param {Object} response - GET /stream/avatar
 */
function assertGetStreamAvatar(response: any) {
    //TODO
};

/**
 * 
 * @param {Object} response - GET /anonymous/stream/channel
 */
function assertAddAnonymousStreamChannel(response: any) {
    expect(response.body).to.have.property('data').and.to.be.a('string');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * 
 * @param {Object} response - POST/PUT/DELETE /training-videos
 */
function assertAddUpdateOrDeleteTrainingVideos(response: any) {
    expect(response.body).to.have.property('data').and.to.be.a('number').and.to.not.be.undefined;
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

/**
 * 
 * @param {Object} response - GET /training-videos
 */
function assertGetTrainingVideos(response: any) {
    expect(response.body).to.have.property('currentPage').and.to.be.a('number');
    expect(response.body).to.have.property('pageSize').and.to.be.a('number');
    expect(response.body).to.have.property('totalCount').and.to.be.a('number');
    expect(response.body).to.have.property('items').and.to.be.an('array');
    response.body.items.forEach((item: any) => {
        expect(item).to.have.property('id').and.to.be.a('number');
        expect(item).to.have.property('name').and.to.be.a('string');
        expect(item).to.have.property('description').and.to.be.a('string');
        expect(item).to.have.property('url').and.to.be.a('string');
        expect(item).to.have.property('createdOn').and.to.be.a('string');
    });
};

/**
 * 
 * @param {Object} response - POST /unifiedpay/ticket
 */
function assertAddUnifiedpayTicket(response: any) {
    expect(response.body).to.have.property('data').and.to.be.a('boolean');
    expect(response.body).to.have.property('messages').and.to.be.an('array');
};

export {
    assertGetCatalogCountries,
    assertGetCatalogStates,
    assertGetLocations,
    assertGetPractitioners,
    assertGetServices,
    assertGetServicesById,
    assertAddNotes,
    assertGetNotes,
    assertUpdateNotes,
    assertDeleteNotes,
    assertGetLocationById,
    assertGetOnboardingFormsByCalendarAppointmentId,
    assertGetOnboardingFormsByPatientId,
    assertGetOnboardingFormsStatusByPatientId,
    assertGetOrganization,
    assertGetOrganizationInfo,
    assertAddOrganizationInfo,
    assertGetAnonymousOrganizationByClinicUid,
    assertGetPatientPortalInviteCount,
    assertUpdatePatientPortalDomainName,
    assertGetPatientsById,
    assertPatchPatientsById,
    assertGetPatientsByPatientCode,
    assertGetPatients,
    assertAddPatients,
    assertGetPatientsFilter,
    assertGetPatientsInsuranceById,
    assertPatchPatientsPrimaryPractitioner,
    assertUpdatePatientsRedFlags,
    assertGetPersons,
    assertGetPersonById,
    assertGetPractitionersById,
    assertGetPractitionersServiceById,
    assertAddStreamChannel,
    assertPatchStreamChannelUsers,
    assertGetStreamChannels,
    assertGetStreamAvatar,
    assertAddAnonymousStreamChannel,
    assertAddUpdateOrDeleteTrainingVideos,
    assertGetTrainingVideos,
    assertAddUnifiedpayTicket
}