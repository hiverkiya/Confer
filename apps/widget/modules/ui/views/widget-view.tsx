"use client";
import { WidgetFooter } from "@/modules/ui/components/widget-footer";
import { WidgetHeader } from "@/modules/ui/components/widget-header";
import { WidgetAuthScreen } from "@/modules/ui/screens/widget-auth-screen";

interface Props {
  organizationId: string;
}
export const WidgetView = ({ organizationId }: Props) => {
  return (
    <main className="min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      <WidgetAuthScreen />
    </main>
  );
};
