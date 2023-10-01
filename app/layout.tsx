"use client";
import "./globals.css";
import type { Metadata } from "next";
import Nav from "./components/Nav/Nav";
import store from "./redux/store";
import { Provider } from "react-redux";

const metadata: Metadata = {
    title: "Addison Adult League Portal",
    description: "Updated league schedule and standings",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Provider store={store}>
                    <Nav />
                    {children}
                </Provider>
            </body>
        </html>
    );
}
