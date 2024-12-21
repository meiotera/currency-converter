"use cliente";
import { ReactElement, useEffect, useState } from "react";

interface convertValues {
  selectFrom: string;
  selectTo: string;
  value: string;
}

export function Convert({
  selectFrom,
  selectTo,
  value,
}: convertValues): ReactElement {
  const [convertedValue, setConvertedValue] = useState("");

  useEffect(
    function () {
      async function convert(from: string, to: string, amount: number) {
        if (from === to) {
          return;
        }

        const res = await fetch(
          `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`
        );

        const data = await res.json();
        const convertedAmount = (amount * data.rates[to]).toFixed(2);
        setConvertedValue(convertedAmount);
      }
      convert(selectFrom, selectTo, Number(value));
    },
    [value, selectFrom, selectTo]
  );

  return (
    <div>
      <p className="result">{convertedValue}</p>
    </div>
  );
}
