"use client";

// ADSENSE — quando a conta for aprovada:
// 1. Descomentar o script no layout.js
// 2. Trocar SHOW_ADS para true
// 3. Substituir os data-ad-client e data-ad-slot pelos valores reais do AdSense

const SHOW_ADS = false;
const AD_CLIENT = "ca-pub-XXXXXXXXXX"; // substituir pelo Publisher ID

const adSlots = {
  "in-content": "XXXXXXXXXX", // substituir pelos Ad Unit IDs reais
  footer: "XXXXXXXXXX",
  sidebar: "XXXXXXXXXX",
};

export default function AdSlot({ position = "in-content" }) {
  if (SHOW_ADS) {
    return (
      <div className="w-full my-10 overflow-hidden">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={AD_CLIENT}
          data-ad-slot={adSlots[position] || adSlots["in-content"]}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
          }}
        />
      </div>
    );
  }

  // Placeholder — visível apenas em desenvolvimento
  if (process.env.NODE_ENV === "development") {
    return (
      <div className="w-full rounded-xl bg-bg-accent border border-dashed border-border-strong flex items-center justify-center py-10 my-10">
        <span className="text-xs text-text-muted font-medium tracking-wide uppercase">
          Publicidade · {position}
        </span>
      </div>
    );
  }

  return null;
}
