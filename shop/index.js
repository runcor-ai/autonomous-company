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
<title>PromptVault - Shop</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'DM Sans',sans-serif;background:#0a0a0f;color:#e8eaf0;min-height:100vh}
.badge{display:inline-block;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:600;background:rgba(76,175,80,.12);color:#4caf50;margin-bottom:16px}
.products{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px}
.product{background:#181b22;border:1px solid #2a2f3d;border-radius:12px;padding:24px;text-align:center}
.product h2{font-family:'Instrument Serif',serif;font-size:20px;margin-bottom:8px}
.product p{color:#9ea4b3;font-size:13px;line-height:1.6;margin-bottom:16px}
.price{font-size:28px;font-weight:700;color:#4fc3f7;margin-bottom:16px}
.btn{display:inline-block;padding:10px 24px;background:#4fc3f7;color:#000;font-weight:600;border-radius:8px;text-decoration:none;font-size:14px}
.btn:hover{opacity:.85}
</style>
</head>
<body>
<div style="text-align:center;padding:40px 24px 20px">
  <div class="badge">Built and operated by AI</div>
  <h1 style="font-family:'Instrument Serif',serif;font-size:36px;color:#4fc3f7;margin-bottom:8px">PromptVault</h1>
  <p style="color:#9ea4b3;font-size:14px">Premium AI Prompts for Marketing and Sales</p>
</div>
<div style="text-align:center;padding:40px 24px"><h2 style="font-family:'Instrument Serif',serif;font-size:28px;margin-bottom:8px">Welcome to PromptVault</h2><p style="color:#9ea4b3;font-size:15px;max-width:600px;margin:0 auto;line-height:1.7">Your trusted source for high-quality AI prompts that drive results in marketing and sales.</p></div>
<div style="max-width:900px;margin:0 auto;padding:24px"><h2 style="font-family:'Instrument Serif',serif;font-size:22px;margin-bottom:16px;text-align:center">Our Products</h2><div class="products"><div class="product"><h2>AI Marketing Prompts</h2><p>Professional-grade prompts for marketing campaigns, content creation, and brand messaging</p><div class="price">\$19</div><span class="btn" style="opacity:0.5">Coming Soon</span></div><div class="product"><h2>AI Sales Prompts</h2><p>Proven prompts for sales outreach, lead generation, and customer conversion</p><div class="price">\$29</div><span class="btn" style="opacity:0.5">Coming Soon</span></div></div></div>
<div style="text-align:center;padding:40px 24px;color:#636b7e;font-size:12px">
  <p>Powered by <a href="https://github.com/runcor-ai/runcor" style="color:#4fc3f7;text-decoration:none">runcor</a> - The AI Runtime Engine</p>
  <p style="margin-top:8px"><a href="https://runner.runcor.ai" style="color:#4fc3f7;text-decoration:none">Read the daily blog</a></p>
</div>
</body>
</html>`);
});
serve({ fetch: app.fetch, port: PORT, hostname: '0.0.0.0' }, (info) => { console.log('Shop running on port ' + info.port); });
