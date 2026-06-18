export default function Butterfly({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C12 2 8 6 4 7C4 7 2 12 5 15C8 18 11 14 12 12C13 14 16 18 19 15C22 12 20 7 20 7C16 6 12 2 12 2Z" />
      <line x1="12" y1="2" x2="12" y2="16" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}
