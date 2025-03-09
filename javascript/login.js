// Selecionando o formulário e os campos de entrada
const loginForm = document.getElementById('loginForm');
const usuarioInput = loginForm.querySelector('input[name="usuario"]');
const senhaInput = loginForm.querySelector('input[name="senha"]');

// Adicionando o evento de submit no formulário
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o envio do formulário tradicional

    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    // Verificando se os campos estão vazios
    if (!usuario || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    try {
        // Enviando a requisição para o backend via fetch
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ LOGIN: usuario, SENHA: senha }),
        });

        const data = await response.json();

        if (response.ok) {
            // Se o login for bem-sucedido
            //alert(data.mensagem);

            // Redirecionando para a tela 'inicio.html'
            window.location.href = 'inicio.html';
        } else {
            // Se o login falhar
            alert(data.mensagem);
        }
    } catch (error) {
        // Erro de rede ou no servidor
        console.error('Erro na requisição:', error);
        alert('Erro ao tentar fazer login. Tente novamente mais tarde.');
    }
});


