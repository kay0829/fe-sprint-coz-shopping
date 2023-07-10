import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // define: {
    //     "process.env": {},
    // },
    resolve: {
        alias: [
            { find: "@api", replacement: "/src/api" },
            { find: "@asset", replacement: "/src/asset" },
            { find: "@component", replacement: "/src/component" },
            { find: "@container", replacement: "/src/container" },
            { find: "@recoil", replacement: "/src/recoil" },
            { find: "@feature", replacement: "/src/feature" },
            { find: "@hook", replacement: "/src/hook" },
            { find: "@route", replacement: "/src/route" },
            { find: "@style", replacement: "/src/style" },
            { find: "@util", replacement: "/src/util" },
            { find: "@type", replacement: "/src/type" },
            { find: "@", replacement: "/src" },
        ],
    },
});
