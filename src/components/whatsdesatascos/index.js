import Image from 'next/image';

export default function Component() {
  return (
    <div className="flex flex-col items-center md:flex-row w-full max-w-4xl bg-white rounded-lg overflow-hidden mx-auto mt-20">
      <div className="w-full md:w-1/2 relative" style={{ aspectRatio: "743/507" }}>
        <Image
          alt="A guinea pig wearing a colorful hat and jacket in a field of flowers"
          src="/images/whatsdesatascos/que-es-un-desatasco.jpg"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="w-full md:w-1/2 p-8">
        <div className="text-xs uppercase tracking-wide font-semibold text-gray-500">POCITEN</div>
        <h2 className="mt-2 text-4xl font-bold text-[#003A70] leading-tight">
          ¿QUÉ ES UN DESATASCO?
        </h2>
        <p className="mt-4 text-gray-700">
          Segun la RAE (Real Academia Española), un desatasco, desatranco o desatoro es la acción de desatascar. Desatascar, por su parte, es quitar el taponamiento de una cañería, tubería, un desagüe, un conducto, etc.
        </p>
      </div>
      
    </div>
  );
}
