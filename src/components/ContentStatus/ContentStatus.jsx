import "./ContentStatus.css"

//? Displays the status of right-hand side <section> panel
const ContentStatus = (props) => {
  // Replace status text with graphic or animation
  const msg = props.status[0].toUpperCase() + props.status.slice(1)

  return (
    <section className="contentStatus">
      <h1>{msg}</h1>
    </section>
  )
}

export default ContentStatus
