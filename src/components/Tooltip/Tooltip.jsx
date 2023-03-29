import "./Tooltip.css"
import { useState, useRef } from "react"

const Tooltip = ({ children, text }) => {
  const buttonRef = useRef(null)
  const [show, setShow] = useState(false)

  const tooltipStyle = {    
    top: buttonRef.current ? buttonRef.current.offsetTop - 16 : 0,
    left: buttonRef.current ? buttonRef.current.offsetLeft - 24 : 0,

    position: "absolute",
    opacity: show ? 1 : 0,
    transform: `translateY(${show ? "0" : "10px"})`,
    transition: "opacity .25s ease-in-out, transform .25s ease-in-out",
  }

  const handleHover = (e) => {
    if (e.type === "mouseenter") {
      setTimeout(() => setShow(true), 100)
    } else if (e.type === "mouseleave") {
      setTimeout(() => setShow(false), 100)
    }
  }

  return (
    <div className="tooltipContainer">
      <div className="tooltip" style={tooltipStyle}>
        <p>{text}</p>
      </div>
      <div ref={buttonRef} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        {children}
      </div>
    </div>
  )
}

export default Tooltip