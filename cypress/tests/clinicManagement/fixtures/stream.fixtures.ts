const validStreamChannelPayload = {
    patientPersonIds: [1],
    clinidStaffsPersonIds: [1]
};

const validPatchStreamChannelUsersPayload = {
    patientPersonIds: [2],
    clinidStaffsPersonIds: [2]
};

const validPatchStreamUserPayload = {
    isActive: true
}

const validAnonymousStreamChannelPayload = {
    clinicUid: "EBB1414A-C470-4CFD-B655-76FE5BF7C95A",
    guestStreamChatUserId: "2",
    guestName: "Test"
};

export {
    validStreamChannelPayload,
    validPatchStreamChannelUsersPayload,
    validPatchStreamUserPayload,
    validAnonymousStreamChannelPayload
}