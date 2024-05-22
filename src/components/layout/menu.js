const menuDesktop = [
    {
        id: 1,
        title: 'INICIO',
        link: '/',
        cName: '',
    },
    /*{
        id: 2,
        title: 'QUIENES SOMOS',
        link: '/about',
        cName: '',
    },*/
    {
        id: 3,
        title: 'SERVICIOS',
        link: '#',
        cName: 'dropdown_holder',
        submenu: [
            {
                id: 31,
                text: 'DESATASCOS 24 HORAS',
                link: '/services/desatascos-24-horas',
                cName: 'dropdown_menu',
                
            },
            {
                id: 32,
                text: 'DESATASCO DE TUBERÍAS',
                link: '/services/desatasco-de-tuberias',
            },
            {
                id: 34,
                text: 'DESATASCOS BARATOS',
                link: '/services/desatascos-baratos',
            },
            {
                id: 35,
                text: 'OBRAS DE POCERÍA',
                link: '/services/obras-de-poceria',
            },
            {
                id: 35,
                text: 'DESATRANCOS',
                link: '/services/desatrancos',
            },
            {
                id: 37,
                text: 'REPARACIÓN DE TUBERÍAS SIN OBRAS',
                link: '/services/reparacion-tuberias-sin-obras',
            },
            {
                id: 38,
                text: 'FOSAS SÉPTICAS',
                link: '/services/limpieza-fosas-septicas',
            },
            {
                id: 39,
                text: 'POCEROS',
                link: '/services/poceros-madrid',
            },
            {
                id: 310,
                text: 'ACHIQUES DE AGUA',
                link: '/services/achiques-de-agua',
            },
            {
                id: 311,
                text: 'CAMIÓN CUBA',
                link: '/services/camion-cuba',
            },
            {
                id: 312,
                text: 'INSPECCIÓNES CON CÁMARA TV',
                link: '/services/inspeccion-tuberia-con-camara',
            }
        ],
    },
    // ... otros elementos del menú ...
    {
        id: 4,
        title: 'TRABAJAMOS EN',
        link: '#',
        cName: 'dropdown_holder',
        submenu: [
            {
                id: 41,
                text: 'CENTRO',
                link: '',
                submenu: [
                    {
                        id: 412,
                        text: 'Vallecas',
                        link: '/desatascos/vallecas',
                    },
                    {
                        id: 413,
                        text: 'Carabanchel',
                        link: '/desatascos/carabanchel',
                    },
                    {
                        id: 414,
                        text: 'Usera',
                        link: '/desatascos/usera',
                    },
                ],
            },
            {
                id: 42,
                text: 'SUR',
                link: '',
                cName: '',
                submenu: [
                    {
                        id: 421,
                        text: 'Getafe',
                        link: '/desatascos/getafe',
                    },
                    {
                        id: 422,
                        text: 'Alcorcón',
                        link: '/desatascos/alcorcon',
                    },
                    {
                        id: 423,
                        text: 'Fuenlabrada',
                        link: '/desatascos/fuenlabrada',
                    },
                    {
                        id: 424,
                        text: 'Leganés',
                        link: '/desatascos/leganes',
                    },
                    {
                        id: 425,
                        text: 'Móstoles',
                        link: '/desatascos/mostoles',
                    },
                    {
                        id: 426,
                        text: 'Parla',
                        link: '/desatascos/parla',
                    },
                    {
                        id: 427,
                        text: 'Pinto',
                        link: '/desatascos/pinto',
                    },
                    {
                        id: 428,
                        text: 'Valdemoro',
                        link: '/desatascos/valdemoro',
                    },
                    {
                        id: 429,
                        text: 'Navalcarnero',
                        link: '/desatascos/navalcarnero',
                    },
                    {
                        id: 4210,
                        text: 'Ciempozuelos',
                        link: '/desatascos/ciempozuelos',
                    },
                    {
                        id: 4211,
                        text: 'Aranjuez',
                        link: '/desatascos/aranjuez',
                    },
                    {
                        id: 4212,
                        text: 'Pinto',
                        link: '/desatascos/pinto',
                    },
                    {
                        id: 4213,
                        text: 'Torrejón de Velasco',
                        link: '/desatascos/torrejon-de-velasco',
                    },
                    {
                        id: 4214,
                        text: 'Arroyomolinos',
                        link: '/desatascos/arroyomolinos',
                    },
                ],
            },
            {
                id: 43,
                text: 'NORTE',
                link: '',
                cName: '',
                submenu: [
                    {
                        id: 431,
                        text: 'Alcobendas',
                        link: '/desatascos/alcobendas',
                    },
                    {
                        id: 434,
                        text: 'Collado Villalba',
                        link: '/desatascos/collado-villalba',
                    },
                    {
                        id: 432,
                        text: 'Tres Cantos',
                        link: '/desatascos/tres-cantos',
                    },
                    {
                        id: 433,
                        text: 'El Escorial',
                        link: '/desatascos/el-escorial',
                    },
                    {
                        id: 435,
                        text: 'Colmenar Viejo',
                        link: '/desatascos/colmenar-viejo',
                    },
                    {
                        id: 436,
                        text: 'Galapagar',
                        link: '/desatascos/galapagar',

                    }
                ],
            },
            {
                id: 44,
                text: 'ESTE',
                link: '',
                cName: '',
                submenu: [
                    {
                        id: 441,
                        text: 'Alcalá de Henares',
                        link: '/desatascos/alcala-de-henares',
                    },
                    {
                        id: 442,
                        text: 'Coslada',
                        link: '/desatascos/coslada',
                    },
                    
                    {
                        id: 444,
                        text: 'Rivas Vaciamadrid',
                        link: '/desatascos/rivas-vaciamadrid',
                    },
                    {
                        id: 445,
                        text: 'Torrejón de Ardoz',
                        link: '/desatascos/torrejon-de-ardoz',
                    },
                    {
                        id: 446,
                        text: 'San Fernando de Henares',
                        link: '/desatascos/san-fernando-de-henares',
                    },
                    {
                        id: 447,
                        text: 'San Sebastián de los Reyes',
                        link: '/desatascos/san-sebastian-de-los-reyes',
                    },
                    {
                        id: 448,
                        text: 'Algete',
                        link: '/desatascos/algete',
                    },
                    {
                        id: 449,
                        text: 'Arganda del Rey',
                        link: '/desatascos/arganda-del-rey',
                    },
                    /*
                    {
                        id: 448,
                        text: 'Tres Cantos',
                        link: '/desatascos/tres-cantos',
                    },
                    {
                        id: 449,
                        text: 'Torrelodones',
                        link: '/desatascos/torrelodones',
                    },
                    {
                        id: 4410,
                        text: 'Villalba',
                        link: '/desatascos/villalba',
                    },
                    {
                        id: 4411,
                        text: 'Villaviciosa de Odón',
                        link: '/desatascos/villaviciosa-de-odon',
                    },*/
                ],
            },
            {
                id: 45,
                text: 'OESTE',
                link: '',
                cName: '',
                submenu: [
                    {
                        id: 451,
                        text: 'Boadilla',
                        link: '/desatascos/boadilla',
                    },
                    {
                        id: 452,
                        text: 'Majadahonda',
                        link: '/desatascos/majadahonda',
                    },
                    {
                        id: 453,
                        text: 'Pozuelo',
                        link: '/desatascos/pozuelo',
                    },
                    {
                        id: 454,
                        text: 'Las Rozas',
                        link: '/desatascos/las-rozas',
                    },
                ],
            },
            {
                id: 46,
                text: 'TOLEDO',
                link: '',
                cName: '',
                submenu: [
                    {
                        id: 451,
                        text: 'SESEÑA',
                        link: '/desatascos/sesena',
                    },
                    {
                        id: 452,
                        text: 'ILLESCAS',
                        link: '/desatascos/illescas',
                    },
                    {
                        id: 453,
                        text: 'TOLEDO CAPITAL',
                        link: '/desatascos/toledo',
                    },
                ],
            },
            // ... más submenús ...
        ],
    },
    {
        id: 5,
        title: 'BLOGS',
        link: '/blogs/category/todo',
        cName: '',
        
    },
    
    // ... otros elementos del menú ...
];

export { menuDesktop };
