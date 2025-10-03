import HeartIcon from "@/components/ui/heart-icon";
import { Button } from "@/components/ui/button";

export function ProfileHeader({ onSignout }: { onSignout: () => void }) {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="flex items-center space-x-2">
        <HeartIcon width={32} height={32} />
        <h1 className="text-xl font-semibold text-gray-900">GraphQL</h1>
      </div>

      <Button
        type="submit"
        onClick={onSignout}
        className="bg-gray-900 text-white rounded-lg px-6 h-10 font-medium text-sm hover:bg-gray-800 transition-all shadow-sm"
      >
        Sign Out 🎀
      </Button>
    </header>
  );
}