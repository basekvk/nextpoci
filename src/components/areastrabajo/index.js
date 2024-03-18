import classes from './index.module.scss';
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
        }
    }, [selectedLocation, router]);

    return (
        <>
            <div className="banner">
                <h3 className={classes.title}>Áreas de Trabajo</h3>
                <div className={classes.containerSelect}>
                    <select className={classes.selectLocalidad} value={selectedLocation} onChange={handleLocationChange}>
                    <option value="" disabled={selectedLocation !== ''}>Selecciona tu localidad</option>
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
