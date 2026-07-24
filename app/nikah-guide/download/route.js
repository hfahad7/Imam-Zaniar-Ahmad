export function GET(request) {
  return Response.redirect(
    new URL('/downloads/nikah-guide.pdf', request.url),
    307,
  );
}
