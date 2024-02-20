// utils/dateUtils.js

export function parseSpanishDate(dateString) {
    const months = {
        ENERO: 0,
        FEBRERO: 1,
        MARZO: 2,
        ABRIL: 3,
        MAYO: 4,
        JUNIO: 5,
        JULIO: 6,
        AGOSTO: 7,
        SEPTIEMBRE: 8,
        OCTUBRE: 9,
        NOVIEMBRE: 10,
        DICIEMBRE: 11,
    };

    const parts = dateString.split(' ');
    const day = parseInt(parts[0], 10);
    const month = months[parts[1].toUpperCase()]; // Asegúrate de convertir a mayúsculas para evitar problemas de coincidencia
    const year = parseInt(parts[2], 10);

    return new Date(year, month, day);
}
