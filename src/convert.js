import exportToXLS from "./export-to-xls";

export default file => {
  const reader = new FileReader();
  reader.onload = event => {
    const fileText = event.target.result;
    const parser = new DOMParser();
    const doc = parser.parseFromString(fileText, "text/html");
    const tables = doc.querySelectorAll(`table`);
    tables.forEach(table => {
      exportToXLS(table);
      console.log(table);
    });
  };
  reader.readAsText(file);
};
