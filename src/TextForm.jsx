import { useState } from "react";
import { faker } from '@faker-js/faker';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleRevClick = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
  }

  const handleAutoGenerate = () => {
    let newText = faker.lorem.paragraph();
    setText(newText);
  }

  const handleCopy = () => {
    var newText = document.getElementById('myBox');
    newText.select();
    navigator.clipboard.writeText(newText.value);
  }

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
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

  // Calculate word count, handle empty text case
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container my-5">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows={8}
            value={text}
            placeholder="Enter Text"
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleRevClick}>Reverse Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleAutoGenerate}>Auto Generate Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      </div>

      <div className="container my-4">
        <h2>Your text summary</h2>
        <p><b>{wordCount}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split("").filter((element)=>{return element.length !==0}).length}</b> Minutes Read</p>
      </div>
    </>
  )
}
