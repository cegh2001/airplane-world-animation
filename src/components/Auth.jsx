"use client";
import useStore from "../state/Store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const logout = useStore((state) => state.logout);
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login2");
    }
  }, [isAuthenticated, router]);

  return (
    <div>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}
