type ProfileProps = {
  name: string;
  bio: string;
};

export default function Profile({ name, bio }: ProfileProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 via-amber-100 to-orange-200 text-3xl font-semibold text-amber-700 shadow-[0_10px_28px_-8px_rgba(196,120,60,0.45)] ring-4 ring-white/80">
        {name.slice(0, 1)}
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <h1 className="text-xl font-bold tracking-tight text-stone-800">
          {name}
        </h1>
        <p className="text-sm text-stone-500">{bio}</p>
      </div>
    </div>
  );
}
