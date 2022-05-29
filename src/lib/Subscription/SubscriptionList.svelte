<script lang="ts">
  import { Link } from 'svelte-navigator';
  import { supabase } from '../../auth/client';
  import { subscriptions } from '../../stores/subscriptions';
  import { onMount } from 'svelte';
  import SubscriptionCard from './SubscriptionCard.svelte';
  import Popup from '../Popup.svelte';
  import Spinner from '../Spinner.svelte';

  let isModalOpen: boolean = false;
  let isLoading: boolean = false;
  let dialogItemId: string = '';

  onMount(async () => {
    await getData();
  });

  async function getData() {
    isLoading = true;
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .order('created_at', { ascending: true });
    if (!error) {
      subscriptions.set(data);
    }
    isLoading = false;
  }
  function handleModalClick(id: string) {
    dialogItemId = id;
    isModalOpen = !isModalOpen;
  }

  async function deleteSubscription() {
    const { error } = await supabase
      .from('subscriptions')
      .delete()
      .eq('id', dialogItemId);
    if (!error) await getData();
    isModalOpen = false;
    dialogItemId = '';
  }
</script>

<div
  class="flex flex-col justify-center items-center gap-5 w-full mt-2 sm:mt-5"
>
  {#if $subscriptions.length > 0}
    {#each $subscriptions as subscription}
      <SubscriptionCard
        {subscription}
        on:click={() => handleModalClick(subscription.id)}
      />
    {/each}
  {/if}
</div>
{#if isLoading}
  <Spinner />
{:else}
  <div class="flex flex-row justify-center">
    <Link
      to="add"
      class="inline-block mt-6 p-2 text-white bg-slate-600 border border-slate-600 rounded-full hover:bg-transparent hover:text-slate-600 active:text-slate-500 focus:outline-none focus:ring"
      aria-label="Add subscription"
    >
      <svg
        class="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </Link>
  </div>
{/if}
{#if isModalOpen}
  <Popup
    title="Are you sure you want to delete subscription"
    onYes={deleteSubscription}
    onNo={() => (isModalOpen = !isModalOpen)}
  />
{/if}
