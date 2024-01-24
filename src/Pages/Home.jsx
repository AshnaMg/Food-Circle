import React from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../Components/RestCard'

const Home = () => {
  return (
    <>
      <Row>
        <Col classID='px-5 py-3' sm={6} md={4} lg={4}>
          <RestCard />
        </Col>
      </Row>
    </>
  )
}

export default Home