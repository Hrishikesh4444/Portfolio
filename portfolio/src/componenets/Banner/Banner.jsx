import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img.png";
import "./Banner.css";
import { motion } from "framer-motion";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Web Developer", "Programmer"];
  const period = 1500;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  // Vanta Background Initialization
  useEffect(() => {
    const effect = window.VANTA?.NET?.({
      el: "#bg-animation",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: "#b2a2cf",
      backgroundColor: "#08080a",
      points: 6.0,
      maxDistance: 19.0,
      spacing: 18.0,
    });

    return () => {
      if (effect && effect.destroy) effect.destroy();
    };
  }, []);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(400);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const container = (delay) => ({
    hidden: {
      opacity: 0,
      x: -90,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  });
  const container2 = (delay) => ({
    hidden: {
      opacity: 0,
      x: 30,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  });

  return (
    <section className="banner" id="bg-animation">
      <Container id="about">
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <motion.span
              variants={container(0.2)}
              initial="hidden"
              whileInView="show"
              className="tagline"
            >
              Welcome to my Portfolio
            </motion.span>
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              whileInView="show"
            >
              {`Hi I'm Hrishikesh`} <br />
              <span className="wrap">{text}</span>
            </motion.h1>
            <motion.p
              initial={{
                y: 100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1 }}
            >
              Currently pursuing a B.Tech in Computer Science and Engineering at
              NIT Silchar, with a strong focus on software development,
              problem-solving, and emerging technologies. Actively engaged in
              academic projects and technical communities to strengthen
              practical and theoretical knowledge.
            </motion.p>

            <motion.button
              initial={{
                y: 100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1 }}
            >
              <a href="https://drive.google.com/file/d/1RM2QXPCdiPT81WvrTlr99f174R6PLCzF/view?usp=drive_link">
                Check CV
              </a>
            </motion.button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <motion.div
              variants={container2(0.2)}
              initial="hidden"
              whileInView="show"
            >
              <img src={headerImg} alt="Header Img" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
