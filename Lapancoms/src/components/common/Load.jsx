export default function Load() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white">
      <div className="relative h-20 w-20 overflow-hidden rounded-full">
        <div className="absolute inset-0 border-[#eee6dd]" />
        <div className="border-dark absolute inset-0 animate-[spin_1.2s_linear_infinite] rounded-b-md border-2" />
      </div>
    </div>
  );
}
