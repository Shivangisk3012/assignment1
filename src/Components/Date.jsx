
function Date({date}) {
  return (
    <div className='flex  flex-col gap-2 w-[35%]'>
      <div className="flex justify-between items-center">
      <p className="font-bold text-[15px]">{date}</p>
      <button className="p-2 px-10 text-white text-[10.5px] text-center bg-blue-700 rounded">Add to Calendar</button>
      </div>
      <span className="text-[12.5px] w-[95%] flex gap-4">
        <span>(GMT+5:30)</span>
        <span>india</span>
        <span>standard</span>
        <span>time</span>
        <span>(Asia/Kolkata)</span>
      </span>
    </div>
  )
}

export default Date