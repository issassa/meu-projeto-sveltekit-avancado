 <script>
    let { form } = $props();
  </script>
  
  <h2>Cadastro do Usuário</h2>
  <form method="POST">
    <input name="nome" type="text" placeholder="Seu nome de usuário" value={form?.nome || ''} required />
    <input name="email" type="email" placeholder="E-mail de usuário" value={form?.email || ''} required />
    <input name="senha" type="password" placeholder="Senha" valeu={form?.senha || ''} required />
    <input name="confirmacaosenha" type="password" placeholder="Confirmação de senha" value={from?.confirmacaosenha || ''} required />
    <input name="nasciemnto" type="date" value={form?.nascimento || ''} required />

    <button>cadastrar</button>
  </form>

{#if form?.erros.lenght > 0}
    {#each form.erros as erro}
  <p style="color: red">{erro}</p>
    {/each}
{/if}  