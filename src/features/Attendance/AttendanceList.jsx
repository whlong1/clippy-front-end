import { useState } from 'react'
import { Link } from "react-router-dom"

// Components
import ToggleArrow from '../../components/ToggleArrow/ToggleArrow'

const AttendanceList = ({ attendance, isAdmin }) => {
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

  const monthlyAttendance = attendance
    .map((record) => ({ ...record, friendlyDate: formatDate(record.date) }))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .reduce((acc, record) => {
      const month = record.date.substring(5, 7);
      return { ...acc, [month]: [...acc[month], record] }
    }, attendanceObj)

  const filteredMonths = months.filter((month) => monthlyAttendance[month.num].length)

  // Student View:
  if (!isAdmin) {
    return (
      filteredMonths.map((month) => (
        <section key={month.num}>
          <Link state={monthlyAttendance[month.num]} to={`/attendance/${month.long.toLocaleLowerCase()}`}>
            <header>
              <h2>{month.long}</h2>
              <ToggleArrow />
            </header>
          </Link>
        </section>
      ))
    )
  }

  // Instructor View
  return (
    months.map((month) => (
      <section key={month.num}>

        {monthlyAttendance[month.num]?.length > 0 &&
          <header key={month.num} onClick={() => handleSelect(month)}>
            <h2>{month.long}</h2>
            <ToggleArrow isOpen={selectedMonth === month.num} />
          </header>
        }

        {selectedMonth === month.num &&
          monthlyAttendance[month.num].map((attendance) => (
            <Link key={attendance._id} to={`/attendance/${attendance._id}`}>
              <p>{attendance.friendlyDate}</p>
              <p>{attendance.time}</p>
            </Link>
          ))
        }
      </section>
    ))
  )
}

export default AttendanceList