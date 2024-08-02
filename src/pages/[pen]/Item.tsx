import React from "react";
import { penBaseURL } from "@/lib/itemMap";

function Item({ pen }: { pen?: string }) {
  const penURL = penBaseURL + pen;
  return (
    <div className="w-full flex h-full bg-gray-600">
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
