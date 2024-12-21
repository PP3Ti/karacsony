"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Snowfall from "react-snowfall";

export default function Home() {
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  async function checkPassword(e:React.ChangeEvent<HTMLInputElement>) {
    const userInput = e.target.value;
    const correctPassword = process.env.NEXT_PUBLIC_PASSWORD

    if (userInput === correctPassword) {
      console.log('bingo')
      setIsCorrect(true);
    } else {
      setIsCorrect(false)
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <Snowfall />
      <main className="flex flex-col gap-8 pb-8 items-center">
        <h1 className="text-2xl md:text-4xl font-bold whitespace-nowrap">Tudod a jelszót?</h1>
        <Input type="password" onInput={checkPassword}/>
        {isCorrect ? (
          <button className="border border-white inline-block">
            <a className="block px-4 py-2" href="/berlet.pdf" download="berlet.pdf">Ajándék letöltése</a>  
          </button>
        ) : ('')}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
