import type { SUBSCRIPTION_TYPE } from "src/lib/Subscription/subscription.interface";

export const getSubscriptionType = (type: number): SUBSCRIPTION_TYPE => {
  if (type === 1)
    return "monthly";
  if (type === 2)
    return "annually"
  if (type === 3)
    return "weekly";
  if (type === 4)
    return "daily";
  return "unknown";
}