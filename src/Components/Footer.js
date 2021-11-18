
export const Footer = () => {

  const handleTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div id="contact" className="bg-gray-100 flex flex-col justify-center items-center contact flex flex-col p-12">
      <a href="mailto:danielmolloy_6@icloud.com" className="no-underline hover:underline text-xl">Contact Me</a>
      <button onClick={() => handleTop()} className="no-underline hover:underline">Back to top</button>
    </div>
  )
}