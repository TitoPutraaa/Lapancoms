export default function Load() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white">
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 rounded-full border-[#eee6dd]" />
        <div className="rounded-fulls bg-accent absolute inset-0 animate-[spin_1.2s_linear_infinite] border-[#8b5e3c] border-t-transparent border-l-transparent" />
      </div>
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}
