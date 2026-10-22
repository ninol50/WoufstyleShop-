import type { Color } from "@/lib/config";

export default function ProductImage({ color, eager = false }: { color: Color; eager?: boolean }) {
  if (!color.image) {
    return <div className="placeholder">Photo {color.label} bientôt disponible</div>;
  }
  return (
    <img
      src={color.image}
      alt={`Sweat CuddleCarry coloris ${color.label}, petit chien dans la poche avant`}
      loading={eager ? "eager" : "lazy"}
    />
  );
}
