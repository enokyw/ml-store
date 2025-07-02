import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { ShoppingCart } from "./ShoppingCart";
import { Logo } from "./logo";

export function Navbar() {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 border-b border-base-200 backdrop-blur-md">
      <div className="navbar-start gap-2">
        <MobileMenu />
        <Logo />
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#features" className="hover:text-primary transition-colors">Características</a></li>
          <li><a href="#pricing" className="hover:text-primary transition-colors">Precios</a></li>
          <li><a href="#integrations" className="hover:text-primary transition-colors">Integraciones</a></li>
          <li>
            <details>
              <summary className="hover:text-primary transition-colors">Recursos</summary>
              <ul className="p-2 bg-base-100 shadow-lg border border-base-200 rounded-lg w-52">
                <li><Link href="/docs" className="hover:text-primary">📚 Documentación</Link></li>
                <li><Link href="/support" className="hover:text-primary">🛟 Centro de Ayuda</Link></li>
                <li><Link href="/contact" className="hover:text-primary">📞 Contacto</Link></li>
                <li><Link href="/blog" className="hover:text-primary">📝 Blog</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      
      <div className="navbar-end gap-2">
        <div className="relative">
          <ShoppingCart />
        </div>
        <Link href="/account/signIn" className="btn btn-ghost hidden sm:inline-flex">
          Iniciar Sesión
        </Link>
        <Link href="/account/signUp" className="btn btn-primary btn-sm sm:btn-md">
          Empezar Gratis
        </Link>
      </div>
    </div>
  );
} 