import MenuLayout from '../../layouts/MenuLayout'

const DeliverablesMenu = (props) => {
  const { deliverables } = props
  console.log('Deliverables:', deliverables)

  return (
    <MenuLayout {...props}>
      <p>Deliverables Menu</p>
    </MenuLayout>
  )
}

export default DeliverablesMenu