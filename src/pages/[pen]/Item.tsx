import React from "react";

function Item({ pen }: { pen?: string }) {
  return (
    <div className="w-full flex bg-gray-600">
      <iframe  
        style={{
          "width": "100%",
          "height": "100%",
        }} 
        src={"https://codepen.io/GanatraJay/embed/" + pen}
        loading="lazy" 
        allowFullScreen
      />
    </div>
  );
}

export default Item;
