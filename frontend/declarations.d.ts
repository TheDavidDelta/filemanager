declare module "*.svg" {
    import { VFC, SVGProps } from "react";
    const SVG: VFC<SVGProps<SVGSVGElement>>;
    export default SVG;
}
