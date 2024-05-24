import CallToAction from '../../cta';
import CallToAction1 from '../../cta-services';
import Presupuesto from '../../presupuesto';
import CallButton from '../../CallButton';
import ProductCluster from '../../cluster';
import GridServices from '../../gridservicios';
import Areastrabajo from '../../areastrabajo';
import Acordeon from '../../acordeon';

export default function ServiceContent({ service }) {
    const imagePath = `/images/services/${service?.slug}/${service?.largeImage}`;

    return (
        <div className="px-4 lg:px-8 xl:px-16 pt-10 md:pt-10 lg:pt-10 pb-12 md:pb-24 lg:pb-36">
            <div className="flex flex-col items-center ">
                <div className="w-full max-w-4xl">
                    <h2 className="bg-[#003a70] text-center text-white py-2 mb-6 text-lg lg:text-xl xl:text-2xl font-medium">
                        {service?.detailSubTitle}
                    </h2>
                </div>
            </div>
            <div className="pt-2">
                <h2 className="mb-10 text-3xl font-medium text-justify">
                    {service?.pregunta}
                </h2>
                <div className="mb-10 text-lg text-justify"
                   dangerouslySetInnerHTML={{
                    __html: service?.descripcion,
                }} 
                />
                <p className="mb-10 text-lg text-justify">
                    {service?.detailDesc}
                </p>
                <ProductCluster localidad={service?.lugar} />
                <h2 className="mb-10 text-3xl font-medium text-justify">
                    {service?.pregunta2}
                </h2>
                <p className="mb-10 text-lg text-justify">
                    {service?.descripcion1}
                </p>
                <CallToAction text={service?.title} />
                <div
                    className="mb-10 text-lg text-justify"
                    dangerouslySetInnerHTML={{
                        __html: service?.contenidoDescripcion,
                    }}
                />

                <p className="mb-10 text-lg text-justify">
                    {service?.descripcion2}
                </p>
                <h2 className="mb-10 text-3xl font-medium text-justify">
                    {service?.pregunta3}
                </h2>
                <p className="mb-10 text-lg text-justify">
                    {service?.descripcion3}
                </p>
                <p className="mb-10 text-lg text-justify">
                    {service?.descripcion31}
                </p>
                <div
                    className="mb-10 text-lg text-justify"
                    dangerouslySetInnerHTML={{
                        __html: service?.contenidoDescripcion1,
                    }}
                />
                <GridServices />
                <div
                    className="mb-10 text-lg text-justify"
                    dangerouslySetInnerHTML={{
                        __html: service?.contenidoDescripcion2,
                    }}
                />
                <Presupuesto />
                <div
                    className="mb-10 text-lg text-justify"
                    dangerouslySetInnerHTML={{
                        __html: service?.contenidoDescripcion3,
                    }}
                />
                <h2 className="mb-10 text-3xl font-medium text-justify">
                    {service?.pregunta4}
                </h2>
                <p className="mb-10 text-lg text-justify">
                    {service?.descripcion4}
                </p>
                <CallToAction1 text={service?.title} />
                <p className="mb-10 text-lg text-justify">
                    {service?.descripcion41}
                </p>
                <h2 className="mb-10 text-3xl font-medium text-justify">
                    {service?.pregunta5}
                </h2>
                
                <p className="mb-10 text-lg text-justify">
                    {service?.descripcion5}
                </p>
                <p className="mb-10 text-lg text-justify">
                    {service?.descripcion51}
                </p>
            </div>

            <div
                className="text-lg text-justify"
                dangerouslySetInnerHTML={{ __html: service.contenido }}
            />

           

            {service.accordionData ? (
                <Acordeon accordionData={service?.accordionData} />
            ) : null}
            <CallButton />
             <Areastrabajo />
        </div>
         
    );
}