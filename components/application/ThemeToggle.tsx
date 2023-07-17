"use client";

import { useAppActions, useAppState } from "@/context/useAppContext";
import { Switch } from "../ui/switch";

export const ThemeToggle = () => {
  const actions = useAppActions();
  const state = useAppState();

  const toggle = (val: boolean) => {
    actions.setTheme(val ? "dark" : "light");
  };

  return <Switch checked={state.theme === "dark"} onCheckedChange={toggle} />;
};
