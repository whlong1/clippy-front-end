import "./StatusPage.css"

const StatusPage = (props) => {
  const { error, status } = props

  // Animation would work well here.

  if (error) return (
    <main className="statusPage">
      <h1>Oopsy Daisy! {error.message}</h1>
    </main>
  )

  return (
    <main className="statusPage">
      <h1>{status}</h1>
    </main>
  )
}

export default StatusPage