<!--<script>
    let { form } = $props();
  </script>
  
  <h2>Cadastro do Usuário</h2>
  <form method="POST">
    <input name="nome" type="text" placeholder="Seu nome de usuário" value={form?.email || ''} required />
    <input name="email" type="email" placeholder="seu.email@exemplo.com" required />
    <input name="nasciemnto" type="date" placeholder="Data de nascimento" required />
    <button>Entrar</button>
  </form>
  
  {#if form?.error}
    <p style="color: red">{form.error}</p>
  {/if}
  -->

<script>
    let { form } = $props();
</script>

<h1>Cadastro de Usuário</h1>

<form method="POST">
    <label for="nome">
        Nome:
        <input name="nome" type="text" placeholder="Seu nome completo" value={form?.nome || ''} required />
    </label>
    {#if form?.errors?.nome}
        <p style="color: red;">{form.errors.nome}</p>
    {/if}

    <label for="email">
        E-mail:
        <input name="email" type="email" placeholder="seu.email@exemplo.com" value={form?.email || ''} required />
    </label>
    {#if form?.errors?.email}
        <p style="color: red;">{form.errors.email}</p>
    {/if}

    <label for="dataNascimento">
        Data de Nascimento:
        <input name="dataNascimento" type="date" value={form?.dataNascimento || ''} required />
    </label>
    {#if form?.errors?.dataNascimento}
        <p style="color: red;">{form.errors.dataNascimento}</p>
    {/if}

    <button type="submit">Cadastrar</button>
</form>

{#if form?.success}
    <p style="color: green;">Cadastro concluído com sucesso. Bem-vindo(a), {form.nome}!</p>
{/if}
