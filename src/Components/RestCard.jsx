import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const RestCard = () => {
    return (
        <>
            <Link to={'/RestView'} style={{textDecoration:'none',color:'black'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img height={'300px'} width={'100%'} variant="top" src="https://cdn.pixabay.com/photo/2023/03/05/11/02/burger-7831128_960_720.jpg" />
                    <Card.Body>
                        <Card.Title>TBJ</Card.Title>
                        <Card.Text>
                            Location: Kakkanad
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Link>

        </>
    )
}

export default RestCard