import React from "react";
import Script from 'next/script'
import { penBaseURL } from "@/lib/itemMap";


function Item({ pen }: { pen?: string }) {
  const penURL = penBaseURL + pen;
  return (
    <div className="w-full flex h-full bg-gray-600">
      <Script strategy="lazyOnload" async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></Script>
      <iframe  
        style={{"width": "100%",
          "height": "100%",
        }} 
        src={penURL}
        loading="lazy" 
        allowFullScreen
      />
      

    </div>
  );
}

export default Item;
