import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Navbar from "@/components/Navbar";
import MetaStrip from "@/components/MetaStrip";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SystemStatus from "@/components/SystemStatus";

const queryClient = new QueryClient();

function Portfolio() {
  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground flex flex-col relative" id="home">
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-50 z-0 mix-blend-screen" />
      <div className="absolute inset-0 blueprint-grid-lg pointer-events-none opacity-30 z-0 mix-blend-screen" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <MetaStrip />
        <main className="flex-1">
          <Hero />
          <About />
          <Work />
          <Skills />
          <Credentials />
          <Contact />
        </main>
        <Footer />
        <SystemStatus />
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
