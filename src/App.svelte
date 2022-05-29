<script>
  import { supabase } from './auth/client';
  import './global.scss';
  import { Router, Route, Link } from 'svelte-navigator';
  import PrivateRoute from './auth/privateRoute.svelte';
  import { user as userStore } from './stores/user';
  import SubscriptionList from './lib/Subscription/SubscriptionList.svelte';
  import SubscriptionAdd from './lib/Subscription/SubscriptionAdd.svelte';

  function handleLogout() {
    supabase.auth.signOut();
    userStore.set(null);
  }
  const user = supabase.auth.user();
  if (user) userStore.set(user);

  supabase.auth.onAuthStateChange((_, session) => {
    if (session?.user) userStore.set(session.user);
  });

  async function login() {
    const { user, error } = await supabase.auth.signIn({
      provider: 'github',
    });
    if (!error) {
      userStore.set(user);
    }
  }
</script>

<Router>
  <header
    class="py-1 px-2 sm:px-10 flex justify-between items-center rounded-2 text-gray-700 border-b-2 bg-white"
  >
    <h1 class="text-3xl p-2 font-semibold">subscriptions</h1>

    <nav
      class="flex justify-between items-center gap-5 p-2 text-lg shadow-none"
    >
      {#if !$userStore}
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
          on:click={login}>Login</button
        >
      {:else}
        <Link to="/">home</Link>
        <Link to="list">list</Link>
        <Link to="profile">profile</Link>
      {/if}
    </nav>
  </header>

  <main class="container mx-auto flex flex-col w-full h-auto sm:pt-2">
    <Route path="/">
      <h3>Home</h3>
      <p>Home sweet home...</p>
    </Route>

    <PrivateRoute path="list/*">
      <Route path="/">
        <SubscriptionList />
      </Route>
      <Route path="/add">
        <SubscriptionAdd />
      </Route>
    </PrivateRoute>
    <PrivateRoute path="profile" let:location>
      <h3>Welcome {$userStore.user_metadata.user_name}</h3>
      <img
        class="w-16 rounded-full border border-solid border-gray-200 shadow-xl"
        src={$userStore.user_metadata.avatar_url}
        alt="nil"
      />
      <button on:click={handleLogout}>Logout</button>
    </PrivateRoute>
  </main>
</Router>
