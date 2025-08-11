
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Index from "./pages/Index";
import Equipe from "./pages/Equipe";
import SMF from "./pages/SMF";
import Projetos from "./pages/Projetos";
import LMFCast from "./pages/LMFCast";
import LMFJournal from "./pages/LMFJournal";
import Competicoes from "./pages/Competicoes";
import Alumni from "./pages/Alumni";


import { useEasterEgg } from "./hooks/useEasterEgg";
import Starwalker from "./components/Starwalker";

// oiiiiiiiiiieeeee
const queryClient = new QueryClient();

const App = () => {
  
  const { activated, deactivate } = useEasterEgg('star');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/site-lmf/">
          {/* O componente do Starwalker é renderizado aqui quando ativado */}
          <Starwalker isActive={activated} onComplete={deactivate} />
          
          {/* Definição das rotas */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/smf" element={<SMF />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/lmf-cast" element={<LMFCast />} />
            <Route path="/lmf-journal" element={<LMFJournal />} />
            <Route path="/competicoes" element={<Competicoes />} />
            <Route path="/alumni" element={<Alumni />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;