'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  queryType: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    queryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aquí iría la lógica real de envío
      console.log('Form data:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        queryType: '',
        message: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-6">Envíanos un Mensaje</h2>

        {submitStatus === 'success' && (
          <div className="alert alert-success mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>¡Mensaje enviado exitosamente! Te responderemos pronto.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="alert alert-error mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Error al enviar el mensaje. Por favor, inténtalo de nuevo.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text">Nombre *</span>
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input input-bordered w-full" 
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Email *</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input input-bordered w-full" 
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Empresa</span>
            </label>
            <input 
              type="text" 
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="input input-bordered w-full" 
              placeholder="Nombre de tu empresa" 
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Tipo de Consulta *</span>
            </label>
            <select 
              name="queryType"
              value={formData.queryType}
              onChange={handleInputChange}
              className="select select-bordered w-full"
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="sales">Ventas - Información sobre planes</option>
              <option value="support">Soporte técnico</option>
              <option value="billing">Facturación</option>
              <option value="integrations">Integraciones</option>
              <option value="other">Otro</option>
            </select>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Mensaje *</span>
            </label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="textarea textarea-bordered w-full h-32" 
              placeholder="Cuéntanos cómo podemos ayudarte..."
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={`btn btn-primary btn-block btn-lg ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="loading loading-spinner"></span>
                Enviando...
              </>
            ) : (
              'Enviar Mensaje'
            )}
          </button>
        </form>
      </div>
    </div>
  );
} 