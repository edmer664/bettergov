import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/**
 * SEOManager component that ensures proper title management across all routes
 *
 * This component provides default SEO values for every route and ensures
 * proper cleanup when navigating between routes with and without SEO components.
 */
export default function SEOManager() {
  const location = useLocation();
  const [, forceUpdate] = useState({});

  const defaultTitle =
    'BetterGov.ph | Republic of the Philippines | Community Powered Government Portal';
  const defaultDescription =
    'Community-powered portal of the Republic of the Philippines. Access government services, stay updated with the latest news, and find information about the Philippines.';

  useEffect(() => {
    // Force a re-render of this component on route changes
    // This ensures the Helmet instance is refreshed
    forceUpdate({});
  }, [location.pathname]);

  // Always render default SEO
  // Individual pages can override these by rendering their own Helmet components after this one
  return (
    <Helmet key={location.pathname}>
      <title>{defaultTitle}</title>
      <meta name='description' content={defaultDescription} />

      {/* Open Graph tags */}
      <meta property='og:title' content={defaultTitle} />
      <meta property='og:description' content={defaultDescription} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='BetterGov.ph' />

      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={defaultTitle} />
      <meta name='twitter:description' content={defaultDescription} />

      {/* Government Specific Meta Tags */}
      <meta name='geo.country' content='PH' />
      <meta name='geo.region' content='PH' />
      <meta name='DC.language' content='en' />
      <meta name='DC.creator' content='Republic of the Philippines' />
      <meta name='DC.publisher' content='Philippine Government' />
      <meta name='DC.rights' content='© Republic of the Philippines' />
    </Helmet>
  );
}
