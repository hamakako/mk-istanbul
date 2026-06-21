import localFont from "next/font/local";

export const noorFont = localFont({
  src: [
    {
      path: "../assets/fonts/UniSIRWAN-Noor-Light.ttf",
      weight: "300",
      style: "normal"
    },
    {
      path: "../assets/fonts/UniSIRWAN-Noor-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../assets/fonts/UniSIRWAN-Noor-Bold.ttf",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-noor",
  display: "swap"
});
