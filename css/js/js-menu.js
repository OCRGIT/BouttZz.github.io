function mostrarCat(cat){
  // más adelante aquí filtraremos productos
  console.log('Filtrar por: '+cat);
  // por ahora solo scroll suave a la sección
  const destino = document.getElementById(cat) || document.getElementById('catalogo');
  destino?.scrollIntoView({behavior:'smooth'});
}
