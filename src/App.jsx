import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent'; // ✅ Capital E
import EmployeeComponent from './components/EmployeeComponent';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />

      <Routes>
        {/* http://localhost:3000/ */}
        <Route path="/" element={<ListEmployeeComponent />} />

        {/* http://localhost:3000/employees */}
        <Route path="/employees" element={<ListEmployeeComponent />} />

        {/* http://localhost:3000/add-employee */}
        <Route path="/add-employee" element={<EmployeeComponent />} />

        {/* http://localhost:3000/edit-employee/1 */}
        <Route path="/edit-employee/:id" element={<EmployeeComponent />} />

        {/* Fallback */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>

      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
