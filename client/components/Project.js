import React from 'react'
const toBeBolded = ['NodeJs','Redux','React']

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Project extends React.Component{

  getFormattedText(inputText){
    const formattedArray = inputText.split(" ")
        return(
          <div>
          {
            formattedArray.map((eachItem,i)=>{
              if(this.props.toBeBolded.indexOf(eachItem) > -1){
                return <span key={eachItem+i}><strong>{' ' + eachItem}</strong></span>
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

  render(){
    return (
      <div style={{padding:'2%',marginTop:'3%',boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.16'}}>
        <div className='row'>
          <div className='col-md-8 extralarge-text'>
            <div className='row'> {this.props.projectInfo.name + ' - ' + this.props.projectInfo.location}</div>
          </div>
          <div className='col-md-4 large-text'>
            {this.props.projectInfo.timeFrame}
          </div>
        </div>
        <div className='row' style={{padding:'2%',textAlign:'justify'}}>
          {this.getFormattedText(this.props.projectInfo.fewWordsAboutCompany)}
        </div>
          <ul className='normal-text'>
            {
              this.props.projectInfo.projects.map(eachProject=>{
                return(
                  <div className='col-md-12' style={{marginTop:'1%'}}>
                    <hr/>
                    <div className='row large-text'>{eachProject.projectName + ' - ' + eachProject.location}</div>
                      <div style={{marginLeft:'2%',marginTop:'0.5%'}} className='lightgray'>
                        {eachProject.fewWordsAboutProject}
                      </div>
                      <div style={{marginLeft:'5%',marginTop:'0.5%'}}>
                        {
                          eachProject.responsibilities.map((eachResponsibility)=>{
                            return <li>{this.getFormattedText(eachResponsibility)}</li>
                          })
                        }
                      </div>
                  </div>
                )
              })
            }
          </ul>
          <hr/>
          <div style={{padding:'2px'}}>
            <ul className='normal-text'>
              {
                [].map((eachTechnology)=>{
                  return <li style={{float:'left',marginLeft:'2%',listStyle:'none'}}> {eachTechnology} </li>
                })
              }
            </ul>
          </div>
      </div>
    );
  }
}

module.exports = Project
