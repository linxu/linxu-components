import { css, SimpleInterpolation } from "styled-components";

export interface FontSize {
  mega: ReadonlyArray<SimpleInterpolation>;
  subtext: ReadonlyArray<SimpleInterpolation>;
  link: ReadonlyArray<SimpleInterpolation>;
  h1: ReadonlyArray<SimpleInterpolation>;
  caption: ReadonlyArray<SimpleInterpolation>;
  h2: ReadonlyArray<SimpleInterpolation>;
  main: ReadonlyArray<SimpleInterpolation>;
  h3: ReadonlyArray<SimpleInterpolation>;
  medium: ReadonlyArray<SimpleInterpolation>;
  h4: ReadonlyArray<SimpleInterpolation>;
  body: ReadonlyArray<SimpleInterpolation>;
  title: ReadonlyArray<SimpleInterpolation>;
  h5: ReadonlyArray<SimpleInterpolation>;
  h6: ReadonlyArray<SimpleInterpolation>;
  ultra: ReadonlyArray<SimpleInterpolation>;
  h7: ReadonlyArray<SimpleInterpolation>;
  caps: ReadonlyArray<SimpleInterpolation>;
  tiny: ReadonlyArray<SimpleInterpolation>;
  extraTiny: ReadonlyArray<SimpleInterpolation>;
}

interface Typography {
  headers: string;
  main: string;
  lineHeight: string;
  fontSize: FontSize;
}

export interface BaseTheme {
  typography: Typography;
  boxShadow: { light: string; heavy: string };
  borderRadius: string;
}

// theme will have the same fonts and image path rooted from the marketer variable
export const baseTheme: BaseTheme = {
  typography: {
    headers: "Heebo, sans-serif, Arial, Helvetica",
    main: "Heebo, sans-serif, Arial, Helvetica",
    lineHeight: "23px",
    fontSize: {
      ultra: css`
        font-size: 80px;
        line-height: 117px;
      `,
      mega: css`
        font-size: 64px;
        line-height: 94px;
      `,
      h1: css`
        font-size: 40px;
        line-height: 59px;
      `,
      h2: css`
        font-size: 32px;
        line-height: 47px;
      `,
      h3: css`
        font-size: 28px;
        line-height: 41px;
      `,
      h4: css`
        font-size: 24px;
        line-height: 35px;
      `,
      h5: css`
        font-size: 20px;
        line-height: 29px;
      `,
      h6: css`
        font-size: 18px;
        line-height: 24px;
      `,
      h7: css`
        font-size: 16px;
        line-height: 24px;
      `,
      body: css`
        font-size: 18px;
        line-height: 24px;
      `,
      caps: css`
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      `,
      caption: css`
        font-size: 14px;
        line-height: 16px;
      `,
      title: css`
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
      `,
      link: css`
        font-size: 14px;
        line-height: 16px;
        text-decoration: underline;
      `,
      tiny: css`
        font-size: 12px;
        line-height: 14px;
      `,
      extraTiny: css`
        font-size: 11px;
        line-height: 13px;
      `,
      medium: css`
        font-size: 14px;
        line-height: 18px;
      `,
      main: css`
        font-size: 16px;
      `,
      subtext: css`
        font-size: 12px;
      `,
    },
  },
  borderRadius: "1px",
  boxShadow: {
    light: "2px 2px 8px rgba(0, 0, 0, 0.16)",
    heavy: "0px 0px 32px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.24)",
  },
};
