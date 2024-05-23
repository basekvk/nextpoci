import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { menuDesktop } from '../layout/menu';

function Areastrabajo() {
    const router = useRouter();
    const [selectedLocation, setSelectedLocation] = useState('');

    const trabajamosEnMenu = menuDesktop.find(item => item.id === 4);

    const elementosExcluidos = ['CENTRO', 'NORTE', 'SUR', 'ESTE', 'OESTE'];

    function extraerSubmenus(submenus, resultado = []) {
        submenus.forEach(submenu => {
            if (!elementosExcluidos.includes(submenu.text.toUpperCase())) {
                resultado.push({ nombre: submenu.text, url: submenu.link });
            }

            if (submenu.submenu) {
                extraerSubmenus(submenu.submenu, resultado);
            }
        });

        return resultado;
    }

    let localidadesOrdenadas = [];

    if (trabajamosEnMenu && trabajamosEnMenu.submenu) {
        const submenusExtraidos = extraerSubmenus(trabajamosEnMenu.submenu);
        localidadesOrdenadas = submenusExtraidos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    const handleLocationChange = (event) => {
        const url = event.target.value;
        setSelectedLocation(url);
        
    };

    useEffect(() => {
        if (selectedLocation) {
            router.push(selectedLocation);
            setSelectedLocation('');
        }
    }, [selectedLocation, router]);

    return (
        <>
            <div className="pt-10 pb-30 m-10 bg-gradient-to-r from-blue-900 to-teal-500">
                <h3 className="text-center text-4xl mb-6 text-white">Áreas de Trabajo</h3>
                <div className="flex justify-center items-center bg-gradient-to-r from-blue-900 to-teal-500 p-4 rounded-md mx-8">
                    <label htmlFor="localidadSelect" className="sr-only">Selecciona tu localidad</label>
                    <select
                        id="localidadSelect"
                        className="w-full max-w-xs p-4 text-lg uppercase border-2 border-blue-500 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={selectedLocation}
                        onChange={handleLocationChange}
                    >
                        <option value="">Selecciona tu localidad</option>
                        {localidadesOrdenadas.map((localidad, index) => (
                            <option key={index} value={localidad.url}>
                                {localidad.nombre}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
}

export default Areastrabajo;
