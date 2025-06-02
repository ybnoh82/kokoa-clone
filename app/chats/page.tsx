import { Music, Search, Settings, MessageCircleMore } from "lucide-react";
import BottomNavi from "../components/bottom-navi";

export default function ChatsPage() {
  return (
    <div>
      <div className="flex items-center justify-between p-6">
        <h1 className="text-3xl font-bold text-center">Chats</h1>
        <div className="flex items-center gap-6">
          <Search />
          <MessageCircleMore />
          <Music />
          <Settings />
        </div>
      </div>

      <BottomNavi />
    </div>
  );
}
