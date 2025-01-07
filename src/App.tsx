import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SmartContracts from "./pages/services/SmartContracts";
import IntellectualProperty from "./pages/services/IntellectualProperty";
import Compliance from "./pages/services/Compliance";
import RiskManagement from "./pages/services/RiskManagement";
import DefiResolution from "./pages/services/DefiResolution";
import NftBlockchain from "./pages/services/NftBlockchain";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/smart-contracts" element={<SmartContracts />} />
          <Route path="/services/ip" element={<IntellectualProperty />} />
          <Route path="/services/compliance" element={<Compliance />} />
          <Route path="/services/risk" element={<RiskManagement />} />
          <Route path="/services/defi" element={<DefiResolution />} />
          <Route path="/services/nft" element={<NftBlockchain />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;