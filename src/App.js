import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard.jsx";
/*import QRScanner from "./pages/qrscanner.jsx";*/
import AccessLogs from "./pages/accesslogs.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/*<Route path="/qrscanner" element={<QRScanner />} />*/}
        <Route path="/accesslogs" element={<AccessLogs />} />
      </Routes>
    </Router>
  );
}

export default App;
