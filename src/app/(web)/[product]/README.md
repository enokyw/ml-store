# Product Page - Dynamic Route

Esta página de producto está optimizada para SEO y sigue las mejores prácticas de Next.js 14+ con separación clara entre componentes server y cliente.

## Estructura

```
[product]/
├── page.tsx              # Página principal (Server Component)
├── loading.tsx           # Estado de carga
├── not-found.tsx         # Página 404 personalizada
├── types.ts              # Definiciones de tipos TypeScript
├── __comp/
│   ├── index.ts          # Exportaciones centralizadas
│   ├── ProductGallery.tsx          # 🔄 Cliente - Galería interactiva
│   ├── ProductInfo.tsx             # 🔄 Mixto - Info del producto
│   ├── ProductDescription.tsx      # ⚡ Server - Descripción y features
│   ├── ProductSpecifications.tsx   # ⚡ Server - Especificaciones
│   ├── ProductBreadcrumbs.tsx      # ⚡ Server - Navegación
│   ├── StarRating.tsx              # ⚡ Server - Calificación
│   ├── QuantitySelector.tsx        # 🔄 Cliente - Selector cantidad
│   └── AddToCartButton.tsx         # 🔄 Cliente - Botón carrito
```

## Componentes

### Server Components (⚡)
- **ProductDescription**: Renderiza features y descripción del producto
- **ProductSpecifications**: Tabla de especificaciones técnicas
- **ProductBreadcrumbs**: Navegación de breadcrumbs
- **StarRating**: Visualización de calificaciones

### Client Components (🔄)
- **ProductGallery**: Galería interactiva con thumbnails
- **QuantitySelector**: Selector de cantidad con validaciones
- **AddToCartButton**: Botón con estados de carga y éxito

### Mixed Components
- **ProductInfo**: Combina server rendering con componentes cliente internos

## Optimizaciones SEO

1. **Metadata dinámica**: `generateMetadata()` crea meta tags únicos por producto
2. **JSON-LD**: Structured data para mejorar rich snippets
3. **OpenGraph**: Metadatos para redes sociales
4. **Twitter Cards**: Optimización para compartir en Twitter
5. **Breadcrumbs**: Mejora la navegación y SEO

## Uso

### URL de ejemplo
```
/laptop-gaming-pro
```

### Agregar nuevos productos
1. Actualiza la función `getProduct()` en `page.tsx`
2. Agrega el nuevo slug en el objeto `products`
3. Define las propiedades del producto según la interface `Product`

### Personalizar componentes
Todos los componentes son modulares y pueden ser modificados independientemente:

```typescript
// Ejemplo: Usar el componente de galería en otra página
import { ProductGallery } from '../[product]/__comp'

<ProductGallery 
  images={product.images} 
  title={product.title} 
/>
```

## Datos Mock

Actualmente usa datos mock para demostración. En producción:

1. Reemplaza `getProduct()` con llamadas a API/base de datos
2. Implementa caché con `unstable_cache` si es necesario
3. Agrega manejo de errores robusto

## Características

- ✅ Server-side rendering optimizado
- ✅ Componentes cliente solo donde es necesario  
- ✅ Estados de carga y error personalizados
- ✅ Responsive design con DaisyUI
- ✅ Accesibilidad (ARIA labels, semántica)
- ✅ TypeScript con tipos estrictos
- ✅ SEO optimizado con structured data 