import React from 'react';
class Project extends React.Component {

  getFormattedText(inputText){
    const formattedArray = inputText.split(" ")
        return(
          <div>
          {
            formattedArray.map((eachItem,i)=>{
              if(['NodeJs','Redux','React'].indexOf(eachItem) > -1){
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
            {this.props.projectInfo.duration}
          </div>
        </div>
        <div className='row' style={{padding:'2%',textAlign:'justify'}}>
          {this.getFormattedText(this.props.projectInfo.fewWordsAboutCompany)}
        </div>
          <ul className='normal-text'>
            {
              this.props.projectInfo.responsibilities.map((eacjResponsibility)=>{
                return <li> {this.getFormattedText(eacjResponsibility)} </li>
              })
            }
          </ul>
          <hr/>
          <div style={{padding:'2px'}}>
            <ul className='normal-text'>
              {
                this.props.projectInfo.technologies.map((eachTechnology)=>{
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
