import Nav from '../components/Nav/Nav'

const AppLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <footer></footer>
    </>
  )
}

export default AppLayout