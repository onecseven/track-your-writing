import React from 'react';
import {Editor, EditorState, convertToRaw} from 'draft-js';

/*
case 1: null
case 2: restore text
*/

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
      <div id="content">
        <h1>Draft.js Editor</h1>
        <div className="editor">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
          <button onClick={() => {
            console.log((convertToRaw(this.state.editorState.getCurrentContent())).blocks[0].text)
}}>hi</button>
        </div>
      </div>
    );
  }
}
