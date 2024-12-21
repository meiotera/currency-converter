"use client";

import { Input } from "@/components/input/Input";
import { SelectCurrency } from "@/components/select/SelectCurrency";
import { Convert } from "@/service/Convert";
import { useState } from "react";

export default function Home() {
  const [selectFrom, setSelectFrom] = useState("EUR");
  const [selectTo, setSelectTo] = useState("USD");
  const [value, setValue] = useState<string>("");

  return (
    <main>
      <div>
        <Input
          type={"text"}
          message={"Informe o valor para conversão"}
          value={value}
          setValue={setValue}
        />
        <SelectCurrency
          selectValue={selectFrom}
          setSelectValue={setSelectFrom}
        />
        <SelectCurrency selectValue={selectTo} setSelectValue={setSelectTo} />

        <Convert value={value} selectFrom={selectFrom} selectTo={selectTo} />
      </div>
    </main>
  );
}
