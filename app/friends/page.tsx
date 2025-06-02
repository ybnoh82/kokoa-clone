import { Search, Music, Settings } from 'lucide-react';

export default function Home() {
  return (
    <div>

      <div className="flex items-center justify-between p-6">
        <h1 className="text-3xl font-bold text-center">Friends</h1>
        <div className="flex items-center gap-6">
          <Search />
          <Music />
          <Settings />
        </div>
      </div>

    </div>
  );
}
