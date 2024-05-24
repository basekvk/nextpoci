import PropTypes from 'prop-types';
import Link from 'next/link';

export default function BannerMini({ subTitle, title, desc }) {
    const PhoneIcon = ({ width = 32, height = 32, color = 'currentColor', ...props }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill={color}
          {...props}
        >
          <path d="M12 4V2h10v2zm0 4V6h10v2zm0 4v-2h10v2zm6.95 10q-3.125 0-6.175-1.362t-5.55-3.863-3.862-5.55T2 5.05q0-.45.3-.75t.75-.3H7.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T8.4 9.45L5.975 11.9q.5.925 1.187 1.788t1.513 1.662q.775.775 1.625 1.438T12.1 18l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T20 16.9v4.05q0 .45-.3.75t-.75.3M5.025 10l1.65-1.65L6.25 6H4.025q.125 1.025.35 2.025T5.025 10m8.95 8.95q.975.425 1.988.675T18 19.95v-2.2l-2.35-.475zm0 0"/>
        </svg>
      );
    return (
       
        <div className="bg-gradient-to-r from-[#003A70] to-[#02B8B4] text-white text-center p-8">
                <div className="flex flex-col space-y-2">
                    <span className="text-sm uppercase ">{subTitle}</span>
                    <h1 className="text-6xl font-bold leading-none  text-center">
                        {title}
                    </h1>
                    <p className="text-lg text-white text-center">{desc}</p>

                    <a
                        href="tel:+34647376782"
                        className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#00BBB4] to-[#003A70] px-8 py-3 text-sm font-medium text-white shadow transition transform duration-300 ease-in-out hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    >
                        <PhoneIcon width={20} height={20} color="white" className="mr-2" />
                        LLAMAR AHORA
                    </a>
                </div>
            </div>
        
    );
}

BannerMini.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
};
