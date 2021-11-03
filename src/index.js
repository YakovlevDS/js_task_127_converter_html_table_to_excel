import "./styles.css";
import drag from "./drag";
const { onDragOver, onDrop } = drag;

const app = document.getElementById(`app`);

app.innerHTML = `
<h1>Конвертер HTML-таблиц в Excel</h1>
<div id="drop_zone">
  <p>Скиньте отчёт в HTML-формате в эту зону...</p>
</div>
`;

const dropZone = app.querySelector(`#drop_zone`);

dropZone.addEventListener(`dragover`, onDragOver);
dropZone.addEventListener(`drop`, onDrop);
