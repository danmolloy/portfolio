export const ProjectCard = (props) => {
  return (
    <div className="project-card bg-white flex flex-col border m-8 w-auto items-center shadow">
      <h2 className="text-3xl mt-2">{props.project.title}</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-evenly m-4">
      <a href={props.project.link} target="_blank" rel="noreferrer" className="hover:shadow-md">
      <img src={props.project.image} alt="Project preview" className="w-80 border h-auto md:mr-2"/>
      </a>
      <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col md:ml-2" >
        <p className="w-72">{props.project.blurb}</p>
        <div className="flex flex-row justify-between py-2">
          <a href={props.project.link}target="_blank" rel="noreferrer">Live Example</a>
          <a href={props.project.code} target="_blank" rel="noreferrer">Code</a>
        </div>
      </div>
      <div className="hidden md:flex flex-col ml-2 text-gray-400">
        <ul>
          {props.project.stack.map(i => 
            <li key={i}>{i}</li>)}
        </ul>
      </div>
      </div>
      </div>
    </div>
  )
}