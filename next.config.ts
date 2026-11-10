import type { NextConfig } from "next";
import fs from "fs";

// Fix for Windows FAT32/exFAT filesystems where readlink returns EISDIR instead of EINVAL on regular non-symlink files
const origReadlink = fs.readlink;
// @ts-ignore
fs.readlink = function(path: any, options: any, callback?: any) {
  if (typeof options === "function") {
    callback = options;
    options = {};
  }
  return (origReadlink as any).call(fs, path, options, (err: any, linkString: any) => {
    if (err && (err.code === "EISDIR" || err.code === "UNKNOWN")) {
      const e: any = new Error("invalid argument");
      e.code = "EINVAL";
      return callback?.(e);
    }
    return callback?.(err, linkString);
  });
};

const origReadlinkSync = fs.readlinkSync;
// @ts-ignore
fs.readlinkSync = function(path: any, options?: any) {
  try {
    return origReadlinkSync.call(fs, path, options);
  } catch (err: any) {
    if (err && (err.code === "EISDIR" || err.code === "UNKNOWN")) {
      const e: any = new Error("invalid argument");
      e.code = "EINVAL";
      throw e;
    }
    throw err;
  }
};

if (fs.promises && fs.promises.readlink) {
  const origPromisesReadlink = fs.promises.readlink;
  // @ts-ignore
  fs.promises.readlink = async function(path: any, options?: any) {
    try {
      return await origPromisesReadlink.call(fs.promises, path, options);
    } catch (err: any) {
      if (err && (err.code === "EISDIR" || err.code === "UNKNOWN")) {
        const e: any = new Error("invalid argument");
        e.code = "EINVAL";
        throw e;
      }
      throw err;
    }
  };
}

const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  reactStrictMode: true,
};

export default nextConfig;
