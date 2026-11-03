import { Link } from "react-router-dom";

export default function StickyVisitBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-background-200 bg-background-50/95 px-4 pb-[calc(0.65rem+env(safe-area-inset-bottom))] pt-[0.65rem] shadow-[0_-10px_30px_-16px_rgba(11,61,34,0.35)] backdrop-blur-md lg:hidden">
      <div className="flex items-center gap-3">
        <a
          href="tel:0755469134"
          aria-label="Call the admissions office"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary-500/40 text-primary-700 transition-colors hover:bg-primary-50"
        >
          <i className="ri-phone-line text-[18px] leading-none" />
        </a>
        <Link
          to="/contact"
          className="group flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-primary-500 px-5 py-3 text-[15px] font-medium text-background-50 transition-colors hover:bg-primary-600"
        >
          <span className="whitespace-nowrap">Book a School Visit</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-background-50 text-primary-600 transition-transform duration-300 group-hover:translate-x-0.5">
            <i className="ri-arrow-right-line text-[13px] leading-none" />
          </span>
        </Link>
      </div>
    </div>
  );
}