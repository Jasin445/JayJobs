import { useState } from "react";

export default function Settings(){
        const [settings, setSettings] = useState({
          notifications: true,
          darkMode: false,
        });
      
        const handleToggle = (key: 'notifications' | 'darkMode') => {
          setSettings({ ...settings, [key]: !settings[key] });
        };
      
        return (
          <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Settings</h1>
            <div className="bg-white rounded shadow p-4">
              <div className="flex justify-between items-center mb-2">
                <span>Notifications</span>
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={() => handleToggle('notifications')}
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Dark Mode</span>
                <input
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={() => handleToggle('darkMode')}
                />
              </div>
            </div>
          </div>
        );
      };
