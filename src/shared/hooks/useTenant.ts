import { headers } from 'next/headers'
import { useParams } from 'next/navigation'

// Función para usar en Server Components
export async function getTenant(): Promise<string | null> {
    const headersList = await headers()
    return headersList.get('x-tenant')
}

// Hook para usar en Client Components
export function useTenant(): string | null {
    const params = useParams()
    return params.tenant as string || null
}

// Función utilitaria para validar tenant en el cliente
export function validateTenantFormat(tenant: string): boolean {
    const uuidV4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    
    if (!uuidV4Regex.test(tenant)) {
        return false
    }
    
    const reservedTenants = ['admin', 'api', 'www', 'app', 'dashboard', 'account']
    if (reservedTenants.includes(tenant.toLowerCase())) {
        return false
    }
    
    return true
} 