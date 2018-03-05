import React from 'react';
class Project extends React.Component {
  render(){
    return (
      <div style={{marginTop:'2%',marginLeft:'2%',marginRight:'2%', marginBottom:'2%',boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.16'}}>
        <div className='row'>
          <div className='col-md-8 extralarge-text'>
            <div className='row'> {this.props.projectInfo.name}  {this.props.projectInfo.location}</div>
          </div>
          <div className='col-md-4 large-text'>
            {this.props.projectInfo.duration}
          </div>
        </div>
        <div className='row'> {this.props.projectInfo.description} </div>
          <ul className='normal-text'>
            {
              this.props.projectInfo.responsibilities.map((eacjResponsibility)=>{
                return <li> {eacjResponsibility} </li>
              })
            }
          </ul>
      </div>
    );
  }
}

module.exports = Project
