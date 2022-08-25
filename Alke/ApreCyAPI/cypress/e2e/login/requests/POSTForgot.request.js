const emailValido = require("..//payloads//POSTForgot//emailValido.payload.json")
const emailInvalido = require("..//payloads//POSTForgot//emailInvalido.payload.json")

class POSTForgot {
    forgotEmailValido() {
        return cy.request({
            method: "POST",
            url: "auth/forgot-password",
            failOnStatusCode: false,
            body: emailValido
        })
    }

    forgotEmailInvalido() {
        return cy.request({
            method: "POST",
            url: "auth/forgot-password",
            failOnStatusCode: false,
            body: emailInvalido
        })
    }
}

export var POSTforgot = new POSTForgot()