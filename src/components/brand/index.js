import PropTypes from 'prop-types';
import Link from 'next/link';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Container } from 'react-bootstrap';
import classes from './brand.module.scss';

SwiperCore.use([Pagination, Autoplay]);

function BrandOne({ brandItems }) {
    const isSingleSponsor = brandItems?.length === 1;

    return (
        <div className={`${classes.bg} pt-8 pb-16`}>
            <Container>
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Formamos Parte de:</h2>
                    <p className="text-gray-600 mb-8">Orgullosos de colaborar con las mejores asociaciones del sector</p>
                </div>
                <div className={isSingleSponsor ? 'flex justify-center' : ''}>
                    <Swiper
                        pagination={false}
                        loop={!isSingleSponsor}
                        slidesPerView={isSingleSponsor ? 1 : undefined}
                        breakpoints={!isSingleSponsor ? {
                            1200: {
                                slidesPerView: 5,
                                slidesPerColumn: 2,
                                slidesPerGroup: 1,
                                slidesPerColumnFill: 'row',
                                spaceBetween: 100,
                            },
                            768: {
                                slidesPerView: 4,
                                slidesPerColumn: 2,
                                slidesPerGroup: 1,
                                slidesPerColumnFill: 'row',
                                spaceBetween: 100,
                            },
                            576: {
                                slidesPerView: 3,
                                slidesPerColumn: 2,
                                slidesPerGroup: 1,
                                slidesPerColumnFill: 'row',
                                spaceBetween: 30,
                            },
                            480: {
                                slidesPerView: 2,
                                slidesPerColumn: 2,
                                slidesPerGroup: 1,
                                slidesPerColumnFill: 'row',
                                spaceBetween: 30,
                            },
                            0: {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                slidesPerColumnFill: 'row',
                                spaceBetween: 30,
                            },
                        } : undefined}
                        className={isSingleSponsor ? 'max-w-md' : ''}
                    >
                        {brandItems?.map((brandItem) => (
                            <SwiperSlide key={brandItem.id}>
                                <Link href={brandItem?.url}>
                                    <a className={`${classes.item} ${isSingleSponsor ? 'flex justify-center' : ''}`}>
                                        <img
                                            src={brandItem?.image}
                                            alt={brandItem?.imageAlt}
                                            className={isSingleSponsor ? 'max-w-[300px]' : ''}
                                        />
                                    </a>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </div>
    );
}

BrandOne.propTypes = {
    brandItems: PropTypes.instanceOf(Object).isRequired,
};

export default BrandOne;
