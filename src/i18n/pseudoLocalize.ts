import { localize } from 'pseudo-localization';

// HACK: Use regex to find HTML tags; Probably dodgy but good enough for our use case
const DODGY_HTML_REGEX = /<[^>]*>/g;

export function pseudoLocalize(text: string): string {
  let result = localize(text);
  const inputHTMLTags = text.match(DODGY_HTML_REGEX);
  const resultHTMLTags = result.match(DODGY_HTML_REGEX);
  if (
    inputHTMLTags &&
    resultHTMLTags &&
    inputHTMLTags.length === resultHTMLTags.length
  ) {
    for (let i = 0; i < inputHTMLTags.length; i += 1) {
      result = result.replace(resultHTMLTags[i], inputHTMLTags[i]);
    }
  }

  return result;
}
