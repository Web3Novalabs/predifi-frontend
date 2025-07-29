import { clsx, type ClassValue } from "clsx";
import { CairoCustomEnum, RpcProvider } from "starknet";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortenAddress(address: `0x${string}`, chars = 4): string {
  if (!address || address.length < chars * 2 + 2) return address;
  return `${address.slice(0, 5)}...${address.slice(-chars)}`;
}

export const myProvider = new RpcProvider({
  nodeUrl: process.env.NEXT_PUBLIC_RPC_URL,
});

export function toEpochTime(date: string | Date): number {
  const d = typeof date === "string" ? new Date(date) : date;
  return Math.floor(d.getTime() / 1000);
}

export function createCairoEnum(value: string): CairoCustomEnum {
  return new CairoCustomEnum({ [value]: {} });
}

// Converting BigInt to contract address
export function bigIntToHex(value: bigint): `0x${string}` {
  return `0x${value.toString(16)}`;
}

// Bearer token for pinata
export const PINATA_BEARER_TOKEN = "";

export function formatToGMTPlusOne(timestamp: number): string {
  const date = new Date(timestamp * 1000);

  return date.toLocaleString("en-GB", {
    timeZone: "Etc/GMT-1",
    hour12: false,
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatTimeDiffFromNow(unix: number): string {
  const now = Math.floor(Date.now() / 1000);
  let diff = Math.max(unix - now, 0); // prevent negative

  const hours = Math.floor(diff / 3600);
  diff %= 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  const parts = [];
  if (hours) parts.push(`${hours}h`);
  if (minutes || hours) parts.push(`${minutes}m`);
  parts.push(`${seconds}s`);

  return parts.join(" ");
}

type TruncateOptions = {
  maxLength: number;
  suffix?: string;
  truncateMiddle?: {
    front: number;
    back: number;
  };
};

export function truncate(value: string, options: TruncateOptions): string {
  const { maxLength, suffix = "…", truncateMiddle } = options;

  if (typeof value !== "string") return "";

  if (value.length <= maxLength) return value;

  if (truncateMiddle) {
    const { front, back } = truncateMiddle;
    const totalPreserved = front + back;

    // If not enough space, fallback to normal front truncation
    if (
      totalPreserved + suffix.length > maxLength ||
      totalPreserved >= value.length
    ) {
      return value.slice(0, maxLength - suffix.length) + suffix;
    }

    const start = value.slice(0, front);
    const end = value.slice(value.length - back);
    return `${start}${suffix}${end}`;
  }

  // Default front-only truncation
  const visibleLength = maxLength - suffix.length;
  return value.slice(0, Math.max(visibleLength, 0)) + suffix;
}
