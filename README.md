# LinkedIn Resume to HTML Converter - README

## Overview

This project provides a server that utilizes OpenAI's API to convert LinkedIn resumes (PDF format) into an HTML-based resume. The process involves uploading a LinkedIn resume in PDF format, extracting the text, passing it through a curated prompt to OpenAI's API, and receiving a structured HTML output. The HTML is then sent back to the client, where it can be downloaded as a file.

## Key Features

- **PDF Upload**: Accepts LinkedIn resume PDFs uploaded by the client.
- **Text Extraction**: Uses `pdf-parse` to extract the text from the PDF.
- **OpenAI Integration**: Sends the extracted text to OpenAI's API using a provided API key, passed from the client, to generate an HTML representation of the resume.
- **HTML Generation**: The server sends back the generated HTML response, which is converted into a downloadable file on the client-side.
- **File Handling**: Uses `multer` for handling file uploads on the server.

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js**: `>=14.x`
- **npm**: `>=6.x`

### Setup

1. **Clone the repository**:

    ```bash
    git clone <repo-url>
    cd <repo-directory>
    ```

2. **Install Dependencies**:

    Run the following command to install the necessary dependencies:

    ```bash
    npm install
    ```

 
## Running the Server

You can start the server by running the following commands:

1. **Build the Project**:

    ```bash
    npm run build
    ```

2. **Start the Server**:

    ```bash
    npm start
    ```
 
 

## How It Works

1. **File Upload**: The user uploads a LinkedIn resume in PDF format to the `/process-resume` endpoint using `multer` for file handling.
   
2. **Text Extraction**: The server uses the `pdf-parse` package to extract text from the PDF file.

3. **Prompt to OpenAI**: The extracted text is passed into a pre-defined prompt, curated to convert resume data into a structured HTML format. This prompt is sent to OpenAI's API using the provided API key.

4. **HTML Response**: The response from OpenAI (an HTML string) is sent back to the client, where it can be converted into a downloadable `.html` file using Blob.

## Client-Side Implementation

After receiving the HTML from the server, you can convert it into a downloadable file using JavaScript's Blob API.

```javascript
const downloadHTML = (htmlContent) => {
  const blob = new Blob([htmlContent], { type: "text/html" });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'resume.html';
  link.click();
};
```

## Dependencies

- **OpenAI Client**: For interacting with the OpenAI API.
- **Multer**: For handling file uploads (`multipart/form-data`).
- **pdf-parse**: For extracting text from the uploaded PDF file.
- **Express**: Server framework used to handle requests and responses.

## Scripts

- **`npm run build`**: Build the project before starting the server.
- **`npm start`**: Start the Express server.
