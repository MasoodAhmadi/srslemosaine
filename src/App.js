import './App.css';
import HomePage from './components/home';
import { useRoutes } from "react-router-dom";
import { AuthProvider } from './components/contexts/authContext/authContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard';
import NavBar from './components/navbars';
import ProtectedRoute from './components/protectRoute';

function App() {
  const routesArray = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
  ];

  const routesElement = useRoutes(routesArray);

  return (
    <AuthProvider>
      <NavBar />
      <div className="App">
        <div className="w-full h-screen flex flex-col">{routesElement}</div>
      </div>
    </AuthProvider>
  );
}

export default App;
