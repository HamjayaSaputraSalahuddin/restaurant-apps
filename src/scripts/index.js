import './data/data-source';
import 'regenerator-runtime'; /* for async await transpile */
import App from './views/app';
import '../styles/responsive.css';
import '../styles/main.css';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
