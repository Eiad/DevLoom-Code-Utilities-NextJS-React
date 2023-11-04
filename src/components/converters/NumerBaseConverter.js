import React, { useState } from "react";
import Image from "next/image";
import "../../app/css/num-base-converter.css";

const NumberBaseConverter = () => {
  // State hooks for different number systems and tooltip text
  const [decimalNumber, setDecimalNumber] = useState("");
  const [binaryNumber, setBinaryNumber] = useState("");
  const [hexNumber, setHexNumber] = useState("");
  const [octalNumber, setOctalNumber] = useState("");
  const [customBase, setCustomBase] = useState(10);
  const [customBaseNumber, setCustomBaseNumber] = useState("");
  const [tooltipText, setTooltipText] = useState("");

  // Function to convert a decimal number to different number bases
  const convertFromDecimal = (decimalValue) => {
    setDecimalNumber(decimalValue);
    setBinaryNumber(parseInt(decimalValue, 10).toString(2));
    setHexNumber(parseInt(decimalValue, 10).toString(16).toUpperCase());
    setOctalNumber(parseInt(decimalValue, 10).toString(8));
    setCustomBaseNumber(parseInt(decimalValue, 10).toString(customBase));
  };

  // Handlers to update state based on user input for different number bases
  // Each ensures that the input matches the valid characters for that base
  const handleDecimalChange = (value) => {
    const regex = /^[0-9]*$/;
    if (regex.test(value)) {
      convertFromDecimal(value);
    }
  };

  const handleBinaryChange = (value) => {
    const regex = /^[01]*$/;
    if (regex.test(value)) {
      setBinaryNumber(value);
      const decimal = parseInt(value, 2);
      if (!isNaN(decimal)) {
        convertFromDecimal(decimal.toString());
      }
    }
  };

  const handleHexChange = (value) => {
    const regex = /^[0-9a-fA-F]*$/;
    if (regex.test(value)) {
      setHexNumber(value);
      const decimal = parseInt(value, 16);
      if (!isNaN(decimal)) {
        convertFromDecimal(decimal.toString());
      }
    }
  };

  const handleOctalChange = (value) => {
    const regex = /^[0-7]*$/;
    if (regex.test(value)) {
      setOctalNumber(value);
      const decimal = parseInt(value, 8);
      if (!isNaN(decimal)) {
        convertFromDecimal(decimal.toString());
      }
    }
  };

  // Updates the custom base and reconverts the number when the base changes
  const handleCustomBaseChange = (base) => {
    setCustomBase(base);
    if (decimalNumber) {
      const custom = parseInt(decimalNumber, 10).toString(base);
      setCustomBaseNumber(custom);
    }
  };

  // Similar to other handlers, but dynamically creates regex based on the custom base
  const handleCustomBaseNumberChange = (value) => {
    const validChars = "0123456789abcdefghijklmnopqrstuvwxyz".slice(
      0,
      customBase
    );
    const regex = new RegExp(`^[${validChars}]*$`, "i");
    if (regex.test(value)) {
      setCustomBaseNumber(value);
      const decimal = parseInt(value, customBase);
      if (!isNaN(decimal)) {
        convertFromDecimal(decimal.toString());
      }
    }
  };

  // Function to clear all input fields
  const clearAllFields = () => {
    setDecimalNumber("");
    setBinaryNumber("");
    setHexNumber("");
    setOctalNumber("");
    setCustomBaseNumber("");
  };

  // Function to copy the text of a field to the clipboard and show tooltip
  const copyToClipboard = async (text, fieldName) => {
    try {
      await navigator.clipboard.writeText(text);
      setTooltipText(`${fieldName} copied!`);
      setTimeout(() => setTooltipText(""), 2000);
    } catch (err) {
      setTooltipText(`Failed to copy: ${err}`);
    }
  };

  // JSX to render the Number Base Converter UI
  return (
    <div className="converter-container border-round">
      <h2>Number Base Converter</h2>
      <div className="tooltip">{tooltipText}</div>
      <div className="input-group">
        <label htmlFor="binary-input">Base 2 (Binary):</label>
        <input
          id="binary-input"
          type="text"
          value={binaryNumber}
          onChange={(e) => handleBinaryChange(e.target.value)}
        />
        <div
          className="num-base-copy-button"
          title="Copy to clipboard"
          onClick={() => copyToClipboard(binaryNumber, "Binary")}
        >
          <Image src="/icons/copy-icon.svg" width={20} height={20} alt="Copy" />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="octal-input">Base 8 (Octal):</label>
        <input
          id="octal-input"
          type="text"
          value={octalNumber}
          onChange={(e) => handleOctalChange(e.target.value)}
        />
        <div
          className="num-base-copy-button"
          title="Copy to clipboard"
          onClick={() => copyToClipboard(octalNumber, "Octal")}
        >
          <Image src="/icons/copy-icon.svg" width={20} height={20} alt="Copy" />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="decimal-input">Base 10 (Decimal):</label>
        <input
          id="decimal-input"
          type="text"
          value={decimalNumber}
          onChange={(e) => handleDecimalChange(e.target.value)}
        />
        <div
          className="num-base-copy-button"
          title="Copy to clipboard"
          onClick={() => copyToClipboard(decimalNumber, "Decimal")}
        >
          <Image src="/icons/copy-icon.svg" width={20} height={20} alt="Copy" />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="hex-input">Base 16 (Hexadecimal):</label>
        <input
          id="hex-input"
          type="text"
          value={hexNumber}
          onChange={(e) => handleHexChange(e.target.value)}
        />
        <div
          className="num-base-copy-button"
          title="Copy to clipboard"
          onClick={() => copyToClipboard(hexNumber, "Hex")}
        >
          <Image src="/icons/copy-icon.svg" width={20} height={20} alt="Copy" />
        </div>
      </div>
      <div className="input-group custom-base-input">
        <label htmlFor="custom-base-input">Custom Base (2-36):</label>
        <select
          className="border-round"
          id="custom-base-input"
          value={customBase}
          onChange={(e) => handleCustomBaseChange(parseInt(e.target.value, 10))}
        >
          {Array.from({ length: 35 }, (_, i) => i + 2).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <input
          id="custom-base-number-input"
          type="text"
          value={customBaseNumber}
          onChange={(e) => handleCustomBaseNumberChange(e.target.value)}
        />
        <div
          className="num-base-copy-button"
          title="Copy to clipboard"
          onClick={() =>
            copyToClipboard(customBaseNumber, "Custom Base Number")
          }
        >
          <Image src="/icons/copy-icon.svg" width={20} height={20} alt="Copy" />
        </div>
      </div>
      <button className="clear-button" onClick={clearAllFields}>
        Clear
      </button>
    </div>
  );
};

export default NumberBaseConverter;
