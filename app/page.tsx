import { Wifi, BatteryFull, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <div className="flex items-center px-2 py-1 text-sm bg-gray-200">
        <div className="flex-1 flex items-center gap-2">
          <span>No Service</span>
          <Wifi className='size-4' />
        </div>
        <div className="flex-1 text-center">
          <span>18:43</span>
        </div>
        <div className="flex-1 flex items-center justify-end gap-2">
          <span>100%</span>
          <BatteryFull className='size-4' />
          <Zap className='size-4' />
        </div>
      </div>

      <div className="my-20 px-16 space-y-6">
        <h1 className="text-2xl font-bold text-center">Welcome to KakaoTalk</h1>
        <p className="text-md text-center text-muted-foreground">If you have a Kakao Account, log in with your email or phone number</p>
      </div>

      <form className="space-y-8 px-8" action="/friends" method="get">
        <div className="py-2 border-b-1"><input type="text" name="email" placeholder="계정 이메일을 입력해주세요." className="border-none w-full" /></div>
        <div className="py-2 border-b-1"><input type="text" name="query" placeholder="비밀번호를 입력해주세요." className="border-none w-full" /></div>
        <button type="submit" className="w-full bg-yellow-300 text-foreground py-4 rounded">로그인</button>
        <div className="text-center text-sm text-muted-foreground">
          <a href="#">Find Kakao Account or Password</a>
        </div>
      </form>

    </div>
  );
}
