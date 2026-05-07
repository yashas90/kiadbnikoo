"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type LeadFormModalContextValue = {
  openLeadModal: (source?: string) => void;
  closeLeadModal: () => void;
  isOpen: boolean;
  modalSource: string;
};

const LeadFormModalContext =
  createContext<LeadFormModalContextValue | null>(null);

export function LeadFormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalSource, setModalSource] = useState("popup");

  const openLeadModal = useCallback((source?: string) => {
    setModalSource(source?.trim() || "popup");
    setIsOpen(true);
  }, []);

  const closeLeadModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      openLeadModal,
      closeLeadModal,
      isOpen,
      modalSource,
    }),
    [openLeadModal, closeLeadModal, isOpen, modalSource]
  );

  return (
    <LeadFormModalContext.Provider value={value}>
      {children}
    </LeadFormModalContext.Provider>
  );
}

export function useLeadFormModal() {
  const ctx = useContext(LeadFormModalContext);
  if (!ctx) {
    throw new Error("useLeadFormModal must be used within LeadFormModalProvider");
  }
  return ctx;
}
