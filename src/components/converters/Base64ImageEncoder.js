import React, { useState, useRef } from "react";
import "../../app/css/base64-image-converter.css";
import { placeholderBase64Image } from "../../constants/base64PlaceholderImage";

const Base64ImageEncoder = () => {
  const [base64, setBase64] = useState(placeholderBase64Image);
  const [imagePreviewSrc, setImagePreviewSrc] = useState(
    placeholderBase64Image
  );
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setError("");
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    // Exclude SVG files
    if (file.type.startsWith("image/") && file.type !== "image/svg+xml") {
      const maxFileSize = 2 * 1024 * 1024; // 2MB size limit
      if (file.size <= maxFileSize) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64String = e.target.result;
          setBase64(base64String.split(",")[1]);
          setImagePreviewSrc(base64String);
        };
        reader.onerror = (e) => {
          setError("An error occurred while reading the file.");
          console.error("FileReader error: ", e);
        };
        reader.readAsDataURL(file);
      } else {
        setError("File is too large. Please select a file smaller than 2MB.");
      }
    } else {
      setError("Please select an image file (SVG not allowed).");
      fileInputRef.current.value = ""; // Reset the file input if non-image or SVG
    }
  };

  const handleBase64Change = (event) => {
    setError("");
    const inputBase64 = event.target.value;
    setBase64(inputBase64);
    const imageSrc = isValidBase64Image(inputBase64)
      ? inputBase64
      : `data:image/png;base64,${inputBase64}`;
    setImagePreviewSrc(imageSrc);
  };

  const isValidBase64Image = (base64String) => {
    return base64String.startsWith("data:image/");
  };

  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(base64).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="bs64-imge-container">
      {error && <p className="error-message">{error}</p>}
      <h4>Upload an image</h4>
      <div className="bs64-preview-upload">
        <input
          ref={fileInputRef}
          id="upload"
          className="fileInput"
          type="file"
          onChange={handleFileChange}
        />
      </div>
      <div className="encoderDecoderSection">
        <div className="bs64-input">
          <div className="bs64-preview-string">
            <h4>Or type a Base64 String</h4>
            <textarea
              className="textarea"
              placeholder="Paste Base64 string or upload an image to see encoded Base64 here"
              value={base64}
              onChange={handleBase64Change}
              rows={6}
              cols={30}
            />
            <button className="copy-btn" onClick={handleCopy}>
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
        <div className="bs64-preview">
          <h4>Preview</h4>
          <div className="bs64-preview-img border-round text-center">
            {imagePreviewSrc && (
              <img
                className="image-preview"
                src={imagePreviewSrc}
                alt="Preview"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base64ImageEncoder;
