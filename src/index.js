import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react"
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
const auth0Props = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
  // cacheLocation: 'localstorage',
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Auth0Provider {...auth0Props}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </Auth0Provider>
  </React.StrictMode>
)