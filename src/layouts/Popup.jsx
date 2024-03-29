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
    width: '100%',
    height: '100vh',
    padding: '24px',
    overflowY: 'auto',
    maxHeight: '100vh',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: isOpen ? 'flex' : 'none',
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Popup