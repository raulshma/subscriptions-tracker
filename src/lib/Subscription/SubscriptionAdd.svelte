<script lang="ts">
  import { useNavigate } from 'svelte-navigator';
  import { subscriptionForm as form } from '../../stores/subscriptions';
  import { supabase } from '../../auth/client';

  const navigate = useNavigate();

  const onSubmit = async () => {
    const { error } = await supabase.from('subscriptions').insert($form);
    if (!error) {
      navigate('/list');
    }
  };
</script>

<div class="flex justify-center">
  <!-- svelte-ignore component-name-lowercase -->
  <form
    class="p-4 sm:mt-2 bg-gray-100 shadow-md flex flex-col justify-center gap-3 w-full sm:w-1/2"
  >
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        for="name"
      >
        name
      </label>
      <input
        type="text"
        id="name"
        class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        bind:value={$form.name}
        placeholder="name"
      />
    </div>
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        for="price"
      >
        price
      </label>
      <input
        id="price"
        type="number"
        class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        bind:value={$form.price}
        placeholder="0.00"
      />
    </div>
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        for="payment_date"
      >
        payment date
      </label>
      <input
        type="date"
        id="payment_date"
        placeholder="payment date"
        class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        bind:value={$form.pay_on}
      />
    </div>
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        for="pay_on"
      >
        last paid on
      </label>
      <input
        type="datetime-local"
        id="pay_on"
        placeholder="Last paid on"
        class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        bind:value={$form.last_payment}
      />
    </div>
    <label
      for="default-toggle"
      class="inline-flex relative items-center cursor-pointer"
    >
      <input
        type="checkbox"
        id="default-toggle"
        class="sr-only peer"
        bind:checked={$form.is_active}
      />
      <div
        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
      />
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-400"
        >is active</span
      >
    </label>
    <div>
      <label
        for="subscription_type"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >subscription Type</label
      >
      <select
        bind:value={$form.subscription_type}
        id="subscription_type"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded shadow outline-none focus:outline-none focus:ring w-full p-2.5"
      >
        <option value="1" selected>monthly</option>
        <option value="2">annually</option>
      </select>
    </div>
    <button
      type="button"
      on:click={onSubmit}
      class="h-10 mt-5 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800"
      >submit</button
    >
  </form>
</div>
