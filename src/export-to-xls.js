import XLSX from "xlsx";

export default tableElement => {
  const filename = `htmlToXLSX`;
  const workbook = XLSX.utils.table_to_book(tableElement, {
    sheet: "htmlToXLSX"
  });
  console.log(workbook);
  XLSX.writeFile(workbook, `test.xlsx`);
};
