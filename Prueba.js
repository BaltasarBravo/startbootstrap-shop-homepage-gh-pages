

// // Populate the select element with options
// var selectElement = document.getElementById("itemSelect");

// for (var i = 0; i < items.length; i++) {
//     var option = document.createElement("option");
//     option.value = i;
//     option.textContent = items[i].name;
//     selectElement.appendChild(option);
// }

// // Function to handle item selection
// function addItem() {
//     var selectElement = document.getElementById("itemSelect");
//     var quantityInput = document.getElementById("quantityInput");
//     var itemList = document.getElementById("itemList");
//     var selectedIndex = selectElement.value;
//     var selectedAmount = parseInt(quantityInput.value);

//     if (selectedIndex !== "") {
//         var selectedItem = items[selectedIndex];

//         var listItem = document.createElement("li");

//         var nameSpan = document.createElement("span");
//         nameSpan.textContent = selectedItem.name;
//         listItem.appendChild(nameSpan);

//         var amountSpan = document.createElement("span");
//         amountSpan.textContent = "Amount: " + selectedAmount;
//         listItem.appendChild(amountSpan);

//         var addButton = document.createElement("button");
//         addButton.textContent = "+";
//         addButton.addEventListener("click", function () {
//             selectedAmount++;
//             amountSpan.textContent = "Amount: " + selectedAmount;
//             selectedItem.amount = selectedAmount;
//         });
//         listItem.appendChild(addButton);

//         var subtractButton = document.createElement("button");
//         subtractButton.textContent = "-";
//         subtractButton.addEventListener("click", function () {
//             if (selectedAmount > 1) {
//                 selectedAmount--;
//                 amountSpan.textContent = "Amount: " + selectedAmount;
//                 selectedItem.amount = selectedAmount;
//             }
//         });
//         listItem.appendChild(subtractButton);

//         var editButton = document.createElement("button");
//         editButton.textContent = "Edit";
//         editButton.addEventListener("click", function () {
//             var newAmount = prompt("Enter the new amount:");
//             if (newAmount !== null && !isNaN(newAmount) && parseInt(newAmount) >= 1) {
//                 selectedAmount = parseInt(newAmount);
//                 amountSpan.textContent = "Amount: " + selectedAmount;
//                 selectedItem.amount = selectedAmount;
//             }
//         });
//         listItem.appendChild(editButton);

//         var deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.addEventListener("click", function () {
//             itemList.removeChild(listItem);
//             var index = items.indexOf(selectedItem);
//             if (index !== -1) {
//                 items.splice(index, 1);
//             }
//         });
//         listItem.appendChild(deleteButton);

//         itemList.appendChild(listItem);

//         selectedItem.amount = selectedAmount;
//         items.push(selectedItem);
//     }
// }

// // Function to generate PDF and send email
// function generatePDF() {
//     // Create a new PDF document

//     const doc = new PDFDocument();


//     // Set up the PDF content
//     doc.fontSize(20).text('Selected Items:', { underline: true });
//     doc.moveDown();

//     items.forEach((item, index) => {
//         doc.fontSize(14).text(`${index + 1}. ${item.name} (Amount: ${item.amount})`);
//         doc.moveDown();
//     });

//     // Generate a buffer containing the PDF data
//     const pdfBuffer = doc.pipe(Buffer.from([]));
//     doc.on('data', chunk => pdfBuffer.push(chunk));
//     doc.on('end', () => {
//         // Send the generated PDF via email
//         sendEmail(pdfBuffer)
//             .then(() => {
//                 alert('PDF generated and sent successfully');
//             })
//             .catch(error => {
//                 console.error('Failed to send email', error);
//             });
//     });

//     doc.end();
// }

// // Function to send email
// function sendEmail(attachment) {
//     return new Promise((resolve, reject) => {
//         // Replace with your email service configuration
//         var transporter = nodemailer.createTransport({
//             service: 'Outlook',
//             auth: {
//                 user: 'articoz@hotmail.es',
//                 pass: '456balta.'
//             }
//         });

//         var mailOptions = {
//             from: 'articoz@hotmail.es',
//             to: 'ventas@elnuevoemporio.com.ar',
//             subject: 'Selected Items PDF',
//             text: 'Please find the attached PDF file containing the selected items.',
//             attachments: [
//                 {
//                     filename: 'selected_items.pdf',
//                     content: attachment
//                 }
//             ]
//         };

//         transporter.sendMail(mailOptions, function (error, info) {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve();
//             }
//         });
//     });
// }




// let items = [
//   { name: "ACOPLE CHICOS \"NENé\"", amount: 1 },
//   { name: "ACOPLE GIGANTE PLAS/", amount: 1 },
//   { name: "ACOPLE GRANDE \"NENé\"", amount: 1 },
//   { name: "ACOPLE MEDIANO \"NENé\"", amount: 1 },
//   { name: "ARMADOR CLAVOS P/ROSAS x 11", amount: 1 },
//   { name: "ARMADOR DE FLORES PLAS/NENE", amount: 1 },
//   { name: "ARO CUADRADO 10x6", amount: 1 },
//   { name: "ARO CUADRADO 10x8", amount: 1 },
//   { name: "ARO CUADRADO 12x6", amount: 1 },
//   { name: "ARO CUADRADO 12x8", amount: 1 },
//   { name: "ARO CUADRADO 14x6", amount: 1 },
//   { name: "ARO CUADRADO 16x6", amount: 1 },
//   { name: "ARO CUADRADO 18x6", amount: 1 },
//   { name: "ARO CUADRADO 20x6", amount: 1 },
//   { name: "ARO CUADRADO 22x6", amount: 1 },
//   { name: "ARO CUADRADO 24x6", amount: 1 },
//   { name: "ARO CUADRADO 26x6", amount: 1 },
//   { name: "ARO CUADRADO 28x6", amount: 1 },
//   { name: "ARO CUADRADO 30x6", amount: 1 },
//   { name: "ARO CUADRADO 32x6", amount: 1 },
//   { name: "ARO CUADRADO 3x6", amount: 1 },
//   { name: "ARO CUADRADO 6x6", amount: 1 },
//   { name: "ARO CUADRADO 7x6", amount: 1 },
//   { name: "ARO CUADRADO 8x3", amount: 1 },
//   { name: "ARO CUADRADO 8x6", amount: 1 },
//   { name: "ARO CUADRADO 9x6", amount: 1 },
//   { name: "ARO CUADRADO PERF/10x10x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/10x10x4", amount: 1 },
//   { name: "ARO CUADRADO PERF/11x11x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/12x12x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/12x12x4", amount: 1 },
//   { name: "ARO CUADRADO PERF/13x13x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/13x13x4", amount: 1 },
//   { name: "ARO CUADRADO PERF/14x14x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/14x14x4", amount: 1 },
//   { name: "ARO CUADRADO PERF/15x15x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/15x15x4", amount: 1 },
//   { name: "ARO CUADRADO PERF/16x16x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/16x16x4", amount: 1 },
//   { name: "ARO CUADRADO PERF/17x17x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/17x17x4", amount: 1 },
//   { name: "ARO CUADRADO PERF/18x18 x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/18x18x4", amount: 1 },
//   { name: "ARO CUADRADO PERF/19x19x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/19x19x4", amount: 1 },
//   { name: "ARO CUADRADO PERF/20x20 x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/20x20x4", amount: 1 },
//   { name: "ARO CUADRADO PERF/21x21x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/21x21x4", amount: 1 },
//   { name: "ARO CUADRADO PERF/22x22 x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/22x22x4", amount: 1 },
//   { name: "ARO CUADRADO PERF/23x23x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/24x24 x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/24x24x4", amount: 1 },
//   { name: "ARO CUADRADO PERF/25x25x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/5x5x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/6x6x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/7x7x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/8x8x2", amount: 1 },
//   { name: "ARO CUADRADO PERF/9x9x2", amount: 1 },
//   { name: "ARO FLOR", amount: 1 },
//   { name: "ARO LAGRIMA 12", amount: 1 },
//   { name: "ARO LAGRIMA 17", amount: 1 },
//   { name: "ARO LAGRIMA 20", amount: 1 },
//   { name: "ARO LAGRIMA 26", amount: 1 },
//   { name: "ARO LAGRIMA 30", amount: 1 },
//   { name: "ARO LAGRIMA 6", amount: 1 },
//   { name: "ARO LAGRIMA 8", amount: 1 },
//   { name: "ARO OVALADO 10x6", amount: 1 },
//   { name: "ARO OVALADO 12x6", amount: 1 },
//   { name: "ARO OVALADO 14x6", amount: 1 },
//   { name: "ARO P/HUEVO x 1", amount: 1 },
//   { name: "ARO P/HUEVO x 4", amount: 1 },
//   { name: "ARO PENTAGONO 8cm", amount: 1 },
//   { name: "ARO RECT/OVAL ECLER PERF/17x9x", amount: 1 },
//   { name: "ARO RECT/OVAL ECLER PERF/17x9x", amount: 1 },
//   { name: "ARO RECT/OVAL ECLER PERF4x12x2", amount: 1 },
//   { name: "ARO RECT/OVAL ECLER PERF9x17x4", amount: 1 },
//   { name: "ARO RECT/PERFORADO 4x10x2", amount: 1 },
//   { name: "ARO RECT/PERFORADO 4x12x2", amount: 1 },
//   { name: "ARO RECT/PERFORADO 4x14x2", amount: 1 },
//   { name: "ARO RECT/PERFORADO 4x16x2", amount: 1 },
//   { name: "ARO RECT/PERFORADO 4x18x2", amount: 1 },
//   { name: "ARO RECT/PERFORADO 4x6x2", amount: 1 },
//   { name: "ARO RECT/PERFORADO 4x8 x2", amount: 1 },
//   { name: "ARO RECTANG/10x20x6", amount: 1 },
//   { name: "ARO RECTANG/10x30x6", amount: 1 },
//   { name: "ARO RECTANG/10x6x6", amount: 1 },
//   { name: "ARO RECTANG/12x22x6", amount: 1 },
//   { name: "ARO RECTANG/14x24x6", amount: 1 },
//   { name: "ARO RECTANG/16x26x6", amount: 1 },
//   { name: "ARO RECTANG/18x28x6", amount: 1 },
//   { name: "ARO RECTANG/20x30x6", amount: 1 },
//   { name: "ARO RECTANG/22x32x6", amount: 1 },
//   { name: "ARO RECTANG/24x34x6", amount: 1 },
//   { name: "ARO RECTANG/26x36x6", amount: 1 },
//   { name: "ARO RECTANG/28x38x6", amount: 1 },
//   { name: "ARO RECTANG/30x40x6", amount: 1 },
//   { name: "ARO RECTANG/6x16x6", amount: 1 }
// ];

// // Sort items alphabetically by name
// items.sort((a, b) => a.name.localeCompare(b.name));

// // Populate the select element with options
// let selectElement = document.getElementById("itemSelect");

// for (let i = 0; i < items.length; i++) {
//     let option = document.createElement("option");
//     option.value = i;
//     option.textContent = items[i].name;
//     selectElement.appendChild(option);
// }

// // Function to handle item selection
// function addItem() {
//     let selectElement = document.getElementById("itemSelect");
//     let quantityInput = document.getElementById("quantityInput");
//     let itemList = document.getElementById("itemList");
//     let selectedIndex = selectElement.value;
//     let selectedAmount = parseInt(quantityInput.value);

//     if (selectedIndex !== "" && selectedAmount >= 1) {
//         let selectedItem = items[selectedIndex];

//         let listItem = document.createElement("li");

//         let nameSpan = document.createElement("span");
//         nameSpan.textContent = selectedItem.name;
//         listItem.appendChild(nameSpan);

//         let amountSpan = document.createElement("span");
//         amountSpan.textContent = "Amount: " + selectedAmount;
//         listItem.appendChild(amountSpan);

//         let addButton = createButton("+", function () {
//             selectedAmount++;
//             amountSpan.textContent = "Amount: " + selectedAmount;
//             selectedItem.amount = selectedAmount;
//         });
//         listItem.appendChild(addButton);

//         let subtractButton = createButton("-", function () {
//             if (selectedAmount > 1) {
//                 selectedAmount--;
//                 amountSpan.textContent = "Amount: " + selectedAmount;
//                 selectedItem.amount = selectedAmount;
//             }
//         });
//         listItem.appendChild(subtractButton);

//         let editButton = createButton("Edit", function () {
//             let newAmount = prompt("Enter the new amount:");
//             if (newAmount !== null && !isNaN(newAmount) && parseInt(newAmount) >= 1) {
//                 selectedAmount = parseInt(newAmount);
//                 amountSpan.textContent = "Amount: " + selectedAmount;
//                 selectedItem.amount = selectedAmount;
//             }
//         });
//         listItem.appendChild(editButton);

//         let deleteButton = createButton("Delete", function () {
//             itemList.removeChild(listItem);
//             let index = items.indexOf(selectedItem);
//             if (index !== -1) {
//                 items.splice(index, 1);
//             }
//         });
//         listItem.appendChild(deleteButton);

//         itemList.appendChild(listItem);

//         selectedItem.amount = selectedAmount;
//         items.push(selectedItem);

//         // Clear selection and quantity input
//         selectElement.value = "";
//         quantityInput.value = "1";
//     }
// }

// // Helper function to create buttons
// function createButton(text, onClick) {
//     let button = document.createElement("button");
//     button.textContent = text;
//     button.addEventListener("click", onClick);
//     return button;
// }

// // Event listener for the generate PDF button
// document.getElementById("createPdf").addEventListener("click", generatePDF);


// // Function to generate PDF and download
// function generatePDF() {
//   var selectedItems = [];
//   var itemList = document.getElementById("itemList").getElementsByTagName("li");

//   if (itemList.length > 0) {
//     for (var i = 0; i < itemList.length; i++) {
//       var name = itemList[i].getElementsByTagName("span")[0].textContent;
//       var amount = parseInt(
//         itemList[i].getElementsByTagName("span")[1].textContent.replace("Amount: ", "")
//       );
//       selectedItems.push({ name: name, amount: amount });
//     }

//     var doc = new jspdf.jsPDF();
//     doc.setFontSize(20);
//     doc.text("Selected Items:", 10, 20);

//     var yPos = 30;
//     selectedItems.forEach((item, index) => {
//       var text = `${index + 1}. ${item.name} (Amount: ${item.amount})`;
//       doc.setFontSize(14);
//       doc.text(text, 10, yPos);
//       yPos += 10;
//     });

//     doc.save("selected_items.pdf");

//     Swal.fire({
//       icon: "success",
//       title: "¡Pedido generado!",
//       text: "El pedido ha sido procesado con éxito.",
//     });

//     // var historyList = document.getElementById("historyList");
//     // var historyItem = document.createElement("li");
//     // historyItem.textContent = JSON.stringify(selectedItems);
//     // historyList.appendChild(historyItem);

//     // Limpiar el DOM nuevamente después de agregar el pedido al historial
//     var itemList = document.getElementById("itemList");
//     while (itemList.firstChild) {
//       itemList.removeChild(itemList.firstChild);
//     }
//   } else {
//     Swal.fire("Error", "Seleccione al menos un articulo", "error");
//   }
// }









// Función para cargar los nombres de los artículos desde el archivo Excel
function loadItemsFromExcel() {
  // Ruta del archivo Excel
  var file = 'Consultas externas Mis Consultas Externas Emporio Lista Minorista ConIVA y Proveedor.xlsx';

  // Carga del archivo Excel
  fetch(file)
    .then(function (response) {
      return response.arrayBuffer();
    })
    .then(function (arraybuffer) {
      var data = new Uint8Array(arraybuffer);
      var workbook = XLSX.read(data, { type: 'array' });

      // Obtención del nombre de la primera hoja
      var firstSheetName = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[firstSheetName];

      // Obtención del rango de celdas con los nombres de los artículos (suponiendo que están en la columna D)
      var range = XLSX.utils.decode_range(worksheet['!ref']);
      var items = [];

      // Recorrido de las celdas y extracción de los nombres de los artículos
      for (var R = range.s.r; R <= range.e.r; ++R) {
        var cellAddress = XLSX.utils.encode_cell({ r: R, c: 3 }); // Columna D
        var cell = worksheet[cellAddress];
        if (cell && cell.t === 's') {
          items.push(cell.v);
        }
      }

      // Ordenamiento alfabético de los nombres de los artículos
      items.sort(function (a, b) {
        return a.localeCompare(b);
      });

      // Obtención del select element
      var selectElement = document.getElementById('itemSelect');

      // Eliminación de las opciones existentes
      while (selectElement.firstChild) {
        selectElement.removeChild(selectElement.firstChild);
      }

      // Creación de las opciones del select con los nombres de los artículos
      items.forEach(function (item, index) {
        var option = document.createElement('option');
        option.value = index;
        option.textContent = item;
        selectElement.appendChild(option);
      });
    })
    .catch(function (error) {
      console.log('Error al cargar el archivo Excel:', error);
    });
}

// Llamar a la función para cargar los nombres de los artículos desde el archivo Excel
loadItemsFromExcel();

// Variable para almacenar los artículos seleccionados
var items = [];

// Function to handle item selection
function addItem() {
  var selectElement = document.getElementById("itemSelect");
  var quantityInput = document.getElementById("quantityInput");
  var itemList = document.getElementById("itemList");
  var selectedIndex = selectElement.value;
  var selectedAmount = parseInt(quantityInput.value);

  if (selectedIndex !== "" && selectedAmount >= 1) {
    var selectedItem = {
      name: selectElement.options[selectedIndex].textContent,
      amount: selectedAmount
    };

    var listItem = document.createElement("li");

    var nameSpan = document.createElement("span");
    nameSpan.textContent = selectedItem.name;
    listItem.appendChild(nameSpan);

    var amountSpan = document.createElement("span");
    amountSpan.textContent = "Cantidad: " + selectedAmount;
    listItem.appendChild(amountSpan);

    var addButton = createButton("+", function () {
      selectedAmount++;
      amountSpan.textContent = "Cantidad: " + selectedAmount;
      selectedItem.amount = selectedAmount;
    });
    listItem.appendChild(addButton);

    var subtractButton = createButton("-", function () {
      if (selectedAmount > 1) {
        selectedAmount--;
        amountSpan.textContent = "Cantidad: " + selectedAmount;
        selectedItem.amount = selectedAmount;
      }
    });
    listItem.appendChild(subtractButton);

    var editButton = createButton("Edit", function () {
      var newAmount = prompt("Ingrese una nueva cantidad:");
      if (newAmount !== null && !isNaN(newAmount) && parseInt(newAmount) >= 1) {
        selectedAmount = parseInt(newAmount);
        amountSpan.textContent = "Cantidad: " + selectedAmount;
        selectedItem.amount = selectedAmount;
      }
    });
    listItem.appendChild(editButton);

    var deleteButton = createButton("Delete", function () {
      itemList.removeChild(listItem);
      var index = items.indexOf(selectedItem);
      if (index !== -1) {
        items.splice(index, 1);
      }
    });
    listItem.appendChild(deleteButton);

    itemList.appendChild(listItem);

    items.push(selectedItem);

    // Clear selection and quantity input
    selectElement.value = "";
    quantityInput.value = "1";
  }
}

// Helper function to create buttons
function createButton(text, onClick) {
  var button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

// Event listener for the generate PDF button
document.getElementById("createPdf").addEventListener("click", generatePDF);


// Function to generate PDF and download
function generatePDF() {
  var selectedItems = [];
  var itemList = document.getElementById("itemList").getElementsByTagName("li");

  if (itemList.length > 0) {
    for (var i = 0; i < itemList.length; i++) {
      var name = itemList[i].getElementsByTagName("span")[0].textContent;
      var amount = parseInt(
        itemList[i].getElementsByTagName("span")[1].textContent.replace("Cantidad: ", "")
      );
      selectedItems.push({ name: name, amount: amount });
    }

    var doc = new jspdf.jsPDF();
    doc.setFontSize(20);
    doc.text("Artículos seleccionados:", 10, 20);

    var yPos = 30;
    selectedItems.forEach((item, index) => {
      var text = `${index + 1}. ${item.name} (Cantidad: ${item.amount})`;
      doc.setFontSize(14);
      doc.text(text, 10, yPos);
      yPos += 10;
    });

    doc.save("selected_items.pdf");

    Swal.fire({
      icon: "success",
      title: "¡Pedido generado!",
      text: "El pedido ha sido procesado con éxito.",
    });

    // Clear the item list after generating the PDF
    var itemList = document.getElementById("itemList");
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
  } else {
    Swal.fire("Error", "Seleccione al menos un artículo", "error");
  }
}





  