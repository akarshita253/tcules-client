"use client"
export function Loader() {
  return (
    <div className="relative h-12 w-12 animate-[spin988_2s_linear_infinite]">
      <div className="absolute left-0 top-0 h-5 w-5 rounded-full bg-accent-600" />
      <div className="absolute right-0 top-0 h-5 w-5 rounded-full bg-accent-600" />
      <div className="absolute bottom-0 left-0 h-5 w-5 rounded-full bg-accent-600" />
      <div className="absolute bottom-0 right-0 h-5 w-5 rounded-full bg-accent-600" />
      <style jsx>{`
        @keyframes spin988 {
          0% {
            transform: scale(1) rotate(0deg);
          }
          20%,
          25% {
            transform: scale(1.3) rotate(90deg);
          }
          45%,
          50% {
            transform: scale(1) rotate(180deg);
          }
          70%,
          75% {
            transform: scale(1.3) rotate(270deg);
          }
          95%,
          100% {
            transform: scale(1) rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
