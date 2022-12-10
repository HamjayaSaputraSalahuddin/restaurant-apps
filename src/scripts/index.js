import './data/data-source';
import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import '../styles/responsive.css';
import '../styles/main.css';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  swRegister();
});

const skipToContent = document.querySelector('.skip-link');
skipToContent.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    document.querySelector('#main').focus();
  }
});
