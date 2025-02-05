import "./index.css";
import "primeicons/primeicons.css";

import { BrowserRouter, Route, Routes } from "react-router";
import { PrimeReactProvider } from "primereact/api";

import { Landing } from "./pages/landing/landing";
import { Login } from "./pages/auth/login";
import { Signup } from "./pages/auth/signup";
import { Search } from "./pages/search/search";
import { Product } from "./pages/product/product";
import { NotFound } from "./pages/notFound/notFound";
import { Profile } from "./pages/profile/profile";
import { Navbar } from "./components/navbar";

import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export const App = () => {
  const config = {
    ripple: true,
  };

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden remove-scroll-bar bg-primary-background">
      <Provider store={store}>  
        <PersistGate loading={null} persistor={persistor}>   
          <PrimeReactProvider value={config}>
            <BrowserRouter>
              <span className="block m-6">
                <Navbar />
              </span>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/users/login" element={<Login />} />
                <Route path="/users/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<Search />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </PrimeReactProvider>
        </PersistGate> 
      </Provider>
    </main>
  );
};

export default App;
