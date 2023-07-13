/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins, sans-serif"],
                inter: ["Inter, sans-serif"],
            },
            fontSize: {
                "3.5xl": "2rem",
            },
            spacing: {
                "264px": "16.5rem",
                "210px": "13.125rem",
                "82px": "5.125rem",
                "76px": "4.75rem",
                "52px": "3.25rem",
                "55px": "3.43rem",
                "30px": "1.875rem",
            },
            minWidth: {
                "244px": "15.25rem",
            },
            colors: {
                "light-black": "#ffffffa",
                "light-text": "#888888",
                violet: "#452CDD",
                modal: "rgba(0, 0, 0, 0.4)",
            },
            borderWidth: {
                "16px": "1rem",
            },
        },
    },
    plugins: [],
};
