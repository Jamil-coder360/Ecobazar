import { useState } from "react";
// import DescriptionTab from "./components/DescriptionTab";
// import AdditionalInfoTab from "./components/AdditionalInfoTab";
// import CustomerFeedbackTab from "./components/CustomerFeedbackTab";
import DescriptionTab from "./DescriptionTab";
import CustomerFeedbackTab from "./CustomerFeedbackTab";
import AdditionalInfoTab from "./AdditionalInfoTab";
const tabs = ["Descriptions", "Additional Information", "Customer Feedback"];

export default function ProductDes() {
  const [activeTab, setActiveTab] = useState("Descriptions");

  return (
    <div className="py-8 font-sans">
      {/* Tabs */}
      <div className="flex items-center justify-center gap-8 border-b border-gray-200 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === tab
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Descriptions" && <DescriptionTab />}
      {activeTab === "Additional Information" && <AdditionalInfoTab />}
      {activeTab === "Customer Feedback" && <CustomerFeedbackTab />}
    </div>
  );
}
