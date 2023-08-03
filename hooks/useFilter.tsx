import { create } from "zustand";

type DateType = string | null | Date;

type DateRangeType = {
  startDate: DateType;
  endDate: DateType;
} | null;

type FilterState = {
  test: boolean;
  dateFilter: DateRangeType;
  setTest: (state: boolean) => void;
  setDateFilter: (newDate: DateRangeType) => void;
};

const useFilter = create<FilterState>((set) => ({
  test: false,
  dateFilter: {
    startDate: null,
    endDate: null,
  },
  setTest: (state) => set({ test: state }),
  setDateFilter: (newDate) => set({ dateFilter: newDate }),
}));

export default useFilter;
