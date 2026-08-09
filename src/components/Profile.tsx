type ProfileProps = {
  name: string;
  bio: string;
};

export default function Profile({ name, bio }: ProfileProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-200 text-2xl font-semibold text-zinc-500">
        {name.slice(0, 1)}
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-lg font-semibold text-zinc-900">{name}</h1>
        <p className="text-sm text-zinc-500">{bio}</p>
      </div>
    </div>
  );
}
