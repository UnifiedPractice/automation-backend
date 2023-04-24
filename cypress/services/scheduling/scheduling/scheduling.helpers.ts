/**
 * 
 * @param {Object} response 
 * @returns first ruleId from the response
 */
function getRuleId(response: any) {
    let ruleIds: Number[] = [];
    response.body.forEach((item: any) => {
        ruleIds.push(item.id ? item.id : null);
    });
    expect(ruleIds).to.not.be.undefined.and.to.not.be.empty;
    return ruleIds[0];
};

export {
    getRuleId
}