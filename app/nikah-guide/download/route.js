import { siteContent } from '../../../lib/site-content';

export const runtime = 'nodejs';

function escapePdfText(value) {
  return value.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function buildPdf(lines) {
  const header = '%PDF-1.4\n';
  const objects = [];

  const contentStream = [
    'BT',
    '/F1 18 Tf',
    '72 760 Td',
    ...lines.map((line, index) =>
      index === 0
        ? `(${escapePdfText(line)}) Tj`
        : `0 -24 Td (${escapePdfText(line)}) Tj`,
    ),
    'ET',
  ].join('\n');

  objects.push('1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n');
  objects.push('2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n');
  objects.push(
    '3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> endobj\n',
  );
  objects.push(
    `4 0 obj << /Length ${Buffer.byteLength(contentStream)} >> stream\n${contentStream}\nendstream endobj\n`,
  );
  objects.push('5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj\n');

  const xrefOffsets = [0];
  let body = header;

  for (const object of objects) {
    xrefOffsets.push(Buffer.byteLength(body));
    body += object;
  }

  const xrefStart = Buffer.byteLength(body);
  const xref = [
    'xref',
    '0 6',
    '0000000000 65535 f ',
    ...xrefOffsets.slice(1).map((offset) => String(offset).padStart(10, '0') + ' 00000 n '),
    'trailer',
    '<< /Size 6 /Root 1 0 R >>',
    'startxref',
    String(xrefStart),
    '%%EOF',
  ].join('\n');

  return Buffer.from(`${body}${xref}`);
}

export async function GET() {
  const lines = [
    siteContent.guide.title,
    'A practical Ontario Nikkah and Nikah guide.',
    `Last updated: ${siteContent.guide.lastUpdated}`,
    'Includes:',
    '- Religious preparation and ceremony checklist',
    '- Ontario legal marriage overview',
    '- Official Ontario reference links',
    '- Downloadable guide for mobile and desktop',
  ];

  const pdf = buildPdf(lines);

  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="nikah-guide.pdf"',
      'Content-Length': String(pdf.length),
    },
  });
}
