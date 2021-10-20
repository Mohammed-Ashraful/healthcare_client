import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const phone = <FontAwesomeIcon icon={faPhone} />

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const service = data?.find((serviceId) => serviceId.id == id);
        setDetails(service);
      })
    }, []);
   

  return (
    <div className="row p-0 m-0">
      <div className="col-lg-4 col-md-4 col-12 bg-success h-75 p-5 mt-5">
        <div className='bg-success text-white'>
          <h3> Emergency Case </h3>
          <h1>  {phone}  +0278346</h1>
          <p>Call for any Emergency and Ambulance </p>
          <button className="btn btn-primary px-5">Contact</button>
        </div>
      </div>
        <Card className="col-lg-8 col-md-4 col-12 p-5">
          <Card.Img variant="top" className="img-fluid p-5" width="70%" src={details?.img} />
          <Card.Body className="text-dark">
            <Card.Title className='fs-1 py-3'>{details?.name}</Card.Title>
            <Card.Text>{details?.description}</Card.Text>
            <Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
};

export default Details;