"use client";
import Dashboard from "@/src/components/Dashboard"
import Table from "@/src/components/Table"

export default function DashboardPage() {
  return (
    <div className='overflow-hidden -translate-y-64'>
      <Dashboard />
      <div className="relative bottom-64 left-80 z-10 ">
        <Table />
      </div>
    </div>
  );
}