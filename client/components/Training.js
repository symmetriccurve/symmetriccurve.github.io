import React, {Component} from 'react'
// import {Tabs, Tab, button} from 'react-bootstrap'
// import AboutMe from './AboutMe'
// import posts from './posts'
import { Card } from 'antd';
// var HtmlToReactParser = require('html-to-react').Parser;
// var htmlToReactParser = new HtmlToReactParser();
// var _ = require('lodash')
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      question: {}
    };
  }

  // componentDidMount(){
  //   const URL = 'https://portfolio-18e3f.firebaseio.com/questions/' + this.props.match.params.id + '.json'
  //   fetch(URL)
  //   .then((res)=>res.json())
  //   .then((resJSON)=>{
  //       debugger
  //     this.setState({
  //         question: resJSON
  //     })
  //   })
  // }

  // handlePostToAPI(){
  //   fetch('https://portfolio-18e3f.firebaseio.com/questions.json',
  //     {
  //       method: 'PUT',
  //       body: JSON.stringify(this.state.questions)
  //     })
  // }
  //
  // handleSelect(key) {
  //   //alert(`selected ${key}`);
  //   this.setState({ key });
  // }
  //
  // handleEdit(index){
  //   let questions = this.state.questions
  //   questions[index].isEditing = true
  //   this.setState({
  //     questions
  //   })
  // }
  //
  // handleDone(index){
  //   let questions = this.state.questions
  //   questions[index].isEditing = false
  //   this.setState({
  //     questions
  //   })
  // }
  //
  // handleQuestionInput(e,index){
  //   let questions = this.state.questions
  //   questions[index].question = e.target.value
  //   this.setState({
  //     questions
  //   })
  // }
  //
  // handleAnswerInput(e,index){
  //   let questions = this.state.questions
  //   questions[index].answer = e.target.value
  //   this.setState({
  //     questions
  //   })
  // }
  //
  // handleAddQuestion(){
  //   let questions = this.state.questions
  //   questions.push({question:'your question goes here',answer:'your answer here',isEditing:true})
  //   this.setState({
  //     questions
  //   })
  // }

  render() {
    const { question } = this.state
    return (
      <div className='makeItCenter column'>
            <Card title={'UI Training'} className='topSpace'>
                  <a href='https://docs.google.com/document/d/e/2PACX-1vTXSIp-z3Se_FK9rXenGSpASqNpjgld3wkwpzmLMNVyXTwKkjE58fikjdQ-yLV0_9BirxsedaMtD1tm/pub'>Training Details</a>
            </Card>
            <Card title={'Javascipt Training'} className='topSpace'>
                  <a href='https://docs.google.com/document/d/e/2PACX-1vTXSIp-z3Se_FK9rXenGSpASqNpjgld3wkwpzmLMNVyXTwKkjE58fikjdQ-yLV0_9BirxsedaMtD1tm/pub'>Training Details</a>
            </Card>
            <Card title={'React Training'} className='topSpace'>
                  <a href='https://docs.google.com/document/d/e/2PACX-1vTXSIp-z3Se_FK9rXenGSpASqNpjgld3wkwpzmLMNVyXTwKkjE58fikjdQ-yLV0_9BirxsedaMtD1tm/pub'>Training Details</a>
            </Card>
      </div>
    );
  }
}

module.exports = App
