"use client";

export default function SectionDivider() {
    return (
        <div
            className="
                relative
                h-40
                overflow-hidden
            "
        >
            {/* Glow */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-transparent
                    via-cyan-400/10
                    to-transparent
                "
            />

            {/* Blur Orb 1 */}
            <div
                className="
                    absolute
                    left-1/4
                    top-1/2
                    h-40
                    w-40
                    -translate-y-1/2
                    rounded-full
                    bg-cyan-400/20
                    blur-3xl
                "
            />

            {/* Blur Orb 2 */}
            <div
                className="
                    absolute
                    right-1/4
                    top-1/2
                    h-40
                    w-40
                    -translate-y-1/2
                    rounded-full
                    bg-violet-500/20
                    blur-3xl
                "
            />
        </div>
    );
}