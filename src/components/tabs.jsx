// import React, { useState } from "react";

// export function Tabs({ defaultValue, children, className }) {
//   const [activeTab, setActiveTab] = useState(defaultValue);

//   const childrenWithProps = React.Children.map(children, (child) => {
//     if (!child) return child;
//     if (child.type.displayName === "TabsList") {
//       return React.cloneElement(child, { activeTab, setActiveTab });
//     }
//     if (child.type.displayName === "TabsContent") {
//       return activeTab === child.props.value ? child : null;
//     }
//     return child;
//   });

//   return <div className={className}>{childrenWithProps}</div>;
// }

// export function TabsList({ children, activeTab, setActiveTab }) {
//   return (
//     <div className="flex justify-center space-x-2 mb-4">
//       {React.Children.map(children, (child) =>
//         React.cloneElement(child, { activeTab, setActiveTab })
//       )}
//     </div>
//   );
// }
// TabsList.displayName = "TabsList";

// export function TabsTrigger({ value, children, activeTab, setActiveTab }) {
//   const isActive = activeTab === value;
//   return (
//     <button
//       className={`px-6 py-3 rounded-full font-semibold text-base transition-all duration-200 ${
//         isActive
//           ? "bg-blue-600 text-white scale-105 shadow-md"
//           : "bg-gray-200 text-gray-800"
//       }`}
//       onClick={() => setActiveTab(value)}
//     >
//       {children}
//     </button>
//   );
// }
// TabsTrigger.displayName = "TabsTrigger";

// export function TabsContent({ children }) {
//   return <div>{children}</div>;
// }
// TabsContent.displayName = "Tabs Content";
