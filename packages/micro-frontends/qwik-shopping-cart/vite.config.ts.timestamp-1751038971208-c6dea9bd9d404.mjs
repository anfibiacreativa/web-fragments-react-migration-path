// vite.config.ts
import { defineConfig } from "file:///Users/nvenditto/Projects/Microfrontends/Fragments/webfragments-react-legacy/node_modules/.pnpm/vite@5.3.5_@types+node@20.14.11_terser@5.43.1/node_modules/vite/dist/node/index.js";
import { qwikVite } from "file:///Users/nvenditto/Projects/Microfrontends/Fragments/webfragments-react-legacy/node_modules/.pnpm/@builder.io+qwik@1.7.1_@types+node@20.14.11_terser@5.43.1_undici@7.10.0/node_modules/@builder.io/qwik/optimizer.mjs";
import { qwikCity } from "file:///Users/nvenditto/Projects/Microfrontends/Fragments/webfragments-react-legacy/node_modules/.pnpm/@builder.io+qwik-city@1.7.1_@types+node@20.14.11_acorn@8.14.1_rollup@4.44.0_terser@5.43.1/node_modules/@builder.io/qwik-city/vite/index.mjs";
import tsconfigPaths from "file:///Users/nvenditto/Projects/Microfrontends/Fragments/webfragments-react-legacy/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.4.5_vite@5.3.5_@types+node@20.14.11_terser@5.43.1_/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var package_default = {
  name: "qwik-shopping-cart",
  description: "Qwik shopping cart micro-frontend",
  engines: {
    node: "^18.17.0 || ^20.3.0 || >=21.0.0"
  },
  "engines-annotation": "Mostly required by sharp which needs a Node-API v9 compatible runtime",
  private: true,
  trustedDependencies: [
    "sharp"
  ],
  "trustedDependencies-annotation": "Needed for bun to allow running install scripts",
  type: "module",
  scripts: {
    build: "qwik build",
    "build.client": "vite build",
    "build.preview": "vite build --ssr src/entry.preview.tsx",
    "build.server": "vite build -c adapters/cloudflare-pages/vite.config.ts",
    "build.types": "tsc --incremental --noEmit",
    deploy: "npm run build && wrangler deploy",
    dev: "vite --mode ssr",
    "dev.debug": "node --inspect-brk ./node_modules/vite/bin/vite.js --mode ssr --force",
    fmt: "prettier --write .",
    "fmt.check": "prettier --check .",
    preview: "qwik build preview && vite preview --port 4175",
    start: "vite --open --mode ssr",
    serve: "wrangler pages dev ./dist --compatibility-flags=nodejs_als",
    qwik: "qwik"
  },
  devDependencies: {
    "@builder.io/qwik": "1.7.1",
    "@builder.io/qwik-city": "1.7.1",
    "@types/node": "20.14.11",
    prettier: "3.3.3",
    typescript: "5.4.5",
    undici: "*",
    vite: "^5.2.10",
    "vite-tsconfig-paths": "^4.2.1"
  },
  dependencies: {
    "@cloudflare/workers-types": "^4.20250417.0",
    wrangler: "^4.12.0"
  }
};

// vite.config.ts
var { dependencies = {}, devDependencies = {} } = package_default;
errorOnDuplicatesPkgDeps(devDependencies, dependencies);
var vite_config_default = defineConfig(({ command, mode }) => {
  return {
    // mode: "development",
    build: {
      minify: false,
      assetsDir: "_fragment/qwik/assets"
    },
    plugins: [
      qwikCity({
        trailingSlash: false
      }),
      qwikVite(),
      tsconfigPaths()
    ],
    // This tells Vite which dependencies to pre-build in dev mode.
    optimizeDeps: {
      // Put problematic deps that break bundling here, mostly those with binaries.
      // For example ['better-sqlite3'] if you use that in server functions.
      exclude: []
    },
    /**
     * This is an advanced setting. It improves the bundling of your server code. To use it, make sure you understand when your consumed packages are dependencies or dev dependencies. (otherwise things will break in production)
     */
    // ssr:
    //   command === "build" && mode === "production"
    //     ? {
    //         // All dev dependencies should be bundled in the server build
    //         noExternal: Object.keys(devDependencies),
    //         // Anything marked as a dependency will not be bundled
    //         // These should only be production binary deps (including deps of deps), CLI deps, and their module graph
    //         // If a dep-of-dep needs to be external, add it here
    //         // For example, if something uses `bcrypt` but you don't have it as a dep, you can write
    //         // external: [...Object.keys(dependencies), 'bcrypt']
    //         external: Object.keys(dependencies),
    //       }
    //     : undefined,
    server: {
      headers: {
        // Don't cache the server response in dev mode
        "Cache-Control": "public, max-age=0"
      }
    },
    preview: {
      headers: {
        // Do cache the server response in preview (non-adapter production build)
        "Cache-Control": "public, max-age=600"
      }
    }
  };
});
function errorOnDuplicatesPkgDeps(devDependencies2, dependencies2) {
  let msg = "";
  const duplicateDeps = Object.keys(devDependencies2).filter((dep) => dependencies2[dep]);
  const qwikPkg = Object.keys(dependencies2).filter((value) => /qwik/i.test(value));
  msg = `Move qwik packages ${qwikPkg.join(", ")} to devDependencies`;
  if (qwikPkg.length > 0) {
    throw new Error(msg);
  }
  msg = `
    Warning: The dependency "${duplicateDeps.join(", ")}" is listed in both "devDependencies" and "dependencies".
    Please move the duplicated dependencies to "devDependencies" only and remove it from "dependencies"
  `;
  if (duplicateDeps.length > 0) {
    throw new Error(msg);
  }
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL252ZW5kaXR0by9Qcm9qZWN0cy9NaWNyb2Zyb250ZW5kcy9GcmFnbWVudHMvd2ViZnJhZ21lbnRzLXJlYWN0LWxlZ2FjeS9wYWNrYWdlcy9taWNyby1mcm9udGVuZHMvcXdpay1zaG9wcGluZy1jYXJ0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbnZlbmRpdHRvL1Byb2plY3RzL01pY3JvZnJvbnRlbmRzL0ZyYWdtZW50cy93ZWJmcmFnbWVudHMtcmVhY3QtbGVnYWN5L3BhY2thZ2VzL21pY3JvLWZyb250ZW5kcy9xd2lrLXNob3BwaW5nLWNhcnQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL252ZW5kaXR0by9Qcm9qZWN0cy9NaWNyb2Zyb250ZW5kcy9GcmFnbWVudHMvd2ViZnJhZ21lbnRzLXJlYWN0LWxlZ2FjeS9wYWNrYWdlcy9taWNyby1mcm9udGVuZHMvcXdpay1zaG9wcGluZy1jYXJ0L3ZpdGUuY29uZmlnLnRzXCI7LyoqXG4gKiBUaGlzIGlzIHRoZSBiYXNlIGNvbmZpZyBmb3Igdml0ZS5cbiAqIFdoZW4gYnVpbGRpbmcsIHRoZSBhZGFwdGVyIGNvbmZpZyBpcyB1c2VkIHdoaWNoIGxvYWRzIHRoaXMgZmlsZSBhbmQgZXh0ZW5kcyBpdC5cbiAqL1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0eXBlIFVzZXJDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHF3aWtWaXRlIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcXdpay9vcHRpbWl6ZXInO1xuaW1wb3J0IHsgcXdpa0NpdHkgfSBmcm9tICdAYnVpbGRlci5pby9xd2lrLWNpdHkvdml0ZSc7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcbmltcG9ydCBwa2cgZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xuXG50eXBlIFBrZ0RlcCA9IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5jb25zdCB7IGRlcGVuZGVuY2llcyA9IHt9LCBkZXZEZXBlbmRlbmNpZXMgPSB7fSB9ID0gcGtnIGFzIGFueSBhcyB7XG5cdGRlcGVuZGVuY2llczogUGtnRGVwO1xuXHRkZXZEZXBlbmRlbmNpZXM6IFBrZ0RlcDtcblx0W2tleTogc3RyaW5nXTogdW5rbm93bjtcbn07XG5lcnJvck9uRHVwbGljYXRlc1BrZ0RlcHMoZGV2RGVwZW5kZW5jaWVzLCBkZXBlbmRlbmNpZXMpO1xuXG4vKipcbiAqIE5vdGUgdGhhdCBWaXRlIG5vcm1hbGx5IHN0YXJ0cyBmcm9tIGBpbmRleC5odG1sYCBidXQgdGhlIHF3aWtDaXR5IHBsdWdpbiBtYWtlcyBzdGFydCBhdCBgc3JjL2VudHJ5LnNzci50c3hgIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pOiBVc2VyQ29uZmlnID0+IHtcblx0cmV0dXJuIHtcblx0XHQvLyBtb2RlOiBcImRldmVsb3BtZW50XCIsXG5cdFx0YnVpbGQ6IHtcblx0XHRcdG1pbmlmeTogZmFsc2UsXG5cdFx0XHRhc3NldHNEaXI6ICdfZnJhZ21lbnQvcXdpay9hc3NldHMnLFxuXHRcdH0sXG5cdFx0cGx1Z2luczogW1xuXHRcdFx0cXdpa0NpdHkoe1xuXHRcdFx0XHR0cmFpbGluZ1NsYXNoOiBmYWxzZSxcblx0XHRcdH0pLFxuXHRcdFx0cXdpa1ZpdGUoKSxcblx0XHRcdHRzY29uZmlnUGF0aHMoKSxcblx0XHRdLFxuXHRcdC8vIFRoaXMgdGVsbHMgVml0ZSB3aGljaCBkZXBlbmRlbmNpZXMgdG8gcHJlLWJ1aWxkIGluIGRldiBtb2RlLlxuXHRcdG9wdGltaXplRGVwczoge1xuXHRcdFx0Ly8gUHV0IHByb2JsZW1hdGljIGRlcHMgdGhhdCBicmVhayBidW5kbGluZyBoZXJlLCBtb3N0bHkgdGhvc2Ugd2l0aCBiaW5hcmllcy5cblx0XHRcdC8vIEZvciBleGFtcGxlIFsnYmV0dGVyLXNxbGl0ZTMnXSBpZiB5b3UgdXNlIHRoYXQgaW4gc2VydmVyIGZ1bmN0aW9ucy5cblx0XHRcdGV4Y2x1ZGU6IFtdLFxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBUaGlzIGlzIGFuIGFkdmFuY2VkIHNldHRpbmcuIEl0IGltcHJvdmVzIHRoZSBidW5kbGluZyBvZiB5b3VyIHNlcnZlciBjb2RlLiBUbyB1c2UgaXQsIG1ha2Ugc3VyZSB5b3UgdW5kZXJzdGFuZCB3aGVuIHlvdXIgY29uc3VtZWQgcGFja2FnZXMgYXJlIGRlcGVuZGVuY2llcyBvciBkZXYgZGVwZW5kZW5jaWVzLiAob3RoZXJ3aXNlIHRoaW5ncyB3aWxsIGJyZWFrIGluIHByb2R1Y3Rpb24pXG5cdFx0ICovXG5cdFx0Ly8gc3NyOlxuXHRcdC8vICAgY29tbWFuZCA9PT0gXCJidWlsZFwiICYmIG1vZGUgPT09IFwicHJvZHVjdGlvblwiXG5cdFx0Ly8gICAgID8ge1xuXHRcdC8vICAgICAgICAgLy8gQWxsIGRldiBkZXBlbmRlbmNpZXMgc2hvdWxkIGJlIGJ1bmRsZWQgaW4gdGhlIHNlcnZlciBidWlsZFxuXHRcdC8vICAgICAgICAgbm9FeHRlcm5hbDogT2JqZWN0LmtleXMoZGV2RGVwZW5kZW5jaWVzKSxcblx0XHQvLyAgICAgICAgIC8vIEFueXRoaW5nIG1hcmtlZCBhcyBhIGRlcGVuZGVuY3kgd2lsbCBub3QgYmUgYnVuZGxlZFxuXHRcdC8vICAgICAgICAgLy8gVGhlc2Ugc2hvdWxkIG9ubHkgYmUgcHJvZHVjdGlvbiBiaW5hcnkgZGVwcyAoaW5jbHVkaW5nIGRlcHMgb2YgZGVwcyksIENMSSBkZXBzLCBhbmQgdGhlaXIgbW9kdWxlIGdyYXBoXG5cdFx0Ly8gICAgICAgICAvLyBJZiBhIGRlcC1vZi1kZXAgbmVlZHMgdG8gYmUgZXh0ZXJuYWwsIGFkZCBpdCBoZXJlXG5cdFx0Ly8gICAgICAgICAvLyBGb3IgZXhhbXBsZSwgaWYgc29tZXRoaW5nIHVzZXMgYGJjcnlwdGAgYnV0IHlvdSBkb24ndCBoYXZlIGl0IGFzIGEgZGVwLCB5b3UgY2FuIHdyaXRlXG5cdFx0Ly8gICAgICAgICAvLyBleHRlcm5hbDogWy4uLk9iamVjdC5rZXlzKGRlcGVuZGVuY2llcyksICdiY3J5cHQnXVxuXHRcdC8vICAgICAgICAgZXh0ZXJuYWw6IE9iamVjdC5rZXlzKGRlcGVuZGVuY2llcyksXG5cdFx0Ly8gICAgICAgfVxuXHRcdC8vICAgICA6IHVuZGVmaW5lZCxcblxuXHRcdHNlcnZlcjoge1xuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQvLyBEb24ndCBjYWNoZSB0aGUgc2VydmVyIHJlc3BvbnNlIGluIGRldiBtb2RlXG5cdFx0XHRcdCdDYWNoZS1Db250cm9sJzogJ3B1YmxpYywgbWF4LWFnZT0wJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRwcmV2aWV3OiB7XG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdC8vIERvIGNhY2hlIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgaW4gcHJldmlldyAobm9uLWFkYXB0ZXIgcHJvZHVjdGlvbiBidWlsZClcblx0XHRcdFx0J0NhY2hlLUNvbnRyb2wnOiAncHVibGljLCBtYXgtYWdlPTYwMCcsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG59KTtcblxuLy8gKioqIHV0aWxzICoqKlxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGlkZW50aWZ5IGR1cGxpY2F0ZSBkZXBlbmRlbmNpZXMgYW5kIHRocm93IGFuIGVycm9yXG4gKiBAcGFyYW0ge09iamVjdH0gZGV2RGVwZW5kZW5jaWVzIC0gTGlzdCBvZiBkZXZlbG9wbWVudCBkZXBlbmRlbmNpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXBlbmRlbmNpZXMgLSBMaXN0IG9mIHByb2R1Y3Rpb24gZGVwZW5kZW5jaWVzXG4gKi9cbmZ1bmN0aW9uIGVycm9yT25EdXBsaWNhdGVzUGtnRGVwcyhkZXZEZXBlbmRlbmNpZXM6IFBrZ0RlcCwgZGVwZW5kZW5jaWVzOiBQa2dEZXApIHtcblx0bGV0IG1zZyA9ICcnO1xuXHQvLyBDcmVhdGUgYW4gYXJyYXkgJ2R1cGxpY2F0ZURlcHMnIGJ5IGZpbHRlcmluZyBkZXZEZXBlbmRlbmNpZXMuXG5cdC8vIElmIGEgZGVwZW5kZW5jeSBhbHNvIGV4aXN0cyBpbiBkZXBlbmRlbmNpZXMsIGl0IGlzIGNvbnNpZGVyZWQgYSBkdXBsaWNhdGUuXG5cdGNvbnN0IGR1cGxpY2F0ZURlcHMgPSBPYmplY3Qua2V5cyhkZXZEZXBlbmRlbmNpZXMpLmZpbHRlcigoZGVwKSA9PiBkZXBlbmRlbmNpZXNbZGVwXSk7XG5cblx0Ly8gaW5jbHVkZSBhbnkga25vd24gcXdpayBwYWNrYWdlc1xuXHRjb25zdCBxd2lrUGtnID0gT2JqZWN0LmtleXMoZGVwZW5kZW5jaWVzKS5maWx0ZXIoKHZhbHVlKSA9PiAvcXdpay9pLnRlc3QodmFsdWUpKTtcblxuXHQvLyBhbnkgZXJyb3JzIGZvciBtaXNzaW5nIFwicXdpay1jaXR5LXBsYW5cIlxuXHQvLyBbUExVR0lOX0VSUk9SXTogSW52YWxpZCBtb2R1bGUgXCJAcXdpay1jaXR5LXBsYW5cIiBpcyBub3QgYSB2YWxpZCBwYWNrYWdlXG5cdG1zZyA9IGBNb3ZlIHF3aWsgcGFja2FnZXMgJHtxd2lrUGtnLmpvaW4oJywgJyl9IHRvIGRldkRlcGVuZGVuY2llc2A7XG5cblx0aWYgKHF3aWtQa2cubGVuZ3RoID4gMCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihtc2cpO1xuXHR9XG5cblx0Ly8gRm9ybWF0IHRoZSBlcnJvciBtZXNzYWdlIHdpdGggdGhlIGR1cGxpY2F0ZXMgbGlzdC5cblx0Ly8gVGhlIGBqb2luYCBmdW5jdGlvbiBpcyB1c2VkIHRvIHJlcHJlc2VudCB0aGUgZWxlbWVudHMgb2YgdGhlICdkdXBsaWNhdGVEZXBzJyBhcnJheSBhcyBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcuXG5cdG1zZyA9IGBcbiAgICBXYXJuaW5nOiBUaGUgZGVwZW5kZW5jeSBcIiR7ZHVwbGljYXRlRGVwcy5qb2luKCcsICcpfVwiIGlzIGxpc3RlZCBpbiBib3RoIFwiZGV2RGVwZW5kZW5jaWVzXCIgYW5kIFwiZGVwZW5kZW5jaWVzXCIuXG4gICAgUGxlYXNlIG1vdmUgdGhlIGR1cGxpY2F0ZWQgZGVwZW5kZW5jaWVzIHRvIFwiZGV2RGVwZW5kZW5jaWVzXCIgb25seSBhbmQgcmVtb3ZlIGl0IGZyb20gXCJkZXBlbmRlbmNpZXNcIlxuICBgO1xuXG5cdC8vIFRocm93IGFuIGVycm9yIHdpdGggdGhlIGNvbnN0cnVjdGVkIG1lc3NhZ2UuXG5cdGlmIChkdXBsaWNhdGVEZXBzLmxlbmd0aCA+IDApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IobXNnKTtcblx0fVxufSIsICJ7XG4gIFwibmFtZVwiOiBcInF3aWstc2hvcHBpbmctY2FydFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUXdpayBzaG9wcGluZyBjYXJ0IG1pY3JvLWZyb250ZW5kXCIsXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiXjE4LjE3LjAgfHwgXjIwLjMuMCB8fCA+PTIxLjAuMFwiXG4gIH0sXG4gIFwiZW5naW5lcy1hbm5vdGF0aW9uXCI6IFwiTW9zdGx5IHJlcXVpcmVkIGJ5IHNoYXJwIHdoaWNoIG5lZWRzIGEgTm9kZS1BUEkgdjkgY29tcGF0aWJsZSBydW50aW1lXCIsXG4gIFwicHJpdmF0ZVwiOiB0cnVlLFxuICBcInRydXN0ZWREZXBlbmRlbmNpZXNcIjogW1xuICAgIFwic2hhcnBcIlxuICBdLFxuICBcInRydXN0ZWREZXBlbmRlbmNpZXMtYW5ub3RhdGlvblwiOiBcIk5lZWRlZCBmb3IgYnVuIHRvIGFsbG93IHJ1bm5pbmcgaW5zdGFsbCBzY3JpcHRzXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJxd2lrIGJ1aWxkXCIsXG4gICAgXCJidWlsZC5jbGllbnRcIjogXCJ2aXRlIGJ1aWxkXCIsXG4gICAgXCJidWlsZC5wcmV2aWV3XCI6IFwidml0ZSBidWlsZCAtLXNzciBzcmMvZW50cnkucHJldmlldy50c3hcIixcbiAgICBcImJ1aWxkLnNlcnZlclwiOiBcInZpdGUgYnVpbGQgLWMgYWRhcHRlcnMvY2xvdWRmbGFyZS1wYWdlcy92aXRlLmNvbmZpZy50c1wiLFxuICAgIFwiYnVpbGQudHlwZXNcIjogXCJ0c2MgLS1pbmNyZW1lbnRhbCAtLW5vRW1pdFwiLFxuICAgIFwiZGVwbG95XCI6IFwibnBtIHJ1biBidWlsZCAmJiB3cmFuZ2xlciBkZXBsb3lcIixcbiAgICBcImRldlwiOiBcInZpdGUgLS1tb2RlIHNzclwiLFxuICAgIFwiZGV2LmRlYnVnXCI6IFwibm9kZSAtLWluc3BlY3QtYnJrIC4vbm9kZV9tb2R1bGVzL3ZpdGUvYmluL3ZpdGUuanMgLS1tb2RlIHNzciAtLWZvcmNlXCIsXG4gICAgXCJmbXRcIjogXCJwcmV0dGllciAtLXdyaXRlIC5cIixcbiAgICBcImZtdC5jaGVja1wiOiBcInByZXR0aWVyIC0tY2hlY2sgLlwiLFxuICAgIFwicHJldmlld1wiOiBcInF3aWsgYnVpbGQgcHJldmlldyAmJiB2aXRlIHByZXZpZXcgLS1wb3J0IDQxNzVcIixcbiAgICBcInN0YXJ0XCI6IFwidml0ZSAtLW9wZW4gLS1tb2RlIHNzclwiLFxuICAgIFwic2VydmVcIjogXCJ3cmFuZ2xlciBwYWdlcyBkZXYgLi9kaXN0IC0tY29tcGF0aWJpbGl0eS1mbGFncz1ub2RlanNfYWxzXCIsXG4gICAgXCJxd2lrXCI6IFwicXdpa1wiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBidWlsZGVyLmlvL3F3aWtcIjogXCIxLjcuMVwiLFxuICAgIFwiQGJ1aWxkZXIuaW8vcXdpay1jaXR5XCI6IFwiMS43LjFcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiMjAuMTQuMTFcIixcbiAgICBcInByZXR0aWVyXCI6IFwiMy4zLjNcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCI1LjQuNVwiLFxuICAgIFwidW5kaWNpXCI6IFwiKlwiLFxuICAgIFwidml0ZVwiOiBcIl41LjIuMTBcIixcbiAgICBcInZpdGUtdHNjb25maWctcGF0aHNcIjogXCJeNC4yLjFcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAY2xvdWRmbGFyZS93b3JrZXJzLXR5cGVzXCI6IFwiXjQuMjAyNTA0MTcuMFwiLFxuICAgIFwid3JhbmdsZXJcIjogXCJeNC4xMi4wXCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUlBLFNBQVMsb0JBQXFDO0FBQzlDLFNBQVMsZ0JBQWdCO0FBQ3pCLFNBQVMsZ0JBQWdCO0FBQ3pCLE9BQU8sbUJBQW1COzs7QUNQMUI7QUFBQSxFQUNFLE1BQVE7QUFBQSxFQUNSLGFBQWU7QUFBQSxFQUNmLFNBQVc7QUFBQSxJQUNULE1BQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxzQkFBc0I7QUFBQSxFQUN0QixTQUFXO0FBQUEsRUFDWCxxQkFBdUI7QUFBQSxJQUNyQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGtDQUFrQztBQUFBLEVBQ2xDLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxJQUNULE9BQVM7QUFBQSxJQUNULGdCQUFnQjtBQUFBLElBQ2hCLGlCQUFpQjtBQUFBLElBQ2pCLGdCQUFnQjtBQUFBLElBQ2hCLGVBQWU7QUFBQSxJQUNmLFFBQVU7QUFBQSxJQUNWLEtBQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLEtBQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFNBQVc7QUFBQSxJQUNYLE9BQVM7QUFBQSxJQUNULE9BQVM7QUFBQSxJQUNULE1BQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxpQkFBbUI7QUFBQSxJQUNqQixvQkFBb0I7QUFBQSxJQUNwQix5QkFBeUI7QUFBQSxJQUN6QixlQUFlO0FBQUEsSUFDZixVQUFZO0FBQUEsSUFDWixZQUFjO0FBQUEsSUFDZCxRQUFVO0FBQUEsSUFDVixNQUFRO0FBQUEsSUFDUix1QkFBdUI7QUFBQSxFQUN6QjtBQUFBLEVBQ0EsY0FBZ0I7QUFBQSxJQUNkLDZCQUE2QjtBQUFBLElBQzdCLFVBQVk7QUFBQSxFQUNkO0FBQ0Y7OztBRGhDQSxJQUFNLEVBQUUsZUFBZSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsRUFBRSxJQUFJO0FBS3BELHlCQUF5QixpQkFBaUIsWUFBWTtBQUt0RCxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFNBQVMsS0FBSyxNQUFrQjtBQUM5RCxTQUFPO0FBQUE7QUFBQSxJQUVOLE9BQU87QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxJQUNaO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUixTQUFTO0FBQUEsUUFDUixlQUFlO0FBQUEsTUFDaEIsQ0FBQztBQUFBLE1BQ0QsU0FBUztBQUFBLE1BQ1QsY0FBYztBQUFBLElBQ2Y7QUFBQTtBQUFBLElBRUEsY0FBYztBQUFBO0FBQUE7QUFBQSxNQUdiLFNBQVMsQ0FBQztBQUFBLElBQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbUJBLFFBQVE7QUFBQSxNQUNQLFNBQVM7QUFBQTtBQUFBLFFBRVIsaUJBQWlCO0FBQUEsTUFDbEI7QUFBQSxJQUNEO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUixTQUFTO0FBQUE7QUFBQSxRQUVSLGlCQUFpQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFDRCxDQUFDO0FBU0QsU0FBUyx5QkFBeUJBLGtCQUF5QkMsZUFBc0I7QUFDaEYsTUFBSSxNQUFNO0FBR1YsUUFBTSxnQkFBZ0IsT0FBTyxLQUFLRCxnQkFBZSxFQUFFLE9BQU8sQ0FBQyxRQUFRQyxjQUFhLEdBQUcsQ0FBQztBQUdwRixRQUFNLFVBQVUsT0FBTyxLQUFLQSxhQUFZLEVBQUUsT0FBTyxDQUFDLFVBQVUsUUFBUSxLQUFLLEtBQUssQ0FBQztBQUkvRSxRQUFNLHNCQUFzQixRQUFRLEtBQUssSUFBSSxDQUFDO0FBRTlDLE1BQUksUUFBUSxTQUFTLEdBQUc7QUFDdkIsVUFBTSxJQUFJLE1BQU0sR0FBRztBQUFBLEVBQ3BCO0FBSUEsUUFBTTtBQUFBLCtCQUN3QixjQUFjLEtBQUssSUFBSSxDQUFDO0FBQUE7QUFBQTtBQUt0RCxNQUFJLGNBQWMsU0FBUyxHQUFHO0FBQzdCLFVBQU0sSUFBSSxNQUFNLEdBQUc7QUFBQSxFQUNwQjtBQUNEOyIsCiAgIm5hbWVzIjogWyJkZXZEZXBlbmRlbmNpZXMiLCAiZGVwZW5kZW5jaWVzIl0KfQo=
