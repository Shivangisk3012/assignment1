const Participants = () => {
  const items = [
    "/assets/pic1.jpg",
    "/assets/pic2.jpg",
    "/assets/pic3.jpg",
    "/assets/pic4.jpg",
    "/assets/pic5.jpg",
    "/assets/pic6.jpg",
  ];

  return (
    <div className="flex justify-end w-[35.5%] items-center relative h-full">
      {items.map((item, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            zIndex: `${items.length - index}`,
            left: `${25 * index}px`
          }}
        >
          <img src={item} alt="profile" className="object-fill rounded-full h-[3rem] hover:scale-110 hover:cursor-pointer transition-all duration-200"/>
        </div>
      ))}
      <p className="text-[.8rem] pr-14">+3 Interns working on this task</p>
    </div>
  )
}

export default Participants