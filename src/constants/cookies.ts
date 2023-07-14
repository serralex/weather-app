export enum COOKIE_EXPIRES_IN {
  halfAnHour = 30 * 60,
  anHour = 60 * 60,
  oneDay = 24 * 60 * 60,
  threeDays = 3 * 24 * 60 * 60,
  sevenDays = 7 * 24 * 60 * 60,
  fourteenDays = 14 * 24 * 60 * 60,
  thirtyDays = 30 * 24 * 60 * 60,
  maxAge = 1000 * 60 * 60 * 24 * 14,
}

export const COOKIE_NAMES = {
  userLocation: "userLocation",
};
