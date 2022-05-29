import { writable } from "svelte/store";
import type { Subscription } from "../lib/Subscription/subscription.interface"

export const subscriptions = writable<Subscription[]>([]);

export const subscriptionForm = writable({
  name: "",
  is_active: true,
  last_payment: "",
  pay_on: "",
  price: 0,
  subscription_type: "1"
});