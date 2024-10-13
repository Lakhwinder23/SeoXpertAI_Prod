import { useState } from 'react';
import { addStrategy, fetchStrategies } from './seoStrategyService';

const SEOStrategyComponent = () => {
  const [strategies, setStrategies] = useState([]);
  const [newStrategy, setNewStrategy] = useState('');
  const [error, setError] = useState(null);

  const handleAddStrategy = async () => {
    if (!newStrategy) {
      setError('Please enter a valid SEO strategy');
      return;
    }
    setError(null);
    const strategy = await addStrategy(newStrategy);
    setStrategies([...strategies, strategy]);
    setNewStrategy('');
  };

  // Fetch existing strategies on component mount
  useState(() => {
    fetchStrategies().then((data) => setStrategies(data));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">SEO Strategies</h1>

      <div className="mb-4">
        <label className="block text-gray-700">Add New SEO Strategy</label>
        <input
          type="text"
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
          placeholder="Enter SEO strategy"
          value={newStrategy}
          onChange={(e) => setNewStrategy(e.target.value)}
        />
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        className="w-full py-2 px-4 bg-purple-500 text-white font-semibold rounded"
        onClick={handleAddStrategy}
      >
        Add SEO Strategy
      </button>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">SEO Strategy List</h2>
        {strategies.length === 0 ? (
          <p>No strategies have been added yet.</p>
        ) : (
          <ul className="space-y-4">
            {strategies.map((strategy, index) => (
              <li key={index} className="p-4 bg-gray-50 rounded shadow">
                <p>{strategy.name}</p>
                <p>Date: {new Date(strategy.dateAdded).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SEOStrategyComponent;
