FROM mcr.microsoft.com/devcontainers/javascript-node:20

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /workspace

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY ./ /workspace

EXPOSE 8080 3000 3001 4174 4175 4176

# Build all projects first
RUN pnpm build:all

CMD ["pnpm", "start:prod"]
