/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['th.bing.com','cdn-icons-png.flaticon.com',"i.ebayimg.com"],
      },
      theme: {
        extend: {
          animation: {
            'spin-slow': 'spin 3s linear forward',
          }
        }
      }
    
};

export default nextConfig;
