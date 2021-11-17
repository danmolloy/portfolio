export const Welcome = () => {
  return (
    <div className="welcome flex flex-col items-center justify-center">
      <img src="img/portrait.jpeg" className="max-h-screen-sm max-w-screen-sm md:self-end md:mr-20"/>
      <div className="absolute -mt-96 text-center text-white lg:text-black md:left-20">
        <h1 className="text-5xl md:text-6xl font-semibold z-10 text">Dan Molloy</h1>
        <h2 className="text-3xl md:text-4xl z-10 text">Front end developer</h2>
      </div>
    </div>
  )
}
