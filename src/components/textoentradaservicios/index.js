import Image from 'next/image';

export default function TextoEntrada({ service, image }) {
  if (!service) return null; // Verificación para asegurarse de que `service` existe

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
        <div className="relative w-full h-0 pb-[75%]">
          <Image
            alt={`${service.title} - Pociten`}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            src={image}
            layout="fill"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">{service.title2}</h2>
          <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: service.descripcion }} />
        </div>
      </div>
    </div>
  );
}
