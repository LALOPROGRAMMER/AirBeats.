document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplos de productos destacados
    const productosDestacados = [
        {
            nombre: 'Audífonos On Ear Venker A2',
            imagen: './assets/venker.jpg',
            precio: '$350.00',
            descripcion: 'Estos audífonos de alta calidad ofrecen un sonido nítido y comodidad durante horas.'
        },
        {
            nombre: 'AirPods Pro 3ra Generación',
            imagen: './assets/airpods.jpg', 
            precio: '$450.00',
            descripcion: 'Nada como unos AirPods Pro originales de tercera generación que ofrecen cancelación de ruido y calidad de sonido excepcional.'
        }
    ]; 

    const productosDestacadosContainer = document.getElementById('productos-destacados'); 

    // Mostrar Productos destacados en la página
    productosDestacados.forEach(producto => {
        const productoDiv = document.createElement('div'); 
        productoDiv.className = 'producto'; 
        productoDiv.innerHTML = `
    <img class="imagen-producto" src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p><strong>Descripción:</strong> ${producto.descripcion}</p>
    <p>Precio: <strong>${producto.precio}</strong></p>
`;

        productosDestacadosContainer.appendChild(productoDiv); 
    }); 
});
