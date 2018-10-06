import ReactDOM from 'react-dom'
import React from 'react'
require("./index.html")
import App from './components/App'
import Questions from './components/Questions'
import Blog from './components/Blog'
require('./sass/main.scss')
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom'

// import { HashRouter } from 'react-router-dom'


ReactDOM.render(
<div>
	<HashRouter>
    <div>
      <div style={{width:'80%',marginLeft:'8%',paddingTop:'1%',marginRight:'3%',backgroundColor:'white'}}>
        <span className='normal-text' style={{padding:'0 10px 0 10px'}}><Link to="/">Resume</Link></span>
        <span className='normal-text' style={{padding:'0 10px 0 10px'}}><Link to="/blog">Interview Questions</Link></span>
        <span className='normal-text' style={{padding:'0 10px 0 10px'}}><Link to="/interviewQuestions">Blog</Link></span>
      </div>
      <Route exact path="/" component={App}/>
      <Route path="/interviewQuestions" component={Questions}/>
      <Route path="/blog" component={Blog}/>
    </div>
  </HashRouter>
</div>,
	document.getElementById('root')
)
