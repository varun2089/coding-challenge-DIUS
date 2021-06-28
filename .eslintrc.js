module.exports = {
  'env': {
    es6: true,
    node: true,
    jest: true,
  },
  'extends': [
    'google',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  'parserOptions': {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  'plugins': ['@typescript-eslint'],
  'rules': {
  },
  'overrides': [
    {
      files: ['src/**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
      rules: {
        'max-len': [
          'error',
          {
            code: 200,
          },
        ],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_'}],
        'require-jsdoc': [2, {
          'require': {
            'FunctionDeclaration': false,
            'MethodDefinition': false,
            'ClassDeclaration': false,
          },
        }],
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.ts'],
          },
        },
      },
    },
  ],
};
