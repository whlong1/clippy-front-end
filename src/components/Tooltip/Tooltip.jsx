import { useState } from "react"

const Tooltip = ({ children, text }) => {
  const [show, setShow] = useState(false)

  const style = show ? { display: 'flex' } : { display: 'none' }

  const handleHover = (e) => {
    console.log(e)
  }

  return (
    <div>
      <div style={style}>
        {text}
      </div>
      <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
        {children}
      </div>
    </div>
  )
}

export default Tooltip