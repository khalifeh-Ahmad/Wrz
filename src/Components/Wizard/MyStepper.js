import React, { useState } from "react";
import "./style.css"; //

const Stepper = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: "",
    budget: "",
    burialOrCremation: "",
    isInsured: false,
    policyNumber: "",
    location: "",
    carService: false,
    carBudget: "",
    flowerService: false,
    flowerType: "",
    flowerColor: "",
    flowerBudget: "",
    videoStreaming: false,
    streamingBudget: "",
    grievingCounseling: false,
    counselingType: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const nextStep = () => {
    if (step < 8) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Service Type</h2>
            <img
              src="../../assets/img/chairman.jpg"
              alt="Service Type"
              className="w-full h-64 object-cover mb-4"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />

            <label className="block mb-2">
              Are you booking for a pet or human?
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="block w-full p-2 border rounded"
              >
                <option value="">Select</option>
                <option value="pet">Pet</option>
                <option value="human">Human</option>
              </select>
            </label>
            <label className="block mb-2">
              Budget:
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="block w-full p-2 border rounded"
                placeholder="Enter your budget"
              />
            </label>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Burial or Cremation</h2>
            <img
              src="../../assets/img/banner23.png"
              alt="Service Type"
              className="w-full h-64 object-cover mb-4"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <label className="block mb-2">
              Do you want a burial or cremation?
              <select
                name="burialOrCremation"
                value={formData.burialOrCremation}
                onChange={handleChange}
                className="block w-full p-2 border rounded"
              >
                <option value="">Select</option>
                <option value="burial">Burial</option>
                <option value="cremation">Cremation</option>
              </select>
            </label>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Insurance Status Verification
            </h2>
            <img
              src="../../assets/img/banner2.png"
              alt="Service Type"
              className="w-full h-64 object-cover mb-4"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <label className="block mb-2">
              Are you insured?
              <select
                name="isInsured"
                value={formData.isInsured ? "Yes" : "No"}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    isInsured: e.target.value === "Yes",
                  }))
                }
                className="block w-full p-2 border rounded"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </label>
            {formData.isInsured && (
              <label className="block mb-2">
                Policy Number:
                <input
                  type="text"
                  name="policyNumber"
                  value={formData.policyNumber}
                  onChange={handleChange}
                  className="block w-full p-2 border rounded"
                  placeholder="Enter your policy number"
                />
              </label>
            )}
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Location Selection</h2>
            <img
              src="../../assets/img/logo.png"
              alt="Service Type"
              className="w-full h-64 object-cover mb-4"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <label className="block mb-2">
              Select the location of the service:
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="block w-full p-2 border rounded"
                placeholder="Enter location"
              />
            </label>
          </div>
        );
      case 5:
        return (
          <div>
            <h2>Car Service Option</h2>
            <img
              src="../../assets/img/banner1.png"
              alt="Service Type"
              className="w-full h-64 object-cover mb-4"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <label>
              Would you like a car service?
              <input
                type="checkbox"
                name="carService"
                checked={formData.carService}
                onChange={handleChange}
                className="block"
              />
            </label>
            {formData.carService && (
              <>
                <label>
                  Budget:
                  <input
                    type="text"
                    name="carBudget"
                    value={formData.carBudget}
                    onChange={handleChange}
                    className="block"
                    placeholder="Enter your budget"
                  />
                </label>
                <label>
                  Car Type:
                  <select
                    name="carType"
                    onChange={handleChange}
                    className="block"
                  >
                    <option value="">Select</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="limousine">Limousine</option>
                  </select>
                </label>
              </>
            )}
          </div>
        );
      case 6:
        return (
          <div>
            <h2>Flower Service Option</h2>
            <img
              src="../../assets/img/logo.png"
              alt="Service Type"
              className="w-full h-64 object-cover mb-4"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <label>
              Would you like a flower service?
              <input
                type="checkbox"
                name="flowerService"
                checked={formData.flowerService}
                onChange={handleChange}
                className="block"
              />
            </label>
            {formData.flowerService && (
              <>
                <label>
                  Flower Type:
                  <input
                    type="text"
                    name="flowerType"
                    value={formData.flowerType}
                    onChange={handleChange}
                    className="block"
                  />
                </label>
                <label>
                  Flower Color:
                  <input
                    type="text"
                    name="flowerColor"
                    value={formData.flowerColor}
                    onChange={handleChange}
                    className="block"
                  />
                </label>
                <label>
                  Budget:
                  <input
                    type="text"
                    name="flowerBudget"
                    value={formData.flowerBudget}
                    onChange={handleChange}
                    className="block"
                    placeholder="Enter your budget"
                  />
                </label>
              </>
            )}
          </div>
        );

      case 7:
        return (
          <div>
            <h2>Video Streaming Service</h2>
            <img
              src="../../assets/img/banner3.png"
              alt="Service Type"
              className="w-full h-64 object-cover mb-4"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <label>
              Would you like to add a video streaming service for overseas
              relatives?
              <input
                type="checkbox"
                name="videoStreaming"
                checked={formData.videoStreaming}
                onChange={handleChange}
                className="block"
              />
            </label>
            {formData.videoStreaming && (
              <>
                <label>
                  Budget:
                  <input
                    type="text"
                    name="streamingBudget"
                    value={formData.streamingBudget}
                    onChange={handleChange}
                    className="block"
                    placeholder="Enter your budget"
                  />
                </label>
              </>
            )}
          </div>
        );
      case 8:
        return (
          <div>
            <h2>Grieving Counseling</h2>
            <img
              src="../../assets/img/logo.png"
              alt="Service Type"
              className="w-full h-64 object-cover mb-4"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <label>
              Would you like to include grieving counseling services?
              <input
                type="checkbox"
                name="grievingCounseling"
                checked={formData.grievingCounseling}
                onChange={handleChange}
                className="block"
              />
            </label>
            {formData.grievingCounseling && (
              <div>
                <label>
                  Counseling Type:
                  <select
                    name="counselingType"
                    value={formData.counselingType}
                    onChange={handleChange}
                    className="block"
                  >
                    <option value="">Select</option>
                    <option value="oneOnOne">One-on-one</option>
                    <option value="group">Group Support</option>
                    <option value="online">Online Resources</option>
                  </select>
                </label>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  const renderSummary = () => (
    <div className="stepper-summary">
      <h2 className="text-2xl font-bold mb-4">Summary of Your Selections</h2>
      <p>Service Type: {formData.serviceType}</p>
      <p>Budget: {formData.budget}</p>
      <p>Burial or Cremation: {formData.burialOrCremation}</p>
      <p>Insured: {formData.isInsured ? "Yes" : "No"}</p>
      {formData.isInsured && <p>Policy Number: {formData.policyNumber}</p>}
      <p>Location: {formData.location}</p>
      <p>Car Service: {formData.carService ? "Yes" : "No"}</p>
      {formData.carService && <p>Car Budget: {formData.carBudget}</p>}
      <p>Flower Service: {formData.flowerService ? "Yes" : "No"}</p>
      {formData.flowerService && <p>Flower Budget: {formData.flowerBudget}</p>}
      <p>Video Streaming Service: {formData.videoStreaming ? "Yes" : "No"}</p>
      <p>Grieving Counseling: {formData.grievingCounseling ? "Yes" : "No"}</p>
    </div>
  );

  return (
    <div className="stepper max-w-3xl mx-auto p-6 bg-gray-50">
      {!submitted ? (
        <div className="stepper-form">
          {renderStepContent()}
          <div className="stepper-navigation flex justify-between mt-4">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className="btn-prev px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Previous
            </button>
            {step < 8 ? (
              <button
                onClick={nextStep}
                className="btn-next px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="btn-submit px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      ) : (
        renderSummary()
      )}
    </div>
  );
};

export default Stepper;
