import { useState } from "react";
import { faker } from '@faker-js/faker';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [actionMessage, setActionMessage] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    setActionMessage('Converted to Uppercase');
    clearActionMessage();
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    setActionMessage('Converted to Lowercase');
    clearActionMessage();
  }

  const handleRevClick = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
    setActionMessage('Text Reversed');
    clearActionMessage();
  }

  const handleAutoGenerate = () => {
    let newText = faker.lorem.paragraph();
    setText(newText);
    setActionMessage('Auto Generated Text');
    clearActionMessage();
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setActionMessage('Text Copied!');
      clearActionMessage();
    });
  }

  const handleClearClick = () => {
    setText("");
    setActionMessage('Text Cleared');
    clearActionMessage();
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      if (event.target.value.trim() === '') {
        event.preventDefault();
      }
    }
  }

  const clearActionMessage = () => {
    setTimeout(() => setActionMessage(''), 2000); // Clear the message after 2 seconds
  }

  // Calculate word count, handle empty text case
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container my-5">
        <h2>{props.heading}</h2>
        
        {actionMessage && (
          <div className="alert alert-info" role="alert">
            {actionMessage}
          </div>
        )}

        <div className="textarea-container" style={{ position: 'relative' }}>
          <textarea
            className="form-control"
            id="myBox"
            rows={8}
            value={text}
            placeholder="Enter Text"
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
            style={{ paddingRight: '50px' }}
          ></textarea>
          <button
            className="btn btn-primary"
            onClick={handleCopy}
            style={{
              position: 'absolute',
              right: '10px',
              top: '10px',
              padding: '5px 10px'
            }}
          >
            <i className="fas fa-copy"></i>
          </button>
        </div>

        <div className="button-group mt-2">
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lowercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleRevClick}>Reverse Text</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleAutoGenerate}>Auto Generate Text</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        </div>
      </div>

      <div className="container my-4">
        <h2>Your text summary</h2>
        <p><b>{wordCount}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * wordCount}</b> Minutes Read</p>
      </div>
    </>
  )
}
