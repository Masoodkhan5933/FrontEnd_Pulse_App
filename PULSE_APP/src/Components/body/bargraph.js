import React from 'react';

function BarGraph() {
  return (
    <div className="flex justify-center items-center overflow-hidden">
    <svg className="bar-graph" width="100%" height="545px" viewBox="0 0 1560 545" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="50%" y1="71.0416667%" x2="50%" y2="100%" id="linearGradient-line">
          <stop stopColor="#D6DAE5" offset="0%"></stop>
          <stop stopColor="#D6DAE5" stopOpacity="0" offset="100%"></stop>
        </linearGradient>
      </defs>

      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-661.000000, -290.000000)">
          <g transform="translate(661.000000, 290.000000)">
            <g transform="translate(142.000000, 0.000000)">
              <g className="bars bars-aug" transform="translate(1191.000000, 0.000000)">
                <polygon className="bar bar-green" fill="#00AD6A" points="0 0 36 0 36 499.828125 0 499.828125" style={{ transform: "scaleY(1)" }}></polygon>
                <polygon className="bar bar-red" fill="#F68787" points="39 83 75 83 75 500 39 500" style={{ transform: "scaleY(1)" }}></polygon>
              </g>
              <g class="bars bars-jul" transform="translate(1021.000000, 83.000000)">
                        <polygon class="bar bar-green" fill="#00AD6A" points="0 0 36 0 36 416.828125 0 416.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon class="bar bar-red" fill="#F68787" points="39 153 75 153 75 416.828125 39 416.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g class="bars bars-jun" transform="translate(851.000000, 197.000000)">
                        <polygon class="bar bar-green" fill="#00AD6A" points="0 -1.13686838e-13 36 -1.13686838e-13 36 302.828125 0 302.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon class="bar bar-red" fill="#F68787" points="39 151 75 151 75 302.828125 39 302.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g class="bars bars-may" transform="translate(680.000000, 116.000000)">
                        <polygon class="bar bar-green" fill="#00AD6A" points="0 150 36 150 36 383.828125 0 383.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon class="bar bar-red" fill="#F68787" points="39 5.68434189e-14 75 5.68434189e-14 75 383.828125 39 383.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g class="bars bars-apr" transform="translate(510.000000, 247.000000)">
                        <polygon class="bar bar-green" fill="#00AD6A" points="0 -7.10542736e-14 36 -7.10542736e-14 36 252.828125 0 252.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon class="bar bar-red" fill="#F68787" points="39 12 75 12 75 252.828125 39 252.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g class="bars bars-mar" transform="translate(339.000000, 298.000000)">
                        <polygon class="bar bar-green" fill="#00AD6A" points="0 -1.42108547e-14 36 -1.42108547e-14 36 201.828125 0 201.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon class="bar bar-red" fill="#F68787" points="39 14 75 14 75 201.828125 39 201.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g class="bars bars-feb" transform="translate(170.000000, 290.000000)">
                        <polygon class="bar bar-green" fill="#00AD6A" points="0 12 36 12 36 209.828125 0 209.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon class="bar bar-red" fill="#F68787" points="39 -2.84217094e-14 75 -2.84217094e-14 75 209.828125 39 209.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g class="bars bars-jan" transform="translate(0.000000, 274.000000)">
                        <polygon class="bar bar-green" fill="#00AD6A" points="0 2.84217094e-14 36 2.84217094e-14 36 225.828125 0 225.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon class="bar bar-red" fill="#F68787" points="39 28 75 28 75 225.828125 39 225.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
            </g>

            <g className="base" transform="translate(12.000000, 104.500000)" fillRule="nonzero">
              <polygon className="white-base" fill="#FCFCFC" points="0.5 440.148437 1528 440.148438 1528 1.0463852e-12 1362 60 1191.5 240.5 1021.5 346 850.5 245 680.5 270 509.5 303 340 291 167.120392 333 0.5 297.5"></polygon>
              <polyline className="blue-line" stroke="#87C4F5" strokeWidth="4" points="1528 1.6328125 1362 60 1191.5 240.5 1021.5 346 850.5 245 680.5 270 509.5 303 340 291 167.120392 333 0 297.5"></polyline>
            </g>

            <g className="months" transform="translate(169.000000, 518.000000)" fill="#969696" fontFamily="WorkSans-Regular, Work Sans" fontSize="13" fontWeight="normal" style={{ opacity: 1 }}>
            <text class="aug">
                        <tspan x="1190" y="12">Aug</tspan>
                    </text>
                    <text class="jul">
                        <tspan x="1020" y="12">Jul</tspan>
                    </text>
                    <text class="jun">
                        <tspan x="850" y="12">Jun</tspan>
                    </text>
                    <text class="may">
                        <tspan x="681" y="12">May</tspan>
                    </text>
                    <text class="apr">
                        <tspan x="510" y="12">Apr</tspan>
                    </text>
                    <text class="mar">
                        <tspan x="338" y="12">Mar</tspan>
                    </text>
                    <text class="feb">
                        <tspan x="169" y="12">Feb</tspan>
                    </text>
                    <text class="jan">
                        <tspan x="0" y="12">Jan</tspan>
                    </text>
            </g>

            <g className="lines" transform="translate(179.000000, 177.000000)" style={{ opacity: 1 }}>
            <rect class="line-8" fill="url(#linearGradient-line)" x="1191" y="0" width="1" height="338"></rect>
                    <rect class="line-7" fill="url(#linearGradient-line)" x="1021" y="179" width="1" height="159"></rect>
                    <rect class="line-6" fill="url(#linearGradient-line)" x="851" y="276" width="1" height="62"></rect>
                    <rect class="line-5" fill="url(#linearGradient-line)" x="680" y="179" width="1" height="159"></rect>
                    <rect class="line-4" fill="url(#linearGradient-line)" x="510" y="205" width="1" height="133"></rect>
                    <rect class="line-3" fill="url(#linearGradient-line)" x="339" y="225" width="1" height="113"></rect>
                    <rect class="line-2" fill="url(#linearGradient-line)" x="170" y="225" width="1" height="113"></rect>
                    <rect class="line-1" fill="url(#linearGradient-line)" x="0" y="269" width="1" height="69"></rect>
                
            </g>

            <g className="dots" transform="translate(0.000000, 92.000000)" fill="#87C4F5">
            <circle class="dot dot-10" cx="1539.5" cy="12.5" r="12.5"></circle>
                    <circle class="dot dot-9" cx="1370.5" cy="77.5" r="12.5"></circle>
                    <circle class="dot dot-8" cx="1200.5" cy="257.5" r="12.5"></circle>
                    <circle class="dot dot-7" cx="1030.5" cy="358.5" r="12.5"></circle>
                    <circle class="dot dot-6" cx="859.5" cy="257.5" r="12.5"></circle>
                    <circle class="dot dot-5" cx="689.5" cy="282.5" r="12.5"></circle>
                    <circle class="dot dot-4" cx="518.5" cy="315.5" r="12.5"></circle>
                    <circle class="dot dot-3" cx="349.5" cy="303.5" r="12.5"></circle>
                    <circle class="dot dot-2" cx="179.5" cy="345.5" r="12.5"></circle>
                    <circle class="dot dot-1" cx="12.5" cy="308.5" r="12.5"></circle>
                
            </g>
          </g>
        </g>
      </g>
    </svg>
    </div>
  );
}

export default BarGraph;
