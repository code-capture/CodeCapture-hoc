import React from "react";
import AceEditor from "react-ace";
 
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
 
function onChange(newValue) {
  console.log("change", newValue);
}
 
// Render editor
function Editor() {
  return <AceEditor
  placeholder="Placeholder Text"
  mode="javascript"
  theme="monokai"
  name="blah2"
  onChange={onChange}
  width="100%"
  fontSize={14}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={`function onLoad(editor) {
  console.log("heyo! looks like the picture had no code.. go back and retake?");
}`}
  setOptions={{
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  showLineNumbers: true,
  tabSize: 2,
  }}/>
     
}
export default Editor;
