import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import RootLayout from "./Layout/Rootlayout";
import Upload from "./Pages/Upload";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout><Home /></RootLayout>} />
        <Route path="/upload" element={<RootLayout><Upload /></RootLayout>} />
      </Routes>
    </Router>
  );
}

export default App;