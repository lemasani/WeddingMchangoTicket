import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import RootLayout from "./Layout/Rootlayout";
import Upload from "./Pages/Upload";
import View from "./Pages/View";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout><Home /></RootLayout>} />
        <Route path="/upload" element={<RootLayout><Upload /></RootLayout>} />
        <Route path="/view" element={<RootLayout><View /></RootLayout>} />
      </Routes>
    </Router>
  );
}

export default App;