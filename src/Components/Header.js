import React from 'react';
import { Card } from 'react-bootstrap';

function Header() {
  return (
    <Card className="my-3">
      <Card.Header className="header text-center">
        <h1>TipCalculator</h1>
        <p>Build In REACT</p>
      </Card.Header>
    </Card>
  );
}

export default Header;
