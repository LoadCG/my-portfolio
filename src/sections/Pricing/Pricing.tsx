"use client";

import React, { useState } from 'react';
import { HiOutlineInformationCircle, HiOutlineCheck } from 'react-icons/hi';
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
    <section id="pricing" className="min-h-screen w-full px-4 py-20 bg-transparent">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('pricing.titleWhite')}{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              {t('pricing.title')}
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* E-commerce Card */}
          <PricingCard
            type="ecommerce"
            popular={true}
            title={t('pricing.plans.ecommerce.title')}
            description={t('pricing.plans.ecommerce.description')}
            price={t('pricing.plans.ecommerce.price')}
            perUnit={t('pricing.plans.pricePerProject')}
            features={[
              { text: t('pricing.plans.ecommerce.features.catalog'), tooltip: t('pricing.plans.ecommerce.tooltips.catalog') },
              { text: t('pricing.plans.ecommerce.features.cart') },
              { text: t('pricing.plans.ecommerce.features.payment'), tooltip: t('pricing.plans.ecommerce.tooltips.payment') },
              { text: t('pricing.plans.ecommerce.features.slots'), highlight: true }
            ]}
            buttonText={t('pricing.button')}
            buttonColor="bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20"
            whatsappLink={getWhatsAppLink('ecommerce')}
          />

          {/* Landing Page Card */}
          <PricingCard
            type="landing"
            title={t('pricing.plans.landing.title')}
            description={t('pricing.plans.landing.description')}
            price={t('pricing.plans.landing.price')}
            perUnit={t('pricing.plans.pricePerProject')}
            features={[
              { text: t('pricing.plans.landing.features.responsive') },
              { text: t('pricing.plans.landing.features.sections') },
              { text: t('pricing.plans.landing.features.contact') },
              { text: t('pricing.plans.landing.features.slots'), highlight: true }
            ]}
            buttonText={t('pricing.button')}
            buttonColor="bg-blue-600 hover:bg-blue-700 shadow-blue-500/20"
            whatsappLink={getWhatsAppLink('landing')}
          />

          {/* Brand Identity Card */}
          <PricingCard
            type="brand"
            title={t('pricing.plans.brand.title')}
            description={t('pricing.plans.brand.description')}
            price={t('pricing.plans.brand.price')}
            perUnit={t('pricing.plans.pricePerPackage')}
            features={[
              { text: t('pricing.plans.brand.features.logo') },
              { text: t('pricing.plans.brand.features.colors') },
              { text: t('pricing.plans.brand.features.guide') },
              { text: t('pricing.plans.brand.features.slots'), highlight: true }
            ]}
            buttonText={t('pricing.button')}
            buttonColor="bg-purple-600 hover:bg-purple-700 shadow-purple-500/20"
            whatsappLink={getWhatsAppLink('brand')}
          />
        </div>
      </div>
    </section>
  );
};

interface Feature {
  text: string;
  tooltip?: string;
  highlight?: boolean;
}

interface PricingCardProps {
  type: string;
  title: string;
  description: string;
  price: string;
  perUnit: string;
  features: Feature[];
  buttonText: string;
  buttonColor: string;
  whatsappLink: string;
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title, description, price, perUnit, features, buttonText, buttonColor, whatsappLink, popular
}) => {
  return (
    <div className={`relative flex flex-col rounded-2xl border ${popular ? 'border-emerald-500/50 bg-emerald-500/5 ring-1 ring-emerald-500/20' : 'border-white/10 bg-white/5'} p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
          Mais Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-emerald-400">{title}</h3>
        <p className="mt-2 text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="mb-8 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-white">{price}</span>
        <span className="text-gray-500 text-sm">/{perUnit}</span>
      </div>

      <ul className="mb-8 flex-1 space-y-4">
        {features.map((feature, idx) => (
          <li key={idx} className={`flex items-start gap-3 text-sm ${feature.highlight ? 'text-emerald-400 font-medium' : 'text-gray-300'}`}>
            <HiOutlineCheck className={`h-5 w-5 shrink-0 ${feature.highlight ? 'text-emerald-400' : 'text-emerald-500/60'}`} />
            <div className="flex items-center gap-1.5">
              <span>{feature.text}</span>
              {feature.tooltip && <Tooltip text={feature.tooltip} />}
            </div>
          </li>
        ))}
      </ul>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-sm font-bold text-white transition-all shadow-lg active:scale-95 ${buttonColor}`}
      >
        {buttonText}
      </a>
    </div>
  );
};

const Tooltip = ({ text }: { text: string }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative flex items-center">
      <HiOutlineInformationCircle
        className="h-4 w-4 text-gray-500 cursor-help hover:text-white transition-colors"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      />
      {show && (
        <div className="absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-xs text-gray-200 shadow-xl border border-white/10 z-20">
          {text}
          <div className="absolute top-full left-1/2 -ml-1 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
};

export default Pricing;