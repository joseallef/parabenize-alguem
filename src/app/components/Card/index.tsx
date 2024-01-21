import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-sm text-cyan-900 rounded-lg border bg-card text-card-foreground shadow-sm max-w-md">
      {children}
    </div>
  );
}