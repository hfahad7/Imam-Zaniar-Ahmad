import Link from 'next/link';

import { siteContent } from '../../lib/site-content';
import Icon from './ui-icon';

const ONTARIO_OUTLINE = 'M45.9 269.2 L46.0 169.6 L79.0 139.0 L127.2 87.2 L179.5 36.6 L198.3 49.3 L211.1 64.0 L249.9 77.9 L259.8 86.2 L256.6 95.1 L263.2 88.3 L287.9 87.3 L307.8 90.1 L320.6 95.5 L324.3 103.9 L319.9 122.6 L326.0 136.7 L325.6 155.0 L322.8 162.7 L337.7 182.4 L337.4 186.0 L332.8 189.3 L340.5 190.0 L357.9 204.7 L362.6 216.9 L353.8 225.6 L361.8 219.6 L366.4 219.3 L375.6 224.0 L382.4 232.4 L381.6 345.8 L385.8 361.0 L398.3 381.7 L422.0 388.5 L436.0 401.1 L440.4 398.7 L446.3 409.8 L460.2 413.8 L482.6 406.5 L488.8 406.8 L492.7 409.0 L490.9 417.2 L493.9 420.6 L486.0 427.6 L475.8 431.0 L454.9 450.7 L440.5 472.9 L396.9 474.4 L389.9 478.3 L395.4 496.7 L392.8 500.2 L366.8 514.6 L344.6 519.8 L319.6 537.4 L314.2 537.4 L306.9 532.2 L304.3 522.0 L306.0 516.8 L317.3 506.1 L326.1 474.9 L317.2 416.2 L294.8 400.7 L297.4 394.9 L294.3 390.8 L286.5 391.9 L283.3 377.3 L273.9 379.6 L269.2 373.7 L267.2 365.0 L191.8 318.7 L168.6 328.8 L159.0 328.8 L154.9 324.8 L140.9 325.2 L137.2 321.8 L124.2 326.8 L113.8 318.7 L110.2 317.5 L104.9 319.6 L103.1 314.3 L92.4 308.5 L84.2 308.4 L77.1 311.4 L69.6 307.0 L57.5 304.2 L53.5 295.6 L52.4 285.6 L46.0 283.5Z';

const regionPoints = [
  { short: '01', x: 384.8, y: 468.3, labelX: 397, labelY: 457 },
  { short: '02', x: 377.4, y: 476.3, labelX: 359, labelY: 463 },
  { short: '03', x: 367.9, y: 481.1, labelX: 350, labelY: 494 },
  { short: '04', x: 382.2, y: 489.4, labelX: 400, labelY: 500 },
];

export default function OntarioServiceMap({ compact = false }) {
  return (
    <div className={`service-map${compact ? ' service-map--compact' : ''}`}>
      <div className="service-map__visual">
        <div className="service-map__heading">
          <span>Ontario, Canada</span>
          <strong>Southern Ontario Service Area</strong>
        </div>

        <svg
          className="ontario-map"
          viewBox="0 0 760 570"
          role="img"
          aria-labelledby="ontario-map-title ontario-map-description"
        >
          <title id="ontario-map-title">
            Map of Imam Zaniar Ahmad&apos;s Ontario service regions
          </title>
          <desc id="ontario-map-description">
            A recognizable outline of Ontario with a magnified Southern Ontario
            inset marking the Toronto, Peel–Halton, Hamilton–Waterloo, and
            Niagara–Brant service regions.
          </desc>
          <defs>
            <linearGradient id="ontario-fill" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#326b56" />
              <stop offset="1" stopColor="#173d31" />
            </linearGradient>
            <filter id="map-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="16"
                stdDeviation="18"
                floodColor="#071f18"
                floodOpacity=".24"
              />
            </filter>
            <path id="ontario-geography" d={ONTARIO_OUTLINE} />
          </defs>

          <g className="ontario-map__province" transform="translate(25 55) scale(.78)">
            <use
              className="ontario-map__outline"
              href="#ontario-geography"
              filter="url(#map-shadow)"
            />
            <circle className="ontario-map__service-focus" cx="377" cy="480" r="30" />
            <text className="ontario-map__province-label" x="237" y="270">
              Ontario
            </text>
          </g>

          <g className="ontario-map__north" aria-hidden="true">
            <path d="M61 91 69 69 77 91 69 85Z" />
            <text x="69" y="107" textAnchor="middle">N</text>
          </g>

          <path
            className="ontario-map__inset-connector"
            d="M320 430 C365 430 386 398 420 398"
          />
          <circle className="ontario-map__connector-dot" cx="320" cy="430" r="4" />

          <g className="ontario-map__inset">
            <rect x="415" y="282" width="330" height="260" rx="24" />
            <text className="ontario-map__inset-kicker" x="438" y="311">
              Magnified View
            </text>
            <text className="ontario-map__inset-title" x="438" y="335">
              Southern Ontario
            </text>
          </g>

          <svg
            className="ontario-map__inset-map"
            x="428"
            y="345"
            width="304"
            height="180"
            viewBox="330 445 90 70"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <use className="ontario-map__inset-land" href="#ontario-geography" />
            <path
              className="ontario-map__corridor"
              d="M361 484 C370 478 379 476 389 470"
            />

            {regionPoints.map((point, index) => (
              <g className="map-marker" key={point.short}>
                <line
                  x1={point.x}
                  y1={point.y}
                  x2={point.labelX}
                  y2={point.labelY}
                />
                <circle
                  className="map-marker__pulse"
                  cx={point.x}
                  cy={point.y}
                  r="3.4"
                  style={{ animationDelay: `${index * 0.45}s` }}
                />
                <circle
                  className="map-marker__dot"
                  cx={point.x}
                  cy={point.y}
                  r="1.6"
                />
                <circle
                  className="map-marker__label"
                  cx={point.labelX}
                  cy={point.labelY}
                  r="4.7"
                />
                <text x={point.labelX} y={point.labelY + 1.7} textAnchor="middle">
                  {point.short}
                </text>
              </g>
            ))}
          </svg>
        </svg>

        <div className="service-map__legend">
          <span><i /> Southern Ontario service corridor</span>
          <span>Boundary data: Natural Earth</span>
        </div>
      </div>

      <div className="service-map__regions" aria-label="Ontario service areas by region">
        {siteContent.serviceAreaGroups.map((group, index) => (
          <article className="service-map__region" key={group.region}>
            <span className="service-map__region-number">0{index + 1}</span>
            <div>
              <h3>{group.region}</h3>
              <p>{group.areas.join(' \u00b7 ')}</p>
            </div>
            <Icon name="mapPin" />
          </article>
        ))}
        <div className="service-map__action">
          <Icon name="compass" />
          <p>Nikah outside Ontario?</p>
          <span className="service-map__travel-note">
            Available by request with additional travel fees.
          </span>
          <Link className="text-link" href="/contact">
            Ask About Your Location <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
