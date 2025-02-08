"use client";

// types
import { useEffect, type ReactNode } from "react";

// next

// @mui
import CssBaseline from "@mui/material/CssBaseline";
import { Theme, ThemeProvider } from "@mui/material/styles";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// redux
import { Provider as ReduxProvider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

// other
import Cookies from "js-cookie";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";
import { Settings } from "@/src/types";
import { store } from "@/src/store";
import { SettingsConsumer, SettingsProvider } from "@/src/context";
import { createTheme } from "@/src/theme";
import { AuthInitializer } from "@/src/hoc/with-auth-initializer";
import { Toaster } from "@/src/components";
import { usePathname } from "next/navigation";
import { AuthGuard } from "../gaurd";

const SETTINGS_STORAGE_KEY = "app.settings";

const resetSettings = (): void => {
  try {
    Cookies.remove(SETTINGS_STORAGE_KEY);
    window.location.reload();
  } catch (err) {
    console.error(err);
  }
};

const updateSettings = (settings: any): void => {
  try {
    Cookies.set(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    window.location.reload();
  } catch (err) {
    console.error(err);
  }
};

interface LayoutProps {
  children: ReactNode;
  settings?: Settings;
}

const persistor = persistStore(store);

// Load Google Translate dynamically

const loadGoogleTranslate = () => {
  if (
    typeof window !== "undefined" &&
    !(window as any).googleTranslateElementInit
  ) {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en", // Default language
          autoDisplay: false,
        },
        "google_translate_element",
      );
      // const element = document.querySelector('.skiptranslate.goog-te-gadget');

      // // Check if the element exists
      // Use MutationObserver to detect when the iframe is added to the DOM
      const observer = new MutationObserver(() => {
        // Look for iframe elements with the specific class
        const iframe = document.querySelector(
          "iframe.VIpgJd-ZVi9od-ORHb-OEVmcd.skiptranslate",
        );

        if (iframe) {
          // Hide the iframe once it's found
          (iframe as HTMLElement).style.display = "none";
          observer.disconnect(); // Stop observing after we find and hide the iframe
        }
      });

      // Observe the body for any added nodes (like iframe)
      observer.observe(document.body, { childList: true, subtree: true });
    };
  }
};

function getTextNodesInElement(element: any) {
  const textNodes: any = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
  let node: any;
  while ((node = walker.nextNode())) {
    textNodes.push(node);
  }
  return textNodes;
}

export function RootLayout(props: LayoutProps): JSX.Element {
  const { children, settings } = props;
  const pathname = usePathname();

  // Define public routes that don't need authentication
  const isPublicRoute = pathname?.startsWith('/sign-in') || 
                       pathname?.startsWith('/sign-up') || 
                       pathname?.startsWith('/forgot-password');
  useEffect(() => {
    loadGoogleTranslate();

    // Apply custom styling once Google Translate dropdown is rendered
    const interval = setInterval(() => {
      const googleDropdown = document.querySelector(
        "#google_translate_element select",
      ) as HTMLSelectElement | null;
      const googleBranding = document.querySelector(
        ".goog-te-gadget span",
      ) as HTMLElement | null;
      const poweredByDiv = document.querySelector(
        ".skiptranslate.goog-te-gadget",
      );

      if (poweredByDiv) {
        // Find all text nodes inside the div
        const textNodes = getTextNodesInElement(poweredByDiv);

        textNodes.forEach((node) => {
          if (node.nodeValue && node.nodeValue.includes("Powered by")) {
            node.nodeValue = node.nodeValue.replace("Powered by", ""); // Remove only the "Powered by" text
          }
        });
      }

      if (googleDropdown) {
        // Add custom class for dropdown styling
        googleDropdown.classList.add("custom-google-dropdown");
        googleDropdown.style.padding = "8px";
        googleDropdown.style.border = "1px solid #ccc";
        googleDropdown.style.borderRadius = "8px";

        clearInterval(interval);
      }

      if (googleBranding) {
        googleBranding.style.display = "none"; // Hide "Powered by Google"
      }
    }, 500);
  }, []);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <SettingsProvider
              onReset={resetSettings}
              onUpdate={updateSettings}
              settings={settings}
            >
              <SettingsConsumer>
                {(themeSettings) => {
                  const theme: Theme = createTheme({
                    direction: themeSettings.direction,
                    responsiveFontSizes: themeSettings.responsiveFontSizes,
                    colorPreset: themeSettings.colorPreset,
                    contrast: themeSettings.contrast,
                    paletteMode: themeSettings.paletteMode,
                  });
                  return (
                    <ThemeProvider theme={theme}>
                      <CssBaseline />
                      <AuthInitializer handleTheme={themeSettings.handleUpdate}>
                        {/* Google Translate Dropdown */}
                        {isPublicRoute ? (
                          children
                        ) : (
                          <AuthGuard>{children}</AuthGuard>
                        )}
                        <div
                          id="google_translate_element"
                          style={{
                            position: "fixed",
                            top: 1,
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 9999,
                            backgroundColor: "#ffffff",
                            padding: "8px 16px",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          }}
                        ></div>
                      </AuthInitializer>
                      <Toaster />
                    </ThemeProvider>
                  );
                }}
              </SettingsConsumer>
            </SettingsProvider>
          </LocalizationProvider>
        </PersistGate>
      </ReduxProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
