import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const serverDir = resolve("dist", "server");
const serverEntry = resolve(serverDir, "index.js");

const workerSource = `const cacheableExtensions = /\\.(?:css|js|mjs|png|jpe?g|gif|webp|svg|ico|gltf|glb|bin|txt|woff2?)$/i;

function withHeaders(response, requestUrl) {
  const headers = new Headers(response.headers);
  headers.set("X-Content-Type-Options", "nosniff");

  if (cacheableExtensions.test(new URL(requestUrl).pathname)) {
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function serveAsset(request, env) {
  const response = await env.ASSETS.fetch(request);

  if (response.status !== 404) {
    return withHeaders(response, request.url);
  }

  const acceptsHtml = request.headers.get("accept")?.includes("text/html");
  if (request.method === "GET" && acceptsHtml) {
    const indexUrl = new URL("/index.html", request.url);
    return withHeaders(await env.ASSETS.fetch(new Request(indexUrl, request)), indexUrl.href);
  }

  return response;
}

export default {
  fetch(request, env) {
    return serveAsset(request, env);
  },
};
`;

await mkdir(serverDir, { recursive: true });
await writeFile(serverEntry, workerSource);
