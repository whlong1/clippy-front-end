import { useNavigate } from "react-router-dom"
import "./PageNotFound.css"

const PageNotFound = (props) => {
  const navigate = useNavigate()
  return (
    <main className="pageNotFound">
      <h1>Page not found</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </main>
  )
}

export default PageNotFound