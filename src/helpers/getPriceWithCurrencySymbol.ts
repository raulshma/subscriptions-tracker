export const getPriceWithCurrencySymbol = (currency: string, price: number): string => {
  if (currency === "INR")
    return `₹ ${price}`
  else if (currency === "USD")
    return `$ ${price}`
  return "" + price;
}