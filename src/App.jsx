// ./src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const DashboardPage = lazy(() => import("./pages/DashboardPage/DashboardPage"));

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/dashboard"> 
        <ErrorBoundary>
          <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

function NotFound() {
  console.error("Page not found!");
  return <h1 className="text-center mt-5">404 - Not Found</h1>;
}

export default App;
