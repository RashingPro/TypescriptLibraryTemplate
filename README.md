## Description

This template repository contains basic project setup for TypeScript library developing. It has the following tools installed:

- Rollup build pipeline with set of useful plugins
- Prettier with a couple of useful plugins
- ESLint set up for TypeScript, JavaScript, Json and Markdown linting
- Knip to easily delete unused dependencies
- Husky-based pipeline that applies Prettier and lint commit message

## Pay attention

- Due to some changes made in `@eslint/core 0.17.0`, it does not work even with config generated via their `init` command. So I locked `@eslint/core` version to `0.16.0` in `package.json` overrides.
- Tested with `pnpm@10.20.0`, but technically it should work well with npm and yarn.
