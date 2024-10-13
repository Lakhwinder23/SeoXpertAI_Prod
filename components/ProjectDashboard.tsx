const ProjectDashboard = ({ selectedProject }) => {
    return (
      <div>
        <h2 className="text-3xl font-semibold">Project Dashboard</h2>
        <p>Selected Project: {selectedProject?.name || 'No project selected'}</p>
        <p>Website URL: <a href={selectedProject?.websiteUrl} target="_blank" rel="noopener noreferrer">{selectedProject?.websiteUrl || 'No URL'}</a></p>
  
        {/* You can add more sections like SEO Audits, Report Scheduling, etc. */}
        <div className="dashboard-content">
          <p>More dashboard content goes here...</p>
        </div>
      </div>
    );
  };
  
  export default ProjectDashboard;  // This should ensure it's exported properly
  