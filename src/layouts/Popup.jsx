// Reusable Popup container
// Use inside a content section tag 
// See ShowDeliverable.jsx for an example
const Popup = ({ isOpen, children }) => {
  const style = {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '1',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: isOpen ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'scroll',
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Popup