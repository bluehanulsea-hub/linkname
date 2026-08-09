import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";

const profile = {
  name: "황희준",
  bio: "세계 최강 바이브코더",
};

const links = [
  { title: "블로그", url: "https://example.com/blog" },
  { title: "GitHub", url: "https://github.com" },
  { title: "LinkedIn", url: "https://linkedin.com" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-zinc-50 px-4 py-10">
      <main className="flex w-full max-w-sm flex-col items-center gap-8 rounded-3xl border border-zinc-200 bg-white px-6 py-10 shadow-sm">
        <Profile name={profile.name} bio={profile.bio} />
        <div className="flex w-full flex-col gap-5">
          {links.map((link) => (
            <LinkCard key={link.title} title={link.title} url={link.url} />
          ))}
        </div>
      </main>
    </div>
  );
}
