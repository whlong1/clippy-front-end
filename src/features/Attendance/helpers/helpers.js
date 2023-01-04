
const buildStatusArray = (arr) => {
  if (!arr) return null

  const { students, inactive } = arr
  const allStudents = [...students, ...inactive]

  const studentStatusArr = allStudents.map((s) => {
    return {
      studentId: s._id,
      normalizedName: s.normalizedName,
      name: s.preferredName + ' ' + s.lastName,
      status: students.some((el) => el._id === s._id) ? 'P' : 'W',
    }
  })

  return studentStatusArr.sort((a, b) => a.normalizedName < b.normalizedName ? -1 : 1)
}

export {
  buildStatusArray
}