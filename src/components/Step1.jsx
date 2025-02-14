import React, { useState } from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
const handleNextStep = () => {
    if (formData.name && formData.email && formData.phone) {
        nextStep();
    } else {
        alert("Please fill in all fields");
    }
};

return (
    <div className="p-4 flex flex-col gap-8">
        <div className="flex flex-col">
            <h2 className="font-bold">Personal Info</h2>
            <p>Please provide your name, email address and phone number</p>
        </div>
        <div className="flex flex-col min-h-40 gap-4">
            <form className="flex flex-col">
                <label>Name</label>
                <input
                    type="text"
                    value={formData.name}
                    required
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border p-2"
                />
                <label>Email Address</label>
                <input
                    type="email"
                    value={formData.email}
                    required
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    className="border p-2"
                />
                <label>Phone Number</label>
                <input
                    type="tel"
                    value={formData.phone}
                    required
                    onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                    }
                    className="border p-2"
                />
            </form>
            <button onClick={handleNextStep} className="bg-blue-500 text-white p-2 mt-4 w-1/4">
                Next Step
            </button>
        </div>
    </div>
);
};
export default Step1;
