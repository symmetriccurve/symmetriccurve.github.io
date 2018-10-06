import React, {Component} from 'react'
import {Tabs, Tab, button} from 'react-bootstrap'
import AboutMe from './AboutMe'
import posts from './posts'
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
          questions: resJSON || []
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

  getFormattedText(inputText){
    const formattedArray = inputText.split(" ")
        return(
          <div>
          {
            formattedArray.map((eachItem,i)=>{
              if(eachItem.slice(0,4) == "http"){
                const linkANDText = eachItem.split("*")
                return <a href={linkANDText[0]} key={eachItem+i}>{linkANDText[1]}</a>
              }else {
                return <span key={eachItem+i}>{' ' + eachItem}</span>
              }
            })
          }
          </div>
        )
    // const formattedArray = inputText.split(" ")
    // return (
    //     <div>
    //       {
    //         formattedArray.map(eachItem=>{
    //           if(eachItem == 'adada'){
    //             return <span><strong>eachItem</strong></span>
    //           }else {
    //             <span key={eachItem}>eachItem</span>
    //           }
    //         })
    //       }
    //     </div>
    // )

  }

  handleAddQuestion(){
    let questions = this.state.questions
    questions.push({question:'your question goes here',answer:'your answer here',isEditing:true})
    this.setState({
      questions
    })
  }

  render() {
    return (
      <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <div style={{width:'90%'}}>
        {
          this.state.questions.map((eachQuestion,index)=>{
            if(eachQuestion.isEditing){
              return(
                <div style={{marginTop:'20px',marginBottom:'20px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.16'}}>
                  <hr/>
                  <span className='large-text'>Question</span>
                  <div>
                    <textarea style={{width:'1000px'}} value={eachQuestion.question} onChange={(e)=>{this.handleQuestionInput(e,index)}}/>
                  </div>
                  <span className='large-text'>Answer</span>
                  <div>
                    <textarea style={{width:'1000px',height:'200px'}} value={eachQuestion.answer} onChange={(e)=>{this.handleAnswerInput(e,index)}}/>
                  </div>
                  <div>
                     <button onClick={()=>{this.handleDone(index)}}>Done</button>
                  </div>
                  <hr/>
                </div>
              )
            }
            return(
              <div style={{paddingTop:'20px',paddingBottom:'20px',marginTop:'30px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.16'}}>
                <hr/>
                <span className='large-text'>Question</span>
                <div>
                  {eachQuestion.question}
                </div>
                <span className='large-text'>Answer</span>
                <div>
                  {this.getFormattedText(eachQuestion.answer)}
                </div>
                <div>
                  {/* <button onClick={()=>{this.handleEdit(index)}}>Edit</button> */}
                </div>
              </div>
            )
          })
        }
        {/*<div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <div className='m-t-2'>
              <button onClick={()=>{this.handleAddQuestion()}}>Add another Question</button>
            </div>
            <div className='m-t-2'>
              <button onClick={()=>{this.handlePostToAPI()}}>Post</button>
            </div>
          </div>*/}
      </div>
      </div>
    );
  }
}

module.exports = App
