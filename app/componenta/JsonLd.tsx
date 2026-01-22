import Script from "next/script";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Italian Pizza Catering",
   "logo": "https://www.italianpizzacatering.com.au/logo.png",
    "image": "https://www.italianpizzacatering.com.au/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sydney",
    "addressRegion": "NSW",
    "postalCode": "2000",
    "addressCountry": "Australia"
  },
  "telephone": "+61 2 1234 5678",
  "url": "https://www.italianpizzacatering.com.au/",
  "servesCuisine": ["Italian", "Pizza"],
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Australia"
    }
  };

  return (
    <Script
      id="jsonld-food"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
