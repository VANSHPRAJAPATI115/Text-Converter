import '@fortawesome/fontawesome-free/css/all.min.css';

export default function CopyButton({ text }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  }

  return (
    <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
      <i className="fas fa-copy"></i> Copy Text
    </button>
  );
}
