<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<div class="d-flex flex-column min-vh-100 container-fluid">
  <Header />

  <main>{@render children()}</main>

  <div class="container-fluid d-flex justify-content-center aling-items-center"><i class="bi bi-rocket-takeoff"></i></div>

  <Footer />
</div>