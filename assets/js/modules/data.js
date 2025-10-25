export const contactEmail = 'morillogruop@gmail.com';

export const navigationLinks = [
    { href: '#vision', label: 'Visión' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#sectores', label: 'Sectores' },
    { href: '#casos', label: 'Casos de éxito' },
    { href: '#contacto', label: 'Contacto' }
];

export const hero = {
    eyebrow: 'Arquitectos de futuro corporativo',
    title: 'Elevamos organizaciones hacia la próxima frontera digital.',
    description:
        'Integramos estrategia, tecnología exponencial y cultura de innovación para acelerar el crecimiento sostenible de tu organización en la era de la inteligencia artificial.',
    actions: [
        { label: 'Descubre nuestros servicios', href: '#servicios', variant: 'primary' },
        { label: 'Hablemos', href: '#contacto', variant: 'ghost' }
    ],
    metrics: [
        { value: '+120', label: 'Proyectos completados' },
        { value: '25%', label: 'Incremento promedio de ROI' },
        { value: '15', label: 'Países con operaciones' }
    ],
    gallery: [
        {
            src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
            alt: 'Equipo observando una interfaz holográfica en un centro de control futurista'
        },
        {
            src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
            alt: 'Panorama nocturno de una ciudad inteligente iluminada por rascacielos digitales'
        },
        {
            src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
            alt: 'Servidor de datos futurista con luces doradas y azules'
        }
    ]
};

export const trustLogos = ['NovaTech', 'Grupo Atlas', 'Futura Labs', 'Latitude', 'Everlight'];

export const vision = {
    id: 'vision',
    title: 'Visión 2030: ecosistemas inteligentes y sostenibles',
    description:
        'Co-creamos plataformas conectadas que sincronizan datos, talento y operaciones en tiempo real para responder a los cambios del mercado con precisión.',
    bullets: [
        'Gemelos digitales para anticipar escenarios de negocio.',
        'Arquitecturas cloud soberanas y seguras en múltiples regiones.',
        'Experiencias inmersivas que elevan la confianza de clientes y aliados.'
    ],
    images: [
        {
            src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=900&q=80',
            alt: 'Profesionales analizando datos proyectados en una sala futurista',
            caption: 'Laboratorio de estrategia aumentada'
        },
        {
            src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
            alt: 'Infraestructura tecnológica avanzada con iluminación dorada',
            caption: 'Infraestructura digital resiliente'
        }
    ]
};

export const services = {
    id: 'servicios',
    title: 'Soluciones diseñadas para impulsar resultados',
    description: 'Desde la estrategia hasta la implementación, acompañamos cada etapa de tu transformación digital.',
    items: [
        {
            title: 'Consultoría estratégica',
            description:
                'Diseñamos hojas de ruta adaptadas a tus objetivos, identificando oportunidades de crecimiento y optimización operativa.',
            features: [
                'Planes de transformación digital',
                'Gobernanza y gestión del cambio',
                'Modelos de negocio data-driven'
            ]
        },
        {
            title: 'Innovación tecnológica',
            description:
                'Desarrollamos soluciones escalables que integran inteligencia artificial, automatización y plataformas cloud seguras.',
            features: [
                'Arquitectura de datos y analítica avanzada',
                'Integración de sistemas y APIs',
                'Modernización de infraestructura TI'
            ]
        },
        {
            title: 'Experiencias digitales',
            description:
                'Construimos productos centrados en el usuario que impulsan la fidelización y convierten la visión en resultados tangibles.',
            features: [
                'Diseño UX/UI y research',
                'Desarrollo web y mobile',
                'Optimización de funnels y CRO'
            ]
        }
    ]
};

export const sectors = {
    id: 'sectores',
    title: 'Especialistas en sectores clave',
    description:
        'Combinamos experiencia multisectorial con equipos dedicados para acelerar la ejecución en mercados altamente competitivos.',
    items: [
        {
            title: 'Finanzas y banca',
            description:
                'Implementamos plataformas seguras, cumplimiento normativo y experiencias digitales que fidelizan clientes.'
        },
        {
            title: 'Retail y eCommerce',
            description:
                'Optimizamos cadenas de suministro, personalizamos experiencias y potenciamos conversiones omnicanal.'
        },
        {
            title: 'Salud y biotecnología',
            description:
                'Digitalizamos procesos críticos con soluciones interoperables, centradas en la atención y la investigación.'
        },
        {
            title: 'Energía y sostenibilidad',
            description:
                'Acompañamos la transición energética con estrategias de eficiencia, monitoreo inteligente y trazabilidad.'
        }
    ]
};

export const cases = {
    id: 'casos',
    title: 'Resultados que hablan por sí mismos',
    description: 'Historias reales de organizaciones que evolucionaron junto a Sygmare Holding.',
    items: [
        {
            title: 'Latitude Bank',
            description:
                'Implementamos una plataforma de banca digital que aumentó la adopción de canales móviles en un 68% durante el primer año.',
            tag: 'Transformación digital',
            image: {
                src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
                alt: 'Interfaz de banca digital con hologramas dorados'
            }
        },
        {
            title: 'NovaTech',
            description:
                'Diseñamos un centro de innovación con squads ágiles que redujeron el time-to-market de nuevos productos en 40%.',
            tag: 'Innovación ágil',
            image: {
                src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
                alt: 'Ingeniera operando un panel táctil avanzado'
            }
        },
        {
            title: 'Biocare Labs',
            description:
                'Desarrollamos una plataforma interoperable para investigación clínica que aceleró procesos regulatorios en 30%.',
            tag: 'HealthTech',
            image: {
                src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
                alt: 'Laboratorio médico con dispositivos conectados y pantallas holográficas'
            }
        }
    ]
};

export const cta = {
    title: 'Construyamos el futuro de tu organización hoy.',
    description:
        'Agenda una sesión estratégica con nuestros especialistas y descubre cómo convertir los desafíos en oportunidades.',
    action: { label: 'Agenda una reunión', href: '#contacto' }
};

export const insights = {
    id: 'insights',
    title: 'Ideas para inspirar tu próxima decisión',
    description:
        'Nuestro equipo comparte tendencias, marcos de trabajo y experiencias para liderar con confianza.',
    items: [
        {
            title: 'Guía para una transformación digital sostenible',
            description:
                'Cómo combinar tecnología, cultura y gobernanza para asegurar resultados sostenibles.',
            action: { label: 'Solicita el whitepaper', href: '#contacto' },
            image: {
                src: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=80',
                alt: 'Representación de datos tridimensionales en tonos dorados'
            }
        },
        {
            title: 'Tendencias de inteligencia artificial 2024',
            description:
                'Casos prácticos y recomendaciones para implementar IA responsable en tu organización.',
            action: { label: 'Recibe el informe', href: '#contacto' },
            image: {
                src: 'https://images.unsplash.com/photo-1517341724424-d4c1e0bc47f3?auto=format&fit=crop&w=900&q=80',
                alt: 'Inteligencia artificial representada con circuitos dorados'
            }
        },
        {
            title: 'Escalando equipos ágiles globales',
            description:
                'Lecciones clave para crear estructuras flexibles que aceleren la innovación.',
            action: { label: 'Programa una mentoría', href: '#contacto' },
            image: {
                src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
                alt: 'Equipo global colaborando frente a paneles digitales'
            }
        }
    ]
};

export const contact = {
    id: 'contacto',
    title: 'Conectemos',
    description:
        `Cuéntanos sobre tu proyecto y un consultor especializado responderá desde ${contactEmail} en menos de 24 horas.`,
    form: {
        confirmation:
            `Gracias por escribirnos. Nuestro equipo responderá desde ${contactEmail} en menos de un día hábil.`,
        fields: [
            {
                id: 'name',
                label: 'Nombre y apellido',
                type: 'text',
                placeholder: 'María Fernández',
                required: true
            },
            {
                id: 'email',
                label: 'Correo electrónico',
                type: 'email',
                placeholder: contactEmail,
                required: true
            },
            {
                id: 'company',
                label: 'Empresa',
                type: 'text',
                placeholder: 'Nombre de la empresa',
                required: false
            },
            {
                id: 'message',
                label: '¿Cómo podemos ayudarte?',
                type: 'textarea',
                placeholder: 'Desarrollar una plataforma digital...',
                required: true
            }
        ]
    },
    offices: [
        { city: 'Ciudad de México', address: 'Torre Reforma, Paseo de la Reforma 483' },
        { city: 'Madrid', address: 'Paseo de la Castellana 77' },
        { city: 'Bogotá', address: 'Carrera 7 #116-50' }
    ],
    social: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com', ariaLabel: 'LinkedIn' },
        { label: 'Twitter', href: 'https://www.twitter.com', ariaLabel: 'Twitter' },
        {
            label: contactEmail,
            href: `mailto:${contactEmail}`,
            ariaLabel: 'Correo electrónico'
        }
    ]
};

export const footer = {
    tagline: 'Innovación estratégica, tecnología exponencial y equipos de clase mundial.',
    services: [
        { label: 'Consultoría', href: '#servicios' },
        { label: 'Innovación', href: '#servicios' },
        { label: 'Experiencias digitales', href: '#servicios' }
    ],
    resources: [
        { label: 'Blog', href: '#insights' },
        { label: 'Eventos', href: '#insights' },
        { label: 'Prensa', href: '#contacto' }
    ],
    contact: [
        { label: contactEmail, href: `mailto:${contactEmail}` },
        { label: '+52 55 1234 5678' }
    ],
    legal: [
        { label: 'Privacidad', href: '#' },
        { label: 'Términos', href: '#' }
    ]
};
