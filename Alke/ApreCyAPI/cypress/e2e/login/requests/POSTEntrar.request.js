const userValido = require('../payloads/userValido.payload.json')
const userEmailErrado = require('../payloads/userEmailErrado.payload.json')
const userSenhaErrada = require('../payloads/userSenhaErrada.payload.json')
const userVazio = require('../payloads/userVazio.payload.json')

class POSTEntrar {
    loginValido() {
        return cy.request({
            method: "POST",
            url: "/auth/login",
            failOnStatusCode: false,
            body: userValido
        })
    }

    loginEmailErrado() {
        return cy.request({
            method: "POST",
            url: "/auth/login",
            failOnStatusCode: false,
            body: userEmailErrado
        })
    }

    loginSenhaErrada() {
        return cy.request({
            method: "POST",
            url: "/auth/login",
            failOnStatusCode: false,
            body: userSenhaErrada
        })
    }

    loginVazio() {
        return cy.request({
            method: "POST",
            url: "/auth/login",
            failOnStatusCode: false,
            body: userVazio
        })
    }
}
export var POSTentrar = new POSTEntrar()