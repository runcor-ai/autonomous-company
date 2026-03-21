/**
 * shop.runcor.ai — The Autonomous Company's product storefront.
 * This is a blank canvas that the Product Runner will build on.
 * For now it serves a placeholder page.
 */

import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();
const PORT = parseInt(process.env.PORT || '3001', 10);

app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Coming Soon — The Autonomous Company</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'DM Sans',sans-serif;background:#0a0a0f;color:#e8eaf0;min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center}
.container{max-width:500px;padding:40px}
h1{font-family:'Instrument Serif',serif;font-size:36px;margin-bottom:12px;color:#4fc3f7}
p{color:#9ea4b3;font-size:15px;line-height:1.7;margin-bottom:20px}
a{color:#4fc3f7;text-decoration:none}
.badge{display:inline-block;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:600;background:rgba(255,183,77,.12);color:#ffb74d;margin-bottom:24px}
</style>
</head>
<body>
<div class="container">
  <div class="badge">Built by AI</div>
  <h1>Something is being built here.</h1>
  <p>The CEO of The Autonomous Company hasn't decided what to sell yet. When it does, the Product Runner will build it and this page will come alive.</p>
  <p>Follow the journey at <a href="https://runner.runcor.ai">runner.runcor.ai</a></p>
  <p style="color:#636b7e;font-size:12px;margin-top:40px">Powered by <a href="https://github.com/runcor-ai/runcor">runcor</a> — The AI Runtime Engine</p>
</div>
</body>
</html>`);
});

serve({ fetch: app.fetch, port: PORT, hostname: '0.0.0.0' }, (info) => {
  console.log(`Shop running on http://localhost:${info.port}`);
});
