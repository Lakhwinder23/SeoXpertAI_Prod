'use client';

import { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

// Sample projects for the dropdown
const projects = [
  { id: 1, name: 'mikes-locksmith.com' },
  { id: 2, name: 'myplumbingservice.com' },
  { id: 3, name: 'mygardeningservice.com' },
];

const ProjectSelector = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="relative">
      {/* Radix UI Dropdown */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          {/* Button for opening dropdown */}
          <button
            className="w-[200px] flex items-center justify-between border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm hover:bg-gray-100"
            aria-label="Select a project"
          >
            <span className="flex items-center">
              {/* Avatar for project (using Vercel avatars) */}
              <div className="relative mr-2 h-5 w-5 overflow-hidden rounded-full">
                <img
                  src={`https://avatar.vercel.sh/${selectedProject.name}.png`}
                  alt={selectedProject.name}
                  className="h-full w-full"
                />
              </div>
              {selectedProject.name}
            </span>
            m
          </button>
        </DropdownMenu.Trigger>

        {/* Dropdown content */}
        <DropdownMenu.Content
          sideOffset={5}
          align="start"
          className="bg-white rounded-md shadow-lg p-2 w-[200px] transition-opacity duration-200 ease-in-out"
        >
          {/* List of projects */}
          {projects.length > 0 ? (
            projects.map((project) => (
              <DropdownMenu.Item
                key={project.id}
                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {project.name}
              </DropdownMenu.Item>
            ))
          ) : (
            <DropdownMenu.Item disabled className="px-4 py-2 text-sm text-gray-400">
              No projects available
            </DropdownMenu.Item>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default ProjectSelector;
