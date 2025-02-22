// Deixando o menu sidebar dinâmico
document.getElementById('open_btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

// Exibindo pop up na tela de cadastro de produtos
function abrirPopUp() {
    document.getElementById("popUp").style.display = "block";
}

function fecharPopUp() {
    document.getElementById("popUp").style.display = "none";
}

// Fechar ao clicar fora do modal
window.onclick = function(event) {
    let modal = document.getElementById("popUp");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Destacando linhas selecionadas na tabela pedidos
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".checkbox");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {    
            let linha = this.closest("tr"); // Encontra a linha do checkbox

            // Verifica se a linha tem dados preenchidos antes de permitir seleção
            if(linhaHasData(linha)) {
                if(this.checked) {
                    linha.classList.add("selecionado"); // Adiciona o destaque
                } else {
                    linha.classList.remove("selecionado"); // Remove o destaque
                }
            } else {
                this.checked = false; // impede a seleção se a linha estiver vazia
            }
        });
    });

    // Selecionar Todos (Apenas Linhas Preenchidas)
    const selecionarTodos = document.getElementById("selecionar-todos");
    selecionarTodos.addEventListener("change", function () {
        const isChecked = this.checked; // Verifica se o "Selecionar Todos" foi marcado

        // Seleciona todos os checkboxes das linhas preenchidas
        checkboxes.forEach(checkbox => {
            let linha = checkbox.closest("tr");

            if (linhaHasData(linha)) {
                checkbox.checked = isChecked; // Marca/desmarca o checkbox dependendo de "Selecionar Todos"
                if (isChecked) {
                    linha.classList.add("selecionado");
                } else {
                    linha.classList.remove("selecionado");
                }
            }
        });
    });

    // Função para verificar se uma linha tem dados preenchidos
    function linhaHasData(linha) {
        const celulas = linha.querySelectorAll("td:not(.checkbox-check)"); // Ignora o checkbox
        return Array.from(celulas).some(td => td.textContent.trim() !== ""); // Retorna true se houver conteúdo
    }
});