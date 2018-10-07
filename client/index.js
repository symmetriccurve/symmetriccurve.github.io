import ReactDOM from 'react-dom'
import React from 'react'
require("./index.html")
import App from './components/App'
import Questions from './components/Questions'
import Blog from './components/Blog'
import QuestionDetailCard from './components/QuestionDetailCard'
import EditQuestion from './components/EditQuestion'
import NewQuestion from './components/NewQuestion'
import { Button } from 'antd'
import 'antd/dist/antd.css'
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
        <span className='normal-text' style={{padding:'0 10px 0 10px'}}>
            <Button type="primary">
                <Link to="/">Resume</Link>
            </Button>
        </span>
        <span className='normal-text' style={{padding:'0 10px 0 10px'}}>
            <Button type="primary">
                <Link to="/interviewQuestions">Interview Questions</Link>
            </Button>
        </span>
        <span className='normal-text' style={{padding:'0 10px 0 10px'}}>
            <Button type="primary">
                <Link to="/blog">Blog</Link>
            </Button>
        </span>
        {/*<span className='normal-text' style={{padding:'0 10px 0 10px'}}></span>
        <span className='normal-text' style={{padding:'0 10px 0 10px'}}><Link to="/blog">Blog</Link></span>
        <span className='normal-text' style={{padding:'0 10px 0 10px'}}><Link to="/interviewQuestions">Interview Questions</Link></span> */ }
      </div>
      <Route exact path="/" component={App}/>
      <Route exact path="/interviewQuestions" component={Questions}/>
      <Route exact path="/interviewQuestions/new" component={NewQuestion}/>
      <Route exact path="/blog" component={Blog} />
      <Route  path ={'/moreinfo/:id'} component={QuestionDetailCard}></Route>
      <Route  path ={'/moreinfo/:id/edit'} component={EditQuestion}></Route>
    </div>
  </HashRouter>
</div>,
	document.getElementById('root')
)
