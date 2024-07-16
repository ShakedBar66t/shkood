export function getLocaleFromPath(pathname: string): string {
    const pathLocale = pathname.split("/")[1];
    return pathLocale || "en";
  }
  