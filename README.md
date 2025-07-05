# UniversalAI ✨
### *Cultivate your Creator - Make Magic Real Again*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Solana](https://img.shields.io/badge/Solana-9945FF?logo=solana&logoColor=white)](https://solana.com/)

> **🌟 A next-generation creator platform that empowers digital artists, content creators, and innovators with AI-powered tools, blockchain integration, and comprehensive asset management.**

UniversalAI is a comprehensive creator ecosystem that bridges the gap between creativity and technology. Our platform provides creators with cutting-edge AI agents, blockchain-powered asset protection, monetization tools, and a complete suite of creator-focused features.

---

## ✨ Key Features

**🤖 AI-Powered Creation**
- **AI Agent Marketplace**: Deploy and customize intelligent agents for content creation and automation
- **WZRD Studio**: Advanced creative tools with AI assistance for content generation
- **Smart Workflows**: Automate repetitive tasks and optimize creative processes

**🔐 Blockchain & Security**
- **Solana Integration**: Fast, low-cost transactions via Crossmint wallet infrastructure
- **IP Protection**: Blockchain-backed intellectual property rights management
- **Secure Asset Storage**: Decentralized storage for digital assets and NFTs

**💰 Creator Economy**
- **Treasury Management**: Integrated financial tools for creator revenue
- **Monetization Tools**: Multiple revenue streams and payment processing
- **Analytics Dashboard**: Comprehensive insights into creator performance

**🌐 Distribution & Growth**
- **Multi-Platform Distribution**: Seamless content sharing across platforms
- **Social Media Management**: Unified dashboard for social media automation
- **Community Building**: Tools for audience engagement and growth

**🎨 Creative Tools**
- **Asset Gallery**: Organize and manage all your digital creations
- **Collection Management**: NFT and digital asset portfolio tools
- **Rights Management**: Control and license your creative works

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern component-based UI framework
- **TypeScript** - Type-safe development environment
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **shadcn/ui** - Beautiful, accessible component library
- **Framer Motion** - Powerful animation and gesture library

### Blockchain & Web3
- **Solana** - High-performance blockchain platform
- **Crossmint SDK** - Seamless wallet and authentication integration
- **Web3.js** - Ethereum and multi-chain blockchain interactions

### State & Data Management
- **TanStack Query** - Powerful data synchronization for React
- **React Router** - Declarative routing for single-page applications
- **Context API** - Global state management

### 3D & Graphics
- **Three.js** - 3D graphics library for immersive experiences
- **React Three Fiber** - React renderer for Three.js

### Development Tools
- **ESLint** - Code linting and quality assurance
- **TypeScript** - Static type checking
- **Vite** - Module bundling and hot module replacement

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v8.0.0 or higher) - Comes with Node.js
- **Git** - [Download here](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env.local
   
   # Edit the file with your configuration
   nano .env.local
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

### Alternative Installation Methods

**Using Yarn:**
```bash
yarn install
yarn dev
```

**Using Docker:**
```bash
docker build -t universalai .
docker run -p 5173:5173 universalai
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Crossmint Configuration (Required for blockchain features)
VITE_CROSSMINT_CLIENT_KEY=your_crossmint_client_key_here

# Supabase Configuration (Required for backend services)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: Development/Production Mode
NODE_ENV=development
```

### Crossmint Setup

1. Visit [Crossmint Developer Console](https://crossmint.com/console)
2. Create a new project
3. Copy your client key (starts with `ck_`)
4. Add the key to your `.env.local` file

### Supabase Setup (Optional)

For full blockchain functionality:

1. Create a [Supabase](https://supabase.com/) project
2. Deploy the provided serverless functions:
   ```bash
   supabase functions deploy create-wallet
   supabase functions deploy transfer-sol
   ```
3. Add your Supabase credentials to `.env.local`

---

## 🎯 Usage

### Basic Usage

After starting the development server, you can:

1. **Explore the Landing Page** - Visit `/` to see the main landing page
2. **Access Creator Tools** - Navigate to `/home` for the main dashboard
3. **Create AI Agents** - Use `/create-agent` to build custom AI assistants
4. **Manage Assets** - Visit `/gallery` to organize your digital assets
5. **Treasury Management** - Access `/treasury` for financial tools

### Code Examples

**Creating a Custom Component:**
```tsx
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CustomCreatorTool() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Creator Tool</h2>
      <Button onClick={() => console.log("Tool activated!")}>
        Activate Tool
      </Button>
    </motion.div>
  );
}
```

**Using the Wallet Context:**
```tsx
import { useWallet } from "@/context/WalletContext";

export function WalletDisplay() {
  const { walletAddress, connectWallet, disconnect } = useWallet();
  
  return (
    <div>
      {walletAddress ? (
        <div>
          <p>Connected: {walletAddress}</p>
          <button onClick={disconnect}>Disconnect</button>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}
```

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Testing Philosophy

Our testing strategy focuses on:
- **Component Testing**: Ensuring UI components render correctly
- **Integration Testing**: Verifying feature workflows
- **Blockchain Testing**: Mocking wallet interactions and transactions
- **Accessibility Testing**: Ensuring WCAG compliance

---

## 📦 Building for Production

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deployment

**Deploy to Lovable (Recommended):**
1. Visit [Lovable](https://lovable.dev/projects/b8353fa8-16e6-4fe2-9f52-00d0a7a9630c)
2. Click "Share" → "Publish"

**Deploy to Netlify:**
```bash
# Build the project
npm run build

# Deploy to Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Deploy to Vercel:**
```bash
npm install -g vercel
vercel --prod
```

---

## 🤝 Contributing

We welcome contributions from creators, developers, and innovators! Here's how you can get involved:

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/universalai.git
   cd universalai
   ```
3. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-new-feature
   ```
4. **Install dependencies:**
   ```bash
   npm install
   ```
5. **Start development server:**
   ```bash
   npm run dev
   ```

### Contribution Guidelines

- **Code Style**: Follow the existing TypeScript and React patterns
- **Components**: Use the established shadcn/ui component library
- **Styling**: Utilize Tailwind CSS classes consistently
- **Testing**: Write tests for new features and components
- **Documentation**: Update relevant documentation

### Pull Request Process

1. Ensure your code follows our linting rules: `npm run lint`
2. Add tests for new functionality
3. Update documentation as needed
4. Create a detailed pull request description
5. Link any relevant issues

### Code of Conduct

We are committed to fostering an inclusive and welcoming community. Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

---

## 🐛 Troubleshooting

### Common Issues

**Issue: "Cannot find module" errors**
```bash
# Solution: Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: Vite build fails**
```bash
# Solution: Clear Vite cache
npm run dev -- --force
```

**Issue: Crossmint authentication not working**
- Verify your `VITE_CROSSMINT_CLIENT_KEY` is correct
- Check that the key includes "development", "staging", or "production"
- Ensure the key starts with "ck_"

**Issue: Three.js performance issues**
- Check if hardware acceleration is enabled in your browser
- Try reducing the complexity of 3D scenes
- Update your graphics drivers

**Issue: Wallet connection fails**
- Clear browser cache and cookies
- Try in an incognito/private browsing window
- Ensure popup blockers are disabled

### Getting Help

- **GitHub Issues**: [Create an issue](https://github.com/YOUR_REPO/issues)
- **Documentation**: Check our [Wiki](https://github.com/YOUR_REPO/wiki)
- **Community**: Join our [Discord server](https://discord.gg/universalai)

---

## 🗺️ Roadmap

### Q1 2025
- [ ] Enhanced AI agent capabilities
- [ ] Advanced analytics dashboard
- [ ] Mobile application (React Native)
- [ ] Multi-chain blockchain support

### Q2 2025
- [ ] Creator monetization marketplace
- [ ] Advanced rights management tools
- [ ] Social media automation features
- [ ] Community features and forums

### Q3 2025
- [ ] Enterprise creator tools
- [ ] API for third-party integrations
- [ ] Advanced 3D content creation tools
- [ ] VR/AR content support

### Long-term Vision
- Global creator ecosystem with millions of users
- Industry-standard tools for digital rights management
- Seamless cross-platform content distribution
- AI-powered content optimization and insights

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 UniversalAI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

### Inspirations & Credits
- **Solana Foundation** - For providing robust blockchain infrastructure
- **Crossmint Team** - For seamless wallet integration solutions
- **Vercel & Lovable** - For excellent deployment platforms
- **shadcn** - For the beautiful UI component library
- **Three.js Community** - For amazing 3D graphics capabilities

### Third-Party Resources
- **Fonts**: Neue Machina, Inter (Google Fonts)
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion animation library
- **3D Models**: Various Creative Commons assets

### Special Thanks
- Our amazing community of creators and developers
- Beta testers who provided invaluable feedback
- Open source contributors who made this project possible

---

## 📞 Contact & Support

### Links
- **🌐 Website**: [UniversalAI Official Site](https://universalai.dev)
- **📱 App**: [Lovable Project](https://lovable.dev/projects/b8353fa8-16e6-4fe2-9f52-00d0a7a9630c)
- **📚 Documentation**: [Full Documentation](https://docs.universalai.dev)
- **💬 Community**: [Join our Discord](https://discord.gg/universalai)
- **🐦 Social**: [@UniversalAI](https://twitter.com/universalai)

### Support
- **📧 Email**: support@universalai.dev
- **🆘 Issues**: [GitHub Issues](https://github.com/YOUR_REPO/issues)
- **💡 Feature Requests**: [GitHub Discussions](https://github.com/YOUR_REPO/discussions)

---

<div align="center">

**Made with ❤️ by the UniversalAI Team**

*Cultivate your Creator - Make Magic Real Again* ✨

[🚀 Get Started](#-quick-start) • [📖 Documentation](https://docs.universalai.dev) • [🤝 Contributing](#-contributing) • [🐛 Report Bug](https://github.com/YOUR_REPO/issues)

</div>
