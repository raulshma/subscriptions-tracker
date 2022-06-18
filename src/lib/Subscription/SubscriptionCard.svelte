<script lang="ts">
  import { getSubscriptionType } from '../../helpers/getSubscriptionType';
  import { getPriceWithCurrencySymbol } from '../../helpers/getPriceWithCurrencySymbol';
  import { getCurrentPaymentStatus } from '../../helpers/getCurrentPaymentStatus';
  import { getSubscriptionCategory } from '../../helpers/getSubscriptionCategory';
  import type { Subscription } from './subscription.interface';

  export let subscription: Subscription;
</script>

<div class="flex justify-center w-full sm:w-3/5 px-1" on:click>
  <div
    class="flex flex-row px-6 py-2 rounded-lg items-center rounded-l-none shadow-md bg-white gap-2 w-full {subscription.is_active
      ? 'border-l-4 border-solid border-green-300'
      : 'border-l-2 border-solid border-red-100'}"
  >
    <!--Name-->
    <h5 class="text-gray-900 text-xl font-medium">
      {subscription.name.toLocaleLowerCase()}
    </h5>
    <!--Price-->
    <p class="text-gray-700 text-md leading-4">
      {getPriceWithCurrencySymbol(
        subscription.currency_type,
        subscription.price
      )}
    </p>
    <!--Payment status-->
    <!-- {#if getCurrentPaymentStatus(subscription.first_payment_on, subscription.last_payment, subscription.subscription_type)} -->
    <p class="text-sm text-slate-600 leading-4">
      pay in {getCurrentPaymentStatus(
        subscription.last_payment,
        subscription.subscription_type
      )}
      <strong>({getSubscriptionType(subscription.subscription_type)})</strong>
    </p>
    <!-- {:else} -->
    <!--Last payment info-->
    <!-- <p class="text-sm text-slate-600 leading-4">
        last paid {formatDistanceToNow(new Date(subscription.last_payment))} ago,
        <span class="font-bold"
          >{getSubscriptionType(subscription.subscription_type)}</span
        >
      </p>
    {/if} -->
    <!--Category-->
    <span
      class="rounded-full px-1 py-0.5 bg-green-100 text-green-600 font-medium text-xs"
    >
      {getSubscriptionCategory(subscription.subscription_category)}
    </span>
  </div>
</div>
