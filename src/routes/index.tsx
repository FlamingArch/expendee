import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: function () {
    return <h1>Hello, World</h1>;
  },
});
