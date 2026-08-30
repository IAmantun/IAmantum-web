// NavbarGlow: a Knight-Rider-style "comet" scanner under the IAmantum
// wordmark in the navbar.
//
// Structure:
// - .comet-track is the thin, dark rail the comet travels inside of. It
//   is width:100% of its parent, which is the wordmark's own text span,
//   so 0% and 100% here are exactly the start and end of the word.
// - .comet is the moving indicator: a linear-gradient with a solid head
//   and a tail that fades out to opacity 0.
//
// Motion: one CSS animation drives left/right travel, a squash-and-stretch
// scaleX, and the head/tail orientation, in a single seamless 0% to 100%
// loop (no "alternate" - the loop wraps invisibly, see "Direction flip").
//
// "left" is only ever set at four points in the keyframes: 0%, 44%, 56%
// and 96%/100%. Every other keyframe (stretch, fade, flip) deliberately
// leaves "left" alone. A CSS animation only interpolates a property
// between the keyframes that actually define it, so this makes "left"
// glide as one continuous eased arc across 0% to 44% and another across
// 56% to 96%, instead of a jerky chain of mini-eases.
//
// Direction flip: the comet is a single asymmetric gradient (head on one
// side, tail fading on the other). Turning around means mirroring it with
// scaleX(-1). Flipping is instantaneous and would pop visibly mid-flight,
// so it always happens while opacity is pinned at 0: the comet fades out
// arriving at an edge, flips while fully invisible, then fades back in
// already pointing the new direction. The right-edge turnaround (46% to
// 56%) does this explicitly; the left-edge turnaround reuses the loop
// seam (96% to 100% to 0% to 4%) for the same effect.
//
// Easing: cubic-bezier(0.65, 0, 0.35, 1) gives the travel real inertia -
// slow leaving and entering each edge, fastest (and slightly stretched,
// for a motion-blur feel) through the middle.
export default function NavbarGlow() {
  return (
    <span
      aria-hidden="true"
      className="comet-track pointer-events-none absolute top-full -mt-1.5 h-[3px] w-full overflow-hidden rounded-full bg-black/25"
    >
      <span className="comet" />

      <style>{`
        .comet {
          position: absolute;
          inset: 0 auto 0 0;
          width: 38%;
          border-radius: 9999px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(0, 191, 255, 0.15) 25%,
            #00bfff 75%,
            #eaf9ff 100%
          );
          box-shadow: 0 0 6px 1px rgba(0, 191, 255, 0.8);
          animation: comet-run 4.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }

        @keyframes comet-run {
          /* hidden right at the start of the word, already oriented to head right */
          0%   { left: 0%; opacity: 0; transform: scaleX(1); }

          /* fade in and begin the rightward sweep */
          4%   { opacity: 1; }

          /* fastest point of the rightward run: stretched for motion blur;
             left is not set here, so it keeps easing smoothly underneath */
          22%  { transform: scaleX(1.35); }

          /* arrive at the end of the word, settled back to normal width */
          44%  { left: 62%; transform: scaleX(1); }

          /* fade out right at the edge... */
          46%  { opacity: 0; }
          /* ...flip while fully invisible... */
          48%  { transform: scaleX(-1); }
          /* ...and fade back in already pointing left. left is re-pinned
             at the same 62% so the comet cannot drift while it is hidden */
          56%  { left: 62%; opacity: 1; }

          /* fastest point of the leftward run, stretched the other way */
          78%  { transform: scaleX(-1.35); }

          /* settle back to normal width just before reaching the start */
          94%  { transform: scaleX(-1); }

          /* fade out arriving back at the start of the word */
          96%  { left: 0%; opacity: 0; }

          /* flip back while invisible, matches the 0% keyframe exactly,
             so the loop repeats with no visible seam */
          100% { transform: scaleX(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .comet {
            animation: none;
            left: 0%;
            opacity: 1;
          }
        }
      `}</style>
    </span>
  );
}
