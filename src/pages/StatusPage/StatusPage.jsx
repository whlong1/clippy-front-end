const StatusPage = (props) => {
  // This is a 'page' component.
  // Only use this component outside of AppRouter

  // Need additional error handling
  const { error, status } = props

  if (error) return (
    <main className="page">
      <h1>Oopsy Daisy! {error.message}</h1>
    </main>
  )

  return (
    <main className="page">
      <h1>{status}</h1>
    </main>
  )
}

export default StatusPage