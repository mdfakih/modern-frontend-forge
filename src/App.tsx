import { useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { CustomCursor } from './components/CustomCursor';
import { initSmoothScroll } from './lib/animations';
import { Header } from './components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize smooth scroll
    initSmoothScroll();
  }, []);

  return (
    <ThemeProvider
      defaultTheme="system"
      storageKey="portfolio-theme"
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <CustomCursor />
          <Header />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <BrowserRouter>
                <Routes>
                  <Route
                    path="/"
                    element={<Index />}
                  />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route
                    path="*"
                    element={<NotFound />}
                  />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
