import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import Account from '../Pages/Account/Account';

function RouterOne() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" element={<Account />} />
        </Routes>
      </Router>
    </div>
  )
}

export default RouterOne