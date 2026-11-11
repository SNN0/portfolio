"use client";

import Script from "next/script";
import { useEffect } from "react";
import { profile } from "@/data/profile";

const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

export function trackCvDownload() {
  const tracker = (window as Window & { umami?: { track: (event: string) => void } }).umami;
  if (websiteId) tracker?.track("cv-download");
}

export function CvAnalytics() {
  useEffect(() => {
    if (!websiteId) return;
    function trackLink(event: MouseEvent) {
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (link?.origin === window.location.origin && link.pathname === profile.cvPath) trackCvDownload();
    }
    document.addEventListener("click", trackLink, true);
    return () => document.removeEventListener("click", trackLink, true);
  }, []);

  if (!websiteId) return null;
  return <Script src="https://cloud.umami.is/script.js" data-website-id={websiteId} data-auto-track="false" data-domains="sinaneyuboglu.dev" data-exclude-search="true" data-exclude-hash="true" />;
}
