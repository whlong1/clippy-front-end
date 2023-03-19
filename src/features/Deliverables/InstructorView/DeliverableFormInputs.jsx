// Included if we wish to introduce EditDeliverable later on

const DeliverableFormInputs = ({ deliverableData, handleChange, msg }) => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        required
        id="name"
        type="text"
        name="name"
        onChange={handleChange}
        value={deliverableData.name}
      />

      <label htmlFor="dueDate">Due Date</label>
      <input
        required
        id="dueDate"
        name="dueDate"
        type="datetime-local"
        timezone="US/Eastern"
        onChange={handleChange}
        value={deliverableData.dueDate}
      />

      <label htmlFor="notionUrl">Notion URL</label>
      <input
        required
        type="text"
        id="notionUrl"
        name="notionUrl"
        onChange={handleChange}
        value={deliverableData.notionUrl}
      />

      <section>
        <h2>Deliverable Requirements</h2>
        <p className="formMsg">{msg}</p>

        <div>
          <input
            type="checkbox"
            id="hasQuiz"
            name="hasQuiz"
            onChange={handleChange}
            checked={deliverableData.hasQuiz}
          />
          <label htmlFor="hasQuiz">Quiz</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="hasMiscUrl"
            name="hasMiscUrl"
            onChange={handleChange}
            checked={deliverableData.hasMiscUrl}
          />
          <label htmlFor="hasMiscUrl">Misc URL</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="hasGitHubUrl"
            name="hasGitHubUrl"
            onChange={handleChange}
            checked={deliverableData.hasGitHubUrl}
          />
          <label htmlFor="hasGitHubUrl">GitHub URL</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="hasTrelloUrl"
            name="hasTrelloUrl"
            onChange={handleChange}
            checked={deliverableData.hasTrelloUrl}
          />
          <label htmlFor="hasTrelloUrl">Trello URL</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="hasDeploymentUrl"
            name="hasDeploymentUrl"
            onChange={handleChange}
            checked={deliverableData.hasDeploymentUrl}
          />
          <label htmlFor="hasDeploymentUrl">Deployment</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="hasCodeSandboxUrl"
            name="hasCodeSandboxUrl"
            onChange={handleChange}
            checked={deliverableData.hasCodeSandboxUrl}
          />
          <label htmlFor="hasCodeSandboxUrl">CodeSandbox</label>
        </div>
      </section>
    </>

  )
}

export default DeliverableFormInputs