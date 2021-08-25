import { BaseTheme } from "./BaseTheme";
import { Colors } from "./Colors";

declare module "styled-components" {
  export interface ExomeTheme extends BaseTheme {
    name: string;
    colors: Colors;
  }

  export type Themer<T> = T & { theme: ExomeTheme };

}
