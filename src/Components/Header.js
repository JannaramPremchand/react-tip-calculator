import React from 'react';
import { Card } from 'react-bootstrap'


function Header() {

    return (
        <div>
            <Card className="my-3">
                <Card.Header style={{textAlign:"center", fontSize:"30px",fontFamily:"Times New Roman', Times, serif",fontWeight:"bolder" , background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",color:"white"}}>TipCalculator<br></br><p style={{fontSize:"20px"}}>Build In REACT</p></Card.Header>
            </Card>
            <br></br>
        </div>
    )
}

export default Header
