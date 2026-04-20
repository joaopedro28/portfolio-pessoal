import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at 15% 10%, rgba(79,116,212,0.35), transparent 30%), linear-gradient(180deg, #0B1220 0%, #060B14 100%)",
          color: "rgba(255,255,255,0.94)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "28px",
          }}
        >
          <div
            style={{
              width: "58px",
              height: "58px",
              borderRadius: "999px",
              border: "1px solid rgba(147,164,200,0.28)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(12,19,33,0.96)",
              fontSize: "24px",
            }}
          >
            JP
          </div>
          <span>Portfólio pessoal</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "72px", fontWeight: 700, lineHeight: 0.95 }}>
            João Pedro
          </div>
          <div style={{ fontSize: "34px", color: "#C9D5F1" }}>
            Desenvolvedor Front-end para e-commerce
          </div>
          <div
            style={{
              maxWidth: "900px",
              fontSize: "28px",
              lineHeight: 1.45,
              color: "#93A4C8",
            }}
          >
            React, Shopify, performance e interfaces sólidas para operações que
            precisam evoluir continuamente.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
