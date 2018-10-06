import React, {Component} from 'react'
import {Tabs, Tab, button} from 'react-bootstrap'
import AboutMe from './AboutMe'
import posts from './posts'
import { Card } from 'antd';
var HtmlToReactParser = require('html-to-react').Parser;
var htmlToReactParser = new HtmlToReactParser();
var _ = require('lodash')
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom'
class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      questions: []
    };
  }

  componentDidMount(){
    fetch('https://portfolio-18e3f.firebaseio.com/questions.json')
    .then((res)=>res.json())
    .then((resJSON)=>{
      this.setState({
          questions: _.values(resJSON)
      })
      debugger
    })
  }

  handlePostToAPI(){
    fetch('https://portfolio-18e3f.firebaseio.com/questions.json',
      {
        method: 'PUT',
        body: JSON.stringify(this.state.questions)
      })
  }

  handleSelect(key) {
    //alert(`selected ${key}`);
    this.setState({ key });
  }

  handleEdit(index){
    let questions = this.state.questions
    questions[index].isEditing = true
    this.setState({
      questions
    })
  }

  handleDone(index){
    let questions = this.state.questions
    questions[index].isEditing = false
    this.setState({
      questions
    })
  }

  handleQuestionInput(e,index){
    let questions = this.state.questions
    questions[index].question = e.target.value
    this.setState({
      questions
    })
  }

  handleAnswerInput(e,index){
    let questions = this.state.questions
    questions[index].answer = e.target.value
    this.setState({
      questions
    })
  }

  handleAddQuestion(){
    let questions = this.state.questions
    questions.push({question:'your question goes here',answer:'your answer here',isEditing:true})
    this.setState({
      questions
    })
  }

  render() {
    console.log(this.state.questions)
    return (
      <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <div style={{width:'90%'}}>
        {
            this.state.questions.map((eachQuestion,index)=>{
              return(
                <div style={{paddingTop:'20px',paddingBottom:'20px',marginTop:'30px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.16'}}>
                    <Card>
                          { htmlToReactParser.parse(eachQuestion.htmlMarkUp) }
                    </Card>
                    <span className='normal-text' style={{padding:'0 10px 0 10px'}}><Link to={"/moreinfo/"+eachQuestion.id} params={{ id: eachQuestion.id }}>More Info</Link></span>
                </div>
              )
          })
        }
      </div>
      </div>
    )
  }
}

module.exports = App
