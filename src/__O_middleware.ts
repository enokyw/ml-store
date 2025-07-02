import { NextResponse, type NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if(pathname === '/error-500') {
        return NextResponse.redirect(new URL('/500', request.url))
    }
    
    if (pathname.startsWith("/_next")) {
        return NextResponse.next()
    }
    console.log("=====>", pathname)
    // Extraer el tenant de rutas que siguen el patrón /[tenant]/...
    const tenantMatch = pathname.match(/^\/([^\/]+)/)
    
    if (tenantMatch) {
        const tenant = tenantMatch[1]
        // Validar si la ruta corresponde a una ruta de admin con tenant
        if (pathname.startsWith(`/${tenant}/`) && isAdminRoute(pathname, tenant)) {
            console.log(`Tenant detectado: ${tenant}`)
            
            // Aquí puedes hacer validaciones del tenant
            if (!isValidTenant(tenant)) {
                // Redirigir si el tenant no es válido
                return NextResponse.redirect(new URL('/404', request.url))
            }
            
            // Agregar el tenant a los headers para uso en los componentes
            const response = NextResponse.next()
            response.headers.set('x-tenant', tenant)
            return response
        }
    }
    
    return NextResponse.next()
}

// Función para validar si es una ruta de admin
function isAdminRoute(pathname: string, tenant: string): boolean {
    // Verificar si la ruta sigue el patrón de admin: /[tenant]/dashboard, /[tenant]/companies, etc.
    const adminRoutes = ['/dashboard', '/companies', '/inventory', '/purchases', '/sales', '/account']
    return adminRoutes.some(route => pathname.startsWith(`/${tenant}${route}`))
}

// Función para validar el tenant (personaliza según tus necesidades)
function isValidTenant(tenant: string): boolean {
    // Validar que el tenant tenga el formato UUID v4
    const uuidV4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    
    if (!uuidV4Regex.test(tenant)) {
        return false
    }

    // Lista de tenants reservados que no se pueden usar
    const reservedTenants = ['admin', 'api', 'www', 'app', 'dashboard', 'account']
    if (reservedTenants.includes(tenant.toLowerCase())) {
        return false
    }

    // TODO: Aquí podrías hacer una consulta a tu base de datos
    // para verificar si el tenant existe y está activo
    // const tenantExists = await checkTenantInDatabase(tenant)
    // return tenantExists
    
    return true // Por ahora acepta todos los UUIDs válidos
}

export const config = {
    matcher: [
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        "/(api|trpc)(.*)",
    ],
}