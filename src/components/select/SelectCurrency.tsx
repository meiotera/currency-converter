import { ReactElement } from "react";

interface selectTypes {
  selectValue: string;
  setSelectValue: (value: string) => void;
  isLoading: boolean;
}

export function SelectCurrency({
  selectValue,
  setSelectValue,
  isLoading,
}: selectTypes): ReactElement {
  return (
    <select
      value={selectValue}
      onChange={(e) => setSelectValue(e.target.value)}
      disabled={isLoading}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="BRL">BRL</option>
      <option value="JPY">JPY</option>
      <option value="GBP">GBP</option>
      <option value="CHF">CHF</option>
      <option value="CAD">CAD</option>
    </select>
  );
}
