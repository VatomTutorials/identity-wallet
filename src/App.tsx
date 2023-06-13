import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import WalletPage from './pages/Wallet';
import IdentityTestPage from './pages/IdentityTest';
import IdentityWalletPage from './pages/IdentityWallet';
//
function App() {
  return (
    <Router basename={"/" }>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/wallet" element={<WalletPage />}></Route>
          <Route path="/identity-test" element={<IdentityTestPage />}></Route>
          <Route path="/identity-wallet" element={<IdentityWalletPage />}></Route>
        </Routes>
    </Router>
  );
}
//
export default App;