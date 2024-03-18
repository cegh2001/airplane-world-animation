"use client";
import Dashboard from "@/src/components/Dashboard";
import useStore from "@/src/state/Store";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return(isAuthenticated ? <Dashboard /> : router.push("/login2"));
}