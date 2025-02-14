import React from "react";

const Step4 = ({ previousStep, plan, addons, planType }) => {
  console.log(plan);
  const calculateTotal = () => {
    let total = plan.price;
    if (addons.onlineService) total += 1;
    if (addons.largerStorage) total += 2;
    if (addons.customizableProfile) total += 2;
    return total;
  };

  return (
    <div className="p-4">
      <div className="flex flex-col my-4">
        <h2 className="font-bold  text-2xl ">Finishing up</h2>
        <p>Double-check everything looks OK before confirming</p>
      </div>
      <div className="border p-4 min-h-[50vh]">
        <div className="flex justify-between p-4 border">
          <h3>{plan.name}</h3>
          <h3>${plan.price}/{planType}</h3>
        </div>
        {addons.onlineService && (
          <div className="flex justify-between p-4 border">
            <h3>Online service:</h3> <h3>+$1/mo</h3>
          </div>
        )}
        {addons.largerStorage && (
          <div className="flex justify-between p-4 border">
            <h3>Larger storage</h3> <h3>+$2/mo</h3>
          </div>
        )}
        {addons.customizableProfile && (
          <div className="flex justify-between p-4 border">
            <h3>Customizable Profile</h3> <h3>+$2/mo</h3>
          </div>
        )}

        <div className="flex justify-between p-4 border">
          <h3>Total</h3> <h3>${calculateTotal()}/mo</h3>
        </div>
      </div>
      <div className="flex justify-between p-4">
        <button onClick={previousStep} className="bg-gray-400 text-white p-2">
          Go Back
        </button>
        <button
          className="bg-blue-500 text-white p-2"
          onClick={() => window.location.reload()}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
export default Step4;
