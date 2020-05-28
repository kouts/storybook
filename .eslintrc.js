module.exports = {
  root: true,
  extends: ['@storybook/eslint-config-storybook'],
  overrides: [
    {
      files: [
        '**/__tests__/**',
        '**/scripts/**',
        '**/__testfixtures__/**',
        '**/*.test.*',
        '**/*.stories.*',
        '**/storyshots/**/stories/**',
        'docs/src/new-components/lib/StoryLinkWrapper.js',
        'docs/src/stories/**',
      ],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['**/__testfixtures__/**'],
      rules: {
        'react/forbid-prop-types': 'off',
        'react/no-unused-prop-types': 'off',
        'react/require-default-props': 'off',
      },
    },
    { files: '**/.storybook/config.js', rules: { 'global-require': 'off' } },
    { files: 'cypress/**', rules: { 'jest/expect-expect': 'off' } },
    {
      files: ['**/*.stories.*'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['**/*.tsx', '**/*.ts'],
      rules: {
        'react/prop-types': 'off', // we should use types
        'no-dupe-class-members': 'off', // this is called overloads in typescript
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'vars-on-top': 'off',
        'no-var': 'off', // this is how typescript works
        'spaced-comment': 'off',
      },
    },
  ],
};
