import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import S1 from "../../assets/img/brand/s1.jpg";
import S2 from "../../assets/img/brand/s2.jpg";
import S3 from "../../assets/img/brand/s3.jpg";

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
  return (
   
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
          <h1>Testimonials</h1>
            <img
              className="d-block w-100"
              src={S1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={S2}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={S3}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
    
  
