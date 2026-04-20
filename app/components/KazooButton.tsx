"use client";

export default function KazooButton() {
  const playKazoo = () => {
    const ctx = new AudioContext();
    const now = ctx.currentTime;

    // Oscillator 1: sawtooth with frequency wobble
    const saw = ctx.createOscillator();
    saw.type = "sawtooth";
    saw.frequency.setValueAtTime(220, now);
    saw.frequency.linearRampToValueAtTime(260, now + 0.35 / 3);
    saw.frequency.linearRampToValueAtTime(240, now + (0.35 * 2) / 3);
    saw.frequency.linearRampToValueAtTime(280, now + 0.35);

    // Oscillator 2: square at 440Hz
    const square = ctx.createOscillator();
    square.type = "square";
    square.frequency.setValueAtTime(440, now);

    // Shared gain envelope
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.58);
    gain.gain.linearRampToValueAtTime(0, now + 0.65);

    saw.connect(gain);
    square.connect(gain);
    gain.connect(ctx.destination);

    saw.start(now);
    square.start(now);
    saw.stop(now + 0.65);
    square.stop(now + 0.65);
    saw.addEventListener("ended", () => {
      ctx.close();
    });
  };

  return (
    <button
      onClick={playKazoo}
      className="font-vt323 text-xl hover:opacity-80 transition-opacity"
      style={{ color: "#e8c84a", background: "none", border: "none", cursor: "pointer" }}
      aria-label="Play kazoo sound"
    >
      ♫ [kazoo]
    </button>
  );
}
