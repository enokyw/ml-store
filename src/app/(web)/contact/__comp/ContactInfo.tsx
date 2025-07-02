export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="card bg-base-200 shadow-lg">
        <div className="card-body">
          <h3 className="card-title">📧 Email</h3>
          <p className="mb-4">Para consultas generales y soporte</p>
          <div className="space-y-2">
            <p><strong>Ventas:</strong> ventas@startx369.com</p>
            <p><strong>Soporte:</strong> soporte@startx369.com</p>
            <p><strong>General:</strong> hola@startx369.com</p>
          </div>
        </div>
      </div>

      <div className="card bg-base-200 shadow-lg">
        <div className="card-body">
          <h3 className="card-title">📞 Teléfono</h3>
          <p className="mb-4">Atención telefónica</p>
          <div className="space-y-2">
            <p><strong>México:</strong> +52 55 1234 5678</p>
            <p><strong>WhatsApp:</strong> +52 55 9876 5432</p>
            <p><strong>Horario:</strong> Lun-Vie 9:00-19:00</p>
          </div>
        </div>
      </div>

      <div className="card bg-base-200 shadow-lg">
        <div className="card-body">
          <h3 className="card-title">🏢 Oficina</h3>
          <p className="mb-4">Oficinas principales</p>
          <div className="space-y-2">
            <p>Av. Insurgentes Sur 1234<br />
              Col. Del Valle<br />
              03100 Ciudad de México<br />
              México</p>
          </div>
        </div>
      </div>

      <div className="card bg-base-200 shadow-lg">
        <div className="card-body">
          <h3 className="card-title">⏰ Tiempo de Respuesta</h3>
          <div className="space-y-2">
            <p>💬 <strong>Chat en vivo:</strong> Inmediato</p>
            <p>📧 <strong>Email:</strong> 4-6 horas</p>
            <p>📞 <strong>Teléfono:</strong> Inmediato</p>
          </div>
        </div>
      </div>
    </div>
  );
} 