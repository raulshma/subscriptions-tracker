import differenceInCalendarDays from "date-fns/differenceInCalendarDays"
import getDaysInMonth from "date-fns/getDaysInMonth";
import parseISO from "date-fns/parseISO";

export const getCurrentPaymentStatus = (payOn: string, lastPayment: string, subscriptionType: number) => {
  const payOnDate = parseISO(payOn);
  const lastPaymentDate = parseISO(lastPayment);
  const diff = differenceInCalendarDays(payOnDate, lastPaymentDate);
  if (subscriptionType === 1) {
    const days = getDaysInMonth(new Date());
    if (diff >= days) {
      return false;
    } else {
      return true;
    }
  } else if (subscriptionType === 2) {
    if (diff >= 365) {
      return false;
    } else {
      return true;
    }
  }
}