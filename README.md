# Antd Admin Dashboard


[![React](https://img.shields.io/badge/React-19.1.0-61dafb)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)](https://www.typescriptlang.org/)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-5.26.1-1890ff)](https://ant.design/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-747bff)](https://vitejs.dev/)

A modern, responsive admin dashboard built with React 19, TypeScript, Ant Design, and Vite. Perfect for fintech applications, payment gateways, and administrative systems.

![Antd Admin Dashboard](https://via.placeholder.com/800x400?text=Antd+Admin+Dashboard)

## ✨ Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite for blazing-fast development
- **Beautiful UI**: Polished interface based on Ant Design components
- **Responsive Layout**: Works flawlessly across desktop, tablet, and mobile devices
- **Lazy Loading**: Optimized performance with code splitting and suspense
- **Hierarchical Navigation**: Clean sidebar with multi-level menu support
- **Authentication Ready**: Includes secure sign-in page with validation

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/amritach222/antd-admin.git
cd antd-admin

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`.

## 🧰 Project Structure

```
antd-admin/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable components
│   │   ├── Footer/     
│   │   ├── SideBar/    
│   │   ├── Suspense/   # Loading components
│   │   └── TopBar/     
│   ├── context/        # React contexts
│   ├── hooks/          # Custom React hooks
│   ├── layouts/        # Layout components
│   ├── pages/          # Page components
│   ├── routes/         # Routing configuration
│   ├── styles/         # Global styles
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Entry point
├── .eslintrc.js        # ESLint configuration
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 📱 Screenshots

<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="https://via.placeholder.com/400x300?text=Dashboard" width="400" alt="Dashboard" />
  <img src="https://via.placeholder.com/400x300?text=Login+Page" width="400" alt="Login Page" />
  <img src="https://via.placeholder.com/400x300?text=Mobile+View" width="400" alt="Mobile View" />
  <img src="https://via.placeholder.com/400x300?text=Settings" width="400" alt="Settings" />
</div>

## 💻 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build locally

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_URL=your_api_url
VITE_APP_VERSION=$npm_package_version
```

### Theming

The project uses Ant Design's theme customization. You can adjust the primary color and other variables in `src/App.tsx`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Ant Design](https://ant.design/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [TanStack Query](https://tanstack.com/query/)
