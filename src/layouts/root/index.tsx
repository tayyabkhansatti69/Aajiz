"use client";

//types
import type { ReactNode } from "react";

// next

// @mui
import CssBaseline from "@mui/material/CssBaseline";
import { Theme, ThemeProvider } from "@mui/material/styles";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// redux
import { Provider as ReduxProvider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
//contexts


//other
import Cookies from "js-cookie";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";
import { Settings } from "@/src/types";
import { store } from "@/src/store";
// import { usePathname } from "next/navigation";
import { SettingsConsumer, SettingsProvider } from "@/src/context";
import { createTheme } from "@/src/theme";
import { AuthInitializer } from "@/src/hoc/with-auth-initializer";
import { Toaster } from "@/src/components";
// import { LocalizationProvider } from "@mui/x-date-pickers";

// components
// import { createTheme, Toaster } from "";
// import { SettingsButton } from "@components/settings/settings-button";
// import { SettingsDrawer } from "@components/settings/settings-drawer";
// import type { Settings } from "common/types";


const SETTINGS_STORAGE_KEY = "app.settings";

const resetSettings = (): void => {
  try {
    Cookies.remove(SETTINGS_STORAGE_KEY);
     window.location.reload();
  } catch (err) {
    console.error(err);
  }
};

const updateSettings = (settings:any ): void => {
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

export function RootLayout(props: LayoutProps): JSX.Element {
  const { children, settings } = props;

  // const pathname = usePathname();

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
                      {children}
                      
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
