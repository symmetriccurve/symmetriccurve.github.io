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
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    var projects = [
      {
        name: 'Sensity Systems',
        role: 'UI/UX Developer',
        location: 'Texas',
        duration: 'July 2016 - Present',
        description: 'Sensity Systems is Company by choice',
        technologies: ['React', 'jekins'],
        responsibilities: [
          "Designed and Implemented Content Management System portal from the scracth",
          "Extensivley worked on the Elastic Search including mappings and building queries",
          "Created Reusable Components to share across the platform and documented the usage",
          "Maintained Dev, Test and Prod environments using Docker Images",
          "Handled Versioning of the application, releases and documented the user guide",
          "Extensive usage of Redux to Manage the State",
          "implemeted node proxy to authenticate with the backend services",
        ]
      },
      {
        name: 'Sensity Systems',
        role: 'UI Developer',
        location: 'California',
        duration: 'January 2016 - June 2016',
        description: 'Sensity Systems is Company by choice Sensity Systems is Company by choiceSensity Systems is Company by choiceSensity Systems is Company by choice',
        technologies: ['React', 'jekins','React', 'jekins'],
        responsibilities: [
          'Upgrade version of Reactjs, Nodejs of web application and dependent modules to latest versions.',
          'Build and maintain web pages using HTML 5, CSS3, React-Bootstrap, SASS and React.js framework',
          'Migrate existing functionality to new updated UI/UX with added features and functionalities.',
          'Actively participated in code merges, releases and setting up continuous integration/continuous deployment using Jenkins',
          'Managed multiple Environments spanning Develop, QA, Scaling and Security Handled and fixed multiple security vulnerabilities during penetrations testing(Qualys) and Performance testing.',
          'Handled key components of the projects such as DataGrid, Scheduler, Google Maps(V3) and Data layer of the application',
          'Contributed towards the Documentation of the product and release notes.',
          'Interacted with users at different levels through Weekly demos to ensure continuous feedback and meet user requirements.',
          'Developed and integrated functional test cases to test the user flows using protractor and generated test reports on each code push.',
          'Introduced many third-party tools to increased the developer experience. Migrated bower components to respective npm modules effectively decrease the size of the code base',
          'Introduced yarn to decrease the build time of the app and added ability to install modules in an isolated environment'
        ]
      },
      {
        name: 'Verizon Wireless',
        role: 'Mobile App Developer - iOS/Android',
        duration: 'November 2015 - December 2015',
        location: 'Massachusetts',
        description: 'Sensity Systems is Company by choice Sensity Systems is Company by choiceSensity Systems is Company by choiceSensity Systems is Company by choice',
        technologies: ['React', 'jekins'],
        responsibilities: [
          'Extensively worked on mobile app integration with Verizon ThingSpace Platform Developed Multiple mobile Application (Both iOS and Android) targeting IOT Platform using Facebook’s React Native',
          'Framework that has ability to control IOT devices.',
          'Used Google’s Firebase as backend, data querying and User Authentication. Maintained Developer certificates and provisioning certificates and app installs on multiple devices',
          'Set up Live reloads on multiple devices to ease the development on multiple devices to check look and feel of the UI during development.',
          'Implemented iOS Push Notification feature using Urban Airship as a third party provider',
          'Implemented JWT authentication for User Authentication and added role based UI responsiveness',
          'Extensively worked on Platform Maps to render markers (Devices Deployed), polylines(Routes) and polygons(Device Awareness) using Geo-fence Coordinates',
          'Build a independent module(NPM module) around the requirement and added capabilities to be used across multiple app builds',
          'Implemented Flux and Redux architecture to maintain state of the Applications Worked on apps namely iPair- Pairing IOT devices, CoHo – Control Home , CityWise – Control City wide IOT devices and AgTech – Control Agricultural Devices.',
          'Integrated live video stream using react-native- video for iOS platform and handled error cases.',
          'Collaborated with design team, QAs, scrum master and product owner to implement enhancements or new applications during daily stand-ups, sprint planning and sprint retrospectives.'
        ]
      },
      {
        name: 'BM Tech Solutions',
        role: 'Mobile App Developer - iOS',
        location: 'Ohio',
        duration: 'August 2015 - October 2015',
        description: 'Sensity Systems is Company by choice Sensity Systems is Company by choiceSensity Systems is Company by choiceSensity Systems is Company by choice',
        technologies: ['React', 'jekins'],
        responsibilities: [
        'Develop and maintain an employee management iOS app',
        'Add additional functionalities like secure login(oauth) and push notification.',
        'Integration with third-party user authentication and login (linkedin, google) Enhance UI and fix issues with multiple device compatibility',
        'Document the development process and steps to set-up the environment'
        ]
      },
      {
        name: 'Manpower Solutions',
        role: 'UI Developer - iOS',
        location: 'India',
        duration: 'November 2015 - December 2015',
        description: 'Sensity Systems is Company by choice Sensity Systems is Company by choiceSensity Systems is Company by choiceSensity Systems is Company by choice',
        technologies: ['React', 'jekins'],
        responsibilities: [
          'Designed and developed employee portal from the scratch',
          'Implemented functionalities to add/update/Delete employee documents online',
          'Added functionality to download employee records in multiple formats(PDF/doc)',
          'Implemented ability to upload CSV files and populate the forms on the portal Added widgets to ease the employee login and logout procedures'
        ]
      }
    ]
    const { classes } = this.props;
    const { value } = this.state;
    return(
      <div style={{width:'100%',background:'lightgray'}}>
          <div style={{padding:'5%',marginLeft:'3%',marginRight:'3%',backgroundColor:'white'}}>
            <div className='extraExtralarge-text'> VIKRAM BELDE - UI/UX Developer</div>
            {
              projects.map((eachProject)=>{
                return <Project projectInfo={eachProject}/>
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
