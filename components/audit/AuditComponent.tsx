import { useState } from 'react';
import { runAudit } from './auditService';

const AuditComponent = () => {
  const [auditHistory, setAuditHistory] = useState([]);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRunAudit = async () => {
    if (!websiteUrl) {
      setError('Please enter a valid website URL');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await runAudit(websiteUrl);
      setAuditHistory([...auditHistory, result]); // Add new audit result to history
    } catch (e) {
      setError('Failed to run the SEO audit');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">SEO Audit Tool</h1>

      {/* URL Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="websiteUrl">
          Website URL
        </label>
        <input
          id="websiteUrl"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter website URL (e.g., https://example.com)"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
        />
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      {/* Run Audit Button */}
      <button
        className={`w-full py-2 px-4 font-semibold text-white rounded-lg shadow-md bg-blue-500 hover:bg-blue-600 focus:outline-none ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handleRunAudit}
        disabled={isLoading}
      >
        {isLoading ? 'Running Audit...' : 'Run SEO Audit'}
      </button>

      {/* Audit History */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Audit History</h2>
        {auditHistory.length === 0 ? (
          <p className="text-gray-500">No audits have been run yet.</p>
        ) : (
          <ul className="space-y-4">
            {auditHistory.map((audit, index) => (
              <li key={index} className="p-4 bg-gray-50 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Audit {index + 1}</h3>
                <p>SEO Score: <span className="text-green-600 font-bold">{audit.seoScore}</span></p>
                <p>Performance: <span className="text-blue-600 font-bold">{audit.performance}</span></p>
                <p>Date: {new Date(audit.auditDate).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AuditComponent;
