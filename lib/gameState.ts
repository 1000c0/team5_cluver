export const STARTABLE_SCREENS = new Set([
  "tutorialScreen",
  "dreamScreen",
  "briefingScreen",
  "fieldOne",
  "chunwolRoom",
  "mudeokServantRoom",
  "yoomunseokSarangbang",
  "dolsoeQuarters",
  "backGateCourtyard",
  "interrogationScreen"
]);

export const routeInitialScreens = {
  "/crime_scene": "fieldOne",
  "/field-one": "fieldOne",
  "/chunwol-room": "chunwolRoom",
  "/mudeok-servant-room": "mudeokServantRoom",
  "/yoomunseok-sarangbang": "yoomunseokSarangbang",
  "/dolsoe-quarters": "dolsoeQuarters",
  "/back-gate-courtyard": "backGateCourtyard",
  "/interrogation": "interrogationScreen",
  "/tutorial": "tutorialScreen",
  "/dream": "dreamScreen",
  "/briefing": "briefingScreen"
} as const;

export type StartableScreen = (typeof routeInitialScreens)[keyof typeof routeInitialScreens];

