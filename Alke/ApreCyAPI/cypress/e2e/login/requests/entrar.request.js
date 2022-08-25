const userValido = require('..//payloads//userValido.payload.json')

function login() {
    return cy.request({
        method: "POST",
        url: "/auth/login",
        failOnStatusCode: false,
        body: userValido
    })
}

export { login }