import { DotLottiePlayer } from "@dotlottie/react-player";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <DotLottiePlayer
        src="/loading.lottie"
        autoplay
        loop
        className="h-[500px] w-[500px]"
      />
    </div>
  );
}
