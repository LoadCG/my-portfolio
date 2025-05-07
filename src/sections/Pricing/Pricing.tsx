import React from 'react';
import { Button, Tooltip } from 'flowbite-react';
import { Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Pricing: React.FC = () => {
  const { t } = useTranslation();

  const getWhatsAppLink = (plan: 'ecommerce' | 'landing' | 'brand') => {
    const baseUrl = "https://api.whatsapp.com/send?phone=5512991121980&text=";
    const messages = {
      ecommerce: encodeURIComponent(
        t('pricing.plans.ecommerce.message', {
          plan: t('pricing.plans.ecommerce.title'),
          price: t('pricing.plans.ecommerce.price'),
          features: "\n• " + [
            t('pricing.plans.ecommerce.features.catalog'),
            t('pricing.plans.ecommerce.features.cart'),
            t('pricing.plans.ecommerce.features.payment')
          ].join("\n• ")
        })
      ),
      landing: encodeURIComponent(
        t('pricing.plans.landing.message', {
          plan: t('pricing.plans.landing.title'),
          price: t('pricing.plans.landing.price'),
          features: "\n• " + [
            t('pricing.plans.landing.features.responsive'),
            t('pricing.plans.landing.features.sections'),
            t('pricing.plans.landing.features.contact')
          ].join("\n• ")
        })
      ),
      brand: encodeURIComponent(
        t('pricing.plans.brand.message', {
          plan: t('pricing.plans.brand.title'),
          price: t('pricing.plans.brand.price'),
          features: "\n• " + [
            t('pricing.plans.brand.features.logo'),
            t('pricing.plans.brand.features.colors'),
            t('pricing.plans.brand.features.guide')
          ].join("\n• ")
        })
      )
    };
    return `${baseUrl}${messages[plan]}`;
  };

  return (
    <section id="pricing" className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 px-4 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          {t('pricing.titleWhite')}{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            {t('pricing.title')}
          </span>
        </h1>
        <p className="mt-4 text-gray-400">
          {t('pricing.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {/* E-commerce Card */}
        <div className="relative border-2 border-emerald-400 rounded-xl p-6 transform transition-all group hover:scale-105">
          <div className="absolute top-0 right-0 bg-emerald-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm">
            {t('pricing.popular')}
          </div>
          <h3 className="text-xl font-bold text-white">{t('pricing.plans.ecommerce.title')}</h3>
          <p className="text-gray-400">{t('pricing.plans.ecommerce.description')}</p>
          <div className="my-6">
            <span className="text-4xl font-bold text-white">{t('pricing.plans.ecommerce.price')}</span>
            <span className="text-gray-400">/{t('pricing.plans.pricePerProject')}</span>
          </div>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              • {t('pricing.plans.ecommerce.features.catalog')}{' '}
              <Tooltip content={t('pricing.plans.ecommerce.tooltips.catalog')}>
                <Info className="ml-1 h-4 w-4 text-gray-500 hover:text-white" />
              </Tooltip>
            </li>
            <li className="flex items-center">
              • {t('pricing.plans.ecommerce.features.cart')}
            </li>
            <li className="flex items-center">
              • {t('pricing.plans.ecommerce.features.payment')}{' '}
              <Tooltip content={t('pricing.plans.ecommerce.tooltips.payment')}>
                <Info className="ml-1 h-4 w-4 text-gray-500 hover:text-white" />
              </Tooltip>
            </li>
            <li className="text-sm text-emerald-300">{t('pricing.plans.ecommerce.features.slots')}</li>
          </ul>
          <a href={getWhatsAppLink('ecommerce')} target="_blank" rel="noopener noreferrer" className="block w-full">
            <Button className="mt-8 w-full animate-pulse bg-emerald-500 hover:bg-emerald-600 cursor-pointer">
              {t('pricing.button')}
            </Button>
          </a>
        </div>

        {/* Landing Page Card */}
        <div className="border border-gray-700 rounded-xl p-6 transform transition-all group hover:scale-105 hover:border-emerald-400">
          <h3 className="text-xl font-bold text-white">{t('pricing.plans.landing.title')}</h3>
          <p className="text-gray-400">{t('pricing.plans.landing.description')}</p>
          <div className="my-6">
            <span className="text-4xl font-bold text-white">{t('pricing.plans.landing.price')}</span>
            <span className="text-gray-400">/{t('pricing.plans.pricePerProject')}</span>
          </div>
          <ul className="space-y-3 text-gray-400">
            <li>• {t('pricing.plans.landing.features.responsive')}</li>
            <li>• {t('pricing.plans.landing.features.sections')}</li>
            <li>• {t('pricing.plans.landing.features.contact')}</li>
            <li className="text-sm text-emerald-300">{t('pricing.plans.landing.features.slots')}</li>
          </ul>
          <a href={getWhatsAppLink('landing')} target="_blank" rel="noopener noreferrer" className="block w-full">
            <Button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
              {t('pricing.button')}
            </Button>
          </a>
        </div>

        {/* Brand Identity Card */}
        <div className="border border-gray-700 rounded-xl p-6 transform transition-all group hover:scale-105 hover:border-emerald-400">
          <h3 className="text-xl font-bold text-white">{t('pricing.plans.brand.title')}</h3>
          <p className="text-gray-400">{t('pricing.plans.brand.description')}</p>
          <div className="my-6">
            <span className="text-4xl font-bold text-white">{t('pricing.plans.brand.price')}</span>
            <span className="text-gray-400">/{t('pricing.plans.pricePerPackage')}</span>
          </div>
          <ul className="space-y-3 text-gray-400">
            <li>• {t('pricing.plans.brand.features.logo')}</li>
            <li>• {t('pricing.plans.brand.features.colors')}</li>
            <li>• {t('pricing.plans.brand.features.guide')}</li>
            <li className="text-sm text-emerald-300">{t('pricing.plans.brand.features.slots')}</li>
          </ul>
          <a href={getWhatsAppLink('brand')} target="_blank" rel="noopener noreferrer" className="block w-full">
            <Button className="mt-8 w-full bg-green-600 hover:bg-green-700 cursor-pointer">
              {t('pricing.button')}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;