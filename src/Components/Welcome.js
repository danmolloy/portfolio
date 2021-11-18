import WelcomePic from "../images/portrait.jpeg"

export const Welcome = () => {
  return (
    <div className="welcome flex flex-col items-center justify-center h-full">
      <img src={WelcomePic} alt="Dan in a garden" className="sm:max-h-screen-sm sm:max-w-screen-sm md:self-end md:mr-20"/>
      <div className="absolute top-12 md:top-20 md:left-20 text-center text-white lg:text-black welcome-text">
        <h1 className="text-5xl md:text-6xl font-semibold z-10 text">Dan Molloy</h1>
        <h2 className="text-3xl md:text-4xl z-10 text">Front end developer</h2>
      </div>
    </div>
  )
}
