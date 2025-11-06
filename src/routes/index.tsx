import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: function () {
    return (
      <div className="flex flex-col gap-0 items-center justify-center flex-1">
        <h1 className="font-branding font-bold text-2xl p-5">Expendee</h1>
        <p>🚧 Work in Progress 🚧</p>
      </div>
    );
  },
});
