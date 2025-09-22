import { atom } from "jotai";
import { WidgetScreen } from "@/modules/widget/types";
import { atomFamily } from "jotai/vanilla/utils/atomFamily";
import { atomWithStorage } from "jotai/vanilla/utils/atomWithStorage";
import { CONTACT_SESSION_KEY } from "@/modules/widget/constants";
import { Id } from "@workspace/backend/_generated/dataModel";
//Basic Widget State Atoms
export const screenAtom = atom<WidgetScreen>("loading");
export const organizationIdAtom = atom<string | null>(null);
//Organization-scoped contact session atoms
export const contactSessionIdAtomFamily = atomFamily((organizationId: string) =>
  atomWithStorage<Id<"contactSessions"> | null>(
    `${CONTACT_SESSION_KEY}_${organizationId}`,
    null,
  ),
);

export const errorMessageAtom = atom<string | null>(null);
export const loadingMessageAtom = atom<string | null>(null);
