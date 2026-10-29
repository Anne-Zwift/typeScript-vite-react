import { useState } from 'react';
import type { UserPreferences, AppTheme, AppLanguage } from '@/types/user';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectContent } from '@/components/ui/select';

export function PreferencesPanel() {
  //1. the state
  const [preferences, setPreferences] = useState<UserPreferences>({
    receiveNotifications: true,
    theme: 'system',
    language: 'nb',
  });

  // 2. prepare the function that should run when "Save" is clicked
  const handleSave = () => {
    console.log('Current settings in the state:', preferences);
  };

  // Return the HTML/JSX Structure as in Card compnent
  return (
    <div className='w-full max-w-md mx-auto p-4'>
      {/**1. the panel */}
      <Card>
        {/** title */}
        <CardHeader>
          <CardTitle>User settings</CardTitle>
          <CardDescription>
            Manage your notifications, display theme, and language preferences
            from here.
          </CardDescription>
        </CardHeader>
        {/**2. card content */}
        <CardContent className='space-y-6'>
          {/**Section 1: Notification */}
          <div className='flex items-center justify-between space-x-2 rounded-lg border p-4'>
            <div className='space-y-0.5'>
              <label
                htmlFor='notifications'
                className='text-base cursor-pointer'>
                Recieive notifications
              </label>
              <p className='text-xs text-muted-foreground'>
                Get updates and important messages sent directly.
              </p>
            </div>
            {/* The switch is bound to the state. onCheckedChange listens for clicks and updates only receiveNotifications. */}
            <Switch
              id='notifications'
              checked={preferences.receiveNotifications}
              onCheckedChange={(checked) =>
                setPreferences((prev) => ({
                  ...prev,
                  receiveNotifications: checked,
                }))
              }
            />
          </div>
          {/**Section 2: Theme */}
          <div className='space-y-2'>
            <Label htmlFor='theme'>Theme</Label>
            {/* Select is bound to preferences.theme. onValueChange updates the state when a new option is selected. */}
            <Select
              value={preferences.theme}
              onValueChange={(value) =>
                setPreferences((prev) => ({
                  ...prev,
                  theme: value as AppTheme,
                }))
              }>
              <SelectTrigger id='theme'>
                <SelectValue placeholder='Select theme' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='light'>Light</SelectItem>
                <SelectItem value='dark'>Dark</SelectItem>
                <SelectItem value='system'>System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Section 3: Language */}
          <div className='space-y-2'>
            <Label htmlFor='language'>Language</Label>
            <Select
              value={preferences.language}
              onValueChange={(value) =>
                setPreferences((prev) => ({
                  ...prev,
                  language: value as AppLanguage,
                }))
              }>
              <SelectTrigger id='language'>
                <SelectValue placeholder='Select language' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='nb'>Norwegian</SelectItem>
                <SelectItem value='en'>English</SelectItem>
                <SelectItem value='de'>German</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        {/**3. card footer */}
        <CardFooter>
          <Button onClick={handleSave} className='w-full'>
            Save user settings
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
