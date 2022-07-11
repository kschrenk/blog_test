import * as React from "react";

type Action = { type: "set"; payload: string };
type Dispatch = (action: Action) => void;
type CategoryProviderProps = { children: React.ReactNode };

const CategoryContext = React.createContext<
  | { active: string; setActive: React.Dispatch<React.SetStateAction<string>> }
  | undefined
>(undefined);

function CategoryProvider({ children }: CategoryProviderProps) {
  const [active, setActive] = React.useState("dog");

  const value = { active, setActive };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

function useCategory() {
  const context = React.useContext(CategoryContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { CategoryProvider, useCategory };
