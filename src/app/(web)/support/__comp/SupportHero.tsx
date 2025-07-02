import { SearchBar } from './SearchBar';

export function SupportHero() {
  return (
    <section className="bg-gradient-to-br from-info/10 to-success/10 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            🛟 Centro de Ayuda
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-base-content/80">
            Estamos aquí para ayudarte. Encuentra respuestas rápidas o contacta directamente con nuestro equipo.
          </p>
          
          {/* Search Bar - Client Component */}
          <SearchBar />
        </div>
      </div>
    </section>
  );
} 