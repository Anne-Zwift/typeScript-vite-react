export type AppTheme = 'light' | 'dark' | 'system';
export type AppLanguage = 'nb' | 'en' | 'de';

export interface UserPreferences {
  receiveNotifications: boolean;
  theme: AppTheme;
  language: AppLanguage;
}
