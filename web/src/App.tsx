import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import CursorGlow from "./components/CursorGlow";
import ScrollManager from "./components/ScrollManager";
import BackToTop from "./components/BackToTop";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import CaseStudyPage from "./pages/CaseStudyPage";
import PrintableCV from "./pages/PrintableCV";
import { TechInfoProvider } from "./context/TechInfoContext";

function SiteChrome() {
  const location = useLocation();
  const isPrintable = location.pathname.startsWith("/cv");

  return (
    <>
      {!isPrintable && <CursorGlow />}
      {!isPrintable && <Nav />}
      <main className="relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/case/:slug"
              element={
                <PageTransition>
                  <CaseStudyPage />
                </PageTransition>
              }
            />
            <Route path="/cv" element={<PrintableCV />} />
          </Routes>
        </AnimatePresence>
      </main>
      {!isPrintable && <BackToTop />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <TechInfoProvider>
        <ScrollManager />
        <SiteChrome />
      </TechInfoProvider>
    </BrowserRouter>
  );
}

export default App;
