import { create } from "zustand";

type DateType = string | null | Date;

type DateRangeType = {
  startDate: DateType;
  endDate: DateType;
} | null;

type FilterState = {
  enableFilter: boolean;
  dateFilter: DateRangeType;
  setEnableFilter: (state: boolean) => void;
  setDateFilter: (newDate: DateRangeType) => void;
};

const useFilter = create<FilterState>((set) => ({
  enableFilter: false,
  dateFilter: {
    startDate: null,
    endDate: null,
  },
  setEnableFilter: (state) => set({ enableFilter: state }),
  setDateFilter: (newDate) => set({ dateFilter: newDate }),
}));

export default useFilter;
