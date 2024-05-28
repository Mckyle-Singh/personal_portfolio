import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
   const [loopNum, setLoopNum] = useState(0);
   const [isDeleteing, setIsDeleting] = useState(false);
   const toRotate = ["Android Developer", "Web developer", "Web Designer"];
   const [text, setText] = useState('');
   const [delta, setDelta] = useState(300 - Math.random() * 100);
   const period = 2000;

   useEffect(() => {
      let ticker = setInterval(() => {
         tick(); 
      }, delta)
      
      return () => { clearInterval(ticker) };
   }, [text])

   const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleteing ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1);
      setText(updatedText);

      if (isDeleteing) {
         setDelta(prevDelta =>prevDelta /2)
      }

      if (!isDeleteing && updatedText === fullText) {
         setIsDeleting(true);
         setDelta(period);
      }
      else if (isDeleteing && updatedText === "") {
         setIsDeleting(false);
         setLoopNum(loopNum + 1);
         setDelta(500);
      }
   }

   return (
      <section className="banner" id="home">
         <Container>
            <Row className="align-items-center">
               <Col xs={12} md={6} xl={7}>
                  <span className="tagline">Welcome to my portflio</span>
                  <h1>{`Hi im Mckyle `}
                     <span className="wrap">{Text}</span>
                  </h1>
                  <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  <button onClick={() => console.log("connect")}>lets connect
                     <ArrowRightCircle size={25}/>
                  </button>
               </Col>
               <Col xs={12} md={6} xl={5}>
                  <img src={headerImg } alt="Header Img"></img>
               </Col>
            </Row>
         </Container>
      </section>
   )
}