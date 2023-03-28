import "./Tooltip.css"
import { useState } from "react"

const Tooltip = ({ children, text }) => {
  const [show, setShow] = useState(false)

  const tooltipStyle = {
    left: 50,
    display: show ? "flex" : "none",
    position: "absolute",
  }

  const handleHover = (e) => {
    if (e.type === "mouseenter") {
      setTimeout(() => setShow(true), 100);
    } else if (e.type === "mouseleave") {
      setTimeout(() => setShow(false), 100);
    }
  }

  return (
    <div className="tooltipContainer">
      <div className="tooltip" style={tooltipStyle}>
        <p>{text}</p>
      </div>
      <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
        {children}
      </div>
    </div>
  )
}

export default Tooltip