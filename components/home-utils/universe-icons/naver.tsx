export default function Naver({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0,0,256,256"
      width="64px"
      height="64px"
      fill-rule="nonzero"
    >
      <defs>
        <linearGradient
          x1="32"
          y1="9.083"
          x2="32"
          y2="54.676"
          gradientUnits="userSpaceOnUse"
          id="color-1"
        >
          <stop offset="0" stop-color="#20c997"></stop>
          <stop offset="1" stop-color="#20c997"></stop>
        </linearGradient>
        <linearGradient
          x1="32"
          y1="13"
          x2="32"
          y2="51"
          gradientUnits="userSpaceOnUse"
          id="color-2"
        >
          <stop offset="0" stop-color="#20c997"></stop>
          <stop offset="1" stop-color="#20c997"></stop>
        </linearGradient>
      </defs>
      <g
        fill="none"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <g transform="scale(4,4)">
          <path
            d="M50,55h-36c-2.76,0 -5,-2.24 -5,-5v-36c0,-2.76 2.24,-5 5,-5h36c2.76,0 5,2.24 5,5v36c0,2.76 -2.24,5 -5,5zM14,11c-1.65,0 -3,1.35 -3,3v36c0,1.65 1.35,3 3,3h36c1.65,0 3,-1.35 3,-3v-36c0,-1.65 -1.35,-3 -3,-3z"
            fill="url(#color-1)"
          ></path>
          <path
            d="M50,13h-36c-0.542,0 -1,0.458 -1,1v36c0,0.542 0.458,1 1,1h36c0.542,0 1,-0.458 1,-1v-36c0,-0.542 -0.458,-1 -1,-1zM41.59,41.633h-5.793l-7.276,-10.053v10.101h-6.271v-19.197c0,0.144 6.176,-0.048 6.176,-0.048l7.037,10.053v-10.149h6.128v19.293z"
            fill="url(#color-2)"
          ></path>
        </g>
      </g>
    </svg>
  );
}
