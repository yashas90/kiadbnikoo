export type UnitPricing = {
  type: string;
  size: string;
  heroPrice: string;
  tablePrice: string;
};

export const UNIT_PRICING: UnitPricing[] = [
  { type: "Studio", size: "530 Sq.Ft", heroPrice: "Starts ₹70 Lakhs*", tablePrice: "₹70 Lakhs*" },
  { type: "1 BHK", size: "800 Sq.Ft", heroPrice: "Starts ₹96 Lakhs*", tablePrice: "₹96 Lakhs*" },
  {
    type: "2.5 BHK",
    size: "Approx. 1400 Sq.Ft",
    heroPrice: "₹1.40 Cr onwards*",
    tablePrice: "₹1.40 Cr onwards*",
  },
  {
    type: "3 BHK",
    size: "Approx. 1700 Sq.Ft",
    heroPrice: "₹1.70 Cr onwards*",
    tablePrice: "₹1.70 Cr onwards*",
  },
  {
    type: "3.5 BHK",
    size: "Approx. 2000 Sq.Ft",
    heroPrice: "₹2.00 Cr onwards*",
    tablePrice: "₹2.00 Cr onwards*",
  },
  {
    type: "3 BHK Loft",
    size: "Approx. 2250 Sq.Ft",
    heroPrice: "₹2.25 Cr*",
    tablePrice: "₹2.25 Cr*",
  },
  {
    type: "4 BHK Staff",
    size: "Approx. 2500 Sq.Ft",
    heroPrice: "₹2.50 Cr onwards*",
    tablePrice: "₹2.50 Cr onwards*",
  },
];

export const CONFIG_OPTIONS = [
  ...UNIT_PRICING.map((u) => u.type),
  "Need guidance",
] as const;

