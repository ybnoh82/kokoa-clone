import { Ellipsis, MessageCircle, Search, UserRound } from "lucide-react";

export default function BottomNavi() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-gray-100 shadow-md flex items-center px-4 border-t">
      <div className="flex-1">
        <a className="flex items-center justify-center" href="/friends">
          <UserRound />
        </a>
      </div>
      <div className="flex-1">
        <a className="flex items-center justify-center" href="/chats">
          <MessageCircle />
        </a>
      </div>
      <div className="flex-1">
        <a className="flex items-center justify-center" href="#">
          <Search />
        </a>
      </div>
      <div className="flex-1">
        <a className="flex items-center justify-center" href="#">
          <Ellipsis />
        </a>
      </div>
    </nav>
  );
}
