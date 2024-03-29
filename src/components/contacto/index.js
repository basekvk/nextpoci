import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import classes from './index.module.scss';
import 'react-toastify/dist/ReactToastify.css';


function Contact({ contactItems }) {
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
            {contactItems?.map((contactItem) => (
                <Container key={contactItem.id}>
                    <div className={classes.area}>
                        <Row>
                            <Col lg={{ span: 6 }}>
                                <div className={classes.img_wrap}>
                                    <div className={classes.img}>
                                        <img
                                           
                                            className="img-full"
                                            src={contactItem?.image}
                                            alt={contactItem?.imageAlt}
                                            priority
                                        />
                                    </div>
                                   
                                </div>
                            </Col>
                            <Col lg={{ span: 6 }} className="ps-50">
                                <div className={classes.content}>
                                    <span className={classes.subtitle}>
                                        {contactItem?.subTitle}
                                    </span>
                                    <h2 className={classes.title}>
                                        {contactItem?.title}
                                    </h2>
                                    <p className={classes.desc}>
                                        {contactItem?.desc}
                                    </p>
                                    <div className={classes.info}>
                                        <h3 className={classes.info_title}>
                                            {contactItem?.addressTitle}
                                        </h3>
                                        <p className={classes.info_desc}>
                                            {contactItem?.addressDesc}
                                        </p>
                                    </div>
                                    <div className={classes.info}>
                                        <h3 className={classes.info_title}>
                                            {contactItem?.infoTitle}
                                        </h3>
                                        <ul className={classes.info_list}>
                                            {contactItem?.infoList?.map(
                                                (item) => (
                                                    <li key={item.id}>
                                                        {item.listText}
                                                        <Link href={item.path}>
                                                            <a>
                                                                {item.listValue}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={classes.form_area}>
                        <ToastContainer />
                        <Row>
                            <Col lg={{ span: 6 }}>
                                <h2 className={classes.form_title}>
                                    {contactItem?.formTitle}
                                </h2>
                                <p className={`${classes.form_desc} mb-0`}>
                                    {contactItem?.formDesc}
                                </p>
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
                                        >
                                            {contactItem?.btnText}
                                        </button>
                                    </div>
                                </form>
                            </Col>
                            <Col lg={{ span: 6 }} className="ps-lg-50">
                                <div className="map_with__pattern">
                                    <iframe
                                        title="Desatascos Pociten contacto"
                                        className="map_size"
                                        src="https://www.google.com/maps/embed/v1/place?q=DesatascosPociten+sl&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                    />
                                    
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            ))}
        </main>
    );
}

Contact.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
};

export default Contact;
