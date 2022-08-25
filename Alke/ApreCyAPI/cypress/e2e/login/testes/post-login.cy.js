import { POSTentrar } from "../requests/POSTEntrar.request"

describe('Entrar', () => {
    it('Login Usuário válido', () => {
        POSTentrar.loginValido().should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.be.not.null
        })
    })

    it('Login Usuário email errado', () => {
        POSTentrar.loginEmailErrado().should((response) => {
            expect(response.status).to.eq(403)
            expect(response.body.message).to.eq("usuário não encontrado ou não existe")
        })
    })

    it('Login Usuário senha errada', () => {
        POSTentrar.loginSenhaErrada().should((response) => {
            expect(response.status).to.eq(403)
            expect(response.body.message).to.eq("Usuário não foi encontrado ou não existe")
        })
    })

    it('Login Usuário vazio', () => {
        POSTentrar.loginSenhaErrada().should((response) => {
            expect(response.status).to.eq(401)
            expect(response.body.message).to.eq("Unauthorized")
        })
    })

})