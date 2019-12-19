import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "hv-styleguide",
  plugins: [
    sass({
      injectGlobalPaths: []
    })
  ],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: "@henris/components",
      proxiesFile: "../components-react/src/components.ts"
    }),
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ]
};
