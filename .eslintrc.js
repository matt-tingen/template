// eslint-disable-next-line import/no-extraneous-dependencies
require('@matt-tingen/eslint-config/patch');

module.exports = {
  root: true,
  extends: ['@matt-tingen/eslint-config'],
  rules: {
    // Modern JSX transform
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
