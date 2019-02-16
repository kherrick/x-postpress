import { css } from 'lit-element'
export default css`
  app-header {
    color: #fff;

    --app-header-background-rear-layer: {
      background-color: #ccc;
    }
  }

  app-toolbar {
    background-color: #000;
    font-size: 1.25rem;
  }

  #toolbar-child a {
    color: #fff;
    text-decoration: none;
  }

  #toolbar-child a:hover {
    cursor: pointer;
  }

  #toolbar-child {
    padding: 1rem 0;
    width: 100%;
  }

  app-drawer {
    --app-drawer-scrim-background: rgba(0, 0, 0, 0.8);
  }

  app-drawer a {
    color: #ccc;
    text-decoration: none;
  }

  app-drawer a:hover {
    text-decoration: underline;
  }

  app-drawer h2 {
    color: #ddd;
  }

  app-drawer ul {
    list-style-type: none;
    padding: 0 1rem 0 1rem;
  }

  app-drawer ul li ul li {
    list-style-type: disc;
    margin-left: 0.5rem;
  }
`
