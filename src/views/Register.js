import { Flex } from 'antd';
import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button, Input } from 'reactstrap';

const RegisterStudents = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
  
    const handleDownloadTemplate = () => {
      // Logic for downloading template
      console.log('Downloading template...');
    };
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleUpload = () => {
      if (selectedFile) {
        // Perform the file upload using a POST request to your API endpoint
        const formData = new FormData();
        formData.append('file', selectedFile);
  
        // Example: Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
        fetch('YOUR_API_ENDPOINT', {
          method: 'POST',
          body: formData,
        })
          .then(response => response.json())
          .then(data => {
            console.log('File uploaded successfully:', data);
            // Add any additional logic or UI updates on successful upload
          })
          .catch(error => {
            console.error('Error uploading file:', error);
            // Handle error, show notification, etc.
          });
      } else {
        console.warn('No file selected for upload.');
        // Show a message to the user that no file is selected
      }
    };
  
    const handleUploadButtonClick = () => {
      // Trigger the file input programmatically
      fileInputRef.current.click();
    };  
    return (<div className='content'>

        
      <Container className="register-students" style={{}}>
        <Row>
          <Col>
            <h1>Register Students</h1>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Button color="primary" onClick={handleDownloadTemplate}>
              Download Template
            </Button>
          </Col>
          
           <Col>
             {/* Hide the default "Choose File" button */}
          <Input type="file" onChange={handleFileChange} innerRef={fileInputRef} style={{ display: 'none' }} />
          {/* Button to trigger file input */}
          <Button color="success" onClick={handleUploadButtonClick}>
            Upload File
            </Button>
          </Col>
         
        </Row>
      </Container>
     
      <div style={{marginTop:"50px"}}>
<Container className="register-students">
<hr className="mt-4" />
    
<Row >
  <Col>
    <h1>Add Students Info</h1>
  </Col>
</Row>
<Row className="mt-3">
  <Col>
    <Button color="primary" onClick={handleDownloadTemplate}>
      Download Template
    </Button>
  </Col>
  
   <Col>
     {/* Hide the default "Choose File" button */}
  <Input type="file" onChange={handleFileChange} innerRef={fileInputRef} style={{ display: 'none' }} />
  {/* Button to trigger file input */}
  <Button color="success" onClick={handleUploadButtonClick}>
    Upload File
    </Button>
  </Col>
 
</Row>
</Container>
</div>
</div>
    );
  };
  

export default RegisterStudents;
