let emailDoUsuarioCadastrado = 'teste@mail.com';
        let senhaDoUsuarioCadastro = "1234";

        let emailDoLogin = prompt("Digite seu email");
        let senhaDoLogin = prompt("Digite sua senha");
        let texto = ''
        if(emailDoLogin === emailDoUsuarioCadastrado && senhaDoLogin === senhaDoUsuarioCadastro) {
            texto = "Usuario logado!"
        } else {
            let emailDoLogin = prompt("Digite seu email");
            let senhaDoLogin = prompt("Digite sua senha");
            if(emailDoLogin === emailDoUsuarioCadastrado && senhaDoLogin === senhaDoUsuarioCadastro) {
                texto = "Usuario logado!"
            } else {
                texto = "Usuario Bloqueado"
            }
        }
        console.log(texto)