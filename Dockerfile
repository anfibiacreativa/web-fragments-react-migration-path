FROM mcr.microsoft.com/devcontainers/javascript-node:20

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /workspace

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 8080

CMD ["pnpm", "start"]
