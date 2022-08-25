import { POSTforgot } from "../requests/POSTForgot.request";

describe('Esquecer sua senha', () => {
    it('Enviando minha senha', () => {
        POSTforgot.forgotEmailValido().should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.be.undefined
        })
    })

    it('Enviando minha senha', () => {
        POSTforgot.forgotEmailInvalido().should((response) => {
            expect(response.status).to.eq(404)
            expect(response.body.message).to.eq("Usuário não foi encontrado ou não existe")
        })
    })

})