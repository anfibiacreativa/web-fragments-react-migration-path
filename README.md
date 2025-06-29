<!-- prettier-ignore -->
<div align="center">

<img src="./packages/host-app/client/src/assets/favicon.svg" alt="web-fragments-logo" align="center" height="64" />

# Migration path from React SPA app, to micro-frontends featuring Qwik and Nuxt.js

[![Web Fragments documentation](https://img.shields.io/badge/Web%20Fragments-Docs-8A2BE2?style=flat-square)](https://web-fragments.dev/)
[![New to micro-frontends?](https://img.shields.io/badge/Microfrontend.dev-2F80ED?style=flat-square)](https://microfrontend.dev)
![Node version](https://img.shields.io/badge/Node.js->=20-3c873a?style=flat-square)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-white?style=flat-square)](LICENSE)
[![JSWorldVideo](https://img.shields.io/badge/YouTube-red?style=flat-square&logo=youtube&logoColor=white)](https://youtu.be/5mn3EpWCcJs?t=9295)

[Overview](#overview) | [Getting started](#getting-started) | [Application Design](#application-design) | [Migration excercise](#migration-excercise)

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/anfibiacreativa/web-fragments-react-migration-path?devcontainer_path=.devcontainer/devcontainer.json)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/anfibiacreativa/web-fragments-react-migration-path/tree/feat/stackblitz-webcontainer)


</div>

## Overview

This sample demonstrates a migrated monolithic React.js client-side SPA e-commerce application to a micro-frontend architecture using [Web Fragments](https://github.com/web-fragments/web-fragments).

Web Fragments are a radically new approach to Web micro-frontends which is framework, tooling, and platform agnostic.

New to micro-frontends? Check out https://microfrontend.dev

## Getting started

### Local build

Clone or fork this repo, and then run

`pnpm i && pnpm build:all && pnpm start:prod`

at root level.

This will build the client-side shell and the server, and will start the host-app server on port `8080`.

### Local devcontainer with Docker

Make sure [Docker] is installed in your system. Go to the root of the project and run

`docker build -t web-fragments-shell-app . `
`docker run -p 8080:8080 -p 3000:3000 -p 3001:3001 -p 4174:4174 -p 4175:4175 -p 4176:4176 web-fragments-shell-app`

You can then run

`pnpm i && pnpm build:all && pnpm start:prod`

## Application design

The e-commerce application consists of a `store` route featuring a catalog and the shopping cart area.

![webfragments_demo_homepage](https://github.com/user-attachments/assets/fb1dfd4f-1f7c-4018-8587-d31a6ae8d354)


#### Catalog cards link directly to the product detail page.

![webfragments_demo_detail](https://github.com/user-attachments/assets/704e3296-0cef-422f-b605-d8f3e4bb3464)

Web Fragments enable the use of unclipped modal boxes!
![webfragments modal box](https://github.com/user-attachments/assets/bc4e6303-75f0-421b-a35b-7cfb5776bba7)

#### Web Fragments inter communication with Bradcast channel

![add to cart using broadcast channel micro-frontends](https://github.com/user-attachments/assets/2290f452-0605-4e33-a912-b7c0c8d1c104)

#### 3rd party payment integration in a fully functional micro-architecture

![web fragments payment](https://github.com/user-attachments/assets/9bf3026d-322d-4c0e-b8bf-95cb2e91f4b4)


## Application structure

The user interface is composed by the following components

- homepage
- product page
- product detail
- product card
- shopping cart

## Bonus feature

We have added an AI Slogan Generator, as an additional micro-frontend application, that uses a small local model to generate a new t-shirt slogan!

## Migration excercise

The decoupling and migration excercise consists in horizontally splitting the monolithic UI and codebase into multiple applications that are independently developed, released, versioned and deployed, with the following correspondence,

Homepage + productpage -> Shell application React.js client-side
Product catalog -> Micro-frontend split 1 -> [Nuxt.js](https://nuxt.com/)
Product detail -> Micro-frontend split 2 -> [Nuxt.js](https://nuxt.com/)
Shopping cart -> Micro-frontend split 3 -> [Qwik](https://qwik.dev/)

## Come back soon! We have more!

We will continue to evolve this demo, while we work towards a stable release!

🫶
