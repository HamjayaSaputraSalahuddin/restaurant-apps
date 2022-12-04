import './data-source';
import 'regenerator-runtime'; /* for async await transpile */
import App from './views/app';
import '../styles/responsive.css';
import '../styles/main.css';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});
