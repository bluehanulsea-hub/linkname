type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/60 bg-white/40 px-5 py-4 text-[15px] font-medium text-stone-700 shadow-[0_4px_18px_-6px_rgba(196,120,60,0.18)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_10px_24px_-8px_rgba(196,120,60,0.28)]"
    >
      {title}
    </a>
  );
}
