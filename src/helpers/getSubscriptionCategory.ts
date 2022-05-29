import type { SUBSCRIPTION_CATEGORY } from "src/lib/Subscription/subscription.interface"

export const getSubscriptionCategory = (category: number): SUBSCRIPTION_CATEGORY => {
  if (category === 1)
    return "entertainment";
  else if (category === 2)
    return "investment";
  else return "others";
}