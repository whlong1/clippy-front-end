const buildStatusArray = (arr) => {
  if (!arr) return []

  const { students, inactive } = arr
  const allStudents = [...students, ...inactive]

  const studentStatusArr = allStudents.map((s) => {
    return {
      studentId: s._id,
      lastName: s.lastName,
      preferredName: s.preferredName,
      normalizedName: s.normalizedName,
      status: students.some((el) => el._id === s._id) ? 'P' : 'W',
    }
  })

  return studentStatusArr.sort((a, b) => a.normalizedName < b.normalizedName ? -1 : 1)
}

const handleDate = (date) => {
  if (date) {
    const newDate = new Date(date)
    return newDate.toISOString().slice(0, 10)
  } else {
    const newDate = new Date()
    return newDate.toISOString().slice(0, 10)
  }
}

export {
  handleDate,
  buildStatusArray,
}