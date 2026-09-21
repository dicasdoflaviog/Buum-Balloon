import React, { useState } from 'react';
import { Send, AlertCircle, Sparkles, MessageCircle } from 'lucide-react';
import { generateWhatsAppUrl } from '../config/brand';
import { trackLeadSubmission, trackFormStart } from '../utils/tracking';

export const QualificationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [city, setCity] = useState('Teixeira de Freitas');
  const [eventLocation, setEventLocation] = useState('');
  const [modelInterest, setModelInterest] = useState('Modelo Encanto (R$ 250)');
  const [budgetRange, setBudgetRange] = useState('De R$ 150 a R$ 300');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasStartedForm, setHasStartedForm] = useState(false);

  const budgetOptions = [
    'Até R$ 150',
    'De R$ 150 a R$ 300',
    'De R$ 300 a R$ 600',
    'Acima de R$ 600',
    'Ainda não sei',
  ];

  const modelOptions = [
    'Modelo Essencial (A partir de R$ 80)',
    'Modelo Encanto (A partir de R$ 250)',
    'Modelo Celebração (A partir de R$ 600)',
    'Ainda em dúvida / Quero orientação',
  ];

  const handleInputFocus = () => {
    if (!hasStartedForm) {
      setHasStartedForm(true);
      trackFormStart();
    }
  };

  const handleWhatsAppInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.slice(0, 11);

    if (val.length > 2) {
      val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
    }
    if (val.length > 9) {
      val = `${val.slice(0, 9)}-${val.slice(9)}`;
    }
    setWhatsapp(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Por favor, informe seu nome.';
    }
    if (!whatsapp.trim() || whatsapp.replace(/\D/g, '').length < 10) {
      newErrors.whatsapp = 'Informe um número de WhatsApp com DDD válido.';
    }
    if (!eventDate.trim()) {
      newErrors.eventDate = 'Informe a data prevista para o casamento.';
    }
    if (!city.trim()) {
      newErrors.city = 'Informe a cidade.';
    }
    if (!eventLocation.trim()) {
      newErrors.eventLocation = 'Informe onde será a celebração (ex: em casa, salão, sítio).';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    let estValue = 80;
    if (modelInterest.includes('250')) estValue = 250;
    if (modelInterest.includes('600')) estValue = 600;

    trackLeadSubmission({
      theme: 'casamento',
      model: modelInterest,
      city: city.trim(),
      eventDate: eventDate.trim(),
      budgetRange: budgetRange,
      estimatedValue: estValue,
    });

    const formattedMessage = `Olá! Vim pela página da Buum Balloonn.

Nome: ${name.trim()}
Data do casamento: ${eventDate.trim()}
Cidade: ${city.trim()}
Local: ${eventLocation.trim()}
Modelo de interesse: ${modelInterest}
Faixa de investimento: ${budgetRange}

Gostaria de consultar a disponibilidade para a minha celebração.`;

    window.open(generateWhatsAppUrl(formattedMessage), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="qualificacao" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF0F4] border border-[#F0D7DF] text-xs font-bold text-[#9E244D] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verificação Rápida</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1217] tracking-tight leading-tight">
            Consulte a data do seu casamento
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A53] font-medium">
            Preencha os detalhes e receba atendimento direto com a Buum Balloonn no WhatsApp.
          </p>
        </div>

        {/* Modern Pastel Form with Contrast Accents */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-6 sm:p-9 border border-[#F0D7DF] shadow-sm space-y-5"
        >
          {/* Nome */}
          <div>
            <label className="block text-xs font-bold text-[#1C1217] uppercase tracking-wider mb-2">
              Seu nome *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={handleInputFocus}
              placeholder="Como podemos te chamar?"
              className={`w-full min-h-[48px] px-4 py-3 rounded-2xl border text-sm text-[#1C1217] bg-[#FAF5F7] focus:outline-none focus:ring-2 focus:ring-[#9E244D]/20 focus:border-[#9E244D] placeholder:text-[#8E7883] transition-all ${
                errors.name ? 'border-red-500 ring-1 ring-red-500/50' : 'border-[#F0D7DF]'
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-xs font-bold text-[#1C1217] uppercase tracking-wider mb-2">
              WhatsApp com DDD *
            </label>
            <input
              type="tel"
              value={whatsapp}
              onChange={handleWhatsAppInput}
              onFocus={handleInputFocus}
              placeholder="(73) 99999-9999"
              className={`w-full min-h-[48px] px-4 py-3 rounded-2xl border text-sm text-[#1C1217] bg-[#FAF5F7] focus:outline-none focus:ring-2 focus:ring-[#9E244D]/20 focus:border-[#9E244D] placeholder:text-[#8E7883] transition-all ${
                errors.whatsapp ? 'border-red-500 ring-1 ring-red-500/50' : 'border-[#F0D7DF]'
              }`}
            />
            {errors.whatsapp && (
              <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.whatsapp}</span>
              </p>
            )}
          </div>

          {/* Data e Cidade */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#1C1217] uppercase tracking-wider mb-2">
                Data do casamento *
              </label>
              <input
                type="text"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                onFocus={handleInputFocus}
                placeholder="Ex: 15/11/2026 ou mês"
                className={`w-full min-h-[48px] px-4 py-3 rounded-2xl border text-sm text-[#1C1217] bg-[#FAF5F7] focus:outline-none focus:ring-2 focus:ring-[#9E244D]/20 focus:border-[#9E244D] placeholder:text-[#8E7883] transition-all ${
                  errors.eventDate ? 'border-red-500 ring-1 ring-red-500/50' : 'border-[#F0D7DF]'
                }`}
              />
              {errors.eventDate && (
                <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.eventDate}</span>
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1C1217] uppercase tracking-wider mb-2">
                Cidade *
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onFocus={handleInputFocus}
                placeholder="Teixeira de Freitas"
                className={`w-full min-h-[48px] px-4 py-3 rounded-2xl border text-sm text-[#1C1217] bg-[#FAF5F7] focus:outline-none focus:ring-2 focus:ring-[#9E244D]/20 focus:border-[#9E244D] placeholder:text-[#8E7883] transition-all ${
                  errors.city ? 'border-red-500 ring-1 ring-red-500/50' : 'border-[#F0D7DF]'
                }`}
              />
              {errors.city && (
                <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.city}</span>
                </p>
              )}
            </div>
          </div>

          {/* Local do evento */}
          <div>
            <label className="block text-xs font-bold text-[#1C1217] uppercase tracking-wider mb-2">
              Local do evento *
            </label>
            <input
              type="text"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              onFocus={handleInputFocus}
              placeholder="Ex: Em casa, sítio, salão ou varanda"
              className={`w-full min-h-[48px] px-4 py-3 rounded-2xl border text-sm text-[#1C1217] bg-[#FAF5F7] focus:outline-none focus:ring-2 focus:ring-[#9E244D]/20 focus:border-[#9E244D] placeholder:text-[#8E7883] transition-all ${
                errors.eventLocation ? 'border-red-500 ring-1 ring-red-500/50' : 'border-[#F0D7DF]'
              }`}
            />
            {errors.eventLocation && (
              <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.eventLocation}</span>
              </p>
            )}
          </div>

          {/* Modelo de interesse */}
          <div>
            <label className="block text-xs font-bold text-[#1C1217] uppercase tracking-wider mb-2">
              Modelo de interesse
            </label>
            <select
              value={modelInterest}
              onChange={(e) => setModelInterest(e.target.value)}
              onFocus={handleInputFocus}
              className="w-full min-h-[48px] px-4 py-3 rounded-2xl border border-[#F0D7DF] text-sm text-[#1C1217] bg-[#FAF5F7] focus:outline-none focus:ring-2 focus:ring-[#9E244D]/20 focus:border-[#9E244D] cursor-pointer"
            >
              {modelOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-white text-[#1C1217]">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Faixa de investimento */}
          <div>
            <label className="block text-xs font-bold text-[#1C1217] uppercase tracking-wider mb-2.5">
              Faixa de investimento
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {budgetOptions.map((range) => {
                const isSelected = budgetRange === range;
                return (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setBudgetRange(range)}
                    className={`min-h-[44px] px-4 py-2.5 rounded-2xl text-xs font-bold text-left transition-all cursor-pointer flex items-center justify-between border ${
                      isSelected
                        ? 'bg-[#9E244D] text-white border-[#9E244D] shadow-xs'
                        : 'bg-[#FAF5F7] text-[#5C4A53] border-[#F0D7DF] hover:border-[#9E244D]'
                    }`}
                  >
                    <span>{range}</span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-white ml-2 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Botão de envio */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full min-h-[52px] px-6 py-4 rounded-2xl bg-[#22C55E] hover:bg-[#1ea850] text-white font-black text-base flex items-center justify-center gap-2 shadow-lg shadow-[#22C55E]/20 active:scale-98 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-none" />
              <span>Verificar no WhatsApp com Buum Balloonn</span>
            </button>
            <p className="text-center text-[11px] text-[#5C4A53] mt-2.5 font-medium">
              Ao clicar, você será direcionado ao WhatsApp da Buum Balloonn com as informações já preenchidas.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
