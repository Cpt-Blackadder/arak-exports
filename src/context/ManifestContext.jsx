import { createContext, useContext, useState } from 'react';

const ManifestContext = createContext();

export function ManifestProvider({ children }) {
  const [manifest, setManifest] = useState([]);

  const addToManifest = (product, quantity, unit) => {
    setManifest((prev) => {
      const existing = prev.find((item) => item.product.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.product.name === product.name
            ? { ...item, quantity, unit }
            : item
        );
      }
      return [...prev, { product, quantity, unit }];
    });
  };

  const removeFromManifest = (productName) => {
    setManifest((prev) => prev.filter((item) => item.product.name !== productName));
  };

  const updateQuantity = (productName, quantity, unit) => {
    setManifest((prev) =>
      prev.map((item) =>
        item.product.name === productName ? { ...item, quantity, unit } : item
      )
    );
  };

  return (
    <ManifestContext.Provider
      value={{ manifest, addToManifest, removeFromManifest, updateQuantity }}
    >
      {children}
    </ManifestContext.Provider>
  );
}

export function useManifest() {
  return useContext(ManifestContext);
}