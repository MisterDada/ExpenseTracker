import { create } from "zustand";

type Expense ={
    id: string;
    amount: number;
    description: string;
    category: string;
    date: Date;
}

interface StoreState {
    expenses: Expense[];
    addExpense: (expense: Expense) => void;
}

const useStore = create<StoreState>((set) => ({
    expenses: [], 
    addExpense: (expense: Expense) => set((state) => ({
        expenses: [...state.expenses, expense],
    })),
}));

export default useStore;