import React, { useState } from 'react';
import { Form, Row, Col, FloatingLabel, Button, Card, Table, Alert } from 'react-bootstrap';

function InputOutput(props) {
  const [amount, setAmount] = useState("");
  const [service, setService] = useState("");
  const [customer, setCustomer] = useState("");
  const [tip, setTip] = useState(0);
  const [totalCustomer, setTotalCustomer] = useState(0);
  const [tip1, setTip1] = useState(0);

  const handler = (event) => {
    setAmount(event.target.value);
  };

  const handler1 = (event) => {
    setService(event.target.value);
  };

  const handler2 = (event) => {
    setCustomer(event.target.value);
    setTip(amount * service);
  };

  const getData = () => {
    props.AddCustomerName(`${customer} Offering a Tip Of - Rs.  ${tip}`);
    props.AddTip(tip);
    setCustomer("");
  };

  const getData1 = () => {
    setTip1(`${props.totaltip.reduce((prev, next) => prev + next)}`);
    setTotalCustomer(`${props.customername.length}`);
  };

  return (
    <div>
      <Form className="container mb-3">
        <Form.Group controlId="formBillAmount">
          <Form.Control 
            type="number" 
            value={amount} 
            placeholder="Enter Bill Amount" 
            onChange={handler} 
            className="custom-input"
          />
        </Form.Group>
        <hr />
      </Form>

      <Form className="container mb-3">
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="floatingSelectGrid" label="How Was The Service">
              <Form.Select 
                aria-label="Floating label select example" 
                value={service} 
                onChange={handler1}
                className="custom-select"
              >
                <option value="0">Choose Our Services</option>
                <option value="0.3">30% - Excellent</option>
                <option value="0.15">15% - It was OK</option>
                <option value="0.05">5% - Too Bad</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Customer Name">
              <Form.Control 
                type="text" 
                value={customer} 
                placeholder="Enter Your Name" 
                onChange={handler2} 
                className="custom-input"
              />
            </FloatingLabel>
            <br />
          </Col>
        </Row>
        <div className="text-center">
          <Button className="my-2 custom-button" onClick={getData}>Add Customer</Button>
        </div>
        <hr />
      </Form>

      <Card className="container mb-3">
        <Card.Header className="text-center bg-primary text-white">Customer List</Card.Header>
        <Card.Body>
          {props.customername.map((ele, index) => (
            <Alert variant="dark" key={index}>{ele}</Alert>
          ))}
        </Card.Body>
      </Card>

      <div className="text-center">
        <Button className="my-2 custom-button" onClick={getData1}>Calculate Tip & Customer</Button>
      </div>
      <br />
      <Table striped bordered hover className="text-center custom-table">
        <thead>
          <tr>
            <th>Total Customer</th>
            <th>Total Tip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalCustomer}</td>
            <td>Rs.{tip1}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default InputOutput;
