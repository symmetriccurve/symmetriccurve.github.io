import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import reactDef from '../../resources/react-def.jpg'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  button: {
   margin: theme.spacing.unit,
 }
});

class Project extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text: ""
    }
  }

  render(){
    const { classes } = this.props
    return(
      <div>
        <Paper className={classes.root} elevation={2}>
          <Typography type="headline" component="h3">
            Gettin Started With React
          </Typography>
          <Typography component="h3" type="headline">
              <hr/>
              Welcome to the World of React !
              <br/>
              <img src={reactDef}/><br/><br/>

              I wonder Why did Facebook came up with this word(React), it's' because it reacts immediately to changes(Hot Reload) but well the hot reload added to react way after React is being out.
              Or Is it Just a React-ion to Angular 1, Either the thought React has made a lot of developers React like never before.<br/>
                <br/>
              Time Travel - OMG, I cannot believe this<br/>
              Hot Reload - Really, you dont have to refresh the browser to see the change ? <br/>
                <br/>
              and all the whistles and bells for a simple view library ?

              well, What If I say you can do a Android App and iOS App using react and that is termed as React-Native.<br/><br/>

              Reactjs is for web <br/>
              React-native for Mobile<br/>

              The list is not limited to mobile and web, react works on pricipal called Learn Oncer and Write any where. You can do mac application, windows phone apps, apple watch apps, Apple Tv Apps, Samsung Gear VR apps.
              just imagine the possibilities of react.The concept of react boils down to two different different concepts, though I say them as different they fall in to the same category of JSON objects.

              <br/>
              <br/> State
              <br/> Props <br/><br/>

              A State of React is a just the data that is created inside the React Component, A props is the data that is passed into the react Component externally.
              That's' it, whole react life cycle runs on this two pices of concept
          </Typography>
          <hr/>
        </Paper>


        <Paper className={classes.root} elevation={2}>
          <Typography type="headline" component="h3">
            Testing React Components
          </Typography>
          <Typography component="h3" type="headline">
    

          </Typography>
          <hr/>
        </Paper>
      </div>
    )
  }

}



Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);
