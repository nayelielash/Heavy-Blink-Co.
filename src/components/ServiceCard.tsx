import Link from "next/link";

interface ServiceCardProps {
  name: string;
  description: string;
  price: string;
  duration: string;
}

export default function ServiceCard({ name, description, price, duration }: ServiceCardProps) {
  return (
    <div className="group rounded-2xl border-2 border-purple-200 bg-white p-6 shadow-sm transition hover:shadow-lg hover:border-purple-400 hover:scale-[1.01]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-dark-800 group-hover:text-purple-600 transition">
            {name}
          </h3>
          <p className="mt-1 text-sm text-dark-700/60 leading-relaxed">{description}</p>
        </div>
        <div className="text-right shrink-0">
          <span className="text-xl font-bold text-purple-600">{price}</span>
          <p className="text-xs text-dark-700/50 mt-0.5">{duration}</p>
        </div>
      </div>
      <Link
        href="/book"
        className="mt-4 inline-flex items-center text-sm font-medium text-purple-500 hover:text-purple-700 transition"
      >
        Book this service
        <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
