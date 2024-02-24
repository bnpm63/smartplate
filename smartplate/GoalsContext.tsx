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


const GoalsContext = createContext<GoalsContextState | undefined>(undefined);


export const useGoals = () => {
  const context = useContext(GoalsContext);
  if (context === undefined) {
    throw new Error('useGoals must be used within a GoalsProvider');
  }
  return context;
};


export const GoalsProvider: React.FC = ({ children }) => {
  const [calGoal, setCalGoal] = useState<number | ''>('');
  const [fatGoal, setFatGoal] = useState<number | ''>('');
  const [carbGoal, setCarbGoal] = useState<number | ''>('');
  const [totalCal, setTotalCal] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [totalCarb, setTotalCarb] = useState(0);

  const addToTotalCal = (amount: number) => setTotalCal(prev => prev + amount);
  const addToTotalFat = (amount: number) => setTotalFat(prev => prev + amount);
  const addToTotalCarb = (amount: number) => setTotalCarb(prev => prev + amount);

  return (
    <GoalsContext.Provider value={{ calGoal, setCalGoal, fatGoal, setFatGoal, carbGoal, setCarbGoal }}>
      {children}
    </GoalsContext.Provider>
  );
};
