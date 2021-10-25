import { ProjectCard } from "./ProjectCard"

const projects = [
   {
    title: "Twitter Clone",
    image: "logo192.png",
    blurb: "Create an account, follow your friends & share your thoughts.",
    link: "https://www.google.com",
    code: "https://www.github.com"
  },
  {
    title: "Battleships",
    image: "logo192.png",
    blurb: "Play the classic board game against the computer. Try and beat the highscores!",
    link: "https://www.google.com",
    code: "https://www.github.com"
  }
]

export const Projects = () => {
  return (
    <div id="projects" className="border flex flex-col items-center">
      <h2>Projects</h2>
      {projects.map(i => {
        return <ProjectCard project={i}/>
      })}
    </div>
  )
}