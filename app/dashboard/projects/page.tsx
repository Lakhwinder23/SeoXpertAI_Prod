"use client";

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component

const ProjectPage = () => {
  const [projects, setProjects] = useState([]); // Array to hold projects
  const [newProject, setNewProject] = useState({ name: '', description: '', websiteUrl: '' }); // Include website URL
  const [error, setError] = useState(null); // To store errors if any occur

  // Fetch the projects when the component mounts
  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        console.log('Projects data:', data); // Log for debugging
        if (data.error) {
          console.error('Error fetching projects:', data.error);
          setError(data.error); // Set error if an issue occurred
          setProjects([]); // Fallback to empty array
        } else {
          setProjects(data.projects || []); // Ensure projects is an array
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error); // Log fetch error
        setError('Failed to load projects'); // Set a user-friendly error message
        setProjects([]); // Fallback to empty array
      });
  }, []);

  // Function to handle project creation
  const createProject = async () => {
    if (!newProject.name || !newProject.websiteUrl) {
      setError('Project name and website URL are required'); // Ensure both fields are filled
      return;
    }

    const response = await fetch('/api/projects', {
      method: 'POST',
      body: JSON.stringify(newProject),
      headers: { 'Content-Type': 'application/json' },
    });
    
    const data = await response.json();
    console.log('Response from server:', data); // Log server response

    if (response.ok) {
      setProjects([...projects, data.project]); // Add new project to list
      setNewProject({ name: '', description: '', websiteUrl: '' }); // Reset form fields
      setError(null); // Clear error
    } else {
      console.error('Error creating project:', data.error); // Handle errors
      setError(data.error || 'Error creating project'); // Set error state
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
              <p className="text-blue-500"><a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">{project.websiteUrl}</a></p> {/* Display the website URL */}
              <div>
                {/* Team management goes here */}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
