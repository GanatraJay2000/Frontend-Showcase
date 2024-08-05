import React, { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Quote } from "lucide-react";

interface Quote {
  _id: string;
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  tags: string[];
}

function RandomQuoteCards() {
  const [quote, setQuote] = React.useState<Quote | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data);
    })();
  }, []);

  return (
    <div className="w-full bg-amber-700 flex justify-center items-center">
      <div className="bg-white overflow-hidden relative rounded-lg shadow border p-10 w-7/12">
        <Quote className="text-orange-200 scale-150 " />
        <h1 className="mt-3 z-10 relative">{quote?.content}</h1>
        <Separator className="mt-3 bg-slate-600 pt-[0.5px]" />
        <p>{quote?.author}</p>
      </div>
    </div>
  );
}

export default RandomQuoteCards;
