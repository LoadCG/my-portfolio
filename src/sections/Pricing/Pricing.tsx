import React from 'react';
import { Button, Tooltip } from 'flowbite-react';
import { Info } from 'lucide-react';

export const Pricing: React.FC = () => {
  // Function to generate WhatsApp links with customized messages
  const getWhatsAppLink = (plan: string) => {
    const baseUrl = "https://api.whatsapp.com/send?phone=5512991121980&text=";
    const messages = {
      ecommerce: encodeURIComponent(
        "Olá Cauan! Estou interessado(a) no plano *E-commerce* ($599+).\n\n" +
        "🔹 Recursos que preciso:\n" +
        "• Catálogo de produtos completo\n" +
        "• Carrinho de compras funcional\n" +
        "• Integração com métodos de pagamento\n\n" +
        "Você poderia me explicar como funciona seu processo de desenvolvimento?"
      ),
      landing: encodeURIComponent(
        "Oi Cauan! Quero solicitar uma *Landing Page* ($199) para meu negócio.\n\n" +
        "🔹 Meus requisitos:\n" +
        "• Design moderno e responsivo\n" +
        "• 5 seções bem estruturadas\n" +
        "• Formulário de contato integrado\n\n" +
        "Qual o prazo médio para entrega?"
      ),
      brand: encodeURIComponent(
        "Olá Cauan! Preciso de um serviço de *Identidade Visual* ($149).\n\n" +
        "🔹 Elementos essenciais:\n" +
        "• Logo principal e variações\n" +
        "• Paleta de cores profissional\n" +
        "• Guia de aplicação básico\n\n" +
        "Você tem exemplos de trabalhos similares?"
      )
    };
    return `${baseUrl}${messages[plan]}`;
  };

  return (
    <section id="pricing" className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 px-4 py-16">
      {/* Header */}
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Pricing{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Options
          </span>
        </h1>
        <p className="mt-4 text-gray-400">
          Choose the plan that best fits your full-stack development and graphic design needs.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {/* E-commerce Card */}
        <div className="relative border-2 border-emerald-400 rounded-xl p-6 transform transition-all group hover:scale-105">
          <div className="absolute top-0 right-0 bg-emerald-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm">
            Most Popular
          </div>
          <h3 className="text-xl font-bold text-white">E-commerce</h3>
          <p className="text-gray-400">Complete online store solution</p>
          <div className="my-6">
            <span className="text-4xl font-bold text-white">$599+</span>
            <span className="text-gray-400">/project</span>
          </div>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              • Product catalog{' '}
              <Tooltip content="Product listing with filters and categories">
                <Info className="ml-1 h-4 w-4 text-gray-500 hover:text-white" />
              </Tooltip>
            </li>
            <li className="flex items-center">
              • Shopping cart system
            </li>
            <li className="flex items-center">
              • Payment integration{' '}
              <Tooltip content="Stripe, PayPal or local payment methods">
                <Info className="ml-1 h-4 w-4 text-gray-500 hover:text-white" />
              </Tooltip>
            </li>
            <li className="text-sm text-emerald-300">Only 2 slots/month</li>
          </ul>
          <a 
            href={getWhatsAppLink('ecommerce')} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button className="mt-8 w-full animate-pulse bg-emerald-500 hover:bg-emerald-600 cursor-pointer">
              Choose Plan
            </Button>
          </a>
        </div>

        {/* Landing Page Card */}
        <div className="border border-gray-700 rounded-xl p-6 transform transition-all group hover:scale-105 hover:border-emerald-400">
          <h3 className="text-xl font-bold text-white">Landing Page</h3>
          <p className="text-gray-400">Professional one-page website</p>
          <div className="my-6">
            <span className="text-4xl font-bold text-white">$199</span>
            <span className="text-gray-400">/project</span>
          </div>
          <ul className="space-y-3 text-gray-400">
            <li>• Fully responsive design</li>
            <li>• 5 customized sections</li>
            <li>• Contact form integration</li>
            <li className="text-sm text-emerald-300">Only 5 slots/month</li>
          </ul>
          <a 
            href={getWhatsAppLink('landing')} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
              Choose Plan
            </Button>
          </a>
        </div>

        {/* Brand Identity Card */}
        <div className="border border-gray-700 rounded-xl p-6 transform transition-all group hover:scale-105 hover:border-emerald-400">
          <h3 className="text-xl font-bold text-white">Brand Identity</h3>
          <p className="text-gray-400">Complete visual identity package</p>
          <div className="my-6">
            <span className="text-4xl font-bold text-white">$149</span>
            <span className="text-gray-400">/package</span>
          </div>
          <ul className="space-y-3 text-gray-400">
            <li>• Main logo + variations</li>
            <li>• Professional color palette</li>
            <li>• Basic style guide</li>
            <li className="text-sm text-emerald-300">Only 3 slots/month</li>
          </ul>
          <a 
            href={getWhatsAppLink('brand')} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button className="mt-8 w-full bg-green-600 hover:bg-green-700 cursor-pointer">
              Choose Plan
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;