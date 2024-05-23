import PropTypes from 'prop-types';
import Link from 'next/link';
import { Fragment } from 'react';
import * as FaIcons from 'react-icons/fa';

function Footer({ footerItems }) {
    return (
        <footer>
            {footerItems?.map((footerItem) => (
                <Fragment key={footerItem.id}>
                    <div className="bg-[#003A70] bg-no-repeat bg-cover py-24">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap">
                                <div className="lg:w-1/4">
                                    <div className="mb-8">
                                        <Link href="/">
                                            <a className="block pb-5">
                                                <img
                                                    src={footerItem?.footerLogo}
                                                    alt={footerItem?.footerLogoAlt}
                                                    className="h-10"
                                                />
                                            </a>
                                        </Link>
                                        <p
                                            className="text-blue-200 mb-6 text-base mr-10 text-justify"
                                            dangerouslySetInnerHTML={{ __html: footerItem?.excerpt }}
                                        />
                                        <div className="text-white">
                                            <h2 className="mb-1 text-primary text-lg leading-tight">
                                                {footerItem?.inquary}
                                            </h2>
                                            <Link href="tel://+34647376782">
                                                <a className="hover:text-blue-200 text-xl" id='footer'>
                                                    {footerItem?.inquaryNumber1}
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:w-1/4 lg:w-1/6 sm:w-1/2 px-4 pt-10 lg:pt-0">
                                    <div className="mb-8">
                                        <h2 className="text-white mb-8 text-2xl leading-tight">
                                            {footerItem?.informationTitle}
                                        </h2>
                                        <ul className="text-white-200" >
                                            {footerItem?.informationList?.map((item) => (
                                                <li key={item.id} className="mb-4">
                                                    <Link href={`/${item.path}`}>
                                                        <a className="hover:text-white" id='footer'>{item.title}</a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="lg:w-1/4 sm:w-1/2 px-4 pt-10 lg:pt-0">
                                    <div className="mb-8">
                                        <h2 className="text-white mb-8 text-2xl leading-tight">
                                            {footerItem?.quickLinkTitle}
                                        </h2>
                                        <ul className="text-white-200">
                                            {footerItem?.quickLinkList?.map((item) => (
                                                <li key={item.id} className="mb-4">
                                                    <Link href={`/${item.path}`}>
                                                        <a className="hover:text-white" id='footer'>{item.title}</a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="xl:w-1/4 lg:w-1/2 pt-10 lg:pt-0">
                                    <div className="mb-8">
                                        <h2 className="text-white mb-8 text-2xl leading-tight">
                                            {footerItem?.contactInfoTitle}
                                        </h2>
                                        <div className="pb-6 text-blue-200">
                                            <p
                                                className="mb-1 text-lg leading-snug"
                                                dangerouslySetInnerHTML={{ __html: footerItem?.widgetAddress }}
                                                id='footer'
                                            />
                                            <span className="text-base leading-snug" id='footer'>
                                                {footerItem?.widgetNumber}
                                            </span>
                                        </div>
                                        <div className="text-white-200">
                                            <p
                                                className="mb-1 text-lg leading-snug"
                                                dangerouslySetInnerHTML={{ __html: footerItem?.additionWidgetAddress }}
                                            />
                                            <span className="text-base leading-snug" id='footer'>
                                                {footerItem?.additionWidgetNumber}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary py-5">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap">
                                <div className="md:w-1/2 sm:w-1/3 flex justify-center sm:justify-start pb-2 sm:pb-0">
                                    <ul className="flex space-x-5">
                                        {footerItem?.socialList?.map((item) => {
                                            const Social = FaIcons[item.socialIcon];
                                            const socialName = item.name;
                                            return (
                                                <li key={item.id} className="border border-gray-600 text-center">
                                                    <Link href={`${item.path}`}>
                                                        <a aria-label={`Síguenos en ${socialName}`} className="flex items-center p-2 hover:text-sky-500">
                                                            <Social />
                                                        </a>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 sm:w-2/3 flex items-center justify-center sm:justify-end">
                                    <div className="text-center sm:text-right">
                                        <span className="text-black flex items-center justify-center sm:justify-end">
                                            © 2024{' '}
                                            <Link href="https://duegency.es">
                                                <a className="ml-1 hover:text-sky-500">Duegency</a>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            ))}
        </footer>
    );
}

Footer.propTypes = {
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default Footer;
