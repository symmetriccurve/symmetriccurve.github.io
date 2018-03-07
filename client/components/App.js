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
    var profile = {
      links:[{link:'https://github.com/symmetriccurve',label:'Github'},{link:'https://www.linkedin.com/in/vikrambelde/',label:'LinkedIn'},,{link:'https://www.npmjs.com/~bevikram',label:'npm'},{link:'https://itunes.apple.com/us/developer/vikram-belde',label:'Apps'},{link:'https://github.com/symmetriccurve',label:'Github'}],
      "firstName": "Vikram",
      "lastName":"Belde",
      "title": "UI/UX Developer",
      "githubLink":"https://github.com/symmetriccurve",
      "linkedInProfile":"https://www.linkedin.com/in/vikrambelde/",
      "aboutMe":"Enthuastic Javascript developer cutting through the technology and learning to the level of dust.",
      "projects": [{
        name: 'Verizon - Sensity Systems (Project 2)',
        role: 'UI/UX Developer',
        location: 'Texas',
        duration: 'July 2017 - Present',
        fewWordsAboutCompany: 'Sensity® Systems uses energy-efficient LED lighting as the foundation for its IoT platform for Smart Cities. The company enables light owners to capitalize on the LED conversion process by embedding networking technology within both retrofit and new LED luminaires. With the Sensity open, privacy-by-design, multiservice NetSense™ platform, lighting owners are able to reduce energy costs and implement a variety of Smart City applications and services, including public safety, environmental and weather monitoring, parking management and location analytics.',
        fewWordsAboutProject: 'CMS(Content Management System) ',
        technologies: ['Reactjs','Redux','Webpack','Docker','Elastic Search','Sass'],
        responsibilities: [
          "Designed and Implemented Content Management System portal from the scracth including the wireframes",
          "Extensivley worked on the Elastic Search including mappings and constructing queries",
          "Created Reusable Components to share across the CMS platform and documented the usage",
          "Maintained Dev, Test and Prod environments using Docker Images simultaneously deploying and maintaining the Instances",
          "Handled Versioning of the application, releases and documented the user guide",
          "Extensive usage of Redux to manage the state",
          "Implemeted node reverse proxy to forward UI requests to backend APIs",
          "Integrated ability to download the application state as a JSON file to ease bug fixing",
          "Implemented URL integration with Redux state and create URL from App state",
          "Added ability to download CSV file from user data selections",
          "Integrated React-Data-Grid to list the data and handle user selections",
          "Integrated Webpack to build and bundle the application and manage environment profiles"
        ],
        projects: [{
          role: 'UX Developer',
          projectName: '',
          responsibilities: [
              "Respons 2","Respons 4",,"Respons 5",,"Respons 6",,"Respons 7",
          ],
          achievements: [
            "Respons 2","Respons 4",,"Respons 5",,"Respons 6",,"Respons 7",
          ]
        }]
      },
      {
        name: 'Verizon - Sensity Systems (Project 1)',
        role: 'Web Developer',
        location: 'California',
        duration: 'January 2017 - June 2017',
        fewWordsAboutCompany: 'From population growth to rapid urbanization, communities are facing new challenges to maintaining high standards of livability, resiliency and sustainability. Using innovative Internet of Things (IoT) and machine-to-machine (M2M) communication solutions, city executives can help improve efficiency and revolutionize cities to create a better quality of life for both work and play,Verizon working towards building cities, counties, sports venues, college campuses and corporate facilities that leverage technologies to better engage with citizens',
        technologies: ['Reactjs','Jenkins','Docker','jQuery','Google Maps','Nodejs','Expressjs','Protractor','Enzyme','Chai','Mocha','Bower','Gulp'],
        responsibilities: [
          'Upgrade version of Reactjs, Nodejs of web application and dependent modules to latest versions.',
          'Build and maintain web pages using HTML 5, CSS3, React-Bootstrap, SASS and React.js framework',
          'Migrate existing functionality to new updated UI/UX with added features and functionalities.',
          'Actively participated in code merges, releases and setting up continuous integration/continuous deployment using Jenkins',
          'Managed multiple Environments spanning Develop, QA, Scaling and Security Handled and fixed multiple security vulnerabilities during penetrations testing(Qualys) and Performance testing.',
          'Handled key components of the projects such as DataGrid, Scheduler, Google Maps(V3) and Data layer of the application',
          'Contributed towards the documentation of the product and release notes.',
          'Interacted with users at different levels through Weekly demos to ensure continuous feedback and meet user requirements.',
          'Developed and integrated functional test cases to test the user flows using protractor and generated test reports on each code push.',
          'Introduced many third-party tools to increased the developer experience. Migrated bower components to respective npm modules effectively decrease the size of the code base',
          'Introduced yarn to decrease the build time of the app and added ability to install modules in an isolated environment'
        ],
        projects: [{
          role: 'UX Developer',
          projectName: '',
          responsibilities: [
              "Respons 2","Respons 4",,"Respons 5",,"Respons 6",,"Respons 7",
          ],
          achievements: [
            "Respons 2","Respons 4",,"Respons 5",,"Respons 6",,"Respons 7",
          ]
        }]
      },
      {
        name: 'Verizon Wireless',
        role: 'Mobile App Developer - iOS/Android',
        duration: 'November 2015 - December 2016',
        location: 'Massachusetts',
        fewWordsAboutCompany: 'From population growth to rapid urbanization, communities are facing new challenges to maintaining high standards of livability, resiliency and sustainability. Using innovative Internet of Things (IoT) and machine-to-machine (M2M) communication solutions, city executives can help improve efficiency and revolutionize cities to create a better quality of life for both work and play,Verizon working towards building cities, counties, sports venues, college campuses and corporate facilities that leverage technologies to better engage with citizens',
        technologies: ['React-Native','Jest','Enzyme','Android','iOS','Objective C','Xcode'],
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
        ],
        projects: [{
          role: 'UX Developer',
          projectName: '',
          responsibilities: [
              "Respons 2","Respons 4",,"Respons 5",,"Respons 6",,"Respons 7",
          ],
          achievements: [
            "Respons 2","Respons 4",,"Respons 5",,"Respons 6",,"Respons 7",
          ]
        }]
      },
      {
        name: 'BM Tech Solutions',
        role: 'Mobile App Developer - iOS',
        location: 'Ohio',
        duration: 'August 2015 - October 2015',
        fewWordsAboutCompany: 'BM Tech Solutions is a technology and IT consulting firm and specialize in providing cost effective IT Solutions to  variety of customers. BM Tech Solutions is ready to assists in every phase of the project lifecycle from planning through execution as well as providing on-going support',
        technologies: ['iOS', 'jekins'],
        responsibilities: [
          'Develop and maintain an employee management iOS app',
          'Add additional functionalities like secure login(oauth) and push notification.',
          'Integration with third-party user authentication and login (linkedin, google) Enhance UI and fix issues with multiple device compatibility',
          'Document the development process and steps to set-up the environment'
        ],
        projects: [
          {
            role: 'UX Developer',
            projectName: '',
            responsibilities: [
                "Respons 2","Respons 4",,"Respons 5",,"Respons 6",,"Respons 7",
            ],
            achievements: [
              "Respons 2","Respons 4",,"Respons 5",,"Respons 6",,"Respons 7",
            ]
          },
          {
            role: 'UX Developer',
            projectName: '',
            responsibilities: [
                "Respons 2","Respons 4",,"Respons 5",,"Respons 6",,"Respons 7",
            ],
            achievements: [
              "Respons 2","Respons 4",,"Respons 5",,"Respons 6",,"Respons 7",
            ]
          }
        ]
      },
      {
        name: 'ManpowerGroup Solutions',
        role: 'Web Developer',
        location: 'India',
        duration: 'April 2013 - December 2013',
        fewWordsAboutCompany: 'ManpowerGroup offers a full range of solutions to power business strategy. With unparalleled expertise and breadth of offerings, ManpowerGroup Solutions/TAPFIN optimizes total talent management across your entire workforce to deliver measurable results and business success.',
        technologies: ['HTML','jQuery','Bootstrap','CSS'],
        responsibilities: [
          'Designed and developed employee portal from the scratch',
          'Implemented functionalities to add/update/Delete employee documents online',
          'Added functionality to download employee records in multiple formats(PDF/doc)',
          'Implemented ability to upload CSV files and populate the forms on the portal Added widgets to ease the employee login and logout procedures'
        ],
        projects: [{
          role: 'UX Developer',
          projectName: '',
          responsibilities: [
              "Respons 2","Respons 4",,"Respons 5",,"Respons 6",,"Respons 7",
          ],
          achievements: [
            "Respons 2","Respons 4",,"Respons 5",,"Respons 6",,"Respons 7",
          ]
        }]
      }
    ]
  }
    const { classes } = this.props;
    const { value } = this.state;
    const response = this.state.response
    if(response == '') return <div/>
    return(
      <div style={{width:'100%',background:'lightgray'}}>
          <div style={{padding:'5%',marginLeft:'3%',marginRight:'3%',backgroundColor:'white'}}>
            <hr/>
              <div className='extraExtralarge-text'> {response.firstName.toUpperCase() + ' '+ response.lastName.toUpperCase()  + ' - ' + response.title}</div>
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
                      <Project projectInfo={eachProject}/>
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
