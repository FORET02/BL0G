import siteConfig from '@config/site';

export async function GET() {
  const baseUrl = import.meta.env.BASE_URL ?? '/';
  const normalizedBaseUrl =
    baseUrl === '/' ? '' : baseUrl.replace(/\/$/, '');

  const robots = `User-agent: *
Allow: /

Sitemap: ${siteConfig.siteUrl}${normalizedBaseUrl}/sitemap-index.xml`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}