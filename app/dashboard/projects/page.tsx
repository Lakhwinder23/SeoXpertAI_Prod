"use client";

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
// Correct import for a named export
// Correct import for a default export
import ProjectDashboard from '@/components/ProjectDashboard'; // Default export, no curly braces
import AuditComponent from '@/components/audit/AuditComponent';
import ReportComponent from '@/components/reports/ReportComponent';
import NotificationComponent from '@/components/notifications/NotificationComponent';
import SEOStrategyComponent from '@/components/seoStrategy/SEOStrategyComponent';
import DashboardPage from '@/components/dashboard/DashboardPage'; 





const ProjectPage = () => {
  const [projects, setProjects] = useState([]); // Array to hold projects
  const [newProject, setNewProject] = useState({ name: '', description: '', websiteUrl: '' }); // Include website URL
  const [error, setError] = useState(null); // To store errors if any occur
  const [selectedProject, setSelectedProject] = useState(null); // Store selected project

  // Fetch the projects when the component mounts
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      console.log('Projects data:', data); // Log for debugging
      if (data.error) {
        console.error('Error fetching projects:', data.error);
        setError(data.error);
        setProjects([]); // Fallback to empty array
      } else {
        setProjects(data.projects || []);
      }
    } catch (error) {
      console.error('Fetch error:', error); // Log fetch error
      setError('Failed to load projects');
      setProjects([]); // Fallback to empty array
    }
  };

  useEffect(() => {
    // Mock fetching selected project data (will be connected to backend later)
    const mockProject = {
      id: '1',
      name: 'My Project',
      websiteUrl: 'https://example.com',
    };
    setSelectedProject(mockProject);
  }, []);

  // Function to handle project creation
  const createProject = async () => {
    if (!newProject.name || !newProject.websiteUrl) {
      setError('Project name and website URL are required');
      return;
    }

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        body: JSON.stringify(newProject),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      console.log('Response from server:', data); // Log server response

      if (response.ok) {
        setProjects([...projects, data.project]);
        setNewProject({ name: '', description: '', websiteUrl: '' }); // Reset form fields
        setError(null); // Clear error
      } else {
        console.error('Error creating project:', data.error);
        setError(data.error || 'Error creating project');
      }
    } catch (error) {
      console.error('Error with project creation:', error);
      setError('Failed to create project');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-5 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display any error messages */}

      <div className="flex flex-col gap-4 w-full max-w-lg bg-white p-6 rounded-lg shadow-md mb-6">
        <Label htmlFor="projectName">Project Name</Label>
        <Input
          id="projectName"
          type="text"
          placeholder="Project Name"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        />
        <Label htmlFor="projectDescription">Project Description</Label>
        <Input
          id="projectDescription"
          type="text"
          placeholder="Project Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <Label htmlFor="websiteUrl">Website URL</Label>
        <Input
          id="websiteUrl"
          type="text"
          placeholder="Website URL"
          value={newProject.websiteUrl}
          onChange={(e) => setNewProject({ ...newProject, websiteUrl: e.target.value })}
        />
        <Button onClick={createProject}>Create Project</Button>
      </div>

      <div className="w-full max-w-2xl">
        {projects.length === 0 && <p className="text-center text-gray-500">No projects found</p>} {/* Display message if no projects */}
        {projects.map((project) => (
          project && ( // Ensure project is not undefined
            <div key={project.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h2 className="text-2xl font-semibold">{project.name || 'Unnamed Project'}</h2> {/* Fallback if name is missing */}
              <p className="text-gray-700">{project.description || 'No description'}</p> {/* Fallback if description is missing */}
              <p className="text-blue-500">
                <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                  {project.websiteUrl}
                </a>
              </p> {/* Display the website URL */}
            </div>
          )
        ))}
      </div>

      <div className="project-page">
        {selectedProject ? (
          <ProjectDashboard selectedProject={selectedProject} />
        ) : (
          <p>Loading project...</p>
        )}
      </div>
         {/* SEO Audits Section */}
         <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">SEO Audits</h2>
        <AuditComponent />
      </section>

      {/* Reports Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Reports</h2>
        <ReportComponent />
      </section>

      {/* Notifications Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Notifications</h2>
        <NotificationComponent />
      </section>

      {/* SEO Strategy Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">SEO Strategy</h2>
        <SEOStrategyComponent />
      </section>
      
    </div>
  );
};

export default ProjectPage;
