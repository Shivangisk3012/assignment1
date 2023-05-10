import React from 'react'

function DescriptionTask({text}) {
  return (
    <div className='flex  gap-2 w-[45%]'>
    <div className="flex ">
    <p className="text-[12.5px] 
        w-full text-left">{text}</p>

</div>
</div>
  )
}

export default DescriptionTask