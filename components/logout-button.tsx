"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={async () => {
        setLoading(true);
        await signOut({ callbackUrl: "/login", redirect: true });
        setLoading(false);
      }}
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : <LogOut />}
      Logout
    </Button>
  );
};

export default LogoutButton;
