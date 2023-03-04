import { useState } from 'react'
import { Link } from "react-router-dom"

const AttendanceList = ({ attendance }) => {
  const [selectedMonth, setSelectedMonth] = useState("")

  const months = [
    { num: "01", long: "January" },
    { num: "02", long: "February" },
    { num: "03", long: "March" },
    { num: "04", long: "April" },
    { num: "05", long: "May" },
    { num: "06", long: "June" },
    { num: "07", long: "July" },
    { num: "08", long: "August" },
    { num: "09", long: "September" },
    { num: "10", long: "October" },
    { num: "11", long: "November" },
    { num: "12", long: "December" },
  ]

  const attendanceObj = {
    "01": [],
    "02": [],
    "03": [],
    "04": [],
    "05": [],
    "06": [],
    "07": [],
    "08": [],
    "09": [],
    "10": [],
    "11": [],
    "12": [],
  }

  const handleSelect = (month) => {
    selectedMonth === month.num
      ? setSelectedMonth("")
      : setSelectedMonth(month.num)
  }

  const formatDate = (d) => {
    const time = new Date(d).getTime()
    const timeDifference = new Date().getTimezoneOffset() * 60000
    const date = new Date(time + timeDifference)
    return date.toLocaleString("en-us", { weekday: "long", day: "numeric" })
  }

  const monthlyAttendance = attendance.reduce((acc, attRecord) => {
    const month = attRecord.date.substring(5, 7)
    attRecord.friendlyDate = formatDate(attRecord.date)
    return { ...acc, [month]: [...acc[month], attRecord] }
  }, attendanceObj)

  return (
    months.map((month) => (
      <section key={month.num}>
        {monthlyAttendance[month.num]?.length > 0 &&
          <h4 key={month.num} onClick={() => handleSelect(month)}>
            {month.long}
          </h4>
        }

        {selectedMonth === month.num &&
          <ul>
            {monthlyAttendance[month.num].map((attendance) => (
              <li key={attendance._id}>
                <Link key={attendance._id} to={`/attendance/${attendance._id}`}>
                  {attendance.friendlyDate} - {attendance.time}
                </Link>
              </li>
            ))}
          </ul>
        }
      </section>
    ))
  )
}

export default AttendanceList