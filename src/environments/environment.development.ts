/**
 * develompent environment variables
 *
 * this file is used to store environment variables for the development environment. It can be used to configure settings such as API endpoints, feature flags, and other environment-specific values.
 */

export const environment = {
  production:false,
  newsProviderApiBaseUrl: 'https://newsapi.org/v2',
  newsProviderNewsEndpointPath: '/top-headlines',
  newProviderSourcesEndpointPath: '/top-headlines/sources',
  newsProviderApiKey: 'YOUR_NEWSAPI_KEY',
  logoProviderApiBaseUrl: 'https://img.logo.dev',
  logoProviderPublishableKey: 'YOUR_CLEARBIT_PUBLISHABLE_KEY',
};
