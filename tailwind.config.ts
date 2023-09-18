import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                calibre_bold: ["CalibreBold"],
                calibre_medium: ["CalibreMedium"],
                calibre_semi_bold: ["CalibreSemiBold"],
                calibre_light: ["CalibreLight"],
                calibre_regular: ["CalibreRegular"],
            },
        },
    },
    plugins: [],
};
export default config;
