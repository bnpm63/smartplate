import React, { createContext, useState, useContext } from 'react';

// Extend the context's state to include total values
interface GoalsContextState {
  calGoal: number | '';
  setCalGoal: React.Dispatch<React.SetStateAction<number | ''>>;
  fatGoal: number | '';
  setFatGoal: React.Dispatch<React.SetStateAction<number | ''>>;
  carbGoal: number | '';
  setCarbGoal: React.Dispatch<React.SetStateAction<number | ''>>;
  totalCal: number;
  addToTotalCal: (amount: number) => void;
  totalFat: number;
  addToTotalFat: (amount: number) => void;
  totalCarb: number;
  addToTotalCarb: (amount: number) => void;
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
    <GoalsContext.Provider value={{ 
      calGoal, setCalGoal, 
      fatGoal, setFatGoal, 
      carbGoal, setCarbGoal, 
      totalCal, addToTotalCal, 
      totalFat, addToTotalFat, 
      totalCarb, addToTotalCarb 
    }}>
      {children}
    </GoalsContext.Provider>
  );
};

export default GoalsProvider;
