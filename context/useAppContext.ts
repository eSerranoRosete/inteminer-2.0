"use client";

import { User } from "@/lib/server-actions/users/UserTypes";
import { create } from "zustand";

type State = {
  theme: Theme;
};

export type Theme = "light" | "dark";

type Actions = {
  setTheme: (theme: Theme) => void;
};

export const useAppContext = create<State & Actions>((set) => ({
  theme: "dark",
  setTheme: (theme) => set({ theme }),
}));

export const useAppState = () =>
  useAppContext((state) => ({
    theme: state.theme,
  }));

export const useAppActions = () =>
  useAppContext((state) => ({
    setTheme: state.setTheme,
  }));
