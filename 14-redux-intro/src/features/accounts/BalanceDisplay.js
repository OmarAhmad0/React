import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const currentMoney = useSelector((money) => money.account.balance);
  return <div className="balance">{formatCurrency(currentMoney)}</div>;
}

export default BalanceDisplay;
