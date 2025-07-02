# Convenciones del Proyecto ML-Store

## 🏗️ Arquitectura General

Este proyecto es una aplicación **Next.js 15** con **App Router** que implementa una arquitectura basada en dominios funcionales con las siguientes características:

- **Framework**: Next.js 15.3.3 con Turbopack
- **Styling**: Tailwind CSS 4 + daisyUI 5
- **Fonts**: Geist Sans y Geist Mono
- **Language**: TypeScript strict mode
- **Arquitectura**: Dominios funcionales con Route Groups

## 📁 Estructura de Directorios

### Organización Principal
```
src/
├── app/                    # App Router de Next.js
│   ├── (account)/         # Grupo de rutas de autenticación
│   ├── (admin)/           # Grupo de rutas administrativas
│   ├── (web)/             # Grupo de rutas públicas
│   └── globals.css        # Estilos globales
├── shared/                # Código compartido
│   ├── components/        # Componentes reutilizables
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilities y acciones
│   ├── providers/         # Context providers
│   └── assets/            # Assets estáticos y configuraciones
└── .project/              # Documentación del proyecto
```

### Convención de Grupos de Rutas
- `(account)`: Rutas de autenticación (`/account/signIn`, `/account/signUp`, etc.)
- `(admin)`: Rutas administrativas (`/admin/dashboard`)
- `(web)`: Rutas públicas (`/`, `/contact`, `/support`, etc.)

## 🧩 Convenciones de Componentes

### Nombrado de Componentes
- **PascalCase** para nombres de componentes: `SignUpMain`, `ContactForm`
- **Sufijos descriptivos**: `Button`, `Form`, `Header`, `Main`, `Section`

### Organización por Funcionalidad
```
page/
├── __comp/               # Componentes específicos de la página
│   ├── Component-Main.tsx
│   ├── Component-Header.tsx
│   ├── Component-Form.tsx
│   └── index.ts          # Exportaciones centralizadas
└── page.tsx
```

### Convención de Naming para Componentes de Página
- **Prefijo del contexto**: `SignUp-Main`, `Contact-Form`, `Support-Hero`
- **Separador**: Guión medio (`-`)
- **Sufijo funcional**: `Main`, `Header`, `Form`, `Section`, `Success`

### Exportaciones Centralizadas
Cada carpeta `__comp` debe tener un `index.ts` que organice las exportaciones:
```typescript
// Server Components
export { ComponentName } from './ComponentName';

// Client Components  
export { ClientComponentName } from './ClientComponentName';
```

## 🎨 Convenciones de Estilo

### Framework de Estilos
- **Tailwind CSS 4** como framework principal
- **daisyUI 5** para componentes predefinidos
- **Temas personalizados**: light y dark configurados en `globals.css`

### Orden de Clases CSS
1. Layout: `flex`, `grid`, `block`
2. Spacing: `m-*`, `p-*`, `space-*`
3. Sizing: `w-*`, `h-*`, `min-*`, `max-*`
4. Typography: `text-*`, `font-*`
5. Colors: `bg-*`, `text-*`, `border-*`
6. Effects: `shadow-*`, `opacity-*`, `transition-*`

### Colores Semánticos daisyUI
- `primary`: Color principal de marca
- `secondary`: Color secundario
- `accent`: Color de acento
- `base-*`: Colores de fondo (100, 200, 300)
- `base-content`: Color de texto sobre base
- Evitar colores Tailwind directos (`red-500`) para mantener consistencia de temas

## 🔧 Convenciones Técnicas

### Server vs Client Components
- **Server Components por defecto**: Maximizar rendimiento
- **'use client'** explícito solo cuando sea necesario
- **Providers** siempre client components
- **Actions** con directiva `'use server'`

### Gestión de Estado
- **Context API** para estado global (tema)
- **Server Actions** para mutaciones de datos
- **Cookies** para persistencia (tema, autenticación)

### TypeScript
- **Strict mode** habilitado
- **Interfaces** para props de componentes
- **Types explícitos** para funciones públicas
- **Paths alias**: `@/*` apunta a `./src/*`

## 🔐 Convenciones de Seguridad

### Autenticación
- Server Actions para validación
- Headers seguros para cookies
- TypeScript para verificación de tipos

## 📱 Convenciones de UX/UI

### Responsive Design
- **Mobile First**: Diseño comenzando desde móvil
- **Breakpoints Tailwind**: `sm:`, `md:`, `lg:`, `xl:`
- **Componentes adaptivos**: `hidden lg:flex`, `drawer lg:drawer-open`

### Temas
- **Sistema dual**: light/dark con preferencia del sistema
- **Transiciones suaves**: 0.3s ease para cambios de tema
- **Persistencia**: Cookies httpOnly para el tema

### Loading States
- **Skeleton loaders** para contenido
- **Spinner animations** personalizadas en `globals.css`
- **Transiciones de entrada**: fadeIn, slideIn, scaleIn

## 🛠️ Scripts y Comandos

### Desarrollo
```bash
pnpm dev          # Desarrollo con Turbopack
pnpm build        # Build de producción
pnpm start        # Servidor de producción
pnpm lint         # ESLint
```

### Convenciones de Archivos
- **Páginas**: `page.tsx`
- **Layouts**: `layout.tsx`
- **Loading**: `loading.tsx`
- **Error**: `error.tsx`
- **Not Found**: `not-found.tsx`

## 📚 Dependencias Clave

### Producción
- `next`: 15.3.3
- `react`: 19.0.0
- `daisyui`: 5.0.43
- `@heroicons/react`: 2.2.0

### Desarrollo
- `typescript`: 5+
- `tailwindcss`: 4.1.8
- `eslint`: 9+
- `@tailwindcss/postcss`: 4.1.8

## 🎯 Patrones Recomendados

### Componentes
1. **Props interfaces** siempre definidas
2. **Default exports** para componentes principales
3. **Named exports** para utilities y helpers
4. **Barrel exports** en `index.ts`

### Performance
1. **Dynamic imports** para componentes pesados
2. **Server Components** por defecto
3. **Optimistic updates** con Server Actions
4. **Image optimization** con `next/image`

### Mantenibilidad
1. **Separación de concerns**: lógica, presentación, estado
2. **Composición** sobre herencia
3. **Hooks personalizados** para lógica reutilizable
4. **Constants** en archivos separados

## 🏗️ Dominios Funcionales

### (web) - Área Pública
- **Características**: Sin autenticación, SEO optimizado
- **Convenciones**: Navbar público, footer, páginas estáticas
- **Ejemplos**: Landing page, contacto, soporte

### (account) - Autenticación
- **Características**: Formularios, validación, flujos de auth
- **Convenciones**: Layout centrado, componentes con prefijo de contexto
- **Ejemplos**: SignUp-Main, SignIn-Form, ForgotPassword-Email

### (admin) - Administración
- **Características**: Dashboard, gestión de datos, área protegida
- **Convenciones**: Sidebar, header administrativo, componentes modulares
- **Ejemplos**: Panel de control, configuraciones del sistema 