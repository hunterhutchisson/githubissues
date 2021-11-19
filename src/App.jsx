import React, { useState, useEffect } from 'react';
import IssueList from './components/IssueList'
import Details from './components/Details'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import BaseLayout from './components/layout/BaseLayout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  const [issueList, setIssueList] = useState([])
  useEffect(() => {
      const issueListData = async () => {
          let response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues')
          let data = await response.json()
          setIssueList(data)
      }
      issueListData()
  }, [])
  useEffect(() => {
    // console.log(issueList)
  }, [issueList])
  return (
    // console.log('appfetch', issueList)
    <>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<IssueList data={issueList}/>} />
          <Route path="/:numberID" element={<Details />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userID" element={<UserDetails />} />
          {/* <Route path="/about" element={<AboutUs />} /> */}
          {/* <Route path="/faq/:faqID" element={<FAQ />} /> */}
          {/* <Route path="/forms" element={<Forms />} /> */}
        </Routes>
      </BaseLayout>
    </Router>
    </>
  )
}

export default App

