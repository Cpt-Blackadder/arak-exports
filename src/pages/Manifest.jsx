import { useManifest } from '../context/ManifestContext';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

function Manifest() {
  const { manifest, removeFromManifest, updateQuantity } = useManifest();

  const calculateTotal = () => {
    return manifest.reduce((total, item) => {
      const pricePerKg = item.product.pricePer100kg / 100;
      let quantityInKg;
      if (item.unit === 'grams') {
        quantityInKg = item.quantity / 1000;
      } else if (item.unit === 'ton') {
        quantityInKg = item.quantity * 1000;
      } else {
        quantityInKg = item.quantity;
      }
      return total + pricePerKg * quantityInKg;
    }, 0);
  };

  const generatePDF = () => {
    console.log('Generating PDF...'); // Debug log
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Header
    doc.setFontSize(36);
    doc.setTextColor(0, 0, 0); // Black text
    doc.text('ARAK', 20, 30);

    doc.setFontSize(18);
    doc.text('EXPORTS', 20, 40);

    // Manifest Number and Date
    doc.setFontSize(12);
    doc.text('Manifest Number:', 20, 50);
    doc.text('Date: ' + new Date().toLocaleDateString(), 20, 60);

    // Table
    autoTable(doc, {
      startY: 70,
      head: [['Product', 'Quantity', 'Price (USD)']],
      body: manifest.map((item) => {
        const pricePerKg = item.product.pricePer100kg / 100;
        const quantityInKg =
          item.unit === 'grams' ? item.quantity / 1000 : item.unit === 'ton' ? item.quantity * 1000 : item.quantity;
        return [
          item.product.name,
          `${item.quantity} ${item.unit}`,
          (pricePerKg * quantityInKg).toFixed(2),
        ];
      }),
      foot: [['TOTAL', '', calculateTotal().toFixed(2)]],
      theme: 'plain',
      headStyles: {
        fillColor: [255, 193, 7], // Yellow header (#FFC107)
        textColor: [0, 0, 0], // Black text
        fontSize: 12,
        fontStyle: 'bold',
      },
      bodyStyles: {
        textColor: [0, 0, 0], // Black text
        fontSize: 10,
      },
      footStyles: {
        textColor: [0, 0, 0], // Black text
        fontSize: 12,
        fontStyle: 'bold',
      },
      margin: { top: 70 },
      tableWidth: 'auto',
      styles: { cellPadding: 2, font: 'helvetica' },
    });

    console.log('PDF generated, attempting to save...'); // Debug log
    doc.save('arak-exports-manifest.pdf');
    console.log('PDF save attempted.'); // Debug log
  };

  const handlePlaceOrder = () => {
    if (manifest.length > 0) {
      generatePDF();
    } else {
      alert('Your manifest is empty.');
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">Your Manifest</h1>
      {manifest.length === 0 ? (
        <p className="text-center text-gray-600">Your manifest is empty.</p>
      ) : (
        <div>
          {manifest.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg mb-4"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{item.product.name}</h2>
                <p className="text-gray-600">{item.product.desc}</p>
                <p className="text-gray-600">
                  Price per 100kg: ${item.product.pricePer100kg}
                </p>
                <div className="flex items-center mt-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.product.name, Number(e.target.value), item.unit)
                    }
                    className="border rounded p-2 w-24 mr-2"
                  />
                  <select
                    value={item.unit}
                    onChange={(e) =>
                      updateQuantity(item.product.name, item.quantity, e.target.value)
                    }
                    className="border rounded p-2"
                  >
                    <option value="grams">Grams</option>
                    <option value="kg">Kilograms</option>
                    <option value="ton">Tons</option>
                  </select>
                </div>
              </div>
              <button
                onClick={() => removeFromManifest(item.product.name)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-4">
            <p className="text-xl font-semibold">
              Total: ${calculateTotal().toFixed(2)}
            </p>
            <button
              onClick={handlePlaceOrder}
              className="bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800 mt-4"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Manifest;