import { formatDistanceToNow, getDaysInYear, isFuture } from "date-fns";
import addDays from "date-fns/addDays";
import { differenceInCalendarDays } from "date-fns/esm";
import getDaysInMonth from "date-fns/getDaysInMonth";
import parseISO from "date-fns/parseISO";

export const getCurrentPaymentStatus = (lastPayment: string, subscriptionType: number) => {
  const lastPaymentDate = parseISO(lastPayment);
  let daysToAdd = 0;
  switch (subscriptionType) {
    case 1:
      daysToAdd = getDaysInMonth(new Date());
      break;
    case 2:
      daysToAdd = getDaysInYear(new Date());
      break;
    case 3:
      daysToAdd = 7;
      break;
    case 4:
      daysToAdd = 1;
      break;
  }
  const nextPaymentDate = addDays(lastPaymentDate, daysToAdd);
  if (isFuture(nextPaymentDate))
    return formatDistanceToNow(nextPaymentDate, { includeSeconds: false });
  return `late by ${differenceInCalendarDays(new Date(), nextPaymentDate)} days`;
}