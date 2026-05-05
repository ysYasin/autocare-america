import { createServer } from 'node:http';
import { createGzip } from 'node:zlib';
import { createReadStream, existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const PORT = process.env.PORT || 3002;
const ROOT = './out';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

const COMPRESSIBLE = new Set(['.html', '.css', '.js', '.json', '.svg', '.xml', '.txt']);

createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath.endsWith('/')) urlPath += 'index.html';
  if (!extname(urlPath)) urlPath += '/index.html';

  const filePath = join(ROOT, urlPath);
  if (!existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    return;
  }

  const ext = extname(filePath).toLowerCase();
  const contentType = MIME[ext] ?? 'application/octet-stream';
  const acceptsGzip = (req.headers['accept-encoding'] ?? '').includes('gzip');
  const shouldCompress = COMPRESSIBLE.has(ext) && acceptsGzip;

  const headers = {
    'Content-Type': contentType,
    'Cache-Control': 'public, max-age=0',
    'X-Content-Type-Options': 'nosniff',
  };

  if (shouldCompress) {
    headers['Content-Encoding'] = 'gzip';
    headers['Vary'] = 'Accept-Encoding';
    res.writeHead(200, headers);
    createReadStream(filePath).pipe(createGzip({ level: 6 })).pipe(res);
  } else {
    res.writeHead(200, headers);
    createReadStream(filePath).pipe(res);
  }
}).listen(PORT, () => {
  console.log(`\n  Static server with gzip compression`);
  console.log(`  http://localhost:${PORT}\n`);
});
