function setActive(event) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            event.target.classList.add('active');
        }

        // Formatação de telefone
        document.getElementById('telefone').addEventListener('keypress', function(e) {
            // Bloqueia qualquer coisa que não seja número
            if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
            }
        });

        document.getElementById('telefone').addEventListener('input', function(e) {
            let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
            
            if (valor.length > 0) {
                // Primeiros 2 dígitos (DDD) entre parênteses, depois o resto
                if (valor.length <= 2) {
                    e.target.value = valor;
                } else if (valor.length <= 7) {
                    e.target.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
                } else if (valor.length <= 11) {
                    e.target.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
                } else {
                    e.target.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7, 11)}`;
                }
            }
        });