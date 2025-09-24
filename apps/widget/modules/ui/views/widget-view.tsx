"use client";
import { WidgetFooter } from "@/modules/ui/components/widget-footer";
import { WidgetHeader } from "@/modules/ui/components/widget-header";
import { WidgetAuthScreen } from "@/modules/ui/screens/widget-auth-screen";
import { useAtomValue } from "jotai";
import { screenAtom } from "@/modules/widget/atoms/widget-atoms";
import { WidgetErrorScreen } from "@/modules/ui/screens/widget-error-screen";
import { WidgetLoadingScreen } from "@/modules/ui/screens/widget-loading-screen";
import { WidgetSelectionScreen } from "@/modules/ui/screens/widget-selection-screen";
import { WidgetChatScreen } from "@/modules/ui/screens/widget-chat-screen";
import { WidgetInboxScreen } from "@/modules/ui/screens/widget-inbox-screen";

interface Props {
  organizationId: string | null;
}
export const WidgetView = ({ organizationId }: Props) => {
  const screen = useAtomValue(screenAtom);
  const screenComponents = {
    error: <WidgetErrorScreen />,
    loading: <WidgetLoadingScreen organizationId={organizationId} />,
    auth: <WidgetAuthScreen />,
    voice: <p>TODO: Voice</p>,
    inbox: <WidgetInboxScreen />,
    selection: <WidgetSelectionScreen />,
    chat: <WidgetChatScreen />,
    contact: <p>TODO: Contact</p>,
  };
  return (
    <main className="min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      {screenComponents[screen]}
    </main>
  );
};
