"use client";

import type { ReactNode } from "react";
import { LeadFormModalProvider } from "@/components/LeadFormModalContext";
import { LeadFormModal } from "@/components/LeadFormModal";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LeadFormModalProvider>
      {children}
      <LeadFormModal />
    </LeadFormModalProvider>
  );
}
