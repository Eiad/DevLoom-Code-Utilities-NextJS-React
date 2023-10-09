function FormatterContent(props) {
  const {
    inputCode,
    handleInputChange,
    formatCode,
    formattedCode,
    codeType, // e.g., 'HTML', 'JS', 'CSS', 'JSON', etc.
  } = props;

  return (
    <div className="formatter-page">
      <h1>{codeType} Formatter</h1>
      <div className="input-section">
        <h2>Input</h2>
        <textarea
          value={inputCode}
          onChange={handleInputChange}
          placeholder={`Copy-paste your ${codeType} here...`}
        />
      </div>

      <button onClick={formatCode}>Format {codeType}</button>

      <div className="output-section">
        <h2>Formatted Output</h2>
        <textarea value={formattedCode} readOnly key={formattedCode} />
        <div className="pre-container">
          <pre>{formattedCode}</pre>
        </div>
      </div>
    </div>
  );
}

export default FormatterContent;
