import { useState } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import CurateEvent from "./pages/CurateEvent";
import Events from "./pages/Events";
import ExperienceDetail from "./pages/ExperienceDetail";
import Experiences from "./pages/Experiences";
import Gallery from "./pages/Gallery";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Stay from "./pages/Stay";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/experiences/:id" element={<ExperienceDetail />} />
            <Route path="/stay" element={<Stay />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/curate-event" element={<CurateEvent />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
