function injectComponent(targetId, componentPath) {
  fetch(componentPath)
    .then(res => {
      if (!res.ok) {
        throw new Error(`No se pudo cargar ${componentPath}`);
      }
      return res.text();
    })
    .then(html => {
      document.getElementById(targetId).innerHTML = html;
    })
    .catch(err => console.error(err));
}
