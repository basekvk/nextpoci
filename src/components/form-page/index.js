import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import classes from './index.module.scss';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm({ contactItemsForm }) {
    const form = useRef();

    const notify = () => {
        toast.success('Mensaje Enviado 📪');
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_ijdt8bn',
                'template_geqj1pp',
                form.current,
                '8Sj26Hr--rrpgCKTu'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    notify();
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
    return (
        <main>
            {contactItemsForm?.map((contactItem) => (
                <Container key={contactItem.id}>
                    <div className={classes.form_area}>
                        <ToastContainer />
                        <Row>
                            <Col lg={{ span: 12 }}>
                                <h2 className={classes.form_title}>
                                    {contactItem?.formTitle}
                                </h2>
                               
                                <form
                                    className={classes.form}
                                    ref={form}
                                    onSubmit={sendEmail}
                                >
                                    <div className={classes.form_group__input}>
                                        <input
                                            type="text"
                                            name="nombre"
                                            id="name"
                                            placeholder="Tu nombre*"
                                            required
                                            className={`${classes.form_input__field} me-30`}
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Tu Email*"
                                            required
                                            className={
                                                classes.form_input__field
                                            }
                                        />
                                    </div>
                                    <textarea
                                        name="mensaje"
                                        type="text"
                                        id="message"
                                        placeholder="Mensaje"
                                        className={`${classes.form_textarea__field} mt-30`}
                                    />

                                    <div className={classes.form_btn__wrap}>
                                        <button
                                            className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__primary}`}
                                            type="submit"
                                            style={{
                                                cursor: 'pointer',
                                                textAlign: 'center',
                                                width: '100%',
                                                height: '60px',
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                color: '#fff',
                                                border: 'none',
                                                borderRadius: '5px',
                                                margin: '10px 0px',
                                                

                                            

                                            }}
                                        >
                                            {contactItem?.btnText}
                                        </button>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </Container>
            ))}
        </main>
    );
}

ContactForm.propTypes = {
    contactItemsForm: PropTypes.instanceOf(Object).isRequired,
};

export default ContactForm;
