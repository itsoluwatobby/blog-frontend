import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostContextProvider from './context/PostContextProvider';
import {disableReactDevtools} from '@fvilers/disable-react-devtools'

process.env.NODE_ENV === 'production' && disableReactDevtools()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/*' element={
          <PostContextProvider>
            <App />
          </PostContextProvider>
        } />
      </Routes>
    </Router>
  </React.StrictMode>
)
