import { useSelector, useDispatch } from 'react-redux'

const PersonDetails = () => {
  const people = useSelector((state) => state.people)
  const dispatch = useDispatch()

  // Rather than relying on state, fetch details here

  return (
    <section>
      People details
    </section>
  )
}

export default PersonDetails 