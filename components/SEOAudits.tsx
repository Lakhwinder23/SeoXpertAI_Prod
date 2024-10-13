const SEOAudits = ({ audits }) => {
    const handleCreateAudit = () => {
      // Placeholder for triggering an audit (will be connected to backend later)
      alert('SEO Audit started...');
    };
  
    return (
      <div className="seo-audits">
        <h2>SEO Audits</h2>
        <button onClick={handleCreateAudit} className="audit-button">
          Run SEO Audit
        </button>
  
        <div className="audit-history">
          {audits.length === 0 ? (
            <p>No audits available</p>
          ) : (
            audits.map((audit) => (
              <div key={audit.id} className="audit-item">
                <p>SEO Score: {audit.seoScore}</p>
                <p>Performance: {audit.performance}</p>
                <p>Date: {new Date(audit.auditDate).toLocaleDateString()}</p>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default SEOAudits;
  