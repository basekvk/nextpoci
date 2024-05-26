import Image from 'next/image';
import React, { useRef } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Formulario() {
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
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row my-20">
            <div className="md:w-1/2 md:pr-6">
                <div className="mb-6 border-b-4 border-[#004680]">
                    <h2 className="text-3xl font-bold text-center text-[#004680] py-2">
                        CONTACTA CON NOSOTROS
                    </h2>
                </div>
                <ToastContainer />
                <form
                    className="grid grid-cols-1 gap-6"
                    ref={form}
                    onSubmit={sendEmail}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="sr-only" htmlFor="name">
                                Tu nombre*
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                id="name"
                                placeholder="Tu nombre*"
                                required
                                className="p-2 border rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="email">
                                Tu Email*
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Tu Email*"
                                required
                                className="p-2 border rounded w-full"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="subject">
                            Asunto
                        </label>
                        <input
                            id="asunto"
                            name="asunto"
                            type="text"
                            placeholder="Asunto"
                            className="p-2 border rounded w-full"
                        />
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="message">
                            Mensaje
                        </label>
                        <textarea
                            className="min-h-[150px] p-2 border rounded w-full"
                            name="mensaje"
                            type="text"
                            id="message"
                            placeholder="Mensaje"
                        />
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-[#004680] text-white py-2 rounded">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
            <div className="md:w-1/2 md:pl-6 flex flex-col justify-center my-4">
                <div className="flex justify-center mb-6 gap-4">
                    <Link
                        className="mx-2 transform transition-transform hover:scale-110"
                        href="#"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 text-[#004680] hover:text-[#08B9B5]"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                    </Link>
                    <Link
                        className="mx-2 transform transition-transform hover:scale-110"
                        href="#"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 128 128"
                            fill="currentColor"
                            className="w-6 h-6 text-[#004680] hover:text-[#08B9B5]"
                        >
                            <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z" />
                        </svg>
                    </Link>
                    <Link
                        className="mx-2 transform transition-transform hover:scale-110"
                        href="#"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 text-[#004680] hover:text-[#08B9B5]"
                        >
                            <rect
                                width="20"
                                height="20"
                                x="2"
                                y="2"
                                rx="5"
                                ry="5"
                            />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                    </Link>
                    <Link
                        className="mx-2 transform transition-transform hover:scale-110"
                        href="#"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 text-[#004680] hover:text-[#08B9B5]"
                        >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                    </Link>
                    <Link
                        className="mx-2 transform transition-transform hover:scale-110"
                        href="#"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 text-[#004680] hover:text-[#08B9B5]"
                        >
                            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                            <path d="m10 15 5-3-5-3z" />
                        </svg>
                    </Link>
                </div>
                <Image
                    alt="Contacta con desatascos Pociten en Madrid"
                    className="mx-auto"
                    src="/images/about/desatascos-en-madrid.webp"
                    height={500}
                    width={500}
                    layout="intrinsic" 
                />
            </div>
        </div>
    );
}
