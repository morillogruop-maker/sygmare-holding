import { contactEmail } from './data.js';

const toggleNavigation = () => {
    const navToggle = document.querySelector('.nav__toggle');
    const navLinks = document.querySelector('.nav__links');

    if (!navToggle || !navLinks) {
        return;
    }

    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
};

const enableSmoothScroll = () => {
    const scrollLinks = document.querySelectorAll('[data-scroll]');
    const navLinks = document.querySelector('.nav__links');
    const navToggle = document.querySelector('.nav__toggle');

    scrollLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');

            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);

                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }

                navLinks?.classList.remove('is-open');
                navToggle?.setAttribute('aria-expanded', 'false');
            }
        });
    });
};

const highlightActiveSection = () => {
    const sections = Array.from(document.querySelectorAll('header[id], main section[id]'));
    const navLinks = Array.from(document.querySelectorAll('.nav__links a'));

    if (!sections.length || !navLinks.length) {
        return;
    }

    const linkMap = new Map(
        navLinks.map((link) => [link.getAttribute('href')?.replace('#', '') || '', link])
    );

    const observedSections = sections.filter(
        (section) => section.id === 'inicio' || linkMap.has(section.id)
    );

    if (!observedSections.length) {
        return;
    }

    const setActive = (id) => {
        navLinks.forEach((link) => link.classList.remove('is-active'));
        const targetLink = linkMap.get(id);

        if (targetLink) {
            targetLink.classList.add('is-active');
            return;
        }

        if (id === 'inicio') {
            navLinks[0].classList.add('is-active');
        }
    };

    const observer = new IntersectionObserver(
        (entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visible.length) {
                const currentId = visible[0].target.id;
                setActive(currentId);
            }
        },
        {
            rootMargin: '-20% 0px -60% 0px',
            threshold: [0.35, 0.5, 0.75]
        }
    );

    observedSections.forEach((section) => observer.observe(section));

    setActive('inicio');
};

const updateCurrentYear = () => {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
};

const handleContactForm = () => {
    const form = document.querySelector('.contact__form');
    const confirmation = document.querySelector('.contact__confirmation');

    if (!form || !confirmation) {
        return;
    }

    const baseMessage = confirmation.textContent;

    const getValue = (formData, key) => {
        const value = formData.get(key);
        return typeof value === 'string' ? value.trim() : '';
    };

    const buildMailtoLink = (formData) => {
        const name = getValue(formData, 'name');
        const email = getValue(formData, 'email');
        const company = getValue(formData, 'company');
        const message = getValue(formData, 'message');

        const subject = encodeURIComponent(
            name ? `Nueva consulta de ${name}` : 'Nueva consulta para Sygmare Holding'
        );

        const lines = [
            'Detalles de la solicitud:',
            name ? `Nombre: ${name}` : null,
            email ? `Correo: ${email}` : null,
            company ? `Empresa: ${company}` : null,
            '',
            'Mensaje:',
            message || 'Sin mensaje adicional.'
        ].filter((line) => line !== null && line !== undefined);

        const body = encodeURIComponent(lines.join('\n'));

        return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    };

    const openMailClient = (link) => {
        const mailWindow = window.open(link, '_blank');

        if (!mailWindow) {
            window.location.href = link;
        }
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (typeof form.reportValidity === 'function' && !form.reportValidity()) {
            return;
        }

        const formData = new FormData(form);
        const name = formData.get('name');
        const firstName = typeof name === 'string' ? name.trim().split(' ')[0] : '';

        openMailClient(buildMailtoLink(formData));

        confirmation.textContent = firstName
            ? `${firstName}, gracias por escribirnos. Nuestro equipo responderá desde ${contactEmail} en menos de 24 horas.`
            : baseMessage;

        confirmation.hidden = false;
        confirmation.focus?.();
        form.reset();
    });
};

export const initInteractions = () => {
    toggleNavigation();
    enableSmoothScroll();
    highlightActiveSection();
    updateCurrentYear();
    handleContactForm();
};
