import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ button, drawer, content }) {
    this.__button = button;
    this.__drawer = drawer;
    this.__content = content;

    this.__initialAppShell();
  }

  __initialAppShell() {
    DrawerInitiator.init({
      button: this.__button,
      drawer: this.__drawer,
      content: this.__content,
    });
  }
}

export default App;
