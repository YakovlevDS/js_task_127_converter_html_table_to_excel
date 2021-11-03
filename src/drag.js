import convert from "./convert.js";

const removeDragData = event => {
  if (event.dataTransfer.items) {
    // Use DataTransferItemList interface to remove the drag data
    event.dataTransfer.items.clear();
  } else {
    // Use DataTransfer interface to remove the drag data
    event.dataTransfer.clearData();
  }
};

export default {
  onDragOver(event) {
    event.preventDefault();
  },

  onDrop(event) {
    event.preventDefault();
    if (event.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (
          event.dataTransfer.items[i].kind === "file" &&
          event.dataTransfer.items[i].type === `text/html`
        ) {
          const file = event.dataTransfer.items[i].getAsFile();
          convert(file);
        }
      }
    }

    // Pass event to removeDragData for cleanup
    removeDragData(event);
  }
};
