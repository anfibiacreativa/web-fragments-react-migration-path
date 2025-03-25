FROM mcr.microsoft.com/devcontainers/javascript-node:20

RUN corepack enable && npm install -g pnpm

WORKDIR /workspace

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

EXPOSE 8080

CMD ["pnpm", "start"]
