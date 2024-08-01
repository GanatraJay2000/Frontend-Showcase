import React from "react";

function Item({ penURL }: { penURL?: string }) {
  return (
    <div className="w-full flex h-full bg-red-100">
      <iframe  
        style={{"width": "100%",
          "height": "100%",
        }} 
        src={penURL}
        frameBorder="no" 
        loading="lazy" 
        allowFullScreen
      />
    </div>
  );
}

export default Item;
