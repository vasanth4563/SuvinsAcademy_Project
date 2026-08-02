import React, { useCallback, useEffect, useState } from "react";
import { Url } from "../config/api";

type Enquiry = {
  id: number;
  full_name: string;
  mobile_number: string;
  school_name: string;
  class_name: string;
  standard: string;
  submitted_at: string;
};

export function useAdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [dashboardError, setDashboardError] = useState("");
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchEnquiries = useCallback(async () => {
    setLoading(true);
    setDashboardError("");

    try {
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 10000);
      const res = await fetch(Url.enquiry, { signal: controller.signal });
      window.clearTimeout(timeoutId);

      if (!res.ok) {
        const errText = await res.text();
        setDashboardError(`Server Error: ${res.status} - ${errText}`);
        return;
      }

      const data = await res.json();
      setEnquiries(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setDashboardError(`Failed to fetch: ${err.message}`);
      } else {
        setDashboardError("Failed to fetch enquiries.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (username === "admin" && password === "admin123") {
        setIsLoggedIn(true);
        setError("");
      } else {
        setError("Invalid username or password");
      }
    },
    [username, password],
  );

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    fetchEnquiries();
  }, [isLoggedIn, fetchEnquiries]);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setDashboardError("");
    setEnquiries([]);
  }, []);

  return {
    isLoggedIn,
    username,
    password,
    error,
    dashboardError,
    enquiries,
    loading,
    setUsername,
    setPassword,
    handleLogin,
    handleLogout,
  };
}
