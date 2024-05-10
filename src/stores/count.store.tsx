import { create } from 'zustand'

type Counter = {
    count: number
    inc: () => void
  }
  
  const useCounter = create<Counter>()((set) => ({
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1 })),
  }))

  export default useCounter;