import React from "react";
import Script from 'next/script'


function Item({ penURL }: { penURL?: string }) {
  return (
    <div className="w-full flex h-full bg-red-100">
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
