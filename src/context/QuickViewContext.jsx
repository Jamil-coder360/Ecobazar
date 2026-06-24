import { createContext, useContext, useState } from "react";
import QuickView from "../pages/QuickView";

const QuickViewContext = createContext({
  selectedProduct: null,
  showQuickView: () => {},
  closeQuickView: () => {},
});

export const QuickViewProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  return (
    <QuickViewContext.Provider value={{ selectedProduct, showQuickView, closeQuickView }}>
      {children}
      {selectedProduct && <QuickView product={selectedProduct} onClose={closeQuickView} />}
    </QuickViewContext.Provider>
  );
};

export const useQuickView = () => useContext(QuickViewContext);
