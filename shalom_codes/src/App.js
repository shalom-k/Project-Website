import './App.css';
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorBoundary from "./MainPages/ErrorBoundary"
import NotFound from './MainPages/NotFound';
import { CssBaseline } from '@mui/material';
import MainLayout from './MainPages/MainLayout';
import AboutMeMainLayout from './AboutMe/AboutMeMainLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Navigate to="/about-me" replace />} />
      <Route
        path="about-me"
        element={
          <ErrorBoundary>
              <AboutMeMainLayout/>
          </ErrorBoundary>
        }
      />
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
          <CssBaseline />
          <RouterProvider router={router} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
