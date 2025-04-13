import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useManifest } from '../context/ManifestContext';
import MixtureImg from '../assets/mixture.jpg';
import OrangePeelImg from '../assets/orange_peel.jpg';
import ChukuvelapodiImg from '../assets/chukuvelapodi.jpg';
import KondatamMulakImg from '../assets/kondatam_mulak.jpg';
import KondatangalImg from '../assets/kondatangal.jpg';
import AdakaImg from '../assets/adaka.jpg';
import PepperImg from '../assets/pepper.jpg';
import CurryLeavesImg from '../assets/curry_leaves.jpg';
import PulinkuruPowderImg from '../assets/pulinkuru_powder.jpg';
import PanamchakaraImg from '../assets/panamchakara.jpg';
import VetilaImg from '../assets/vetila.jpg';
import PazhayaMutayikalImg from '../assets/pazhaya_mutayikal.jpg';
import EggPowderImg from '../assets/egg_powder.jpg';
import RamachamPothangaImg from '../assets/ramacham_pothanga.jpg';
import BabloosNarangaImg from '../assets/babloos_naranga.jpg';
import BananaMaaniImg from '../assets/banana_maani.jpg';
import TapiocaImg from '../assets/tapioca.jpg';
import SugarcaneImg from '../assets/sugarcane.jpg';
import KuvaPayasamImg from '../assets/kuva_payasam.jpg';

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('kg');
  const { addToManifest } = useManifest();

  const products = [
    {
      name: "Mixture - From One Shop",
      desc: "A delightful mix of traditional snacks.",
      img: MixtureImg,
      details: "A savory blend of nuts, lentils, and spices, perfect for snacking.",
      pricePer100kg: 500, // Example price in USD
    },
    {
      name: "Orange Dried Peel",
      desc: "Zesty and aromatic dried orange peels.",
      img: OrangePeelImg,
      details: "Sun-dried peels, great for teas, baking, or garnishes.",
      pricePer100kg: 300,
    },
    {
      name: "Chukuvelapodi",
      desc: "Spicy and flavorful powder for culinary use.",
      img: ChukuvelapodiImg,
      details: "A traditional spice mix for enhancing curries and soups.",
      pricePer100kg: 400,
    },
    {
      name: "Kondatam Mulak",
      desc: "Sun-dried chilies with a kick.",
      img: KondatamMulakImg,
      details: "Fiery dried chilies, ideal for spicy dishes.",
      pricePer100kg: 350,
    },
    {
      name: "Kondatangal",
      desc: "Traditional dried condiments.",
      img: KondatangalImg,
      details: "A mix of dried spices for authentic flavors.",
      pricePer100kg: 450,
    },
    {
      name: "Adaka",
      desc: "Premium quality areca nut.",
      img: AdakaImg,
      details: "Carefully selected areca nuts for chewing or processing.",
      pricePer100kg: 600,
    },
    {
      name: "Pepper",
      desc: "Bold and aromatic black pepper.",
      img: PepperImg,
      details: "Whole black peppercorns for seasoning.",
      pricePer100kg: 700,
    },
    {
      name: "Curry Leaves",
      desc: "Fresh and fragrant curry leaves.",
      img: CurryLeavesImg,
      details: "Dried curry leaves for curries and tempering.",
      pricePer100kg: 200,
    },
    {
      name: "Pulinkuru Powder",
      desc: "Tangy tamarind powder.",
      img: PulinkuruPowderImg,
      details: "Pure tamarind powder for tangy dishes.",
      pricePer100kg: 250,
    },
    {
      name: "Panamchakara - Mixed with Tea Powder",
      desc: "Sweet palm jaggery for tea.",
      img: PanamchakaraImg,
      details: "Natural sweetener for tea and desserts.",
      pricePer100kg: 400,
    },
    {
      name: "Vetila",
      desc: "Fresh betel leaves.",
      img: VetilaImg,
      details: "High-quality betel leaves for traditional use.",
      pricePer100kg: 150,
    },
    {
      name: "Pazhaya Mutayikal",
      desc: "Traditional dried goods.",
      img: PazhayaMutayikalImg,
      details: "A mix of nostalgic dried items.",
      pricePer100kg: 300,
    },
    {
      name: "Egg Powder",
      desc: "Versatile egg powder for cooking.",
      img: EggPowderImg,
      details: "Convenient egg powder for baking and cooking.",
      pricePer100kg: 800,
    },
    {
      name: "Ramacham Pothanga",
      desc: "Aromatic vetiver roots.",
      img: RamachamPothangaImg,
      details: "Dried vetiver roots for fragrance and cooling.",
      pricePer100kg: 500,
    },
    {
      name: "Babloos Naranga or Kambli Naranga",
      desc: "Unique citrus variety.",
      img: BabloosNarangaImg,
      details: "Special citrus for culinary and decorative use.",
      pricePer100kg: 250,
    },
    {
      name: "Banana Maani, Koomb",
      desc: "Dried banana treats.",
      img: BananaMaaniImg,
      details: "Sweet dried banana snacks.",
      pricePer100kg: 350,
    },
    {
      name: "Tapioca",
      desc: "High-quality tapioca roots.",
      img: TapiocaImg,
      details: "Fresh tapioca for versatile cooking.",
      pricePer100kg: 200,
    },
    {
      name: "Sugarcane",
      desc: "Fresh and sweet sugarcane.",
      img: SugarcaneImg,
      details: "Juicy sugarcane for direct consumption or juicing.",
      pricePer100kg: 100,
    },
    {
      name: "Kuva Payasam",
      desc: "Traditional dessert mix.",
      img: KuvaPayasamImg,
      details: "Ready-to-cook mix for authentic payasam.",
      pricePer100kg: 600,
    },
  ];

  const handleAddToManifest = () => {
    if (selectedProduct && quantity > 0) {
      addToManifest(selectedProduct, quantity, unit);
      setSelectedProduct(null);
      setQuantity(1);
      setUnit('kg');
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.img}
              alt={product.name}
              className="h-48 w-full object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600">{product.desc}</p>
          </div>
        ))}
      </div>

      {/* Product Detail Popup */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg max-w-md w-full"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }}
              exit={{ y: 100, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedProduct.name}</h2>
              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="h-48 w-full object-cover rounded mb-4"
              />
              <p className="text-gray-600 mb-2">{selectedProduct.details}</p>
              <p className="text-lg font-semibold mb-4">
                Price per 100kg: ${selectedProduct.pricePer100kg}
              </p>
              <div className="flex items-center mb-4">
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border rounded p-2 w-24 mr-2"
                />
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="border rounded p-2"
                >
                  <option value="grams">Grams</option>
                  <option value="kg">Kilograms</option>
                  <option value="ton">Tons</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddToManifest}
                  className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800"
                >
                  Add to Manifest
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Products;