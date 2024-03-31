import React from 'react'
import { FiFileText } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import { CgCloseO } from "react-icons/cg";
import { motion } from "framer-motion"

function Card({ data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='ml-5 flex-shrink-0 relative w-60 h-72 bg-zinc-900/90 rounded-[50px] text-white px-8 py-10 overflow-hidden'>
        <FiFileText />
        <p className='text-sm leading-tight mt-5 font-semibold '>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0 '>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5>{data.filesize}</h5>
                <span className=' w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center '>
                    {data.close ? <CgCloseO /> : <LuDownload size=".8em" color='#FFF'/>}</span>
            </div>
            {data.tag.isOpen && (
                 <div className= {'tag w-full py-4 ${data.tagColor === "blue" ? "bg-blue-600": "bg-green-600"} items-center justify-center flex '}>
                 <h3 className='textsm font-semibold '>{data.tagTitle}</h3>
             </div>
            )
            }
        </div>
    </motion.div>
    
  ); 
}

export default Card;