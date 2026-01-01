/**
 * The circular background for the cursor
 */
export function CursorBackground() {
  return (
    <div className="absolute h-[136px] left-[3px] top-[5px] w-[135px]">
      <div className="absolute inset-[0_-2.96%_-5.88%_-2.96%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 143 144"
        >
          <g filter="url(#filter0_d_1_146)">
            <ellipse
              cx="71.5"
              cy="68"
              fill="var(--fill-0, #F5F5F5)"
              rx="67.5"
              ry="68"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="144"
              id="filter0_d_1_146"
              width="143"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_146"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_146"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
