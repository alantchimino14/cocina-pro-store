// ========================================
// COCINA PRO - Store JavaScript
// ========================================

// Product Data with real images
const products = [
    // Sartenes
    {
        id: 1,
        name: "Set Sartenes FlexiClick 3 Piezas",
        category: "sartenes",
        categoryLabel: "Sartenes",
        price: 89990,
        originalPrice: 119990,
        discount: 25,
        image: "https://images.unsplash.com/photo-1592154395028-bbfb93ac1fc5?w=600&h=600&fit=crop",
        features: ["Mango desmontable", "Inducción", "Antiadherente"],
        badge: "bestseller",
        rating: 4.9,
        reviews: 245
    },
    {
        id: 2,
        name: "Sartén Inductora Sensilla 28cm",
        category: "sartenes",
        categoryLabel: "Sartenes",
        price: 34990,
        image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=600&h=600&fit=crop",
        features: ["Base inducción", "Mango madera", "6 capas"],
        badge: "new",
        rating: 4.8,
        reviews: 89
    },
    {
        id: 3,
        name: "Sartén Ligera Panal 24cm",
        category: "sartenes",
        categoryLabel: "Sartenes",
        price: 44990,
        originalPrice: 54990,
        discount: 18,
        image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=600&h=600&fit=crop",
        features: ["50% más ligera", "Estructura panal", "Anti-quema"],
        badge: "sale",
        rating: 4.7,
        reviews: 156
    },
    {
        id: 4,
        name: "Sartén Acero Inoxidable 26cm",
        category: "sartenes",
        categoryLabel: "Sartenes",
        price: 49990,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
        features: ["Acero premium", "Grabado láser", "Apta horno"],
        rating: 4.6,
        reviews: 78
    },
    {
        id: 5,
        name: "Wok Forjado con Mango Click",
        category: "sartenes",
        categoryLabel: "Sartenes",
        price: 39990,
        image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=600&h=600&fit=crop",
        features: ["Aluminio forjado", "3mm espesor", "Cerámica"],
        badge: "new",
        rating: 4.8,
        reviews: 42
    },
    // Cuchillos
    {
        id: 6,
        name: "Set Cuchillos Premium 16 Piezas",
        category: "cuchillos",
        categoryLabel: "Cuchillos",
        price: 129990,
        originalPrice: 169990,
        discount: 24,
        image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=600&h=600&fit=crop",
        features: ["Acero inoxidable", "Bloque madera", "Afilador"],
        badge: "bestseller",
        rating: 4.9,
        reviews: 312
    },
    {
        id: 7,
        name: "Cuchillo Chef Profesional 8\"",
        category: "cuchillos",
        categoryLabel: "Cuchillos",
        price: 29990,
        image: "https://images.unsplash.com/photo-1566454419290-57a0589c9b17?w=600&h=600&fit=crop",
        features: ["Acero alemán", "Mango ergonómico", "Alto filo"],
        rating: 4.8,
        reviews: 189
    },
    {
        id: 8,
        name: "Cuchillo Santoku 5\"",
        category: "cuchillos",
        categoryLabel: "Cuchillos",
        price: 24990,
        image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=600&h=600&fit=crop",
        features: ["Corte preciso", "Antiadherente", "Equilibrado"],
        rating: 4.7,
        reviews: 94
    },
    {
        id: 9,
        name: "Afilador 4 Niveles Premium",
        category: "cuchillos",
        categoryLabel: "Accesorios",
        price: 19990,
        image: "https://images.unsplash.com/photo-1591207019523-6bc5b2ce40b8?w=600&h=600&fit=crop",
        features: ["4 etapas", "Base antideslizante", "Universal"],
        badge: "new",
        rating: 4.6,
        reviews: 67
    },
    // Freidoras
    {
        id: 10,
        name: "Freidora de Aire 3.8L",
        category: "freidoras",
        categoryLabel: "Freidoras de Aire",
        price: 79990,
        image: "https://images.unsplash.com/photo-1648655454543-12ac7f51dc4e?w=600&h=600&fit=crop",
        features: ["1500W", "Táctil", "8 programas"],
        rating: 4.7,
        reviews: 203
    },
    {
        id: 11,
        name: "Freidora de Aire 5.7L",
        category: "freidoras",
        categoryLabel: "Freidoras de Aire",
        price: 99990,
        originalPrice: 129990,
        discount: 23,
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&h=600&fit=crop",
        features: ["1700W", "Luz interior", "Deshidratar"],
        badge: "bestseller",
        rating: 4.9,
        reviews: 478
    },
    {
        id: 12,
        name: "Freidora de Aire Doble 8L",
        category: "freidoras",
        categoryLabel: "Freidoras de Aire",
        price: 149990,
        originalPrice: 189990,
        discount: 21,
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&h=600&fit=crop",
        features: ["Doble canasta", "2850W", "SyncCook"],
        badge: "new",
        rating: 4.8,
        reviews: 156
    },
    {
        id: 13,
        name: "Set Moldes para Freidora",
        category: "freidoras",
        categoryLabel: "Accesorios",
        price: 24990,
        image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&h=600&fit=crop",
        features: ["Antiadherente", "Ajuste universal", "6 capas"],
        rating: 4.5,
        reviews: 89
    },
    // Hornear
    {
        id: 14,
        name: "Bandeja Teppanyaki Inductora",
        category: "hornear",
        categoryLabel: "Hornear",
        price: 39990,
        image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=600&fit=crop",
        features: ["Base inducción", "Antiadherente", "Escurre grasa"],
        rating: 4.7,
        reviews: 112
    },
    {
        id: 15,
        name: "Set Moldes para Hornear 5 Piezas",
        category: "hornear",
        categoryLabel: "Hornear",
        price: 44990,
        originalPrice: 59990,
        discount: 25,
        image: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&h=600&fit=crop",
        features: ["Acero aluminizado", "Suspensión", "Homogéneo"],
        badge: "sale",
        rating: 4.8,
        reviews: 167
    },
    {
        id: 16,
        name: "Tostadora y Gofrera 2 en 1",
        category: "hornear",
        categoryLabel: "Electrodomésticos",
        price: 49990,
        image: "https://images.unsplash.com/photo-1612620355954-c7c3f3b9a0e1?w=600&h=600&fit=crop",
        features: ["Base inductora", "Antiadherente", "Ergonómica"],
        badge: "new",
        rating: 4.6,
        reviews: 73
    },
    // Parrilla
    {
        id: 17,
        name: "Horno Pizza & BBQ 2 en 1",
        category: "parrilla",
        categoryLabel: "Parrilla",
        price: 189990,
        originalPrice: 249990,
        discount: 24,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop",
        features: ["Doble modo", "Piedra pizza", "Sellado superior"],
        badge: "new",
        rating: 4.9,
        reviews: 89
    },
    {
        id: 18,
        name: "Parrilla Eléctrica Portátil",
        category: "parrilla",
        categoryLabel: "Parrilla",
        price: 79990,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=600&fit=crop",
        features: ["Eléctrico + Carbón", "Portátil", "Control temp."],
        rating: 4.7,
        reviews: 134
    },
    {
        id: 19,
        name: "Set Utensilios BBQ Premium",
        category: "parrilla",
        categoryLabel: "Accesorios",
        price: 34990,
        image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=600&h=600&fit=crop",
        features: ["Silicona", "Resistente calor", "Ergonómico"],
        rating: 4.6,
        reviews: 98
    },
    {
        id: 20,
        name: "Tabla de Corte con Contenedor",
        category: "parrilla",
        categoryLabel: "Accesorios",
        price: 29990,
        image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&h=600&fit=crop",
        features: ["Bambú", "Contenedor", "Rallador"],
        badge: "bestseller",
        rating: 4.8,
        reviews: 215
    }
];

// Cart state
let cart = [];

// Format price to Chilean Pesos
function formatPrice(price) {
    return '$' + price.toLocaleString('es-CL');
}

// Render product card
function renderProductCard(product) {
    const badgeHTML = product.badge ? `
        <div class="product-badge">
            <span class="badge badge-${product.badge}">
                ${product.badge === 'new' ? 'Nuevo' : product.badge === 'sale' ? 'Oferta' : 'Top Ventas'}
            </span>
        </div>
    ` : '';

    const discountHTML = product.discount ? `
        <span class="price-original">${formatPrice(product.originalPrice)}</span>
        <span class="price-discount">-${product.discount}%</span>
    ` : '';

    const featuresHTML = product.features.map(f =>
        `<span class="product-feature-tag">${f}</span>`
    ).join('');

    return `
        <article class="product-card" data-category="${product.category}">
            ${badgeHTML}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-actions">
                    <button class="product-action-btn" onclick="addToCart(${product.id})" aria-label="Agregar al carrito">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </button>
                    <button class="product-action-btn" aria-label="Ver detalles">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.categoryLabel}</span>
                <h3 class="product-name"><a href="#">${product.name}</a></h3>
                <div class="product-features">${featuresHTML}</div>
                <div class="product-price">
                    <span class="price-current">${formatPrice(product.price)}</span>
                    ${discountHTML}
                </div>
                <div class="product-rating">
                    <span class="rating-stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
            </div>
        </article>
    `;
}

// Render all products
function renderProducts(filter = 'all') {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

    grid.innerHTML = filteredProducts.map(renderProductCard).join('');
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    openCart();
}

// Update cart quantity
function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }

    updateCart();
}

// Update cart UI
function updateCart() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.getElementById('cart-items');
    const subtotal = document.querySelector('.subtotal-amount');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartCount) {
        cartCount.textContent = totalItems;
    }

    if (subtotal) {
        subtotal.textContent = formatPrice(totalPrice);
    }

    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="cart-empty">
                    <div class="cart-empty-icon">🛒</div>
                    <p>Tu carrito está vacío</p>
                    <a href="#productos" class="btn btn-primary" onclick="closeCart()">Ver Productos</a>
                </div>
            `;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${formatPrice(item.price)}</div>
                        <div class="cart-item-qty">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
}

// Cart sidebar controls
function openCart() {
    document.getElementById('cart-sidebar')?.classList.add('open');
    document.getElementById('cart-overlay')?.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cart-sidebar')?.classList.remove('open');
    document.getElementById('cart-overlay')?.classList.remove('open');
    document.body.style.overflow = '';
}

// Search modal controls
function openSearch() {
    document.getElementById('search-modal')?.classList.add('open');
    document.querySelector('.search-modal input')?.focus();
    document.body.style.overflow = 'hidden';
}

function closeSearch() {
    document.getElementById('search-modal')?.classList.remove('open');
    document.body.style.overflow = '';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Render products
    renderProducts();

    // Tab filtering
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.filter);
        });
    });

    // Cart button
    document.querySelector('.cart-btn')?.addEventListener('click', openCart);
    document.querySelector('.cart-close')?.addEventListener('click', closeCart);
    document.getElementById('cart-overlay')?.addEventListener('click', closeCart);

    // Search button
    document.querySelector('.search-btn')?.addEventListener('click', openSearch);
    document.querySelector('.search-modal-close')?.addEventListener('click', closeSearch);
    document.getElementById('search-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'search-modal') closeSearch();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            closeSearch();
        }
        if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            openSearch();
        }
    });

    // Size buttons
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Color buttons
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Newsletter form
    document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = e.target.querySelector('input');
        if (input.value) {
            alert('¡Gracias por suscribirte! Recibirás nuestras ofertas exclusivas.');
            input.value = '';
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.category-card, .product-card, .testimonial-card, .lifestyle-card').forEach(el => {
        el.classList.add('animate-ready');
        observer.observe(el);
    });

    // Update cart on load
    updateCart();

    // Mobile menu toggle
    document.getElementById('menu-toggle')?.addEventListener('click', () => {
        document.getElementById('main-nav')?.classList.toggle('open');
    });
});

// Expose functions globally
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.closeCart = closeCart;
