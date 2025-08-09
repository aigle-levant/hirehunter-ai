import { DotLottiePlayer } from "@dotlottie/react-player";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <DotLottiePlayer
        src="/loading.lottie"
        autoplay
        loop
        style={{ height: 500, width: 500 }}
      />
    </div>
  );
}
