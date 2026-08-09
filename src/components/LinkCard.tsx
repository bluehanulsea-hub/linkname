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
      className="flex w-full items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-4 text-sm font-medium text-zinc-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {title}
    </a>
  );
}
