import { useState } from "react"

export const Contact = () => {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const sendMessage = () => {
    setName("");
    setMessage("");
  }

  return (
    <div id="contact" className="flex flex-col items-center contact flex flex-col p-12">
      <a href="mailto:danielmolloy_6@icloud.com" className="">Contact Me</a>
    </div>
  )
}