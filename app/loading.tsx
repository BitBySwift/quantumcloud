export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#05060a] text-white">
      <div className="flex flex-col items-center gap-6">
        <div className="h-16 w-16 animate-spin rounded-full border-2 border-cyan/40 border-t-cyan" />
        <p className="text-xs uppercase tracking-[0.4em] text-cyan/70">
          Initializing Quantum Systems
        </p>
      </div>
    </div>
  );
}
