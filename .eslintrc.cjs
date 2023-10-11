module.exports = {
    // ...
    parser: "@typescript-eslint/parser",
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended',


    'plugin:@typescript-eslint/recommended-requiring-type-checking',
],
    plugins: ['@typescript-eslint'],
    parserOptions: {
      // ...
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      extraFileExtensions: [".astro"], // This is a required setting in `@typescript-eslint/parser` v5.
    },
    overrides: [
      {
        files: ["*.astro"],
        parser: "astro-eslint-parser",
        // Parse the script in `.astro` as TypeScript by adding the following configuration.
        parserOptions: {
          parser: "@typescript-eslint/parser",
        },
      },
      // ...
    ],
    // ...
  }