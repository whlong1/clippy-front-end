// Assets
import late from '../../../assets/icons/attendance/late.svg'
import absent from '../../../assets/icons/attendance/absent.svg'
import closed from '../../../assets/icons/attendance/closed.svg'
import present from '../../../assets/icons/attendance/present.svg'
import exception from '../../../assets/icons/attendance/exception.svg'
import withdrawn from '../../../assets/icons/attendance/withdrawn.svg'

// enum: ['P', 'A', 'L', 'W', 'EC', 'SC', 'H'],
const StatusIcon = ({ status }) => {
  console.log(status)
  
  const lookup = {
    L: late,
    A: absent,
    SC: closed,
    P: present,
    W: withdrawn,
    EC: exception,
  }



  return (
    <img src="" alt="" />
  )
}

export default StatusIcon