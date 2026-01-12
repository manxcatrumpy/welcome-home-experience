import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Concept from "./pages/Concept";
import Dining from "./pages/Dining";
import Space from "./pages/Space";
import Life from "./pages/Life";
import Shop from "./pages/Shop";
import Access from "./pages/Access";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/welcome-home-experience">
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/concept" element={<Concept />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/space" element={<Space />} />
            <Route path="/life" element={<Life />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/access" element={<Access />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
