import React, { Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load components
const Projects = React.lazy(() => import('./components/Projects'));
const Details = React.lazy(() => import('./components/Details'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 dark:border-blue-400"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-200 bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Hero />
          <Suspense fallback={<LoadingSpinner />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Details />
          </Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;