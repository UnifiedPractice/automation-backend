/**
 * 
 * @param {Object} response 
 * @returns ruleIds[0] - first ruleId from the response
 */
function getRuleId(response: any) {
    let ruleIds: number[] = [];
    response.body.forEach((item: any) => {
        ruleIds.push(item.id ? item.id : null);
    });
    expect(ruleIds).to.not.be.undefined.and.to.not.be.empty;
    return ruleIds[0];
};

/**
 * 
 * @param {Object} response 
 * @returns groupId
 */
function getData (response: any) {
    let groupId: number;
    groupId = response.body.data;
    expect(groupId).to.not.be.undefined;
    return groupId;
};

export {
    getRuleId,
    getData
}