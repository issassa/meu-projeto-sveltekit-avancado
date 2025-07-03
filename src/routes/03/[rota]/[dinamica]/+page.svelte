<script>
  // Obtém os dados (parametro1 e parametro2) passados pela função `load` do servidor.
  let { data } = $props();
</script>

<p>O primeiro parâmetro da rota é {data.parametro1}.</p>
<p>O segundo parâmetro da rota é {data.parametro2}.</p>