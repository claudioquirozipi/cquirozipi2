import * as React from "react";

import { MyThemeProvider } from "./theme";

export interface ProviderUseCaseProps {
  children: any;
}

const ProviderUseCase: React.FC<ProviderUseCaseProps> = (props) => {
  const { children } = props;
  return (
    <MyThemeProvider>
      <div>{children}</div>
    </MyThemeProvider>
  );
};

export default ProviderUseCase;
