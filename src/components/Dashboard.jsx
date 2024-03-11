"use client";
import { useRouter } from "next/navigation";
import useStore from "../state/Store";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? <div>Contenido protegido</div> : <div>autentiquese</div>;
}
