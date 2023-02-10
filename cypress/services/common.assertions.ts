function assertResponseJsonContentType (response: any){
    response.its('headers').its('content-type').should('include', 'application/json');
}

export {
    assertResponseJsonContentType
}