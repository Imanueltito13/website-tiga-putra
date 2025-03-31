import React from "react";

function Filter({ activeTag, handleTag, tagList }) {
  return (
    <div className="w-[60%] flex flex-row justify-between">
      {tagList.map((tag, i) => (
        <div
          onClick={() => handleTag(tag)}
          className={`py-1 cursor-pointer rounded-full hover:gray-100 ${
            activeTag === tag ? "bg-black/60 text-white" : "bg-white"
          }`}
          key={i}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Filter;  
