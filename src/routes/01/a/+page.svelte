<script>
  // Declara uma variável reativa chamada 'contador' e a inicializa com 0.
  // Em Svelte, 'let' no script de um componente torna a variável reativa,
  // ou seja, quando seu valor muda, a interface do usuário que a usa é atualizada automaticamente.
  let contador = 0;

  // Define uma função chamada 'contar'.
  function contar() {
    // Incrementa o valor da variável 'contador' em 1.
    contador++;
    // Exibe uma mensagem no console do navegador, indicando que a função foi executada no cliente.
    console.log('Executando no cliente');
  }
</script>

<button onclick={contar}>
  Cliquei {contador} vezes
</button>