import { create } from "zustand";

type DateType = string | null | Date;

type DateRangeType = {
  startDate: DateType;
  endDate: DateType;
} | null;

type FilterState = {
  enableFilter: Boolean;
  dateFilter: DateRangeType;
  ip: String[];
  status: String[];
  setIP: (ip: String[]) => void;
  setStatus: (status: String[]) => void;
  setEnableFilter: (state: Boolean) => void;
  setDateFilter: (newDate: DateRangeType) => void;
};

const useFilter = create<FilterState>((set) => ({
  enableFilter: false,
  dateFilter: {
    startDate: null,
    endDate: null,
  },

  ip: [],
  status: [],

  setIP: (ip) => set({ ip: [...ip] }),
  setStatus: (status) => set({ status: [...status] }),

  setEnableFilter: (state) => set({ enableFilter: state }),
  setDateFilter: (newDate) => set({ dateFilter: newDate }),
}));

export default useFilter;
