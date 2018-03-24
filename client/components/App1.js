import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import AboutMe from './AboutMe'
import Resume from './Resume'
import Projects from './posts/Getting-Started-With-React'
import Project from './Project'
//import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

function TabContainer(props) {
  return (
    <Typography component="div" style={{}}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class App extends React.Component {
  state = {
    value: 3,
    response: ''
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount(){
    fetch('https://portfolio-18e3f.firebaseio.com/portfolio.json')
    .then(res=>res.json())
    .then(resJson=>{
      this.setState({
        response: resJson
      })
    })
    .catch(error=>{
      console.log("error",error);
    })
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const response = this.state.response
    if(response == '') return <div/>
    return(
      <div style={{width:'100%',background:'lightgray'}}>
          <div style={{padding:'5%',marginLeft:'3%',marginRight:'3%',backgroundColor:'white'}}>
            <hr/>
              <div className='extraExtralarge-text'>
                <div className='typewriter'>
                  <h1>
                    {response.firstName.toUpperCase() + ' '+ response.lastName.toUpperCase()  + ' - ' + response.title}
                  </h1>
                </div>
              </div>
              <div className='large-text'>{response.aboutMe}</div>
              <div style={{display:'flex',flexDirection:'row'}}>
                {
                  response.links.map(eachLink=>{
                    return (
                      <div style={{paddingRight:'0.5%',paddingLeft:'0.5%'}}>
                        <a href={eachLink.link}>{eachLink.label}</a>
                      </div>
                    )
                  })
                }
              </div>
            <hr/>
            {
              response.projects.map((eachProject)=>{
                return (
                  <div>
                      <Project projectInfo={eachProject} toBeBolded={response.toBeBolded}/>
                  </div>
                )
              })
            }
          </div>
      </div>
    )
    // return (
    //   <div className={classes.root}>
    //     <AppBar position="static">
    //       <Tabs value={value} onChange={this.handleChange}>
    //         <Tab label="About Me" />
    //         <Tab label="Projects" />
    //         <Tab label="Contact"/>
    //         <Tab label="Resume"/>
    //       </Tabs>
    //     </AppBar>
    //     {value === 3 && <TabContainer><Resume/></TabContainer>}
    //     {value === 1 && <TabContainer><AboutMe/></TabContainer>}
    //     {value === 0 && <TabContainer><Projects/></TabContainer>}
    //     {value === 2 && <TabContainer>Item Three</TabContainer>}
    //   </div>
    // );
  }
}

export default withStyles(styles)(App);
//module.exports = App
