import { defineApp } from "convex/server";
import agent from "@convex-dev/agent/convex.config";
import rag from "@convex-dev/rag";
const app = defineApp();
app.use(agent);
app.use(rag);
export default app;
