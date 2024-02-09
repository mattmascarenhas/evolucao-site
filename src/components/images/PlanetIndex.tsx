function PlanetIndex() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="628"
      height="628"
      fill="none"
      viewBox="0 0 628 628"
    >
      <g filter="url(#filter0_d_9_8)">
        <circle cx="314" cy="314" r="264" fill="#444"></circle>
      </g>
      <defs>
        <filter
          id="filter0_d_9_8"
          width="628"
          height="628"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="25"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_8"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_9_8"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default PlanetIndex;
