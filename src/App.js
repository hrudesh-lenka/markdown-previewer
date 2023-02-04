import './App.css';
import { useState } from 'react';
import { marked } from 'marked';
import PLACE_HOLDER from './placeholder';

function App() {
  const [text, setText] = useState(PLACE_HOLDER);
  const inputText = (event) => {
    setText(event.target.value);
  } 
  marked.setOptions({
    breaks: true
  });
  return (
    <div className="App">
        <textarea id="editor" onChange={inputText} 
        value={text}></textarea>

        <div id='preview' dangerouslySetInnerHTML={{
          __html: marked(text),
          }}>
        </div>
    </div>
  );
}

export default App;
