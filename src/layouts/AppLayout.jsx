import Nav from '../components/Nav/Nav'

const AppLayout = (props) => {
  const { children } = props
  return (
    <>
      <Nav {...props} />
      {children}
      <footer></footer>
    </>
  )
}

export default AppLayout