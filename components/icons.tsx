type P = { size?: number };
const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const MenuIcon = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const UserIcon = ({ size = 22 }: P) => (
  <svg {...base(size)}><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></svg>
);
export const BagIcon = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M5 8h14l-1 13H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
);
export const ArrowLeft = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
);
export const ArrowRight = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const TruckIcon = ({ size = 36 }: P) => (
  <svg {...base(size)}><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></svg>
);
export const ShieldIcon = ({ size = 36 }: P) => (
  <svg {...base(size)}><path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6l-8-3Z" /><circle cx="12" cy="11" r="1.6" /><path d="M12 12.6V15" /></svg>
);
export const BoxIcon = ({ size = 36 }: P) => (
  <svg {...base(size)}><path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" /><path d="M4 7l8 4 8-4M12 11v10" /></svg>
);
export const ReturnIcon = ({ size = 36 }: P) => (
  <svg {...base(size)}><path d="M4 9h11a5 5 0 0 1 0 10H8" /><path d="M8 5 4 9l4 4" /></svg>
);
export const HeartIcon = ({ size = 18 }: P) => (
  <svg {...base(size)} fill="currentColor" stroke="none"><path d="M12 20s-7-4.4-9.2-8.6C1.2 8.3 3 5 6.3 5c2 0 3.2 1.1 3.7 2.2C10.5 6.1 11.7 5 13.7 5 17 5 18.8 8.3 17.2 11.4 15 15.6 12 20 12 20Z" transform="translate(1 0)" /></svg>
);
export const HomeIcon = ({ size = 18 }: P) => (
  <svg {...base(size)}><path d="M4 11 12 4l8 7v9h-5v-6H9v6H4v-9Z" /></svg>
);
export const PawIcon = ({ size = 18 }: P) => (
  <svg {...base(size)} fill="currentColor" stroke="none"><circle cx="6" cy="10" r="2" /><circle cx="10" cy="6" r="2" /><circle cx="14" cy="6" r="2" /><circle cx="18" cy="10" r="2" /><path d="M12 11c-3 0-6 4.5-6 7 0 1.5 1.3 2 2.5 2 1.4 0 2.2-.8 3.5-.8s2.1.8 3.5.8c1.2 0 2.5-.5 2.5-2 0-2.5-3-7-6-7Z" /></svg>
);
export const LeafIcon = ({ size = 18 }: P) => (
  <svg {...base(size)}><path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15" /><path d="M5 19 13 11" /></svg>
);
