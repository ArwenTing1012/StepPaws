import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const StepNavigation = ({ currentStep, onNext, onPrevious, isValid }) => {
  return (
    <div className="flex justify-between mt-6">
      {currentStep > 1 && (
        <button 
          onClick={onPrevious}
          className="px-4 py-2 border rounded-lg flex items-center hover:bg-gray-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          上一步
        </button>
      )}
      <button 
        onClick={onNext}
        disabled={!isValid}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center ml-auto hover:bg-blue-700 disabled:opacity-50"
      >
        下一步
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
};

export default StepNavigation;