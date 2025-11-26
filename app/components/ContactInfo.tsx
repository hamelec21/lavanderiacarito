export default function ContactInfo() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Información de Contacto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dirección */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 to-cyan-100/0 group-hover:from-blue-100/30 group-hover:to-cyan-100/30 transition-all duration-300"></div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="shrink-0">
                <div className="p-3 rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Dirección
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pasaje Eucaliptus, 256
                  <br />
                  Villa El Sol, Catemu
                </p>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/0 to-blue-100/0 group-hover:from-cyan-100/30 group-hover:to-blue-100/30 transition-all duration-300"></div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="shrink-0">
                <div className="p-3 rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all">
                  <svg
                    className="w-8 h-8 text-cyan-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Horarios de Atención
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="leading-relaxed">
                    <span className="font-semibold">Lunes a Viernes:</span>
                    <br />
                    09:00 a 20:00 hrs
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold">Sábado:</span>
                    <br />
                    10:00 a 14:00 hrs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

