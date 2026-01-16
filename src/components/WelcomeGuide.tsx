import { MapPin, MessageCircle, Lightbulb, AlertCircle } from 'lucide-react';

export function WelcomeGuide() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-4 rounded-full">
            <MapPin className="w-12 h-12 text-blue-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Benvingut al Park4Night Agent! 🚐
        </h2>
        <p className="text-gray-600">
          El teu assistent per trobar llocs on aparcar i acampar
        </p>
      </div>

      {/* Com funciona */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <div className="flex items-start gap-3 mb-3">
          <MessageCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Com funciona?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Aquest agent cerca llocs a la base de dades de Park4Night i et permet fer preguntes
              de seguiment sobre els resultats. Està optimitzat per consultes <strong>simples i directes</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Exemples bons */}
      <div className="bg-green-50 rounded-lg border border-green-200 p-5">
        <div className="flex items-start gap-3 mb-3">
          <Lightbulb className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">✅ Exemples de bones preguntes</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-white rounded p-3 border border-green-100">
                <p className="font-medium text-gray-700">Cerques simples:</p>
                <ul className="mt-1 space-y-1 text-gray-600 ml-4 list-disc">
                  <li>"lleida"</li>
                  <li>"llocs a barcelona"</li>
                  <li>"càmpings girona"</li>
                  <li>"aparcar la seu d'urgell"</li>
                </ul>
              </div>

              <div className="bg-white rounded p-3 border border-green-100">
                <p className="font-medium text-gray-700">Preguntes de seguiment:</p>
                <ul className="mt-1 space-y-1 text-gray-600 ml-4 list-disc">
                  <li>"quin és el millor?"</li>
                  <li>"quin té serveis?"</li>
                  <li>"quin és més tranquil?"</li>
                  <li>"hi ha algun gratuït?"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Què evitar */}
      <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-5">
        <div className="flex items-start gap-3 mb-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">⚠️ Limitacions a tenir en compte</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="leading-relaxed">
                <strong>Model bàsic:</strong> Aquest agent utilitza un model d'IA econòmic (Haiku)
                que funciona millor amb preguntes <strong>curtes i específiques</strong>.
              </p>

              <div className="bg-white rounded p-3 border border-yellow-100 mt-3">
                <p className="font-medium text-red-600 mb-2">❌ Evita preguntes complexes:</p>
                <ul className="space-y-1 text-gray-600 ml-4 list-disc">
                  <li>"Busco un lloc tranquil amb WiFi gratuït, aigua, vistes i prop del centre"</li>
                  <li>"Compara tots els llocs i digues'm pros i contres de cadascun"</li>
                  <li>"Quina ruta faig de Barcelona a Pirineus parant a dormir?"</li>
                </ul>
              </div>

              <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                💡 <strong>Consell:</strong> Fes la cerca primer ("lleida"), revisa els resultats,
                i després fes preguntes senzilles sobre ells ("quin té aigua?").
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Consells finals */}
      <div className="bg-blue-50 rounded-lg border border-blue-200 p-5">
        <h3 className="font-semibold text-gray-800 mb-3">💡 Consells per obtenir millors resultats</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">1.</span>
            <span><strong>Cerca primer, pregunta després:</strong> Demana els llocs d'una ciutat i després fes preguntes específiques sobre ells</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">2.</span>
            <span><strong>Una cosa cada vegada:</strong> Si vols comparar característiques, fes-ho pas a pas</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">3.</span>
            <span><strong>Nova ciutat = Nova conversa:</strong> Usa el botó "Nova conversa" si vols buscar en una zona diferent</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">4.</span>
            <span><strong>Sigues pacient:</strong> El servidor pot trigar uns segons si està hibernant (primera consulta)</span>
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <p className="text-gray-600 text-sm">
          Llest per començar? Escriu el nom d'una ciutat per buscar llocs! 🚐✨
        </p>
      </div>
    </div>
  );
}
