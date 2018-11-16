import React from 'react';
import {Editor, EditorState, convertToRaw, ContentState} from 'draft-js';

/*
case 1: null
case 2: restore text
text is stored at convertToRaw(this.state.editorState.getCurrentContent())).blocks[0].text
*/

export default class App extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.value){
      this.state = {
        editorState: EditorState.createWithContent(ContentState.createFromText(this.props.value))
      };
    } else {
      this.state = {
        editorState: EditorState.createEmpty()
      };
    }
    this.onChange = (editorState) => {
      this.props.save(convertToRaw(this.state.editorState.getCurrentContent()).blocks[0].text)
      this.setState({editorState})
    };
  }
  render() {
    return (
      <div id="content">
        <h1>{this.props.date}</h1>
        <div className="editor">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}
