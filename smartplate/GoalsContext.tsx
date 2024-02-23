import React, { createContext, useState, useContext } from 'react';

// Define the shape of the context's state
interface GoalsContextState {
  calGoal: number | '';
  setCalGoal: React.Dispatch<React.SetStateAction<number | ''>>;
  fatGoal: number | '';
  setFatGoal: React.Dispatch<React.SetStateAction<number | ''>>;
  carbGoal: number | '';
  setCarbGoal: React.Dispatch<React.SetStateAction<number | ''>>;
}

// Create the context
const GoalsContext = createContext<GoalsContextState | undefined>(undefined);

// Create a custom hook for using the goals context
export const useGoals = () => {
  const context = useContext(GoalsContext);
  if (context === undefined) {
    throw new Error('useGoals must be used within a GoalsProvider');
  }
  return context;
};

// Provider component
export const GoalsProvider: React.FC = ({ children }) => {
  const [calGoal, setCalGoal] = useState<number | ''>('');
  const [fatGoal, setFatGoal] = useState<number | ''>('');
  const [carbGoal, setCarbGoal] = useState<number | ''>('');

  return (
    <GoalsContext.Provider value={{ calGoal, setCalGoal, fatGoal, setFatGoal, carbGoal, setCarbGoal }}>
      {children}
    </GoalsContext.Provider>
  );
};
