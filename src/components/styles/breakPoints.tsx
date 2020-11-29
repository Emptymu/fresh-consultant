const breakpoints = {
    xs: `20em`, // 324px
    sm: `30em`, // 480px
    md: `48em`, // 768px
    lg: `64em` // 1024px
};

export const up = (breakpoint: keyof typeof breakpoints, style: string) => {
    return `
        @media screen and (min-width: ${breakpoints[breakpoint]}) {
            ${style}
        }
    `;
};

export const down = (breakpoint: keyof typeof breakpoints, style: string) => {
    return `
        @media screen and (max-width: ${breakpoints[breakpoint]}) {
            ${style}
        }
    `;
};
