import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = 'website',
  ogLocale = 'en_IN',
  articleTags = [],
  twitterCard = 'summary_large_image',
  canonical,
  noindex = false
}) => {

  if (typeof document === 'undefined') {
    return null;
  }

  const defaultTitle = 'HR Consultancy in Calicut,Kerala | Befirst HR & Management Services';
  const defaultDescription = 'Befirst HR is one of the best HR consultancy in Calicut,Kerala, also offers recruitment, payroll & training solutions for SMEs, startups & corporates in Calicut & GCC. Book your free consultation.';
  const defaultKeywords = 'HR Consultancy in Calicut,HR Consultancy in Kerala,HR Services in Calicut';
  const defaultOgImage = 'https://www.befirsthr.com/images/homepage-og.jpg';
  const defaultUrl = 'https://www.befirsthr.com/';
  const defaultArticleTags = [
    'HR Consultancy in Calicut',
    'HR Consultancy in Kerala',
    'HR Services in Calicut'
  ];

  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;
  const pageOgTitle = ogTitle || pageTitle;
  const pageOgDescription = ogDescription || pageDescription;
  const pageOgImage = ogImage || defaultOgImage;
  const pageUrl = ogUrl || canonical || defaultUrl;
  const pageArticleTags = articleTags.length > 0 ? articleTags : defaultArticleTags;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}



      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={pageOgTitle} />
      <meta property="og:description" content={pageOgDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={pageOgImage} />
      <meta property="og:locale" content={ogLocale} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={pageOgTitle} />
      <meta name="twitter:description" content={pageOgDescription} />
      <meta name="twitter:image" content={pageOgImage} />

      {/* Dynamic Article Tags */}
      {pageArticleTags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
    </Helmet>
  );
};

export default SEO;