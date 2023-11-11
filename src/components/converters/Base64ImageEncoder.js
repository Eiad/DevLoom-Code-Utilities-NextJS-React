import React, { useState } from "react";
import "../../app/css/base64-image-converter.css";

const Base64ImageEncoder = () => {
  const placeholderBase64Image = "";
  const [base64, setBase64] = useState(placeholderBase64Image);
  const [imagePreviewSrc, setImagePreviewSrc] = useState(
    placeholderBase64Image
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target.result;
        setBase64(base64String.split(",")[1]); // Store without MIME type
        setImagePreviewSrc(base64String); // Set preview with MIME type
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBase64Change = (event) => {
    const inputBase64 = event.target.value;
    setBase64(inputBase64);

    // Prepend the MIME type if it's not part of the input string
    const imageSrc = isValidBase64Image(inputBase64)
      ? inputBase64
      : `data:image/png;base64,${inputBase64}`;
    setImagePreviewSrc(imageSrc);
  };

  const isValidBase64Image = (base64String) => {
    // This will check if the string starts with 'data:image' which is indicative of a complete Data URL
    // If not, we assume it might be just the Base64 encoded data part
    return base64String.startsWith("data:image/");
  };

  return (
    <div className="bs64-imge-container">
      <div className="encoderDecoderSection">
        <div className="bs64-input">
          <h4>Upload image</h4>
          <div className="bs64-preview-upload">
            {" "}
            <input
              id="upload"
              className="fileInput"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <h4>String</h4>
            <textarea
              className="textarea"
              placeholder="Paste Base64 string or upload an image to see encoded Base64 here"
              value={base64}
              onChange={handleBase64Change}
              rows={6}
              cols={30}
            />
          </div>
        </div>
        <div className="bs64-preview">
          <div className="bs64-preview-img border-round">
            {imagePreviewSrc && (
              // eslint-disable-next-line @next/next/no-img-element - valid case to use native img tag for Base64 src
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
