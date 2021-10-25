export const ProjectCard = (props) => {
  return (
    <div className="project-card flex flex-col border m-8 w-2/3 items-center">
      <h3>{props.project.title}</h3>
      <img src={props.project.image} className="w-32 h-auto"/>
      <p>{props.project.blurb}</p>
      <a href={props.project.link}>Live Example</a>
      <a href={props.project.code}>Code</a>
    </div>
  )
}