import React from 'react'
import ReactDOM from 'react-dom/client'
 import './index.css'
import { Provider } from 'react-redux'
import {store, persistor} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import { RouterProvider } from 'react-router-dom'
import router from "./router"
import { Toaster } from 'react-hot-toast'
import OnboardingGate from "./OnboardingGate"
import { useAuthValidation } from './hooks/useAuthValidation'
import { registerServiceWorker } from './utils/registerServiceWorker'

registerServiceWorker();

const AppWithAuthValidation = () => {
  useAuthValidation();
  return <RouterProvider router={router} />;
};

const rootElement = document.getElementById("root");
const existingRoot = window.__J4TURF_REACT_ROOT__;
const root = existingRoot || ReactDOM.createRoot(rootElement);
if (!existingRoot) {
  window.__J4TURF_REACT_ROOT__ = root;
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <OnboardingGate>
        <PersistGate loading={<div className="min-h-screen bg-[#09b458]" />} persistor={persistor}>
          <AppWithAuthValidation />
          <Toaster position="bottom-center" duration={500} />
        </PersistGate>
      </OnboardingGate>
    </Provider>
  </React.StrictMode>
);
