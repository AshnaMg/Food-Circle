import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const RestReview = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
     <button onClick={() => setOpen(!open)} className='btn btn-warning'>Reviews</button>
     <Collapse in={open}>
     <div className='my-2'>
        <hr />
        <div className='mt-5'>
            <h6>Name: Joy</h6>
            <h6>Rating: 4.6</h6>
            <h6>Comments: Must try. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, error natus adipisci dolor nesciunt quae vitae libero veritatis soluta rem in suscipit laborum ex dicta deserunt ut inventore aperiam doloribus.</h6>
        </div>
     </div>
     </Collapse>
    
    </>
  )
}

export default RestReview