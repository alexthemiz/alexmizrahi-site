"use client";

export default function KazooButton() {
  const playChicken = () => {
    const audio = new Audio("/sounds/rubberchicken.mp3");
    audio.play();
  };

  return (
    <button
      onClick={playChicken}
      style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
      aria-label="Play rubber chicken sound"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/chicken.png" alt="rubber chicken" width={32} height={32} />
    </button>
  );
}
