import React, { useEffect, useState } from 'react';
import base from "../url.json";
import axios from 'axios';
import { Container, Row, Col, Card, CardBody, CardTitle, Pagination, PaginationItem, PaginationLink, Button } from 'reactstrap';

const ITEMS_PER_PAGE = 20;

// const sampleData = Array.from({ length: 30 }, (_, index) => ({
//   title: `Item ${index + 1}`,
//   fields: [`Field 1: Value ${index + 1}`, `Field 2: Value ${index + 1}`, `Field 3: Value ${index + 1}`],
// }));

// const sampleData=[{
//   title:'FocusR',
//   qualification:['Any Degree','BE','MCA']
// }]




const HorizontalContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [sampleData1, setSampleData1]=useState([{
  //   title:'FocusR',
  //   qualification:['Any Degree','BE','MCA']
  // }]);

  const [sampleData, setSampleData]=useState([]);

  

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(sampleData.length / ITEMS_PER_PAGE)));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

    useEffect(()=>{
    const token=localStorage.getItem('token')
    
    // axios.get(base.url+'entryLevel/getCandidateForRecruiter', {
      axios.get('http://172.235.10.116:8001/CIR/getallcompanydata', {
      headers:{
        "content-type":"application/json",
        // "Authorization":"Bearer "+token
      }
    })
    .then((res)=>{
      console.log(res.data)
      setSampleData(res.data)
      console.log(sampleData)
    })
  },[]
    )
    function onClickHandler(item){
      const token=localStorage.getItem("token")
      console.log("clicked"+item.id)
      const url=base.url+`entryLevel/getACandidate/${item.id}`;
      console.log(url)
      axios.get(url,{
        headers:{
          "content-type":"application/json",
          "Authorization":"Bearer "+token
    }      
  }).then((res)=>{
    console.log(res.data)
  })
    }

  return (
    <div className='content'>
    <Container className="horizontal-container">
      {sampleData.map((item) => (
        <div style={{cursor:"pointer"}}>
        <Card key={item.id} onClick={()=>onClickHandler(item)}>
        {/* <Card key={item.email}> */}
          <CardBody>
            <CardTitle tag="h3">{item.companyName}</CardTitle>
            <Row className="fields " >
              {/* {item.name} */}
              <Col key={item.name} style={{fontSize:"20px"}}>{item.jobDescription}</Col>
              <Col key={item.name} style={{fontSize:"20px"}}>{item.CTC}</Col>
              <Col key={item.name} style={{fontSize:"20px"}}>{item.workLocation}</Col>
              
            </Row>
          </CardBody>
        </Card>
        </div>
      ))}

      {/* <Pagination className="mt-4">
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
      </Pagination> */}
    </Container>
    </div>
  );
};

export default HorizontalContainer;