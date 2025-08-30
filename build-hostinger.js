const { execSync } = require('child_process');

// Set environment variables
process.env.REACT_APP_API_BASE_URL = 'https://your-api-domain.com';
process.env.REACT_APP_WHATSAPP_NUMBER = '919400905954';
process.env.REACT_APP_ENVIRONMENT = 'production';

// Run build
execSync('react-scripts build', { stdio: 'inherit' });