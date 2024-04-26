/* eslint-disable spellcheck/spell-checker */
/* eslint import/prefer-default-export: off */
import path from 'path';
import { URL } from 'url';

export function resolveHtmlPath(htmlFileName: string): string {
    if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-magic-numbers
        const port = process.env.PORT ?? 1212;
        const url = new URL(`http://localhost:${port}`);
        url.pathname = htmlFileName;
        return url.href;
    }
    return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}
