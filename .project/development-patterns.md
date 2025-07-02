# Patrones de Desarrollo ML-Store

## 🎯 Patrones de Componentes

### Patrón: Componentes por Funcionalidad con Prefijo

**Estructura observada:**
```
SignUp-Main.tsx       # Componente principal
SignUp-Header.tsx     # Header específico
SignUp-Form.tsx       # Formulario
SignUp-Success.tsx    # Estado de éxito
SignUp-OAuthButtons.tsx # Botones OAuth
```

**Regla:**
- Prefijo del contexto + Guión + Función específica
- **Prefijo**: `SignUp`, `Contact`, `Support`, `ForgotPassword`
- **Funciones**: `Main`, `Header`, `Form`, `Success`, `Section`, `Hero`

**Ejemplo de implementación:**
```typescript
// ✅ Correcto
export const SignUpMain = ({ onEmailClick }: Props) => { /* ... */ }

// ❌ Incorrecto
export const SignupMain = ({ onEmailClick }: Props) => { /* ... */ }
export const signUpMain = ({ onEmailClick }: Props) => { /* ... */ }
```

### Patrón: Exportaciones Centralizadas por Tipo

**Estructura observada en `__comp/index.ts`:**
```typescript
// Server Components
export { ContactHero } from './ContactHero';
export { ContactInfo } from './ContactInfo';
export { ContactSection } from './ContactSection';

// Client Components
export { ContactForm } from './ContactForm';
export { ContactFAQ } from './ContactFAQ';
export { ChatWidget } from './ChatWidget';
```

**Regla:**
- Separar exportaciones por tipo de componente
- Comentarios descriptivos para cada grupo
- Orden: Server Components primero, Client Components después

## 🏗️ Patrones de Arquitectura

### Patrón: Route Groups por Dominio

**Estructura observada:**
```
app/
├── (web)/       # Rutas públicas sin autenticación
├── (account)/   # Rutas de autenticación
└── (admin)/     # Rutas administrativas
```

**Implementación:**
```typescript
// (web)/layout.tsx - Layout mínimo para rutas públicas
export default function WebLayout({ children }) {
  return children
}

// (account)/layout.tsx - Layout con autenticación
export default function AccountLayout({ children }) {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto">{children}</div>
    </div>
  )
}
```

## 🎨 Patrones de Estilo

### Patrón: Temas Duales con daisyUI

**Configuración observada:**
```css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}

@plugin "daisyui/theme" {
  name: "light";
  default: true;
  --color-primary: oklch(65% 0.25 240);
  /* ... variables personalizadas */
}

@plugin "daisyui/theme" {
  name: "dark";
  default: false;
  --color-primary: oklch(65% 0.25 240);
  /* ... variables personalizadas */
}
```

**Patrón:**
- Definir tema light como default
- Definir tema dark con prefersdark
- Usar las mismas variables de color en ambos temas
- Personalizar solo los valores, no las claves

### Patrón: Clases de Utilidad Personalizadas

**Implementación observada:**
```css
@utility input {
  @apply focus:border-transparent focus:outline-primary;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.gradient-text {
  background: linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**Patrón:**
- Usar `@utility` para sobrescribir componentes base
- Crear clases de animación con keyframes propios
- Usar variables CSS de daisyUI en lugar de valores fijos

## 🔄 Patrones de Estado

### Patrón: Server Actions con Cookies

**Implementación observada:**
```typescript
'use server'

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
        return theme;
    }

    return currentTheme || "light";
}
```

**Patrón:**
1. Función que actúa como getter y setter
2. Cookies httpOnly para seguridad
3. Valores por defecto explícitos
4. Retorno del nuevo estado

### Patrón: Context Provider con Server Action

**Implementación observada:**
```typescript
'use client';

const ThemeContext = createContext<{
    currentTheme: Theme,
    toggleTheme: () => Promise<void>
}>({ currentTheme: 'light', toggleTheme: async () => {} });

export default function ThemeProvider({ children, initialTheme }: Props) {
    const [theme, setTheme] = useState<Theme>(initialTheme);

    const toggleTheme = async () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);                    // Estado local inmediato
        await themeManager(newTheme);          // Persistencia en servidor
    }

    return (
        <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
```

**Patrón:**
1. Estado local para UI responsiva
2. Server Action para persistencia
3. Initial state desde el servidor
4. Optimistic updates

## 📝 Patrones de Interfaz

### Patrón: Props Interfaces Explícitas

**Implementación observada:**
```typescript
interface SignUpMainProps {
    onEmailClick: () => void;
    onOAuthClick: (provider: 'google' | 'facebook' | 'apple') => void;
}

export const SignUpMain = ({ onEmailClick, onOAuthClick }: SignUpMainProps) => {
    // implementación
};
```

**Patrón:**
- Interface nombrada como `ComponentNameProps`
- Tipos explícitos para callbacks
- Union types para valores limitados
- Destructuring en parámetros

### Patrón: Composición de Componentes

**Implementación observada:**
```typescript
// Componente principal que orquesta otros
export const SignUpMain = ({ onEmailClick, onOAuthClick }: Props) => {
    return (
        <div className="space-y-6 max-w-sm w-full mx-auto">
            <SignUpHeader />
            <SignUpOAuthButtons onEmailClick={onEmailClick} onOAuthClick={onOAuthClick} />
            <SignUpTerms />
            <SignUpLoginLink />
        </div>
    );
};
```

**Patrón:**
- Componente principal como orquestador
- Subcomponentes especializados
- Props drilling mínimo
- Composición clara y legible

## 🚀 Patrones de Performance

### Patrón: Server Components por Defecto

**Implementación observada:**
```typescript
// Server Component (por defecto)
export default function ContactPage() {
    return (
        <div>
            <ContactHero />      {/* Server Component */}
            <ContactInfo />      {/* Server Component */}
            <ContactForm />      {/* Client Component ('use client') */}
        </div>
    )
}
```

**Patrón:**
- Server Components por defecto
- `'use client'` solo cuando es necesario
- Mezcla estratégica según funcionalidad
- Hidratación selectiva

### Patrón: CSS-in-CSS con Variables

**Implementación observada:**
```css
::-webkit-scrollbar-thumb {
  background: hsl(var(--base-content) / 0.3);
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px hsl(var(--base-content) / 0.1);
}
```

**Patrón:**
- Usar variables CSS de daisyUI
- Opacity con sintaxis moderna (`/ 0.3`)
- Efectos que respetan el tema actual
- CSS puro para mejor rendimiento

## 🛠️ Patrones de Herramientas

### Patrón: Configuración Mínima

**Configuraciones observadas:**
```typescript
// next.config.ts - Mínimo
const nextConfig: NextConfig = {
  /* config options here */
};

// postcss.config.mjs - Solo lo necesario
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

// tsconfig.json - Strict pero práctico
{
  "compilerOptions": {
    "strict": true,
    "noEmit": true,
    "paths": { "@/*": ["./src/*"] }
  }
}
```

**Patrón:**
- Configuración mínima que funciona
- Solo plugins necesarios
- Paths alias simple y claro
- Strict mode habilitado

## 🎨 Patrones de Layout por Dominio

### Patrón: Layouts Específicos por Route Group

**Implementación observada:**
```typescript
// (web)/layout.tsx - Público
export default function WebLayout({ children }) {
  return children // Layout mínimo
}

// (account)/layout.tsx - Autenticación
export default function AccountLayout({ children }) {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  )
}

// (admin)/layout.tsx - Administrativo
export default function AdminLayout({ children }) {
  return (
    <div className="drawer">
      <AdminSidebar />
      <main className="drawer-content">
        <AdminHeader />
        {children}
      </main>
    </div>
  )
}
```

**Patrón:**
- Layout específico por dominio funcional
- Complejidad creciente según necesidades
- Composición de componentes de layout
- Reutilización de componentes shared

Estos patrones forman la base del desarrollo en el proyecto ML-Store y deben seguirse para mantener consistencia y calidad de código. 