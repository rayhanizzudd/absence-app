// declarations.d.ts

declare module "*.png" {
  const content: import("react-native").ImageSourcePropType;
  export default content;
}

declare module "*.jpg" {
  const content: import("react-native").ImageSourcePropType;
  export default content;
}

declare module "*.jpeg" {
  const content: import("react-native").ImageSourcePropType;
  export default content;
}

// SVG biasanya tidak digunakan langsung di React Native tanpa library tambahan seperti `react-native-svg`.
// Jika kamu pakai `react-native-svg-transformer`, gunakan ini:
declare module "*.svg" {
  import * as React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
