import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import Logo from '../assets/logo.png'

function login() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-success" className='login' onClick={handleShow}>
        Log In
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><b>Log In</b> <img src={Logo} alt="logo here" className='logoregister'/></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            username: '',
            password: '',
            terms: false,
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="validationFormikUsername">
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      sm='10'
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              
              <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="validationFormikPassword">
                  <Form.Label>Password</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">#</InputGroup.Text>
                    <Form.Control
                      sm='10'
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  name="terms"
                  label="Agree to terms and conditions"
                  onChange={handleChange}
                  isInvalid={!!errors.terms}
                  feedback={errors.terms}
                  feedbackType="invalid"
                  id="validationFormik0"
                />
              </Form.Group>
              <Button variant="outline-success" className='login' type='submit'>Submit</Button>
              <p>Don't have an account <a href="/register">Sign Up here</a></p>
            </Form>
          )}
        </Formik>
        </Modal.Body>
        <Modal.Footer>
          <p className="col-12 text-center"><h6 className='text2'>The best Animal Hospital for Your Companion</h6></p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default login;