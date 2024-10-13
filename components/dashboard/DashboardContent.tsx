import { Button } from "../ui/button";

export default function DashboardContent() {
    return (
      <div className="flex-1 space-y-4 p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <div className="flex space-x-2">
            <Button className="h-9 px-4 py-2">Download</Button>
          </div>
        </div>
  
        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border bg-card p-6 shadow">
            <h3 className="text-sm font-medium">Total Revenue</h3>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted">+20.1% from last month</p>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow">
            <h3 className="text-sm font-medium">Subscriptions</h3>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted">+180.1% from last month</p>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow">
            <h3 className="text-sm font-medium">Sales</h3>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted">+19% from last month</p>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow">
            <h3 className="text-sm font-medium">Active Now</h3>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted">+201 since last hour</p>
          </div>
        </div>
      </div>
    );
  }
  