"use client";

import { useEffect } from "react";
import { useLeadFormModal } from "@/components/LeadFormModalContext";

export function AutoOpenLeadModal({ source }: { source: string }) {
  const { openLeadModal, isOpen } = useLeadFormModal();

  useEffect(() => {
    if (isOpen) return;
    const id = window.setTimeout(() => {
      openLeadModal(source);
    }, 400);
    return () => window.clearTimeout(id);
  }, [openLeadModal, source, isOpen]);

  return null;
}
