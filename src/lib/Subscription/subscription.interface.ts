export interface Subscription {
  id: string;
  created_at: string;
  updated_at?: string;
  name: string;
  price: number;
  subscribed_on: string;
  unsubscribed_on?: string;
  pay_on: string;
  last_payment: string;
  subscription_type: number;
  currency_type: string;
  is_active: boolean;
  user_id: string;
  subscription_category: number;
}

export type SUBSCRIPTION_TYPE = 'monthly' | 'annually' | 'unknown';
export type SUBSCRIPTION_CATEGORY = "entertainment" | "investment" | "fuel" | "health" | "education" | "food" | "others";
export const SUB_TYPE_MONTHLY: SUBSCRIPTION_TYPE = "monthly";
export const SUB_TYPE_ANNUALLY: SUBSCRIPTION_TYPE = "annually";
export const SUB_TYPE_UNKNOWN: SUBSCRIPTION_TYPE = "unknown";