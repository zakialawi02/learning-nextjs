import LoaderSpinner from "@/components/LoaderSpinner";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoaderSpinner size="large" color="text-gray-900" />
    </div>
  );
};

export default LoadingPage;
