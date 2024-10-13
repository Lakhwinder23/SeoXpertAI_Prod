const ReportScheduling = ({ projectId }) => {
    const [frequency, setFrequency] = useState('Daily');
  
    const handleScheduleReport = () => {
      // Placeholder for scheduling a report (will be connected to backend later)
      alert(`Report scheduled (${frequency}) for project ${projectId}`);
    };
  
    return (
      <div className="report-scheduling">
        <h2>Schedule Report</h2>
        <label>Frequency:</label>
        <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
  
        <button onClick={handleScheduleReport} className="schedule-button">
          Schedule Report
        </button>
      </div>
    );
  };
  
  export default ReportScheduling;
  