import React from "react"
import { Editor, EditorState, convertToRaw, ContentState } from "draft-js"
export default class Draft extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wordCount: 0
    }
    if (this.props.value) {
      console.log("full", this.props.value)
      this.state = {
        editorState: EditorState.createWithContent(
          ContentState.createFromText(this.props.value)
        ),
        wordCount: this.props.value.split(" ").length || 0
      }
    } else {
      console.log("empty")
      this.state = {
        editorState: EditorState.createEmpty(),
        wordCount: 0
      }
    }
    this.setDomEditorRef = ref => (this.domEditor = ref)

    this.onChange = editorState => {
      let txt = convertToRaw(this.state.editorState.getCurrentContent())
        .blocks[0].text
      this.props.save(txt)
      this.setState({ editorState })
      let length = txt.split(" ").length || 0
      this.setState({ wordCount: length })
      this.props.chromeSave()
    }
  }

  componentDidMount() {
    this.domEditor.focus()
  }
  render() {
    return (
      <div id="content">
        <h1 className="date">{this.props.date}</h1>
        <div>
          <span onClick={() => console.log(this.state)}>
            {`${this.state.wordCount}/1000`}
          </span>
        </div>
        <div className="editor" onClick={() => this.domEditor.focus()}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            ref={this.setDomEditorRef}
          />
        </div>
      </div>
    )
  }
}
