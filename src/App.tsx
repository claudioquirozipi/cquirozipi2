import React from "react";
import Routes from "./routes";

import ProviderUseCase from "./useCase";

const App: React.FC = () => (
  <ProviderUseCase>
    <Routes />
  </ProviderUseCase>
);

export default App;
