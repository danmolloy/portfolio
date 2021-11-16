import { ProjectCard } from "./ProjectCard"

const projects = [
   {
    title: "Twitter Clone",
    image: "logo192.png",
    blurb: "A full stack social network, complete with authentication, authorization, notifications and direct messaging. Share your thoughts with your friends.",
    link: "https://www.google.com",
    code: "https://github.com/danmolloy/twitter-clone",
    stack: ["React", "Apollo Client", "TypeScript", "Tailwind", "Jest", "React Router", "Node.js", "Apollo Server", "Prisma", "SQLIte",]

  },
  {
    title: "Battleships",
    image: "logo192.png",
    blurb: "Play the classic board game against the computer. Try and beat the highscores!",
    link: "https://www.google.com",
    code: "https://github.com/danmolloy/battleships",
    stack: ["React", "Redux", "Tailwind", "Typescript", "Jest", "Mirage JS"]
  }
]

export const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center mt-24">
      <h1 className="text-4xl">Projects</h1>
      {projects.map(i => {
        return <ProjectCard project={i}/>
      })}
    </div>
  )
}