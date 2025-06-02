import { BatteryFull, Wifi, Zap } from "lucide-react";

export default function StatusBar() {
  return (
    <div className="flex items-center px-2 py-1 text-sm bg-gray-200">
      <div className="flex-1 flex items-center gap-2">
        <span>No Service</span>
        <Wifi className="size-4" />
      </div>
      <div className="flex-1 text-center">
        <span>18:43</span>
      </div>
      <div className="flex-1 flex items-center justify-end gap-2">
        <span>100%</span>
        <BatteryFull className="size-4" />
        <Zap className="size-4" />
      </div>
    </div>
  );
}
