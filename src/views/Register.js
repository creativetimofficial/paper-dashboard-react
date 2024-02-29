import { Flex,Upload , Button, message} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState, useRef } from 'react';
import { Container, Row, Col,  Input } from 'reactstrap';
import axios from 'axios';
// import Base from 'antd/es/typography/Base';
// import base from "../url.json";

const RegisterStudents = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const [fileLists, setFileLists]=useState([]);
  
    const fileInfo={}
    const handleDownloadTemplate = () => {
      // Logic for downloading template
      console.log('Downloading template...');
    };
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleFileUpload = async({file,onSuccess, onError}) => {
      // if (selectedFile) {
        // Perform the file upload using a POST request to your API endpoint
        // info.st
        
        // console.log('file in customRequest param '+fileLists[0]);
        console.log('info '+file)
        const token=localStorage.getItem('token')
        const formData = new FormData();
        console.log(file.fileList)
        formData.append('excel', file);
        
      //   info.fileList.forEach((f, index) => {
      //     formData.append(`file${index}`, f);
      // });
  
        // Example: Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
        try{
          const response= await axios.post('http://172.235.10.116:8001/'+'CIR/handleexcelRegister',formData,{
            headers:{
              'Content-Type': 'multipart/form-data',
              'Authorization':`Bearer ${token}`
            },
          });
          if (response.status === 201) {
            
            message.success('File uploaded successfully');
            onSuccess();
            // Handle any further actions after successful upload
          } else {
            // Handle errors if the request was not successful
            message.error('Failed to upload file');
            onError();
          }
        }
        catch(error){
          console.error('Error uploading file:', error);
          message.error('Failed to upload file');
          onError();
        }
      // }
      //  else {
        // console.warn('No file selected for upload.');
        // Show a message to the user that no file is selected
      // }
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
            <Upload
            multiple={true}
            defaultFileList={[...fileLists]}
            onChange={(info) => {
              console.log('before fileList'+info.fileList)
              // setFileLists(info.fileList);              
              console.log('After fileList'+info.fileList)
            }}
            customRequest={handleFileUpload}
            >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          <Input type="file" onChange={handleFileChange} innerRef={fileInputRef} style={{ display: 'none'}} />
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
            <Upload>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
            
            </Upload>
  
          </Col>
 
</Row>
</Container>
</div>
</div>
    );
  };
  

export default RegisterStudents;
