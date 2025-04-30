'use client';
import CopyToClipboard from "@/components/dashboard/copy-to-clipboard";
import  {Input}  from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ThemeSelect from "@/components/dashboard/settings/theme-select";
import TokenPreference from "@/components/dashboard/settings/token-preference";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useState } from "react";

export default function Settings() {
  const [form, setForm] = useState({
    theme: "dark",
    name: "",
    email: "",
    language: "en",
    bio: "",
    tokenPreference: "USDC",
    emailAlerts: true,
    inAppNotifications: false,
  })

  return (
    <div className="text-white space-y-12">
      <h1 className="text-2xl md:text-4xl font-semibold text-white">Settings</h1>

      <section className="space-y-3">
        <div className="space-y-2.5">
          <span className="block text-xs">Public profile link</span>
          <CopyToClipboard
            text="www.coinmarletcap.com"
            onCopied={() => alert("Copied to clipboard!")}
            className="md:max-w-sm"
          />
        </div>

        <div className="space-y-2.5">
          <span className="block text-xs">Theme</span>
          <ThemeSelect
            value={form.theme}
            onChange={(value => setForm({ ...form, theme: value }))}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-2.5 md:gap-4 md:max-w-2/3">
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="name" className="text-xs">Display Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              className="border-[#515461]"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              value={form.name}
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="email" className="text-xs">Email address (for Notification)</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="border-[#515461]"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              value={form.email}
            />
          </div>

          <Label className="flex flex-col items-start gap-2">
            <span className="text-xs">Language</span>
            <Select
              value={form.language}
              onValueChange={(value) => setForm({ ...form, language: value })}>
              <SelectTrigger className="w-full border-[#515461]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Language</SelectLabel>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Label>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="bio">Description / Bio</Label>
            <Input
              type="text"
              id="bio"
              placeholder="Description / Bio"
              className="border-[#515461]"
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
              value={form.bio}
            />
          </div>

          <div className="md:col-span-2 grid w-full items-center gap-2">
            <Label htmlFor="bio">Default Token Preference</Label>
            <TokenPreference
              value={form.tokenPreference}
              options={["USDC", "STRK"]}
              onChange={(value) => setForm({ ...form, tokenPreference: value })}
            />
          </div>

          <div className="col-start-1 flex items-center justify-between gap-2"> 
            <Label htmlFor="email-alerts">Toggle Email Alerts</Label>
            <Switch
              id="email-alerts"
              className="border-2 border-white data-[state=checked]:border-[#259BA5]
              !bg-transparent data-[state=checked]:!bg-[#259BA5]"
              checked={form.emailAlerts}
              onCheckedChange={(checked) => setForm({ ...form, emailAlerts: checked })}
            />
          </div>

          <div className="col-start-1 flex items-center justify-between gap-2"> 
            <Label htmlFor="in-app-notif">Toggle In-App Notifications</Label>
            <Switch
              id="in-app-notif"
              className="border-2 border-white data-[state=checked]:border-[#259BA5]
              !bg-transparent data-[state=checked]:!bg-[#259BA5]"
              checked={form.inAppNotifications}
              onCheckedChange={(checked) => setForm({ ...form, inAppNotifications: checked })}
            />
          </div>
        </div>
      </section>
    </div>
  )
}