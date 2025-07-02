# 📋 Documentación del Proyecto ML-Store

Esta carpeta contiene la documentación técnica y convenciones del proyecto **ML-Store**, una aplicación web construida con Next.js 15.

## 📚 Índice de Documentación

### 🏗️ [Arquitectura](./architecture.md)
Documentación completa de la arquitectura del sistema, incluyendo:
- Visión general de la arquitectura
- Arquitectura de carpetas y separación por dominio
- Sistema de temas y componentes UI
- Arquitectura de estado y gestión de datos
- Patrones de escalabilidad

### 📐 [Convenciones](./conventions.md)
Guía completa de convenciones del proyecto:
- Estructura de directorios y organización
- Convenciones de componentes y nombrado
- Estándares de estilo con Tailwind CSS y daisyUI
- Convenciones técnicas de TypeScript
- Convenciones de UX/UI y responsive design

### 🎯 [Patrones de Desarrollo](./development-patterns.md)
Patrones específicos observados en el código:
- Patrones de componentes con prefijos funcionales
- Patrones de arquitectura (Route Groups, Layouts)
- Patrones de estilo (Temas duales, Utilidades personalizadas)
- Patrones de estado (Server Actions, Context Providers)
- Patrones de interfaces y tipos

## 🚀 Stack Tecnológico

### Core
- **Framework**: Next.js 15.3.3 (App Router)
- **Runtime**: React 19.0.0
- **Language**: TypeScript (strict mode)
- **Build Tool**: Turbopack

### Styling
- **CSS Framework**: Tailwind CSS 4.1.8
- **Component System**: daisyUI 5.0.43
- **Icons**: Heroicons 2.2.0
- **Fonts**: Geist Sans & Geist Mono

### Development
- **Package Manager**: pnpm
- **Linting**: ESLint 9
- **CSS Processing**: PostCSS

## 🏛️ Arquitectura Resumida

```
ML-Store (Web Application)
├─ Public Routes (/)
├─ Auth Routes (/account/*)
└─ Admin Routes (admin dashboard)

Next.js App Router
├─ (web) → Landing, Contact, Support
├─ (account) → SignIn, SignUp, Password Reset
└─ (admin) → Administrative Dashboard
```

## 🎨 Características Principales

### ✅ Temas Dinámicos
- **Sistema dual** light/dark
- **Persistencia en cookies** httpOnly
- **Transiciones suaves** entre temas
- **Variables CSS** personalizadas

### ✅ Arquitectura Moderna
- **Server Components** por defecto
- **Server Actions** para mutaciones
- **Context API** para estado global
- **TypeScript strict** para type safety

### ✅ Performance
- **Renderizado en servidor** optimizado
- **Code splitting** automático
- **Image optimization** con next/image
- **CSS-in-CSS** para mejor rendimiento

### ✅ Organización Clara
- **Route Groups** por dominio funcional
- **Componentes modulares** con prefijos
- **Exportaciones centralizadas** por carpeta
- **Separación Server/Client** components

## 📋 Convenciones Rápidas

### Componentes
```typescript
// ✅ Correcto
SignUp-Main.tsx
Contact-Form.tsx
Support-Hero.tsx

// ❌ Incorrecto
signUpMain.tsx
contactform.tsx
SupportHero.tsx
```

### Estructura de Página
```
page/
├── __comp/
│   ├── Component-Main.tsx
│   ├── Component-Form.tsx
│   └── index.ts
└── page.tsx
```

### Exportaciones
```typescript
// __comp/index.ts
// Server Components
export { ContactHero } from './ContactHero';

// Client Components
export { ContactForm } from './ContactForm';
```

### Estilos
```typescript
// Orden de clases CSS
className={`
  flex flex-col        // Layout
  p-6 mx-auto         // Spacing
  w-full max-w-md     // Sizing
  text-lg font-bold   // Typography
  bg-base-100 text-base-content  // Colors
  shadow-lg transition-all       // Effects
`}
```

## 🛠️ Scripts de Desarrollo

```bash
# Desarrollo
pnpm dev              # Servidor desarrollo (Turbopack)
pnpm build            # Build producción
pnpm start            # Servidor producción
pnpm lint             # Linting

# Comandos útiles
pnpm dev --port 3001  # Puerto personalizado
pnpm build --debug    # Build con información de debug
```

## 🔧 Configuración del Entorno

### Requisitos
- Node.js 18+
- pnpm (recomendado)
- Editor con soporte TypeScript

### Setup Inicial
```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Abrir en http://localhost:3000
```

## 📖 Guías de Uso

### Para Desarrolladores Nuevos
1. Leer [Arquitectura](./architecture.md) para entender el sistema
2. Revisar [Convenciones](./conventions.md) para seguir estándares
3. Estudiar [Patrones](./development-patterns.md) para implementar funcionalidades

### Para Desarrollo de Funcionalidades
1. Identificar el dominio: `(web)`, `(account)`, o `(admin)`
2. Seguir la estructura de carpetas establecida
3. Usar los patrones de componentes existentes
4. Mantener separación entre Server y Client Components

### Para Modificaciones de Estilo
1. Usar variables daisyUI en lugar de colores fijos
2. Seguir el orden de clases CSS establecido
3. Crear utilidades personalizadas en `globals.css` si es necesario
4. Mantener consistencia entre temas light/dark

## 🤝 Contribución

Al contribuir al proyecto:
1. **Seguir las convenciones** establecidas en esta documentación
2. **Mantener la arquitectura** de Route Groups existente
3. **Usar TypeScript strict** para todos los archivos nuevos
4. **Preferir Server Components** sobre Client Components
5. **Documentar** patrones nuevos en estos archivos

## 📝 Mantener la Documentación

Esta documentación debe actualizarse cuando:
- Se agreguen nuevos patrones de desarrollo
- Se modifiquen las convenciones existentes
- Se cambien dependencias principales del stack
- Se introduzcan nuevas funcionalidades arquitectónicas

---

**Última actualización**: Enero 2025  
**Versión del proyecto**: 0.1.0  
**Stack principal**: Next.js 15 + React 19 + TypeScript + Tailwind CSS 4 + daisyUI 5 