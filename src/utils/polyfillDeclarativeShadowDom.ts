export const polyfillDeclarativeShadowDom = () => {
  // Declarative ShadowDom Polyfill, see: https://web.dev/declarative-shadow-dom/#detection-support
  // needs to load after the document is ready or be triggered by more specific events (Custom Element lifecycles)
  document.querySelectorAll('template[shadowroot]').forEach(template => {
    const mode = template.getAttribute('shadowroot');
    // @ts-ignore
    const shadowRoot = template?.parentNode?.attachShadow({ mode });

    shadowRoot.appendChild((template as HTMLTemplateElement).content);

    template.remove();
  });
};
