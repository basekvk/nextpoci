import Image from 'next/image';

export default function Precios() {
    return (
        <>
            <section className="bg-[#003A70]">
                {' '}
                <div className="flex justify-center my-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        className="mr-2 text-[#00BBB4] mt-10"
                        fill="currentColor"
                    >
                        <path d="M12 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10.5 16a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" />
                        <path d="M17.526 5.116L14.347.659L2.658 9.997L2.01 9.99V10H1.5v12h21V10h-.962l-1.914-5.599zM19.425 10H9.397l7.469-2.546l1.522-.487zM15.55 5.79L7.84 8.418l6.106-4.878zM3.5 18.169v-4.34A3.008 3.008 0 0 0 5.33 12h13.34a3.009 3.009 0 0 0 1.83 1.83v4.34A3.009 3.009 0 0 0 18.67 20H5.332A3.01 3.01 0 0 0 3.5 18.169" />
                    </svg>
                    <h2 className="text-4xl font-bold text-center text-white uppercase mt-10">
                        Listado de Precios de Desatascos y Pocería
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row items-center w-full px-60 my-20">
                    <div className="md:flex-1 relative">
                        <Image
                            alt="Precios de desatascos Pociten"
                            className="flex object-cover w-full h-full justify-center"
                            src="/images/precios/precio_desatascos-pociten.jpg"
                            layout="responsive"
                            height={350}
                            width={450}
                        />
                    </div>
                    <div className="md:flex-1 bg-white rounded-lg shadow-lg p-4">
                        <table className="min-w-full bg-white shadow-md">
                            <thead>
                                <tr>
                                    <th className="uppercase font-semibold bg-[#003A70] text-white py-2 px-4">
                                        SERVICIO
                                    </th>
                                    <th className="uppercase font-semibold bg-[#003A70] text-white py-2 px-4">
                                        PRECIO ESTIMADO* (€)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        DESATASCO DE TUBERÍAS DE LAVABO, BAÑERA
                                        O DUCHA
                                    </td>
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        70 - 150
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        DESATASCO DE TUBERÍAS DE FREGADERO O
                                        LAVAVAJILLAS
                                    </td>
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        70 - 150
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        DESATASCO DE TUBERÍAS DE INODORO
                                    </td>
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        70 - 150
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        DESATASCO DE TUBERÍAS PRINCIPALES
                                        (INTERIOR)
                                    </td>
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        100 - 300
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        DESATASCO DE TUBERÍAS PRINCIPALES
                                        (EXTERIOR)
                                    </td>
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        200 - 600
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        DESATASCO CON EQUIPO DE ALTA PRESIÓN
                                    </td>
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        150 - 400
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        INSPECCIÓN CON CÁMARA DE TUBERÍAS (POR
                                        HORA)
                                    </td>
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        80 - 150
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        LOCALIZACIÓN DE ARQUETAS O POZOS
                                    </td>
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        100 - 300
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        LIMPIEZA DE ARQUETAS O POZOS
                                    </td>
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        150 - 400
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        REPARACIÓN DE TUBERÍAS (POR HORA)
                                    </td>
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        60 - 150
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        SUSTITUCIÓN DE SECCIONES DE TUBERÍA (POR
                                        METRO)
                                    </td>
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        100 - 200
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        INSTALACIÓN DE SIFONES O VÁLVULAS
                                        ANTIRRETORNO
                                    </td>
                                    <td className="bg-[#00BBB4] text-white py-2 px-4">
                                        100 - 250
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-full flex justify-center mt-4">
                    <div className="max-w-3xl">
                        <p className="text-base text-white m-10">
                            <strong>*Notas:</strong>
                        </p>
                        <ul className="list-disc list-inside text-base text-white m-10">
                            <li>
                                Los precios de desatascos y pocería pueden
                                incrementarse en un 20-50% para servicios de
                                emergencia fuera de horario regular o en fines
                                de semana y festivos. El precio reflejado es una
                                estimación y puede variar según la ubicación y
                                la empresa contratada.
                            </li>
                            <li>
                                El precio estimado corresponde por hora de
                                trabajo
                            </li>
                            <li>
                                Para trabajos que requieran permisos, como obras
                                en vía pública, el cliente generalmente debe
                                gestionarlos y asumir el coste.
                            </li>
                            <li>
                                Los precios de reparaciones y sustituciones
                                pueden variar significativamente dependiendo del
                                material necesario (por ejemplo, PVC, cobre,
                                etc.) y la dificultad de acceso.
                            </li>
                            <li>
                                Los precios que se muestran en esta web no son
                                concluyentes.Recomendamos siempre solicitar un
                                presupuesto detallado adaptado a tus necesidades
                                específicas antes de contratar un servicio. Un
                                buen profesional de desatascos primero
                                diagnosticará el problema y te proporcionará un
                                presupuesto claro desglosando costes antes de
                                comenzar el trabajo.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
