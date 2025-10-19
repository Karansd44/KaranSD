/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile react-chatbot-kit to work with Next.js
  transpilePackages: ['react-chatbot-kit'],
  webpack: (config) => {
    // Add a rule to handle CSS files for react-chatbot-kit
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: /node_modules\/react-chatbot-kit/,
    });

    return config;
  },
};

export default nextConfig;
