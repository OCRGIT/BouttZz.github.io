const productos = [
  {
    id: "nk-air-001",
    name: "Nike Air Max 90",
    price: 2800,
    size: ["25", "25.5", "26", "26.5", "27"],
    img: "nike.jpg",
    category: "sneakers"
  },
  {
    id: "mochila-002",
    name: "Backpack Urban 25 L",
    price: 950,
    size: ["Única"],
    img: "mochila.jpg",
    category: "backpacks"
  },
  {
    id: "play-003",
    name: "Playera Dry-Fit Negra",
    price: 450,
    size: ["S", "M", "L", "XL"],
    img: "playera.jpg",
    category: "streetwear"
  }
];

function renderCat(cat = 'todo'){
  const cont = document.getElementById('catalogo');
  cont.innerHTML = '';
  const lista = cat === 'todo' ? productos : productos.filter(p => p.category === cat);
  lista.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price} MXN</p>
      <button class="snipcart-add-item"
        data-item-id="${p.id}"
        data-item-price="${p.price}"
        data-item-name="${p.name}"
        data-item-image="${p.img}"
        data-item-url="/"
        data-item-custom1-name="Talla"
        data-item-custom1-options="${p.size.join('|')}">
        Agregar al carrito
      </button>
    `;
    cont.appendChild(card);
  });
}
renderCat('todo');
