import React, { useState } from "react";

const Step3 = ({ nextStep, previousStep, addons, setAddons ,planType }) => {
  

  const toggleAddon = (addon) => {
    setAddons({ ...addons, [addon]: !addons[addon] });
  };

  return (
    <div className="p-4">
      <div className="m-4">
        <h2 className="font-bold  text-2xl ">Pick Add-ons</h2>
        <span>Add-ons help enhance your gaming experience.</span>
      </div>
      <div className="p-8 mt-2 border">
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-8">
            <input
              type="checkbox"
              checked={addons.onlineService}
              onChange={() => toggleAddon("onlineService")}
            />
            <div className="flex flex-col">
              <h2>Online service</h2>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          <span>{planType === "monthly" ? "+$1/mo" : "+$10 / yr"}</span>
        </div>
      </div>
      <div className="p-8 mt-2 border">
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-8">
            <input
              type="checkbox"
              checked={addons.largerStorage}
              onChange={() => toggleAddon("largerStorage")}
            />
            <div className="flex flex-col">
              <h2>Larger storage</h2>
              <p>Extra 1Tb of cloud save</p>
            </div>
          </div>
          <span>{planType === "monthly" ? "+$2/mo" : "+$20 / yr"}</span>
        </div>
      </div>
      <div className="p-8 mt-2 border">
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-8">
            <input
              type="checkbox"
              checked={addons.customizableProfile}
              onChange={() => toggleAddon("customizableProfile")}
            />
            <div className="flex flex-col">
              <h2>Customizable Profile</h2>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <span>{planType === "monthly" ? "+$2/mo" : "+$20 / yr"}</span>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button onClick={previousStep} className="bg-gray-400 text-white p-2">
          Go Back
        </button>
        <button
          onClick={
            addons.onlineService
              ? nextStep
              : () => {
                  alert("Please select at least one addon to proceed");
                }
          }
          className="bg-blue-500 text-white p-2"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};
export default Step3;
