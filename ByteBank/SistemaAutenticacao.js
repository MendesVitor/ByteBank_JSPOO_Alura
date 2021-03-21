export class SistemaAutenticaocao {

    static login(usuario, senha) {
        if (SistemaAutenticaocao.autenticavel(usuario)) {
            return usuario.autenticar(senha);
        }
        return false;
    }

    static autenticavel(usuario) {
        return "autenticar" in usuario && usuario.autenticar instanceof Function;
    }

}