import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";

const profile = {
  name: "황희준",
  bio: "AI를 활용한 코딩에 관심이 많아요",
};

const links = [
  { title: "🐙 GitHub", url: "https://github.com/bluehanulsea-hub" },
  { title: "📝 블로그", url: "https://blog.naver.com/hanulseaa" },
  { title: "📧 이메일", url: "mailto:bluehanulsea@gmail.com" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 items-center justify-center px-6 py-16 sm:px-8">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
        <Profile name={profile.name} bio={profile.bio} />
        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.title} title={link.title} url={link.url} />
          ))}
        </div>
      </main>
    </div>
  );
}
