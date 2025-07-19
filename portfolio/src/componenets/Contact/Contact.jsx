import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/contact-img4.png";
import "./Contact.css";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch(
      "https://portfolio-backend-rsz3.onrender.com/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      }
    );
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.success === true) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({ success: false, message: result.message });
    }
  };

  return (
    <section className="contact" id="connect">
      <div className="container-div">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="contact-img-col">
              <motion.img
                src={contactImg}
                alt="Contact Us"
                className="img-fluid"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </Col>

            <Col xs={12} md={6}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeUp}>Contact</motion.h2>

                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col xs={12} sm={6} className="px-1">
                      <input
                        variants={fadeUp}
                        type="text"
                        value={formDetails.firstName}
                        placeholder="First Name"
                        onChange={(e) =>
                          onFormUpdate("firstName", e.target.value)
                        }
                      />
                    </Col>

                    <Col xs={12} sm={6} className="px-1">
                      <input
                        variants={fadeUp}
                        type="text"
                        value={formDetails.lastName}
                        placeholder="Last Name"
                        onChange={(e) =>
                          onFormUpdate("lastName", e.target.value)
                        }
                      />
                    </Col>

                    <Col xs={12} sm={6} className="px-1">
                      <input
                        variants={fadeUp}
                        type="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) =>
                          onFormUpdate("email", e.target.value)
                        }
                      />
                    </Col>

                    <Col xs={12} sm={6} className="px-1">
                      <input
                        variants={fadeUp}
                        type="tel"
                        value={formDetails.phone}
                        placeholder="Phone No."
                        onChange={(e) =>
                          onFormUpdate("phone", e.target.value)
                        }
                      />
                    </Col>

                    <Col xs={12} className="px-1">
                      <textarea
                        variants={fadeUp}
                        rows="6"
                        value={formDetails.message}
                        placeholder="Message"
                        onChange={(e) =>
                          onFormUpdate("message", e.target.value)
                        }
                      ></textarea>

                      <button
                        variants={fadeUp}
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>{buttonText}</span>
                      </button>
                    </Col>

                    {status.message && (
                      <Col xs={12}>
                        <motion.p
                          variants={fadeUp}
                          className={
                            status.success === false ? "danger" : "success"
                          }
                        >
                          {status.message}
                        </motion.p>
                      </Col>
                    )}
                  </Row>
                </form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
