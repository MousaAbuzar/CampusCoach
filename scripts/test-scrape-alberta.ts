import { parseFeaturedScholarships } from "../lib/scrapers/alberta.StudentAid";

async function main() {
  const pageUrl = "https://studentaid.alberta.ca/scholarships/?c=all";
  const baseUrl = "https://studentaid.alberta.ca";

  // 1) Fetch the HTML of the page
  const res = await fetch(pageUrl, {
    headers: {
      // user-agent is polite and sometimes prevents basic blocking
      "user-agent": "ScholarshipFinder/1.0 (learning project)",
    },
  });

  // 2) Convert the response into raw HTML text
  const html = await res.text();

  // 3) Parse the HTML into structured objects
  const cards = parseFeaturedScholarships(html, baseUrl);

  // 4) Print the results
  console.log(`Found ${cards.length} scholarships:\n`);
  console.log(cards);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
