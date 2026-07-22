import Link from 'next/link';

import { siteContent } from '../../lib/site-content';
import Icon from './ui-icon';

const ONTARIO_OUTLINE = 'M45.9 269.2 L46.0 169.6 L79.0 139.0 L127.2 87.2 L179.5 36.6 L198.3 49.3 L211.1 64.0 L249.9 77.9 L259.8 86.2 L256.6 95.1 L263.2 88.3 L287.9 87.3 L307.8 90.1 L320.6 95.5 L324.3 103.9 L319.9 122.6 L326.0 136.7 L325.6 155.0 L322.8 162.7 L337.7 182.4 L337.4 186.0 L332.8 189.3 L340.5 190.0 L357.9 204.7 L362.6 216.9 L353.8 225.6 L361.8 219.6 L366.4 219.3 L375.6 224.0 L382.4 232.4 L381.6 345.8 L385.8 361.0 L398.3 381.7 L422.0 388.5 L436.0 401.1 L440.4 398.7 L446.3 409.8 L460.2 413.8 L482.6 406.5 L488.8 406.8 L492.7 409.0 L490.9 417.2 L493.9 420.6 L486.0 427.6 L475.8 431.0 L454.9 450.7 L440.5 472.9 L396.9 474.4 L389.9 478.3 L395.4 496.7 L392.8 500.2 L366.8 514.6 L344.6 519.8 L319.6 537.4 L314.2 537.4 L306.9 532.2 L304.3 522.0 L306.0 516.8 L317.3 506.1 L326.1 474.9 L317.2 416.2 L294.8 400.7 L297.4 394.9 L294.3 390.8 L286.5 391.9 L283.3 377.3 L273.9 379.6 L269.2 373.7 L267.2 365.0 L191.8 318.7 L168.6 328.8 L159.0 328.8 L154.9 324.8 L140.9 325.2 L137.2 321.8 L124.2 326.8 L113.8 318.7 L110.2 317.5 L104.9 319.6 L103.1 314.3 L92.4 308.5 L84.2 308.4 L77.1 311.4 L69.6 307.0 L57.5 304.2 L53.5 295.6 L52.4 285.6 L46.0 283.5Z';

const cityPoints = [
  { name: 'Toronto', region: 'toronto', x: 384.8, y: 468.3 },
  { name: 'North York', region: 'toronto', x: 383.8, y: 465.4 },
  { name: 'Etobicoke', region: 'toronto', x: 380.8, y: 470.1 },
  { name: 'Scarborough', region: 'toronto', x: 389.1, y: 468.2 },
  { name: 'Markham', region: 'toronto', x: 388.4, y: 463.1 },
  { name: 'Richmond Hill', region: 'toronto', x: 385.7, y: 460.7 },
  { name: 'Vaughan', region: 'toronto', x: 381.9, y: 462.4 },
  { name: 'Brampton', region: 'peel-halton', x: 375.8, y: 466.2 },
  { name: 'Mississauga', region: 'peel-halton', x: 376.6, y: 471.6 },
  { name: 'Oakville', region: 'peel-halton', x: 371.7, y: 475.7 },
  { name: 'Burlington', region: 'peel-halton', x: 367.2, y: 479.3 },
  { name: 'Milton', region: 'peel-halton', x: 368.7, y: 470.2 },
  { name: 'Hamilton', region: 'hamilton-waterloo', x: 362.8, y: 482.2 },
  { name: 'Stoney Creek', region: 'hamilton-waterloo', x: 366.1, y: 484.1 },
  { name: 'Kitchener', region: 'hamilton-waterloo', x: 354.8, y: 470.2 },
  { name: 'Waterloo', region: 'hamilton-waterloo', x: 353.8, y: 467.1 },
  { name: 'Cambridge', region: 'hamilton-waterloo', x: 359.3, y: 473.7 },
  { name: 'Guelph', region: 'hamilton-waterloo', x: 360.9, y: 466.5 },
  { name: 'Niagara Falls', region: 'niagara-brant', x: 377.5, y: 491.3 },
  { name: 'St. Catharines', region: 'niagara-brant', x: 372.4, y: 487.8 },
  { name: 'Brantford', region: 'niagara-brant', x: 356.5, y: 482.3 },
];

const mapLabels = [
  { name: 'Waterloo', x: 353.8, y: 467.1, dx: -7, dy: -4 },
  { name: 'Hamilton', x: 362.8, y: 482.2, dx: -8, dy: 8 },
  { name: 'Mississauga', x: 376.6, y: 471.6, dx: 2, dy: 8 },
  { name: 'Toronto', x: 384.8, y: 468.3, dx: 3, dy: -5 },
  { name: 'Niagara Falls', x: 377.5, y: 491.3, dx: 3, dy: 7 },
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
          viewBox="0 0 1040 650"
          role="img"
          aria-labelledby="ontario-map-title ontario-map-description"
        >
          <title id="ontario-map-title">
            Map of Imam Zaniar Ahmad&apos;s Ontario service regions
          </title>
          <desc id="ontario-map-description">
            A recognizable outline of Ontario beside a detailed Southern Ontario
            service map. One dot marks each listed city in the Toronto,
            Peel-Halton, Hamilton-Waterloo, and Niagara-Brant regions.
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

          <g className="ontario-map__province" transform="translate(18 38) scale(1.04)">
            <use
              className="ontario-map__outline"
              href="#ontario-geography"
              filter="url(#map-shadow)"
            />
            <circle className="ontario-map__service-focus" cx="372" cy="477" r="35" />
            <text className="ontario-map__province-label" x="237" y="270">
              Ontario
            </text>
          </g>

          <g className="ontario-map__north" aria-hidden="true">
            <path d="M34 89 42 67 50 89 42 83Z" />
            <text x="42" y="105" textAnchor="middle">N</text>
          </g>

          <path
            className="ontario-map__inset-connector"
            d="M422 535 C500 535 500 370 548 370"
          />
          <circle className="ontario-map__connector-dot" cx="422" cy="535" r="5" />

          <g className="ontario-map__inset">
            <rect x="540" y="50" width="480" height="550" rx="28" />
            <text className="ontario-map__inset-kicker" x="572" y="88">
              City-by-City Detail
            </text>
            <text className="ontario-map__inset-title" x="572" y="120">
              Southern Ontario Service Area
            </text>
          </g>

          <svg
            className="ontario-map__inset-map"
            x="570"
            y="142"
            width="420"
            height="355"
            viewBox="346 451 52 48"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <use className="ontario-map__inset-land" href="#ontario-geography" />
            <path
              className="ontario-map__corridor"
              d="M353 468 C361 476 368 479 377 472 C381 469 386 466 390 468 M363 482 C369 486 373 488 378 491"
            />

            {cityPoints.map((point, index) => (
              <g className={`city-marker city-marker--${point.region}`} key={point.name}>
                <title>{point.name}</title>
                <circle
                  className="city-marker__pulse"
                  cx={point.x}
                  cy={point.y}
                  r="1.35"
                  style={{ animationDelay: `${(index % 7) * 0.18}s` }}
                />
                <circle
                  className="city-marker__dot"
                  cx={point.x}
                  cy={point.y}
                  r="0.62"
                />
              </g>
            ))}

            {mapLabels.map((label) => (
              <g className="city-label" key={label.name}>
                <line
                  x1={label.x}
                  y1={label.y}
                  x2={label.x + label.dx * 0.72}
                  y2={label.y + label.dy * 0.72}
                />
                <text x={label.x + label.dx} y={label.y + label.dy}>
                  {label.name}
                </text>
              </g>
            ))}
          </svg>

          <g className="ontario-map__detail-note" aria-hidden="true">
            <circle cx="578" cy="540" r="4" />
            <text x="590" y="544">Each dot marks a listed city</text>
          </g>
        </svg>

        <div className="service-map__legend">
          <span><i /> Southern Ontario service corridor and city markers</span>
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
            <span className="service-map__city-count">
              {group.areas.length} {group.areas.length === 1 ? 'city' : 'cities'}
            </span>
          </article>
        ))}
        <div className="service-map__action">
          <span className="service-map__action-icon"><Icon name="compass" /></span>
          <div>
            <p>Nikah Outside Ontario?</p>
            <span className="service-map__travel-note">
              Available by request with additional travel fees.
            </span>
          </div>
          <Link className="button button--primary" href="/contact">
            Ask About Travel Availability
          </Link>
        </div>
      </div>
    </div>
  );
}
