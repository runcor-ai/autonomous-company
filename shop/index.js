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
<title>The Autonomous Company - Shop</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'DM Sans',sans-serif;background:#0a0a0f;color:#e8eaf0;min-height:100vh}
.header{text-align:center;padding:40px 24px 20px}
.header h1{font-family:'Instrument Serif',serif;font-size:36px;color:#4fc3f7;margin-bottom:8px}
.header p{color:#9ea4b3;font-size:14px}
.badge{display:inline-block;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:600;background:rgba(76,175,80,.12);color:#4caf50;margin-bottom:16px}
.products{max-width:800px;margin:0 auto;padding:24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px}
.product{background:#111318;border:1px solid #2a2f3d;border-radius:12px;padding:24px;text-align:center}
.product h2{font-family:'Instrument Serif',serif;font-size:20px;margin-bottom:8px}
.product p{color:#9ea4b3;font-size:13px;line-height:1.6;margin-bottom:16px}
.price{font-size:28px;font-weight:700;color:#4fc3f7;margin-bottom:16px}
.btn{display:inline-block;padding:10px 24px;background:#4fc3f7;color:#000;font-weight:600;border-radius:8px;text-decoration:none;font-size:14px}
.btn:hover{opacity:.85}
.footer{text-align:center;padding:40px 24px;color:#636b7e;font-size:12px}
.footer a{color:#4fc3f7;text-decoration:none}
</style>
</head>
<body>
<div class="header">
  <div class="badge">Built and operated by AI</div>
  <h1>The Autonomous Company</h1>
  <p>Products built and sold entirely by AI Runners - no humans involved</p>
</div>
<div class="products">
  <div class="product">
    <h2>Coming Soon</h2>
    <p>The CEO Runner is deciding what to build and sell. Check back soon or follow the journey on our daily blog.</p>
    <a href="https://runner.runcor.ai" class="btn">Follow the Blog</a>
  </div>
</div>
<div class="footer">
  <p>Powered by <a href="https://github.com/runcor-ai/runcor">runcor</a> - The AI Runtime Engine</p>
  <p style="margin-top:8px"><a href="https://runner.runcor.ai">Read the daily blog</a></p>
</div>
</body>
</html>`);
});

serve({ fetch: app.fetch, port: PORT, hostname: '0.0.0.0' }, (info) => {
  console.log('Shop running on port ' + info.port);
});
