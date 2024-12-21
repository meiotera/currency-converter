"use client";
import { ReactNode } from "react";

interface types {
  type: string;
  message: string;
  value: string;
  setValue: (value: string) => void;
}

export function Input({ type, message, value, setValue }: types): ReactNode {
  return (
    <input
      type={type}
      placeholder={message}
      value={value}
      onChange={(e) => {
        const inputValue = e.target.value;
        if (/^\d*$/.test(inputValue)) {
          // Verifica se é composto apenas por números
          setValue(inputValue);
        }
      }}
    />
  );
}
