# Arquitectura del Proyecto ML-Store

## 🏛️ Visión General de la Arquitectura

ML-Store es una aplicación web construida con **Next.js 15** que proporciona una plataforma con diferentes áreas funcionales organizadas por dominios: área pública, autenticación y administración.

```
┌─────────────────────────────────────────────────────────────┐
│                     ARQUITECTURA GENERAL                    │
├─────────────────────────────────────────────────────────────┤
│  Cliente (Browser)                                          │
│  ├─── Public Routes (/)                                     │
│  ├─── Account Routes (/account/*)                           │
│  └─── Admin Routes (/admin/*)                               │
│                         ↓                                   │
│  Next.js App Router (Route Groups)                          │
│  ├─── (web) → Public Pages                                  │
│  ├─── (account) → Authentication                            │
│  └─── (admin) → Administrative Dashboard                    │
│                         ↓                                   │
│  Server Components & Client Components                      │
│  ├─── Server Actions                                        │
│  ├─── Context Providers                                     │
│  └─── Custom Hooks                                          │
│                         ↓                                   │
│  Data Layer (Future: Database/API)                          │
└─────────────────────────────────────────────────────────────┘
```

## 🌐 Arquitectura por Dominios

### Estrategia de Organización
**Domain-based Route Groups**: Cada dominio funcional se organiza en grupos de rutas separados.

```
Ejemplos de URLs:
├─── Públicas: https://domain.com/
├─── Autenticación: https://domain.com/account/signIn
└─── Administrativas: https://domain.com/admin/dashboard
```

## 📂 Arquitectura de Carpetas

### Separación por Dominio

```
src/
├── app/                           # Next.js App Router
│   ├── (web)/                    # Dominio Público
│   │   ├── page.tsx              # Landing page
│   │   ├── contact/              # Páginas de contacto
│   │   ├── support/              # Centro de ayuda
│   │   └── layout.tsx            # Layout público
│   │
│   ├── (account)/                # Dominio de Autenticación
│   │   └── account/
│   │       ├── signIn/           # Inicio de sesión
│   │       ├── signUp/           # Registro
│   │       ├── forgotPassword/   # Recuperar contraseña
│   │       └── changePassword/   # Cambiar contraseña
│   │
│   ├── (admin)/                  # Dominio Administrativo
│   │   ├── layout.tsx           # Layout de administración
│   │   └── x-dashboard/         # Dashboard administrativo
│   │
│   ├── globals.css              # Estilos globales + daisyUI
│   ├── layout.tsx               # Root layout
│   ├── not-found.tsx           # 404 personalizada
│   └── error.tsx               # Error boundary
│
├── shared/                      # Código Compartido
│   ├── components/             # Componentes reutilizables
│   │   ├── custom/            # Componentes base
│   │   ├── header/            # Headers por dominio
│   │   ├── footer/            # Footer
│   │   └── sidebar/           # Sidebar de admin
│   │
│   ├── hooks/                 # Custom hooks
│   │
│   ├── lib/                   # Utilidades y acciones
│   │   └── theme.action.ts    # Server actions de tema
│   │
│   ├── providers/             # Context providers
│   │   └── theme.provider.tsx # Provider de tema
│   │
│   └── assets/                # Configuraciones estáticas
│       └── sidebar.ts         # Configuración de sidebar
│
└── .project/                  # Documentación
    ├── conventions.md         # Convenciones
    └── architecture.md        # Este archivo
```

## 🎨 Arquitectura de Estilos

### Stack de Estilos
- **Tailwind CSS 4**: Framework de utilidades
- **daisyUI 5**: Componentes pre-construidos
- **CSS Custom Properties**: Para temas dinámicos
- **PostCSS**: Procesamiento de CSS

### Sistema de Temas

```css
/* src/app/globals.css */
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}

@plugin "daisyui/theme" {
  name: "light";
  default: true;
  --color-primary: oklch(65% 0.25 240);
  --color-base-100: oklch(100% 0 0);
  /* ... más variables */
}
```

### Arquitectura de Componentes UI

```
Componentes por Responsabilidad:
├── Layout Components
│   ├── Navbar (público)
│   ├── AdminHeader (administración)
│   ├── Sidebar (administración)
│   └── Footer
│
├── Feature Components
│   ├── SignUp-* (autenticación)
│   ├── Contact-* (contacto)
│   └── Support-* (soporte)
│
├── UI Primitives
│   ├── Input (custom)
│   ├── ThemeToggle
│   ├── Logo
│   └── MobileMenu
│
└── Providers
    └── ThemeProvider (global state)
```

## ⚡ Arquitectura de Estado

### Estrategia de Estado
1. **Server State**: Server Components y Server Actions (por defecto)
2. **Client State**: Context API para estado global mínimo
3. **URL State**: Next.js router para navegación
4. **Persistent State**: Cookies para preferencias

### Gestión de Tema

```typescript
// Server Action
export async function themeManager(theme?: Theme): Promise<Theme> {
    const cookieStore = await cookies()
    const currentTheme = cookieStore.get('theme')?.value as Theme || 'light'
    
    if (theme && theme !== currentTheme) {
        cookieStore.set('theme', theme, {
            maxAge: 60 * 60 * 24 * 365 * 100, // 100 años
            sameSite: 'strict',
            secure: true,
            httpOnly: true
        });
    }
    
    return currentTheme || "light";
}

// Client Context
const ThemeContext = createContext<{
    currentTheme: Theme,
    toggleTheme: () => Promise<void>
}>()
```

## 🔄 Flujo de Datos

### Server-First Architecture

```
1. Request → App Router (Route Resolution)
2. App Router → Server Component (Data Fetching)
3. Server Component → Client Component (Interactive UI)
4. Client Component → Server Action (Mutations)
5. Server Action → Database (Future Implementation)
```

### Comunicación entre Componentes

```typescript
// Server Component pasa datos a Client Component
export default function ServerPage() {
    const theme = await themeManager()
    
    return (
        <ClientComponent 
            initialTheme={theme}
        />
    )
}

// Client Component usa Server Action
'use client'
export function ClientComponent({ initialTheme }) {
    const toggleTheme = async () => {
        await themeManager(newTheme) // Server Action
    }
}
```

## 🛡️ Arquitectura de Seguridad

### Capas de Seguridad
1. **Server Actions**: Validación en servidor
2. **TypeScript**: Verificación de tipos
3. **Headers**: Configuración segura de cookies
4. **Route Groups**: Separación clara de dominios

### Gestión de Cookies

```typescript
// Configuración segura de cookies
cookieStore.set('theme', theme, {
    maxAge: 60 * 60 * 24 * 365 * 100, // 100 años
    sameSite: 'strict',
    secure: true,
    httpOnly: true
});
```

## 📈 Escalabilidad

### Preparado para Crecimiento
- **Database Integration**: Estructura lista para ORM/Prisma
- **API Routes**: `/api` reservado para endpoints REST
- **Microservices**: Posible separación por dominio
- **Caching**: Next.js built-in caching

### Performance
- **Server Components**: Renderizado en servidor por defecto
- **Code Splitting**: Automático con App Router
- **Image Optimization**: `next/image` configurado
- **Bundle Optimization**: Turbopack en desarrollo

## 🔮 Evolución Futura

### Roadmap Técnico
1. **Database Layer**: Prisma + PostgreSQL
2. **Authentication**: NextAuth.js o Auth0
3. **API Layer**: tRPC o GraphQL
4. **Testing**: Vitest + Testing Library
5. **Deployment**: Vercel o Docker

### Puntos de Extensión
- `src/shared/lib/`: Utilidades de negocio
- `src/shared/types/`: Tipos compartidos
- `src/app/(admin)/`: Nuevas funcionalidades administrativas
- `src/shared/assets/`: Configuraciones dinámicas

## 🎯 Principios Arquitectónicos

### Design Principles
1. **Separation of Concerns**: Cada módulo tiene una responsabilidad
2. **Composition over Inheritance**: Componentes componibles
3. **Progressive Enhancement**: Funciona sin JavaScript
4. **Mobile-First**: Responsive por diseño

### Development Principles
1. **Server-First**: Favor server components
2. **Type Safety**: TypeScript strict
3. **Performance**: Optimización by default
4. **Developer Experience**: Tooling moderno
5. **Maintainability**: Código auto-documentado

## 🏗️ Dominios Funcionales

### (web) - Área Pública
- **Propósito**: Páginas de marketing y información general
- **Rutas**: `/`, `/contact`, `/support`, `/docs`
- **Características**: Sin autenticación, SEO optimizado
- **Layout**: Navbar público, footer informativo

### (account) - Autenticación
- **Propósito**: Gestión de cuentas de usuario
- **Rutas**: `/account/signIn`, `/account/signUp`, `/account/forgotPassword`
- **Características**: Formularios, validación, flujos de auth
- **Layout**: Centrado, minimalista

### (admin) - Administración
- **Propósito**: Dashboard administrativo de la aplicación
- **Rutas**: Rutas administrativas del sistema
- **Características**: Panel de control, gestión de datos
- **Layout**: Sidebar, header administrativo

Esta arquitectura proporciona una base sólida y escalable para el desarrollo de ML-Store, manteniendo la separación clara de responsabilidades y preparando el sistema para futuras extensiones. 