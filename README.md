# Cocina Pro

Sistema de gestion para importacion y venta de utensilios de cocina premium.

## URLs

- **Tienda**: https://cocina-pro-store.vercel.app
- **Admin**: https://cocina-pro-store.vercel.app/admin.html

## Estructura del Proyecto

```
Web/
├── index.html          # Tienda e-commerce
├── styles.css          # Estilos de la tienda
├── app.js              # Logica de la tienda (carrito, productos)
├── admin.html          # Panel de administracion
├── package.json        # Dependencias Node.js
└── README.md           # Este archivo
```

## Panel de Administracion

### Pedidos de Contenedor

Herramienta para planificar importaciones por contenedor.

**Funcionalidades:**
- Catalogo de 23 productos con precios FOB, costos y margenes
- Armador de pedidos con calculo automatico de volumen
- Barra de progreso de capacidad del contenedor (28 m³)
- Importar pedido desde CSV
- Exportar pedido a CSV
- Exportar PDF para solicitud al distribuidor

**Metricas calculadas:**
- Volumen total (m³)
- % de ocupacion del contenedor
- FOB total (USD)
- Costo de transporte proporcional
- Costo total puesto en Chile (CLP)

### Analisis de Rentabilidad

- Margen promedio vs mercado (MercadoLibre)
- Comparativa de precios por producto
- Proyeccion de ganancia por contenedor
- ROI estimado

### Catalogo de Productos

- Vista de todos los productos con filtros
- Exportar catalogo a JSON/CSV
- (Proximamente) Agregar/editar productos

## Datos del Contenedor

| Parametro | Valor |
|-----------|-------|
| Tipo | 20 pies (20') |
| Capacidad | 28 m³ |
| Costo flete | $1,750 USD |
| Origen | China |
| Destino | Chile |
| Tiempo transito | 35-45 dias |

## Glosario

| Termino | Descripcion |
|---------|-------------|
| **CBM** | Metros cubicos - volumen del producto empacado |
| **FOB** | Free On Board - precio en puerto de origen |
| **Costo CL** | Costo unitario puesto en Chile (FOB + transporte) |
| **Precio Min** | Precio minimo de venta con margen base (~75%) |
| **Ref. Meli** | Precio de referencia en MercadoLibre Chile |

## Tecnologias

- HTML5 / CSS3 / JavaScript (Vanilla)
- Vercel (hosting)
- GitHub (repositorio)

## Desarrollo Local

```bash
# Clonar repositorio
git clone https://github.com/alantchimino14/cocina-pro-store.git

# Abrir en navegador
open index.html
open admin.html
```

No requiere build ni servidor - son archivos estaticos.

## Deploy

El proyecto esta conectado a Vercel con deploy automatico desde `main`.

```bash
# Deploy manual
npx vercel --prod
```

## Proximos Pasos

- [ ] Base de datos para productos editables
- [ ] Subida de imagenes de productos
- [ ] Control de stock/inventario
- [ ] Sincronizacion productos admin → tienda
- [ ] Autenticacion para admin
- [ ] Historial de pedidos

## Notas

- Marca "Cocina Pro" es placeholder mientras se desarrolla la marca definitiva
- Los precios de referencia (Meli) son de productos similares, no exactos
- El calculo de transporte asume contenedor compartido proporcional al volumen
