import React, {Component} from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import AboutMe from './AboutMe'
import posts from './posts'
class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
  }

  handleSelect(key) {
    //alert(`selected ${key}`);
    this.setState({ key });
  }

  render() {
		console.log("posts",posts);
    return (
      <Tabs
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id="controlled-tab-example"
      >
        <Tab eventKey={1} title="About Me">
          <AboutMe/>
        </Tab>
        <Tab eventKey={2} title="What I Do">
          Tab 2 content
        </Tab>
        <Tab eventKey={3} title="Contact">
          Tab 3 content
        </Tab>
				<Tab eventKey={4} title="Posts">
	          {}
        </Tab>
      </Tabs>
    );
  }
}

module.exports = App
