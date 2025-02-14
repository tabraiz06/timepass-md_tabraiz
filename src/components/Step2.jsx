import React, { useState } from "react";
import { SiApplearcade } from "react-icons/si";
import { FaGamepad } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

const Step2 = ({ nextStep, previousStep, setPlan, setPlanType, plan }) => {
  const [billing, setBilling] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = {
    monthly: [
      { name: "Arcade", price: 9, icon: <SiApplearcade /> },
      { name: "Advanced", price: 12, icon: <FaGamepad /> },
      { name: "Pro", price: 15, icon: <IoGameController /> },
    ],
    yearly: [
      { name: "Arcade", price: 90, icon: <SiApplearcade /> },
      { name: "Advanced", price: 120, icon: <FaGamepad /> },
      { name: "Pro", price: 150, icon: <IoGameController /> },
    ],
  };

  const handlePlanClick = (plan) => {
    setPlan(plan);
    setSelectedPlan(plan.name);
  };

  const toggleBilling = () => {
    setBilling((prevBilling) =>
      prevBilling === "monthly" ? "yearly" : "monthly"
    );
    setPlanType((prevBilling) =>
      prevBilling === "monthly" ? "yearly" : "monthly"
    );
  };
  const handleNextStep=()=>{
    console.log(plan)
    if(plan !== null){
      nextStep();
    }else{  
        alert("please select any plan")
        }
  }

  return (
    <div className="p-4">
      <div className="my-4">
        <h2 className="font-bold  text-2xl ">Select Your Plan</h2>
        <span>You have the option of monthly or yearly billings</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 h-[12rem] min-w-[20rem] step2head1">
          {plans[billing].map((plan) => (
            <div
              key={plan.name}
              onClick={() => handlePlanClick(plan)}
              className={`p-2 border flex flex-col justify-around items-center min-h-44 min-w-44 ${
                selectedPlan === plan.name ? "bg-blue-500 text-white" : ""
              }`}
            >
              <div className="text-2xl">{plan.icon}</div>
              <div>
                {plan.name}: ${plan.price}/{billing === "monthly" ? "mo" : "yr"}
              </div>
            </div>
          ))}
        </div>
        <div className="flex mb-4 w-1/2 togglebtn justify-center items-center gap-4">
          <span>Monthly</span>
          <input
            type="checkbox"
            className="checkbox"
            onChange={toggleBilling}
          />
          <span>Yearly</span>
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={previousStep} className="bg-gray-400 text-white p-2">
            Go Back
          </button>
          <button
            onClick={handleNextStep}
            className="bg-blue-500 text-white p-2"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
