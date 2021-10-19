import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setServices(data))
  },[])
  return (
    <div className='service-container mx-5 p-5'>
      {
        services?.map(service=><Service service={service}></Service>)
      }
    </div>
  );
};

export default Services;