"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { specialName } from "./constants";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const currentDate = new Date();

  const router = useRouter();

  const formatDate = (date: Date) => {
    return `${date.getDate() ?? ""}${date.getMonth() + 1 ?? ""}${date.getFullYear()?.toString().substr(-2) ?? ""}`;
  };

  const getName = (array: string[], seed: number): string => {
    const index = Math.floor(seed * array.length);
    return array[index & (array.length - 1)];
  };

  const seed =
    name.length +
    parseInt(formatDate(date)) +
    parseInt(formatDate(currentDate));

  const handleDate = (date: Date) => {
    setDate(date);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const shuffledArray = getName(specialName, seed);
    router.push(`/khodam/${shuffledArray}?name=${name}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex w-full max-w-md flex-col items-center gap-3"
    >
      <div className="flex w-full flex-col items-center gap-3 md:flex-row">
        <Input
          placeholder="Nama Lengkap"
          className=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <DatePicker onDateSelect={handleDate} />
      </div>
      <Button size="sm" className="w-full" type="submit">
        Cek Khodam
      </Button>
    </form>
  );
};

export default Form;
