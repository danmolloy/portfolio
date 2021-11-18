export const About = () => {
  return (

    <div id="about" className="text-black h-auto flex flex-col text-center justify-center my-24 mx-12">
      <h1 className="p-4 text-4xl">About</h1>
      <div className="flex flex-col itmes-center md:items-start md:flex-row justify-center ">
        <img src={require("../images/bass.jpeg")} className="h-auto w-auto max-w-sm" />
        <div className="md:w-1/2 text-left md:ml-4">
          <div className="p-2">
            <p>Originally from Australia, I moved to London in 2014.</p>
            <p>I have spent the past 12 years working as a classical double bassist, performing in some of the world's leading ensembles such as the London Symphony, BBC Symphony and Royal Philharmonic Orchestras.</p>
            <p>I've performed in every major concert hall in U.K. and I'm on a variety of soundtracks such as <i>The Crown</i>, <i>Downton Abbey</i> and <i>Seven Worlds, One Planet</i>.</p>
            <p>You can find out more about my music at <a href="https://maslink.co.uk/client-directory?client=MOLLD1&instrument=DOUBL1">Musician's Answering Service</a>.</p>
          </div>
          <div className="p-2">
            <p>My spare time in 2020-2021 has been dedicated to learning web development. My focus has been on React and related libraries such as Redux, Apollo, Jest and TypeScript to name a few. </p>
          </div>
        </div>
      </div>
    </div>

  )
}
