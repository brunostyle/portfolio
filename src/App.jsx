import { AnimatePresence } from "framer-motion";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { About, AppLayout, Category, Courses, Education, Home, Item, Portfolio, Services, Skills, Technique } from "./layout";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />}>
            <Route index element={<Technique />} />
            <Route path="technique" element={<Technique />} />
            <Route path="courses" element={<Courses />} />
          </Route>
          <Route path="skills" element={<Skills />}>
          <Route index element={<Category />} />
          <Route path=":category" element={<Category />} />
        </Route>
        <Route path="portfolio" element={<Portfolio />}>
          <Route path=":id" element={<Item />} />
        </Route>
      <Route path="services" element={<Services />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;