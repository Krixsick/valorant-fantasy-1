import { createFileRoute } from "@tanstack/react-router";
import { Homescreen } from "../screens/homescree";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Homescreen />;
}
