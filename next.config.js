/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,

  compiler: {
    styledComponents: true | {
      displayName: true,
      ssr: true,
      preprocess: true
    },
  },
}
// compiler 부분 styled-components 리렌더링 오류 해결 방법
module.exports = nextConfig