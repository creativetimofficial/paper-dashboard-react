import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, Pagination, PaginationItem, PaginationLink, Button } from 'reactstrap';

const ITEMS_PER_PAGE = 20;

const sampleData = Array.from({ length: 30 }, (_, index) => ({
  title: `Item ${index + 1}`,
  fields: [`Field 1: Value ${index + 1}`, `Field 2: Value ${index + 1}`, `Field 3: Value ${index + 1}`],
}));

const HorizontalContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = sampleData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(sampleData.length / ITEMS_PER_PAGE)));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className='content'>
    <Container className="horizontal-container">
      {currentItems.map((item, index) => (
        <Card key={index} >
          <CardBody>
            <CardTitle tag="h3">{item.title}</CardTitle>
            <Row className="fields">
              {item.fields.map((field, fieldIndex) => (
                <Col key={fieldIndex} style={{fontSize:"20px"}}>{field}</Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      ))}

      <Pagination className="mt-4">
        <PaginationItem>
          <PaginationLink previous onClick={prevPage} />
        </PaginationItem>
        {Array.from({ length: Math.ceil(sampleData.length / ITEMS_PER_PAGE) }).map((_, index) => (
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
