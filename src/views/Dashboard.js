import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, Pagination, PaginationItem, PaginationLink, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';





const ITEMS_PER_PAGE = 20;

const sampleData = Array.from({ length: 30 }, (_, index) => ({
  title: `Item ${index + 1}`,
  fields: [`Field 1: Value ${index + 1}`, `Field 2: Value ${index + 1}`, `Field 3: Value ${index + 1}`],
}));

const HorizontalContainer = () => {
  const [sampleData, setSampleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = sampleData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredData.length / ITEMS_PER_PAGE)));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const steps = ['Applied','Online Test', 'Technical Interview','HR'];
  const [isapplied, setisapplied] = useState(true)

  return (
    <div className='content'>
    <Container className="horizontal-container">
      <InputGroup className="mb-5">
        <div style={{display:"flex", alignItems:"center", width:"500px"}}>
        <InputGroupAddon addonType="prepend">
          <span  style={{marginRight:"5px", cursor:"pointer"}}>
            <FaSearch />
          </span>
        </InputGroupAddon>
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        </div>
      </InputGroup>
      

      {currentItems.map((item, index) => (
        <Card key={index}>
          <CardBody>
            <CardTitle tag="h3">{item.title}</CardTitle>
            <Row className="fields">
              {item.fields.map((field, fieldIndex) => (
                <Col key={fieldIndex} style={{ fontSize: "20px" }}>{field}</Col>
              ))}
            </Row>

            {isapplied  && (
  <div className='stepper'>
    <Stepper activeStep={2} alternativeLabel style={{color: 'red' }}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  </div>
)}
            
          </CardBody>
        </Card>
      ))}

      <Pagination className="mt-4">
        <PaginationItem>
          <PaginationLink previous onClick={prevPage} />
        </PaginationItem>
        {Array.from({ length: Math.ceil(filteredData.length / ITEMS_PER_PAGE) }).map((_, index) => (
          <PaginationItem key={index} active={index + 1 === currentPage}>
            <PaginationLink onClick={() => paginate(index + 1)}>{index + 1}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink next onClick={nextPage} />
        </PaginationItem>
      </Pagination>
    </Container>
    </div>
  );
};

export default HorizontalContainer;
