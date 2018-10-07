import React, {Component} from 'react'
import {Tabs, Tab, button} from 'react-bootstrap'
import AboutMe from './AboutMe'
import posts from './posts'
import { Card } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
var HtmlToReactParser = require('html-to-react').Parser;
var htmlToReactParser = new HtmlToReactParser();
import { EditorState, convertToRaw, ContentState, convertFromRaw } from 'draft-js';
var _ = require('lodash')
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
        question: {},
        editorState:  EditorState.createEmpty(),
    };
  }

  postArticle(){
  const uniqueId = (new Date).getTime();
  fetch('https://portfolio-18e3f.firebaseio.com/questions/' + uniqueId +'.json',
    {
      method:'PUT',
      body:JSON.stringify({
        htmlMarkUp: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
        rawFormat:  JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent())),
        id: uniqueId
    })
})
}


  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  // componentDidMount(){
  //   const URL = 'https://portfolio-18e3f.firebaseio.com/questions/' + this.props.match.params.id + '.json'
  //   fetch(URL)
  //   .then((res)=>res.json())
  //   .then((resJSON)=>{
  //     this.setState({
  //       question: resJSON,
  //       editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(resJSON.rawFormat)))
  //     })
  //   })
  // }

  render() {
    const { editorState } = this.state;
    return (
        <div>
            <Editor
              editorState={editorState}
              style={{height:'100%',width:'100%'}}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
          <button onClick={()=>{this.postArticle()}}>post</button>
      </div>
    );
  }
}

module.exports = App
