"use client";

export default function KazooButton() {
  const playKazoo = () => {
    const ctx = new AudioContext();

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    // Vibrato via LFO
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();

    lfo.frequency.value = 12; // 12Hz vibrato
    lfoGain.gain.value = 8;   // vibrato depth in Hz

    lfo.connect(lfoGain);
    lfoGain.connect(oscillator.frequency);

    oscillator.type = "sawtooth";
    oscillator.frequency.value = 320;

    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    lfo.start();
    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.6);
    lfo.stop(ctx.currentTime + 0.6);
  };

  return (
    <button
      onClick={playKazoo}
      className="font-pixel text-xs px-3 py-2 hover:opacity-80 transition-opacity"
      style={{
        color: "#e8c84a",
        border: "2px solid #e8c84a",
        backgroundColor: "transparent",
      }}
      aria-label="Play kazoo sound"
    >
      * [kazoo] *
    </button>
  );
}
