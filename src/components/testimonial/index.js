import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './testimonial.module.scss';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Testimonial({ testimonialItems, testimonialSectionItems }) {
    return (
        <div className={classes.area}>
            <Container>
                <Row className="g-4">
                    {testimonialSectionItems?.map((item) => (
                        <Col
                            xl={{ span: 5 }}
                            lg={{ span: 6 }}
                            key={item.id}
                            className="pb-30 pb-lg-0"
                        >
                            <div className={classes.section__wrap}>
                                <span className={classes.subtitle}>
                                    {item?.subTitle}
                                </span>
                                <h2 className={classes.title}>{item?.title}</h2>
                                <p
                                    className={classes.desc}
                                    dangerouslySetInnerHTML={{
                                        __html: item.desc,
                                    }}
                                />
                                <div className="btn-wrap">
                                    <Link href="https://www.google.com/search?q=rese%C3%B1as+DesatascosPociten&oq=rese%C3%B1as+DesatascosPociten&aqs=chrome..69i57j69i60.3062j0j7&sourceid=chrome&ie=UTF-8#lrd=0xd42276fa6afb7a5:0x74b9bc20c09c495c,1,,,,">
                                        <a className={classes.section__btn}>
                                            ver más
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    ))}
                    <Col xl={{ span: 7 }} lg={{ span: 6 }}>
                        <Swiper
                            pagination={false}
                            loop={false}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 2,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    slidesPerColumnFill: 'colums',
                                    spaceBetween: 30,
                                },
                                992: {
                                    slidesPerView: 1,
                                    slidesPerColumn: 2,
                                    slidesPerGroup: 1,
                                    slidesPerColumnFill: 'row',
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerColumnFill: 'row',
                                    slidesPerColumn: 1,
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                576: {
                                    slidesPerColumnFill: 'row',
                                    slidesPerColumn: 1,
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                0: {
                                    slidesPerColumnFill: 'column',
                                    slidesPerColumn: 1,
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {testimonialItems?.map((testimonialItem) => (
                                <SwiperSlide key={testimonialItem.id}>
                                    <div className={classes.item}>
                                        <div className={classes.content}>
                                            <p className={classes.desc}>
                                                <i
                                                    className={`${classes.quotation} ${classes.direction_left}`}
                                                >
                                                    “
                                                </i>
                                                {testimonialItem?.excerpt}
                                                <i
                                                    className={`${classes.quotation} ${classes.direction_right}`}
                                                >
                                                    ”
                                                </i>
                                            </p>
                                            <div className={classes.user_info}>
                                                <div className="user_img">
                                                    <img
                                                        src={
                                                            testimonialItem?.avatar
                                                        }
                                                        alt={
                                                            testimonialItem?.avatarAlt
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        classes.user_content
                                                    }
                                                >
                                                    <h3
                                                        className={
                                                            classes.user_name
                                                        }
                                                    >
                                                        {
                                                            testimonialItem?.userName
                                                        }
                                                    </h3>
                                                    <span
                                                        className={
                                                            classes.user_occupation
                                                        }
                                                    >
                                                        {
                                                            testimonialItem?.userOccupation
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

Testimonial.propTypes = {
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
};

export default Testimonial;
