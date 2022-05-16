import { useClasser } from "@code-hike/classer";
import * as React from "react";

import { SandpackThemeProvider } from "../contexts/themeContext";
import { useSandpack } from "../hooks/useSandpack";
import type { SandpackThemeProp } from "../types";

export interface SandpackLayoutProps extends React.HtmlHTMLAttributes<unknown> {
  theme?: SandpackThemeProp;
}

/**
 * @category Theme
 */
export const SandpackLayout: React.FC<
  React.PropsWithChildren<SandpackLayoutProps>
> = ({ children, theme, ...props }) => {
  const { sandpack } = useSandpack();
  const c = useClasser("sp");

  return (
    <SandpackThemeProvider theme={theme}>
      <div ref={sandpack.lazyAnchorRef} className={c("layout")} {...props}>
        {children}
      </div>
    </SandpackThemeProvider>
  );
};
