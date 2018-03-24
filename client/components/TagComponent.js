import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap';
class TagComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            labels: this.props.allLabels.map((eachLabel)=>{
                return {label:eachLabel, isActive: false}
            })
        }
    }

    updateLabelInfo(props){
        var labels = this.state.labels
        this.state.labels.map((eachLabel)=>{
            if( props.activeLabels.indexOf(eachLabel.label) > -1 ) {
                eachLabel.isActive = true
            }else {
                eachLabel.isActive = false
            }
        })

        this.setState({
           labels
        })
    }

    componentDidMount(){
        this.updateLabelInfo(this.props)
    }

    componentWillReceiveProps(newProps){
        if(JSON.stringify(this.props) != JSON.stringify(newProps)){
            this.updateLabelInfo(newProps)
        }
    }

    handleToggle(Index){
        var labels = this.state.labels
        labels[Index].isActive = !labels[Index].isActive
        this.setState({
            labels
        })
    }

    returnUpdatedTags(){
        var labels = []
        this.state.labels.map(eachLabel=>{
            if(eachLabel.isActive) {
                labels.push(eachTag.label)
            }
        })

        return labels
    }

    render() {
        var componentWidth = '560px'
        return (
            <div style={{display:'flex',overflowY:'auto',flexWrap:'wrap',height:'100px',width:componentWidth,backgroundColor:'white',border:'2px solid #F6F6F6'}}>
                {this.state.labels.map((eachItem,Index)=>{
                    return(
                        <div key={Index}  style={{cursor: 'pointer',display:'flex',alignItems:'center',justifyContent:'center',marginTop:'5px',marginLeft:'5px',marginRight:'5px',height:'40px',backgroundColor:eachItem.isActive ? '#e65375' : 'white',border:'3px solid #F6F6F6'}} onClick={()=>{this.handleToggle(Index)}}>
                            <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'30px',marginLeft:'8px',marginRight:'8px'}}>
                                <span style={{color:eachItem.isActive ? 'white' : '#434040'}} className='small-text'>  {eachItem.label.charAt(0).toUpperCase() + eachItem.label.slice(1)} </span>
                            </div>
                        </div>
                    )
                    })}
            </div>
        );
    }
}

module.exports = TagComponent;
