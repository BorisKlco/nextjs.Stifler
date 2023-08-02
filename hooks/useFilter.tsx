import { create } from "zustand";

type FilterState = {
  test: boolean;
  text: string;
  setTest: (state: boolean) => void;
};

const useFilter = create<FilterState>((set) => ({
  test: false,
  text: "hahahahahha",
  setTest: (state) => set({ test: state }),
}));

export default useFilter;
