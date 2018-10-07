import React, {Component} from 'react'
import {Tabs, Tab, button} from 'react-bootstrap'
import AboutMe from './AboutMe'
import posts from './posts'
import { Card, Input, Icon } from 'antd';
var HtmlToReactParser = require('html-to-react').Parser;
var htmlToReactParser = new HtmlToReactParser();
var _ = require('lodash')
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allQuestions: [],
      filteredQuestions: [],
      searchString: ''
    };
  }

  componentDidMount(){
    fetch('https://portfolio-18e3f.firebaseio.com/questions.json')
    .then((res)=>res.json())
    .then((resJSON)=>{
      const objToArr = _.values(resJSON)
      this.setState({
          allQuestions: objToArr,
          filteredQuestions: objToArr
      })
    })
  }

  handlePostToAPI(){
    fetch('https://portfolio-18e3f.firebaseio.com/questions.json',
      {
        method: 'PUT',
        body: JSON.stringify(this.state.questions)
      })
  }

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

  handleSearch(searchString){
    let { filteredQuestions, allQuestions } = this.state

    var results=_.filter(allQuestions,function(item){
      return item.htmlMarkUp.indexOf(searchString)>-1;
    });

    if(searchString){
      console.log("results",results)
      this.setState({
        searchString,
        filteredQuestions: results
      })
    }else {
        this.setState({
          searchString,
          filteredQuestions: this.state.allQuestions
        })
    }
  }

  render() {
    const { filteredQuestions,searchString }  = this.state
    return (
      <div style={{marginTop:'2%',width:'100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <Input size="large" placeholder="Search for Question" style={{width:'75%',height:'50px',textAlign:'center'}} value={searchString} onChange={(e)=>this.handleSearch(e.target.value)}/>
        <div style={{width:'90%'}}>
        {
            filteredQuestions.map((eachQuestion,index)=>{
              return(
                <div key={eachQuestion.id} style={{paddingTop:'5%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                    <Card style={{width:'85%'}}>
                          { htmlToReactParser.parse(eachQuestion.htmlMarkUp) }
                          <div style={{textAlign:'right'}}>
                              <Link to={"/moreinfo/"+eachQuestion.id} params={{ id: eachQuestion.id }}><IconFont type="icon-tuichu" style={{fontSize: '30px'}}/> </Link>
                          </div>
                    </Card>

                    {/*  <span className='normal-text' style={{padding:'0 10px 0 10px'}}><Link to={"/moreinfo/"+eachQuestion.id} params={{ id: eachQuestion.id }}>Question Link</Link></span> */}
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
