export const profileInputfields = {
  name: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  preferredName: {
    type: String
  },
  normalizedName: {
    type: String,
    lowercase: true
  },
  preferredPronouns: {
    type: String,
    lowercase: true
  },
  gitHubUserName: {
    type: String
  },
  linkedInUserName: {
    type: String
  },
  codeWarsUserName: {
    type: String
  },
  isBoolean: {
    type: Boolean,
    default: false
  },
  role: {
    type: Number,
    default: 10
  },
  dueDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['assigned', 'complete', 'incomplete', 'missing', 'pendingAudit'],
    default: 'assigned'
  },
}