import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import CursorGlow from "./components/CursorGlow";
import ScrollManager from "./components/ScrollManager";
import Home from "./pages/Home";
import CaseStudyPage from "./pages/CaseStudyPage";
import PrintableCV from "./pages/PrintableCV";
import { TechInfoProvider } from "./context/TechInfoContext";

function SiteChrome() {
  const { pathname } = useLocation();
  const isPrintable = pathname.startsWith("/cv");

  return (
    <>
      {!isPrintable && <CursorGlow />}
      {!isPrintable && <Nav />}
      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case/:slug" element={<CaseStudyPage />} />
          <Route path="/cv" element={<PrintableCV />} />
        </Routes>
      </main>
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
