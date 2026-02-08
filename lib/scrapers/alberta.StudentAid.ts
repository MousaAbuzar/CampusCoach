import * as cheerio from "cheerio";

export type ScholarshipCard = {
  title: string;
  group: string;
  valueText: string;
  requirements: string;
  url: string;
};

function clean(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

export function parseFeaturedScholarships(html: string, baseUrl: string): ScholarshipCard[] {
  const $ = cheerio.load(html);
  const cards: ScholarshipCard[] = [];

  $(".border.scholarship").each((_, el) => {
  const card = $(el);

  const title = clean(card.find(".scholarship-title .d-table-cell").text());
  const group = clean(card.find(".scholarship-group i").text());

  const valueBlock = card
    .find("div.p-1")
    .filter((_, div) => clean($(div).find("b").text()) === "Value:")
    .first();

  const valueText = clean(valueBlock.clone().children("b").remove().end().text());

  const reqBlock = card
    .find("div.p-1")
    .filter((_, div) => clean($(div).find("b").text()) === "Requirements:")
    .first();

  const requirements = clean(reqBlock.clone().children("b").remove().end().text());

  const href = card.find("a.btn").attr("href") ?? "";
  const url = href ? new URL(href, baseUrl).toString() : "";

  cards.push({ title, group, valueText: valueText, requirements, url });
});


  return cards;
}
