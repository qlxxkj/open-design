/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // 静态导出必需的配置
  images: {
    unoptimized: true, // 禁用 Image 优化，因为静态导出不支持
  },
  
  // 如果应用使用了 trailing slash
  trailingSlash: true,
  
  // 如果需要 basePath（根据你的实际情况）
  // basePath: '/your-base-path',
  
  // 如果需要静态资源前缀
  // assetPrefix: '/your-asset-prefix',
}

module.exports = nextConfig
