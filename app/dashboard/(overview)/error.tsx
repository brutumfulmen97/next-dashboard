'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex h-full items-center justify-center">
      <h1 className="text-2xl font-bold">
        An error occurred : {error.message}
      </h1>
    </div>
  );
}
