import { renderLandingPage } from './modules/render.js';
import { initInteractions } from './modules/interactions.js';

const bootstrap = () => {
    const appRoot = document.getElementById('app');

    if (!appRoot) {
        throw new Error('No se encontró el contenedor principal de la aplicación.');
    }

    renderLandingPage(appRoot);
    initInteractions();
};

document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', bootstrap)
    : bootstrap();
