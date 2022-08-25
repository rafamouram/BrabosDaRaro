import { login } from "..//requests//entrar.request"

describe('Entrar', () => {
    it('Login Usuário válido', () => {
        login().should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.be.not.null
        })
    })
})