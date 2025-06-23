import React from "react";

function Card({title= "Ankit", name= "default", content=" content"}){
    
    return(
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black mt-4">
            <img
            src="https://www.freeimages.com/clipart/animal-sketch-set-5691269"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="mt-6 mb-2">
            <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                {title}
            </span>
            <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
            </div>
            <p className="text-gray-300">
            {content}
            </p>
        </div>
    )
}

export default Card;