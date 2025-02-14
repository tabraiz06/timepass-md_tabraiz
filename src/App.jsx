import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [plan, setPlan] = useState(null);
  const [planType, setPlanType] = useState("monthly");
  
  const [addons, setAddons] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const previousStep = () => setStep((prev) => prev - 1);

  return (
    <div className="flex h-screen items-center justify-center bg-[aliceblue]">
      <div className="flex main w-[80%]">
        <div className="text-white bg-[#6868a1] flex flex-col  w-[30%] min-h-[80vh] items-center justify-center gap-10 head1">
          <div className="flex items-center gap-8 w-2/3">
            <span
              className={`p-4 ${
                step === 1 ? "bg-blue-500 text-black" : ""
              } rounded-[50%] border-2 h-12`}
            >
              1
            </span>{" "}
            <h2 className="text-2xl flex flex-col text-white texts">
              {" "}
              <span className="text-sm">Step 1</span>
              Your Info
            </h2>
          </div>
          <div className="flex items-center gap-8 w-2/3">
            <span
              className={`p-4 ${
                step === 2 ? "bg-blue-500 text-black" : ""
              } rounded-[50%] border-2 h-12`}
            >
              2
            </span>{" "}
            <h2 className="text-2xl flex flex-col text-white texts">
              {" "}
              <span className="text-sm">Step 2</span>
              Select Plan
            </h2>
          </div>
          <div className="flex items-center gap-8 w-2/3">
            <span
              className={`p-4 ${
                step === 3 ? "bg-blue-500 text-black" : ""
              } rounded-[50%] border-2 h-12`}
            >
              3
            </span>{" "}
            <h2 className="text-2xl flex flex-col text-white texts">
              {" "}
              <span className="text-sm">Step 3</span>
              Add-ons
            </h2>
          </div>
          <div className="flex items-center gap-8 w-2/3">
            <span
              className={`p-4 ${
                step === 4 ? "bg-blue-500 text-black" : ""
              } rounded-[50%] border-2 h-12`}
            >
              4
            </span>{" "}
            <h2 className="text-2xl flex flex-col text-white texts">
              {" "}
              <span className="text-sm">Step 3</span>
              Summary
            </h2>
          </div>
        </div>
        <div className="w-[70%] p-4 bg-white  min-h-[80vh] head2">
          {step === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          )}
          {step === 2 && (
            <Step2
              nextStep={nextStep}
              previousStep={previousStep}
              setPlan={setPlan}
              planType={planType}
              setPlanType={setPlanType}
              plan={plan}
            />
          )}
          {step === 3 && (
            <Step3
              nextStep={nextStep}
              previousStep={previousStep}
              addons={addons}
              setAddons={setAddons}
              planType={planType}
            />
          )}
          {step === 4 && (
            <Step4
              previousStep={previousStep}
              plan={plan}
              addons={addons}
              planType={planType}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
