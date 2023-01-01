const ErrorMsg = ({ error }) => {
  // Add navigation
  return (
    <main>
      <h1>Oopsy Daisy! {error.message}</h1>
    </main>
  )
}

export default ErrorMsg