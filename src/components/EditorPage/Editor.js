import React, { useState} from "react";
import AceEditor from "react-ace";
 
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
 
function Editor() {
  const [editorText, setEditorText] = useState('');
  return <AceEditor
  // placeholder="Placeholder Text"
  mode="javascript"
  theme="monokai"
  name="blah2"
    onChange={(newValue)=>setEditorText(newValue)}
  width="100%"
  fontSize={14}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={editorText}
  setOptions={{
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  showLineNumbers: true,
  tabSize: 2,
  }}/>
     
}
export default Editor;
