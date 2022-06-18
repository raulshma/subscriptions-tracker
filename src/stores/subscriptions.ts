import { writable } from "svelte/store";
import type { Subscription } from "../lib/Subscription/subscription.interface"

export const subscriptions = writable<Subscription[]>([]);

export const subscriptionForm = writable({
  name: "",
  is_active: true,
  last_payment: "",
  first_payment_on: "",
  price: 0,
  subscription_type: "1",
  subscription_interval: 1
});