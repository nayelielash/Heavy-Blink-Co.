import Link from "next/link";

interface ServiceCardProps {
  name: string;
  description: string;
  price: string;
  duration: string;
}

export default function ServiceCard({ name, description, price, duration }: ServiceCardProps) {
  return (
    <div className="group rounded-2xl border border-warm-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-blush-200">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-warm-800 group-hover:text-blush-500 transition">
            {name}
          </h3>
          <p className="mt-1 text-sm text-warm-400 leading-relaxed">{description}</p>
        </div>
        <div className="text-right shrink-0">
          <span className="text-lg font-semibold text-blush-500">{price}</span>
          <p className="text-xs text-warm-400 mt-0.5">{duration}</p>
        </div>
      </div>
      <Link
        href="/book"
        className="mt-4 inline-flex items-center text-sm font-medium text-blush-500 hover:text-blush-600 transition"
      >
        Book this service
        <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
