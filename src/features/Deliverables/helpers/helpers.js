// No longer in use, but might be necessary after deployment
const formatDate = (dueDate) => {
  const date = new Date(dueDate)
  const difference = new Date().getUTCHours() - new Date().getHours()
  date.setHours(date.getHours() + difference)
  const tzoffset = (new Date()).getTimezoneOffset() * 60000
  const formattedTime = (new Date(date - tzoffset)).toISOString().slice(0, 16)
  return formattedTime
}

// The goal here is the generate a default date for new deliverables.
// The default date will be 2 days from the current date at 8:59 AM.
const getDefaultDate = () => {
  const date = new Date()

  date.setHours(8)
  date.setSeconds(0)
  date.setMinutes(59)
  date.setMilliseconds(0)
  date.setDate(date.getDate() + 2)

  // Subtracting 4 will cause an issue during daylight savings fall back 
  // Should be -5 in that scenario. Implement moment.js to resolve.
  const difference = new Date().getUTCHours() - new Date().getHours() - 4

  date.setHours(date.getHours() + difference)
  const tzoffset = (new Date()).getTimezoneOffset() * 60000
  const formattedTime = (new Date(date - tzoffset)).toISOString().slice(0, 16)

  return formattedTime
}

const dateOptions = {
  hour12: true,
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
}

const getLocaleDateString = (date) => {
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString('en-US', dateOptions)
}

const isValidUrl = (url) => {
  const regex = /^(http|https):\/\//
  if (!url) return false
  if (url.includes('localhost')) return false
  if (url.includes('127.0.0.1')) return false
  return regex.test(url)
}

const urlTypes = ['miscUrl', 'trelloUrl', 'gitHubUrl', 'deploymentUrl', 'codeSandboxUrl']
const requirementTypes = ['hasMiscUrl', 'hasTrelloUrl', 'hasGitHubUrl', 'hasDeploymentUrl', 'hasCodeSandboxUrl']
const typeLookup = {
  status: { title: 'Status', key: 'status' },
  hasMiscUrl: { title: 'Misc URL', key: 'miscUrl' },
  hasTrelloUrl: { title: 'Trello URL', key: 'trelloUrl' },
  hasGitHubUrl: { title: 'GitHub URL', key: 'gitHubUrl' },
  hasDeploymentUrl: { title: 'Deployment URL', key: 'deploymentUrl' },
  hasCodeSandboxUrl: { title: 'CodeSandbox URL', key: 'codeSandboxUrl' },
}

const filterDeliverableUrls = (deliverableData) => {
  return urlTypes.filter((url) => deliverableData.hasOwnProperty(url))
}


const filterAndFormatColumns = (d) => {
  const columnNames = ['status', ...requirementTypes.filter((k) => d[k])]
  return columnNames.map((n) => typeLookup[n])
}

const filterRequirements = (d) => {
  const filteredTypes = requirementTypes.filter((t) => d[t])
  return filteredTypes.map((t) => typeLookup[t].key)[0]
}

export {
  formatDate,
  isValidUrl,
  getDefaultDate,
  filterRequirements,
  getLocaleDateString,
  filterDeliverableUrls,
  filterAndFormatColumns,
}