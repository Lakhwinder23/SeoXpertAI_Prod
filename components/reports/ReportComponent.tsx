import { useState } from 'react';
import { scheduleReport } from './reportService';

const ReportComponent = () => {
  const [frequency, setFrequency] = useState('Daily');
  const [reportHistory, setReportHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleScheduleReport = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await scheduleReport(frequency);
      setReportHistory([...reportHistory, result]);
    } catch (e) {
      setError('Failed to schedule report');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Report Scheduler</h1>

      <div className="mb-4">
        <label className="block text-gray-700">Frequency</label>
        <select
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        className={`w-full py-2 px-4 bg-green-500 text-white font-semibold rounded ${isLoading ? 'opacity-50' : ''}`}
        onClick={handleScheduleReport}
        disabled={isLoading}
      >
        {isLoading ? 'Scheduling...' : 'Schedule Report'}
      </button>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Report History</h2>
        {reportHistory.length === 0 ? (
          <p>No reports have been scheduled yet.</p>
        ) : (
          <ul className="space-y-4">
            {reportHistory.map((report, index) => (
              <li key={index} className="p-4 bg-gray-50 rounded shadow">
                <h3 className="font-semibold">Report {index + 1}</h3>
                <p>Frequency: {report.frequency}</p>
                <p>Date: {new Date(report.scheduledDate).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReportComponent;
