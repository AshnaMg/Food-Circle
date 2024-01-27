import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const RestCard = ({restaurant}) => {
    return (
        <>
            <Link to={`/RestView/${restaurant?.id}`} style={{textDecoration:'none',color:'black'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img height={'300px'} width={'100%'} variant="top" src={restaurant?.photograph} />
                    <Card.Body>
                        <Card.Title>{restaurant?.name}</Card.Title>
                        <Card.Text>{restaurant?.neighborhood}</Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Link>

        </>
    )
}

export default RestCard