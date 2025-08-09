import Lottie from "lottie-react";
import loadingAnimation from "/src/assets/loading.json";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Lottie
        animationData={loadingAnimation}
        loop
        autoplay
        className="h-[500px] w-[500px]"
      />
    </div>
  );
}
