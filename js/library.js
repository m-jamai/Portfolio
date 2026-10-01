/*
 * LIBRARY CONTENT
 * ---------------
 * Add your own entries to the list below. Each entry is one block { ... },
 * separated by a comma. The page builds itself from this list: filters by
 * type appear automatically, newest entries are shown first.
 *
 * Fields
 *   type         required  "article" | "document" | "resource" | "recommendation"
 *                          | "link" | "note" | any other word you like
 *   title        required  Title shown in bold
 *   date         optional  "YYYY-MM-DD" (used for sorting and display)
 *   description  optional  One or two sentences
 *   text         optional  Longer text, shown in full (useful for notes)
 *   url          optional  External link, or a file in assets/library/
 *   linkLabel    optional  Text of the link (default depends on the type)
 *   tags         optional  ["Simulink", "Battery"]
 *
 * Examples (copy one, remove the // at the start of each line, and edit it):
 *
 * {
 *     type: "article",
 *     title: "How I structure MiL / SiL / HiL test loops",
 *     date: "2026-10-01",
 *     description: "A short write-up of the method I use on powertrain projects.",
 *     url: "https://www.linkedin.com/pulse/your-article",
 *     tags: ["MBD", "Validation"]
 * },
 * {
 *     type: "document",
 *     title: "Battery model parameter sheet",
 *     date: "2026-09-15",
 *     description: "PDF template I use to collect cell parameters.",
 *     url: "assets/library/battery-parameter-sheet.pdf"
 * },
 * {
 *     type: "recommendation",
 *     title: "A book or course you recommend",
 *     description: "Why it is worth reading.",
 *     url: "https://example.com"
 * },
 * {
 *     type: "note",
 *     title: "A short reflection",
 *     date: "2026-08-30",
 *     text: "Write your note here.\nLine breaks are kept."
 * },
 */

const LIBRARY_ITEMS = [
    // Your entries go here
];
