import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar", "es"],
  defaultLocale: "en",
});

export const { locales, defaultLocale } = routing;
