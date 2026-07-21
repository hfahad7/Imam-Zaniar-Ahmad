import Link from 'next/link';

import { siteContent } from '../../lib/site-content';
import Icon from './ui-icon';

const regionPoints = [
  { short: '01', x: 438, y: 480, labelX: 16, labelY: -12, anchor: 'start' },
  { short: '02', x: 370, y: 522, labelX: -16, labelY: -12, anchor: 'end' },
  { short: '03', x: 288, y: 482, labelX: -16, labelY: -12, anchor: 'end' },
  { short: '04', x: 410, y: 558, labelX: 14, labelY: 25, anchor: 'start' },
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
          viewBox="0 0 620 620"
          role="img"
          aria-labelledby="ontario-map-title ontario-map-description"
        >
          <title id="ontario-map-title">Map of Imam Zaniar Ahmad&apos;s Ontario service regions</title>
          <desc id="ontario-map-description">
            Service markers across the Greater Toronto Area, Hamilton and Halton,
            Waterloo and Wellington, and Niagara and Brant.
          </desc>
          <defs>
            <linearGradient id="ontario-fill" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#2c5b49" />
              <stop offset="1" stopColor="#173d31" />
            </linearGradient>
            <filter id="map-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#071f18" floodOpacity=".24" />
            </filter>
          </defs>

          <path
            className="ontario-map__outline"
            filter="url(#map-shadow)"
            d="M112 74 252 35l131 19 76 58 47 81-17 88 27 64-41 55 2 49-44 34-13 58-54 3-29 45-57-16-50 16-39-45-62-12-28-55-47-40 15-70-33-57 32-62-6-79 49-45Z"
          />
          <path
            className="ontario-map__water"
            d="M322 548c35-17 68-17 98-7-9 22-28 38-57 47l-41-40ZM424 515c21-24 43-35 66-33-4 30-20 54-50 71l-16-38Z"
          />
          <path className="ontario-map__corridor" d="M274 482c43 20 86 34 145 75" />
          <path className="ontario-map__corridor ontario-map__corridor--soft" d="M286 483c68-7 112-4 153-2" />
          <ellipse className="ontario-map__south-highlight" cx="370" cy="520" rx="125" ry="78" />

          {regionPoints.map((point) => (
            <g className="map-marker" key={point.short} transform={`translate(${point.x} ${point.y})`}>
              <circle className="map-marker__pulse" r="25" />
              <circle className="map-marker__dot" r="8" />
              <text x={point.labelX} y={point.labelY} textAnchor={point.anchor}>
                {point.short}
              </text>
            </g>
          ))}
        </svg>

        <div className="service-map__legend">
          <span><i /> Core service corridor</span>
          <span>Travel requests welcome</span>
        </div>
      </div>

      <div className="service-map__regions" aria-label="Ontario service areas by region">
        {siteContent.serviceAreaGroups.map((group, index) => (
          <article className="service-map__region" key={group.region}>
            <span className="service-map__region-number">0{index + 1}</span>
            <div>
              <h3>{group.region}</h3>
              <p>{group.areas.join(' · ')}</p>
            </div>
            <Icon name="mapPin" />
          </article>
        ))}
        <div className="service-map__action">
          <Icon name="compass" />
          <p>Not sure if your location is covered?</p>
          <Link className="text-link" href="/contact">
            Ask About Your City <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
