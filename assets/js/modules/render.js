import {
    navigationLinks,
    hero,
    trustLogos,
    vision,
    services,
    sectors,
    cases,
    cta,
    insights,
    contact,
    footer
} from './data.js';

const renderNavigation = () => `
    <nav class="nav">
        <a href="#inicio" class="logo" data-scroll aria-label="Volver al inicio">
            <img src="assets/img/logo-sygmare.svg" alt="Sygmare Holding logotipo" loading="lazy" />
            <span>Sygmare Holding</span>
        </a>
        <button class="nav__toggle" aria-label="Abrir menú" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <ul class="nav__links">
            ${navigationLinks
                .map(
                    (link) => `
                <li><a class="nav__link" href="${link.href}" data-scroll>${link.label}</a></li>
            `
                )
                .join('')}
        </ul>
        <a class="nav__cta" href="#contacto" data-scroll>Agenda una consulta</a>
    </nav>
`;

const renderHero = () => `
    <div class="hero">
        <div class="hero__content">
            <span class="hero__eyebrow">${hero.eyebrow}</span>
            <h1>${hero.title}</h1>
            <p>${hero.description}</p>
            <div class="hero__actions">
                ${hero.actions
                    .map(
                        (action) => `
                        <a class="btn btn--${action.variant}" href="${action.href}" data-scroll>
                            ${action.label}
                        </a>
                    `
                    )
                    .join('')}
            </div>
            <div class="hero__metrics">
                ${hero.metrics
                    .map(
                        (metric) => `
                        <div>
                            <span class="hero__metric">${metric.value}</span>
                            <span class="hero__label">${metric.label}</span>
                        </div>
                    `
                    )
                    .join('')}
            </div>
        </div>
        <div class="hero__gallery">
            ${hero.gallery
                .map(
                    (image) => `
                        <img src="${image.src}" alt="${image.alt}">
                    `
                )
                .join('')}
        </div>
    </div>
`;

const renderTrust = () => `
    <section class="trust" aria-label="Empresas que confían en nosotros">
        <h2>Confían en nuestra visión</h2>
        <div class="trust__logos">
            ${trustLogos.map((logo) => `<span>${logo}</span>`).join('')}
        </div>
    </section>
`;

const renderVision = () => `
    <section class="vision" id="${vision.id}">
        <div class="vision__grid">
            <div class="vision__text">
                <h2>${vision.title}</h2>
                <p>${vision.description}</p>
                <ul class="vision__bullets">
                    ${vision.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
                </ul>
            </div>
            <div class="vision__images">
                ${vision.images
                    .map(
                        (image) => `
                        <figure>
                            <img src="${image.src}" alt="${image.alt}">
                            <figcaption>${image.caption}</figcaption>
                        </figure>
                    `
                    )
                    .join('')}
            </div>
        </div>
    </section>
`;

const renderServices = () => `
    <section class="services" id="${services.id}">
        <div class="section__header">
            <h2>${services.title}</h2>
            <p>${services.description}</p>
        </div>
        <div class="services__grid">
            ${services.items
                .map(
                    (service) => `
                    <article class="card">
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                        <ul>
                            ${service.features.map((feature) => `<li>${feature}</li>`).join('')}
                        </ul>
                    </article>
                `
                )
                .join('')}
        </div>
    </section>
`;

const renderSectors = () => `
    <section class="sectors" id="${sectors.id}">
        <div class="section__header">
            <h2>${sectors.title}</h2>
            <p>${sectors.description}</p>
        </div>
        <div class="sectors__list">
            ${sectors.items
                .map(
                    (sector) => `
                    <div class="sectors__item">
                        <h3>${sector.title}</h3>
                        <p>${sector.description}</p>
                    </div>
                `
                )
                .join('')}
        </div>
    </section>
`;

const renderCases = () => `
    <section class="cases" id="${cases.id}">
        <div class="section__header">
            <h2>${cases.title}</h2>
            <p>${cases.description}</p>
        </div>
        <div class="cases__grid">
            ${cases.items
                .map(
                    (caseItem) => `
                    <article class="case">
                        <img class="case__image" src="${caseItem.image.src}" alt="${caseItem.image.alt}">
                        <div class="case__body">
                            <h3>${caseItem.title}</h3>
                            <p>${caseItem.description}</p>
                            <span class="case__tag">${caseItem.tag}</span>
                        </div>
                    </article>
                `
                )
                .join('')}
        </div>
    </section>
`;

const renderCta = () => `
    <section class="cta">
        <div class="cta__content">
            <h2>${cta.title}</h2>
            <p>${cta.description}</p>
            <a class="btn btn--light" href="${cta.action.href}" data-scroll>${cta.action.label}</a>
        </div>
    </section>
`;

const renderInsights = () => `
    <section class="insights" id="${insights.id}" aria-label="Recursos y artículos">
        <div class="section__header">
            <h2>${insights.title}</h2>
            <p>${insights.description}</p>
        </div>
        <div class="insights__grid">
            ${insights.items
                .map(
                    (insight) => `
                    <article class="insight">
                        <img class="insight__image" src="${insight.image.src}" alt="${insight.image.alt}">
                        <h3>${insight.title}</h3>
                        <p>${insight.description}</p>
                        <a href="${insight.action.href}" class="link" data-scroll>${insight.action.label}</a>
                    </article>
                `
                )
                .join('')}
        </div>
    </section>
`;

const renderContact = () => `
    <section class="contact" id="${contact.id}">
        <div class="contact__content">
            <h2>${contact.title}</h2>
            <p>${contact.description}</p>
            <form class="contact__form" novalidate>
                ${contact.form.fields
                    .map((field) => {
                        const common = `
                            <label for="${field.id}">${field.label}</label>
                        `;

                        if (field.type === 'textarea') {
                            return `
                                <div class="form__group">
                                    ${common}
                                    <textarea id="${field.id}" name="${field.id}" rows="4" placeholder="${field.placeholder || ''}" ${
                                field.required ? 'required' : ''
                            }></textarea>
                                </div>
                            `;
                        }

                        return `
                            <div class="form__group">
                                ${common}
                                <input id="${field.id}" name="${field.id}" type="${field.type}" placeholder="${field.placeholder || ''}" ${
                            field.required ? 'required' : ''
                        }>
                            </div>
                        `;
                    })
                    .join('')}
                <button type="submit" class="btn btn--primary">Enviar mensaje</button>
                <p class="contact__confirmation" role="status" hidden>${contact.form.confirmation}</p>
            </form>
        </div>
        <aside class="contact__info">
            <h3>Nuestras sedes</h3>
            <ul>
                ${contact.offices
                    .map((office) => `<li><strong>${office.city}</strong> · ${office.address}</li>`)
                    .join('')}
            </ul>
            <div class="contact__social">
                ${contact.social
                    .map(
                        (socialLink) => `
                            <a href="${socialLink.href}" aria-label="${socialLink.ariaLabel}">${socialLink.label}</a>
                        `
                    )
                    .join('')}
            </div>
        </aside>
    </section>
`;

const renderFooter = () => `
    <footer class="footer">
        <div class="footer__top">
            <div>
                <a href="#inicio" class="logo logo--footer" data-scroll>
                    <img src="assets/img/logo-sygmare.svg" alt="Sygmare Holding logotipo" loading="lazy" />
                    <span>Sygmare Holding</span>
                </a>
                <p>${footer.tagline}</p>
            </div>
            <div>
                <h4>Servicios</h4>
                <ul>
                    ${footer.services
                        .map((service) => `<li><a href="${service.href}" data-scroll>${service.label}</a></li>`)
                        .join('')}
                </ul>
            </div>
            <div>
                <h4>Recursos</h4>
                <ul>
                    ${footer.resources
                        .map((resource) => `<li><a href="${resource.href}" data-scroll>${resource.label}</a></li>`)
                        .join('')}
                </ul>
            </div>
            <div>
                <h4>Contáctanos</h4>
                <ul>
                    ${footer.contact
                        .map((item) =>
                            item.href
                                ? `<li><a href="${item.href}">${item.label}</a></li>`
                                : `<li>${item.label}</li>`
                        )
                        .join('')}
                </ul>
            </div>
        </div>
        <div class="footer__bottom">
            <p>© <span id="current-year"></span> Sygmare Holding. Todos los derechos reservados.</p>
            <div class="footer__legal">
                ${footer.legal
                    .map((item) => `<a href="${item.href}">${item.label}</a>`)
                    .join('')}
            </div>
        </div>
    </footer>
`;

export const renderLandingPage = (root) => {
    root.innerHTML = `
        <header class="header" id="inicio">
            ${renderNavigation()}
            ${renderHero()}
        </header>
        <main>
            ${renderTrust()}
            ${renderVision()}
            ${renderServices()}
            ${renderSectors()}
            ${renderCases()}
            ${renderCta()}
            ${renderInsights()}
            ${renderContact()}
        </main>
        ${renderFooter()}
    `;
};
