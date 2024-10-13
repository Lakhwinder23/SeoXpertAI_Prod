import { useState } from 'react';

// Sample project data (You can replace this with real data)
const projects = [
  { id: 1, name: 'mikes-locksmith.com' },
  { id: 2, name: 'myplumbingservice.com' },
  { id: 3, name: 'mygardeningservice.com' },
];

const SidebarLinks = [
  { name: 'Dashboard', link: '/dashboard' },
  { name: 'Rank Tracking', link: '/rank-tracking' },
  { name: 'SEO Opportunities', link: '/seo-opportunities' },
  { name: 'My Workspace', link: '/workspace' },
  { name: 'Chrome Extension', link: '/extension' },
  { name: 'Site Audit', link: '/site-audit' },
  { name: 'Keyword Research', link: '/keyword-research' },
  { name: 'Traffic Estimation', link: '/traffic-estimation' },
  { name: 'Backlinks', link: '/backlinks' },
  { name: 'Labs', link: '/labs' },
  { name: 'AI Writer', link: '/ai-writer' },
];

const ProjectSidebar = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]); // Default to the first project

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md h-screen p-4">
        {/* Project Selector */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Select Project</h3>
          <div className="relative">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
              value={selectedProject.id}
              onChange={(e) => {
                const project = projects.find(p => p.id === parseInt(e.target.value));
                setSelectedProject(project);
              }}
            >
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="space-y-4">
          {SidebarLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="block py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Main Content (for illustration) */}
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold">Dashboard for {selectedProject.name}</h1>
        <p className="mt-4 text-lg">
          You can navigate the sections in the sidebar to manage SEO, Rank Tracking, and more for {selectedProject.name}.
        </p>
      </div>
    </div>
  );
};

export default ProjectSidebar;
