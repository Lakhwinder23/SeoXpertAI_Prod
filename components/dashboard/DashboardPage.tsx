import ProjectSelector from './ProjectSelector';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';

export default function DashboardPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1">
        <div className="border-b p-4 flex items-center justify-between">
          {/* Project Selector */}
          <ProjectSelector />
          
          {/* Navigation */}
          <nav className="ml-6 space-x-4 hidden md:flex">
            <a href="/dashboard" className="text-sm font-medium hover:text-primary">Overview</a>
            <a href="/customers" className="text-sm font-medium text-muted-foreground hover:text-primary">Customers</a>
            <a href="/products" className="text-sm font-medium text-muted-foreground hover:text-primary">Products</a>
            <a href="/settings" className="text-sm font-medium text-muted-foreground hover:text-primary">Settings</a>
          </nav>
        </div>

        {/* Dashboard Content */}
        <DashboardContent />
      </div>
    </div>
  );
}
