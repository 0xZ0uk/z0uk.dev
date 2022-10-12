export function convertDate(date: string) {
  let parsedDate = date.split("T")[0].split('-').reverse().join("/");

  return parsedDate;
}