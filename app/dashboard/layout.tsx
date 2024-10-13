"use server"
import { ReactNode } from "react"
import DashboardSideBar from "./_components/dashboard-side-bar"
import DashboardTopNav from "./_components/dashbord-top-nav"
//import ProjectSidebar from '@/components/ProjectSidebar';

export default async function DashboardLayout({ children }: { children: ReactNode }) {


  return (
    <div>
      <DashboardTopNav >
        <main className="flex flex-col gap-4 p-4 lg:gap-6">
          {children}
        </main>
      </DashboardTopNav>
    </div>
  )
}
