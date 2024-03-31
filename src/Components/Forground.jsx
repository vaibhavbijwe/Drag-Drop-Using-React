import React, { useRef, useState } from 'react'
import Card from './Card'

function Forground() {
    const ref = useRef(null)
    const data = [
        {desc: "This is the background colcor of the card that will be displayed.",filesize: ".9mb",  close:false , tag: {isOpen :false, }, tagTitle:"Download Now", tagColor:"green" },
        {desc: "This is the background colcor of the card that will be displayed.",filesize: ".2mb",  close:true , tag: {isOpen :true, }, tagTitle:"Download Now", tagColor:"green" },
        {desc: "This is the background colcor of the card that will be displayed.",filesize: ".5mb",  close:false , tag: {isOpen :true, }, tagTitle:"Upload Now", tagColor:"blue" },
        {desc: "This is the background colcor of the card that will be displayed.",filesize: ".8mb",  close:true , tag: {isOpen :false, }, tagTitle:"Download Now", tagColor:"green" },
    ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap'>
    {data.map((item, index)=>(
        <Card data={item} reference={ref}  />
    ))}
    </div>
  )
}

export default Forground