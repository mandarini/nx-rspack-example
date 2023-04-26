# Nx Rspack Example

## Purpose

The purpose of this repo is to be included in the [rspack ecosystem ci](https://github.com/web-infra-dev/rspack-ecosystem-ci).

## Contents

This repo contains the following projects:

- [apps/react-app](apps/react-app): A React app set up to build with Rspack
- [apps/nest-app](apps/nest-app): A NestJS app set up to build with Rspack
- [apps/web-components-app](apps/web-components-app/): A Web Components app set up to build with Rspack

And the following libraries:

- [libs/react-lib](libs/react-lib): A React library, which is imported into the React app
- [libs/js-lib](libs/js-lib): A JS library, which is imported into the Web Components app

The importing of the libraries serves to demonstrate that Rspack can resolve the ts-paths correctly.
