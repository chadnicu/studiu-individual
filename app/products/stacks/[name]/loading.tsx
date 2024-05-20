import LoadingSpinner from "@/components/loading-spinner";

export default function Loading() {
  return (
    <div className="mx-auto flex w-fit items-center gap-2 text-xl font-semibold">
      <LoadingSpinner />
      Loading stack..
    </div>
  );
}
