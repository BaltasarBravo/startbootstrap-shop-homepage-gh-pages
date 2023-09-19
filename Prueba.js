

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







// Variable para almacenar los artículos seleccionados
let items = [];

// Arreglo para almacenar los objetos Blob (PDFs) de las órdenes generadas
const pdfs = [];

// Arreglo para almacenar los objetos JSON de las órdenes generadas
const orders = [];

// Función para cargar los nombres de los artículos desde el archivo Excel
function loadItemsFromExcel() {
  // Ruta del archivo Excel
  const file = 'Consultas externas Mis Consultas Externas Emporio Lista Minorista ConIVA y Proveedor.xlsx';

  // Carga del archivo Excel
  fetch(file)
    .then(function (response) {
      return response.arrayBuffer();
    })
    .then(function (arraybuffer) {
      const data = new Uint8Array(arraybuffer);
      const workbook = XLSX.read(data, { type: 'array' });

      // Obtención del nombre de la primera hoja
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];

      // Obtención del rango de celdas con los nombres y códigos de los artículos (suponiendo que están en las columnas C y D)
      const range = XLSX.utils.decode_range(worksheet['!ref']);
      const items = [];

      // Recorrido de las celdas y extracción de los nombres y códigos de los artículos
      for (let R = range.s.r; R <= range.e.r; ++R) {
        const cellAddressName = XLSX.utils.encode_cell({ r: R, c: 2 }); // Columna C para el nombre
        const cellAddressCode = XLSX.utils.encode_cell({ r: R, c: 3 }); // Columna D para el código
        const cellName = worksheet[cellAddressName];
        const cellCode = worksheet[cellAddressCode];

        if (cellName && cellName.t === 's' && cellCode && cellCode.t === 's') {
          const item = {
            name: cellName.v,
            code: cellCode.v,
          };
          items.push(item);
        }
      }

      // Ordenamiento alfabético de los nombres de los artículos
      items.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });

      // Obtención del select element
      const selectElement = document.getElementById('itemSelect');

      // Eliminación de las opciones existentes
      while (selectElement.firstChild) {
        selectElement.removeChild(selectElement.firstChild);
      }

      // Creación de las opciones del select con los nombres y códigos de los artículos
      items.forEach(function (item, index) {
        const option = document.createElement('option');
        option.value = index; // Utiliza el índice como valor de la opción
        option.textContent = item.code + ' - ' + item.name + ''; // Muestra el nombre y el código entre paréntesis
        selectElement.appendChild(option);
      });
    })
    .catch(function (error) {
      console.log('Error al cargar el archivo Excel:', error);
    });
}

// Llamar a la función para cargar los nombres de los artículos desde el archivo Excel
loadItemsFromExcel();

// Function to handle item selection
function addItem() {
  const selectElement = document.getElementById('itemSelect');
  const quantityInput = document.getElementById('quantityInput');
  const itemList = document.getElementById('itemList');
  const selectedIndex = selectElement.value;
  let selectedAmount = parseInt(quantityInput.value);

  if (selectedIndex !== '' && selectedAmount >= 1) {
    const selectedItem = {
      name: selectElement.options[selectedIndex].textContent,
      amount: selectedAmount,
    };

    const listItem = document.createElement('li');

    const nameSpan = document.createElement('span');
    nameSpan.textContent = selectedItem.name;
    listItem.appendChild(nameSpan);

    const amountSpan = document.createElement('span');
    amountSpan.textContent = 'Cantidad: ' + selectedAmount;
    listItem.appendChild(amountSpan);

    const addButton = createButton('+', function () {
      selectedAmount++;
      amountSpan.textContent = 'Cantidad: ' + selectedAmount;
      selectedItem.amount = selectedAmount;
    });
    listItem.appendChild(addButton);

    const subtractButton = createButton('-', function () {
      if (selectedAmount > 1) {
        selectedAmount--;
        amountSpan.textContent = 'Cantidad: ' + selectedAmount;
        selectedItem.amount = selectedAmount;
      }
    });
    listItem.appendChild(subtractButton);

    const editButton = createButton('Editar', function () {
      const newAmount = prompt('Ingrese una nueva cantidad:');
      if (newAmount !== null && !isNaN(newAmount) && parseInt(newAmount) >= 1) {
        selectedAmount = parseInt(newAmount);
        amountSpan.textContent = 'Cantidad: ' + selectedAmount;
        selectedItem.amount = selectedAmount;
      }
    });
    listItem.appendChild(editButton);

    const deleteButton = createButton('Eliminar', function () {
      itemList.removeChild(listItem);
      const index = items.indexOf(selectedItem);
      if (index !== -1) {
        items.splice(index, 1);
      }
    });
    listItem.appendChild(deleteButton);

    itemList.appendChild(listItem);

    items.push(selectedItem);

    // Clear selection and quantity input
    selectElement.value = '';
    quantityInput.value = '1';
  }
}

// Helper function to create buttons
function createButton(text, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', onClick);
  return button;
}

// Event listener for the generate PDF button
document.getElementById('createPdf').addEventListener('click', function () {
  generatePDF(); // Generar PDF de la orden actual
  showOrdersList(); // Mostrar la lista de órdenes actualizada
  clearItems(); // Limpiar la lista de artículos seleccionados
});

let generatedPDF = null;

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

    // Convertir la lista de artículos seleccionados a JSON
    const selectedItemsJSON = JSON.stringify(selectedItems);

    // Crear el documento PDF
    var doc = new jspdf.jsPDF({ orientation: 'portrait' });

    // Crear una nueva imagen
    var img = new Image();
    img.src = './imgs/D_NQ_NP_601050-MLA41611637029_052020-O_auto_x2.png'; // Reemplaza 'ruta_a_tu_logo.png' con la ruta de tu logotipo

    // Cuando la imagen esté cargada, agrégala al PDF
    img.onload = function () {
      doc.setFontSize(20);
      doc.text("Artículos seleccionados:", 10, 50);

      var yPos = 60;
      selectedItems.forEach((item, index) => {
        var text = `${index + 1}. ${item.name} (Cantidad: ${item.amount})`;
        doc.setFontSize(14);
        doc.text(text, 10, yPos);
        yPos += 10;
      });

      // Agregar el logotipo al PDF
      doc.addImage(img, 'JPEG', 10, 10, 40, 20); // Ajusta las coordenadas y el tamaño del logotipo

      // Generar el Blob del PDF
      const pdfBlob = doc.output('blob');

      // Guardar el objeto Blob (PDF) en el arreglo de PDFs
      pdfs.push(pdfBlob);

      // Guardar la lista de artículos como JSON en el arreglo de órdenes
      orders.push(selectedItemsJSON);

      clearItems();

      Swal.fire({
        icon: "success",
        title: "¡Pedido generado!",
        text: "El pedido ha sido procesado con éxito.",
      });

      // Mostrar la lista de órdenes actualizada
      showOrdersList();
    };
  } else {
    Swal.fire("Error", "Seleccione al menos un artículo", "error");
  }
}

// Function to clear the list of selected items
function clearItems() {
  const itemList = document.getElementById("itemList");
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  items = []; // Reiniciar el arreglo de artículos seleccionados
}

// Función para mostrar el listado de órdenes generadas
function showOrdersList() {
  const ordersList = document.getElementById('ordersList');
  ordersList.innerHTML = ''; // Limpiar el listado antes de mostrar las órdenes

  // Recorrer las órdenes generadas
  orders.forEach((order, index) => {
    // Crear un elemento <li> para cada orden
    const orderItem = document.createElement('li');
    orderItem.textContent = 'Orden #' + (index + 1);

    // Crear un botón para ver el PDF de la orden
    const viewPdfButton = createButton('Ver PDF', () => {
      // Mostrar el PDF correspondiente a la orden en una nueva pestaña
      if (pdfs[index]) {
        const pdfURL = URL.createObjectURL(pdfs[index]);
        window.open(pdfURL);
      }
    });

    // Crear un botón para enviar por correo electrónico la orden
    const sendEmailButton = createButton('Enviar por correo electrónico', () => {
      console.log('Enviar por correo electrónico la orden #' + (index + 1));
      // Aquí puedes agregar el código para enviar el correo electrónico con el PDF adjunto
    });

    // Crear un botón para repetir la orden
    const repeatOrderButton = createButton('Repetir Orden', () => {
      // Llamar a la función repeatOrder con el índice de la orden
      repeatOrder(index);
    });

    // Agregar los botones al elemento <li>
    orderItem.appendChild(viewPdfButton);
    orderItem.appendChild(sendEmailButton);
    orderItem.appendChild(repeatOrderButton);

    // Agregar el elemento <li> al listado de órdenes
    ordersList.appendChild(orderItem);
  });
}

// Función para repetir una orden
function repeatOrder(orderIndex) {
  // Obtener la orden actual en formato JSON
  const selectedOrderJSON = orders[orderIndex];

  // Convertir la orden JSON de vuelta a un objeto JavaScript
  const selectedItems = JSON.parse(selectedOrderJSON);

  if (Array.isArray(selectedItems)) {
    // Limpiar la lista de artículos seleccionados en el DOM
    clearItems();

    // Agregar los artículos clonados al DOM como si estuvieras generando una orden nueva
    selectedItems.forEach(item => {
      // Crea elementos en el DOM para cada artículo y permite su modificación
      // Similar a cómo lo haces cuando agregas un artículo inicialmente
      var listItem = document.createElement("li");

      var nameSpan = document.createElement("span");
      nameSpan.textContent = item.name;
      listItem.appendChild(nameSpan);

      var amountSpan = document.createElement("span");
      amountSpan.textContent = "Cantidad: " + item.amount;
      listItem.appendChild(amountSpan);

      var addButton = createButton("+", function () {
        item.amount++;
        amountSpan.textContent = "Cantidad: " + item.amount;
      });
      listItem.appendChild(addButton);

      var subtractButton = createButton("-", function () {
        if (item.amount > 1) {
          item.amount--;
          amountSpan.textContent = "Cantidad: " + item.amount;
        }
      });
      listItem.appendChild(subtractButton);

      // Botón Editar
      var editButton = createButton("Editar", function () {
        const newAmount = prompt("Ingrese una nueva cantidad:");
        if (newAmount !== null && !isNaN(newAmount) && parseInt(newAmount) >= 1) {
          item.amount = parseInt(newAmount);
          amountSpan.textContent = "Cantidad: " + item.amount;
        }
      });
      listItem.appendChild(editButton);

      // Botón Eliminar
      var deleteButton = createButton("Eliminar", function () {
        itemList.removeChild(listItem);
        const index = items.indexOf(item);
        if (index !== -1) {
          items.splice(index, 1);
        }
      });
      listItem.appendChild(deleteButton);

      // Agrega la clase para activar la animación
      listItem.classList.add("fade-in");

      // Agrega el nuevo elemento al DOM
      var itemList = document.getElementById("itemList");
      itemList.appendChild(listItem);

      // Agregar el artículo clonado al arreglo de artículos
      items.push(item);
    });
  } else {
    console.error("La orden seleccionada no es un arreglo válido.");
  }
}

$(document).ready(function () {
  // Inicializa el select2 en tu select existente
  $("#itemSelect").select2({
    placeholder: "Buscar artículo", // Texto de marcador de posición
    allowClear: true, // Agregar botón de limpiar selección
  });
});




// Variable para evitar la detección múltiple del mismo código de barras
let codeDetected = false;

// Variable para habilitar o deshabilitar la adición automática al DOM durante el escaneo
let autoAddToDOM = false;

// Configura el botón de escaneo
document.getElementById('scanBarcodeButton').addEventListener('click', function () {
  // Restablece la variable para permitir una nueva detección
  codeDetected = false;
  autoAddToDOM = true; // Habilita la adición automática al DOM al escanear

  // Configura QuaggaJS para el escaneo de códigos de barras
  Quagga.init({
    inputStream: {
      name: 'Live',
      type: 'LiveStream',
      target: document.querySelector('#camera'),
      constraints: {
        facingMode: 'environment', // Use la cámara trasera (si está disponible)
      },
    },
    decoder: {
      readers: ['ean_reader', 'code_128_reader'], // Tipos de códigos de barras que Quagga debe buscar
    },
  }, function (err) {
    if (err) {
      console.error('Error al iniciar Quagga: ', err);
      return;
    }

    // Inicia el escaneo
    Quagga.start();
  });

  // Maneja eventos de escaneo
  Quagga.onDetected(function (result) {
    // Si ya se detectó un código, ignora detecciones adicionales
    if (codeDetected) {
      return;
    }

    codeDetected = true; // Marca que se detectó un código

    const scannedCode = result.codeResult.code;

    // Coloca el número en el campo de búsqueda del select2
    $(".select2-search__field").val(scannedCode);

    // Desencadena un evento de búsqueda para que se actualice automáticamente
    $(".select2-search__field").trigger("input");

    // Muestra el código escaneado a modo de prueba
    document.getElementById('scannedCodeDisplay').textContent = "Código Escaneado: " + scannedCode;

    // Detén el escaneo después de encontrar un código
    Quagga.stop();

    // Deshabilita la adición automática al DOM después de escanear
    autoAddToDOM = false;
  });
});

// Configura el evento de búsqueda en el select2
$("#itemSelect").select2({
  placeholder: "Buscar artículo",
  allowClear: true,
});

// Maneja el evento de búsqueda para filtrar los resultados y agregar al DOM si existe
$("#itemSelect").on("select2:select", function (e) {
  const selectedItem = e.params.data;

  // Verifica si el artículo existe en la lista
  if (selectedItem && autoAddToDOM) {
    const itemList = document.getElementById('itemList');
    const listItem = createListItem(selectedItem);

    // Agrega el elemento al DOM
    itemList.appendChild(listItem);
  }
});

// Maneja el evento de búsqueda para filtrar los resultados
$("#itemSelect").on("select2:open", function () {
  $(".select2-search__field").attr("placeholder", "Escanee o busque aquí");
});

// Función para crear elementos de la lista
function createListItem(selectedItem) {
  const listItem = document.createElement('li');
  listItem.textContent = selectedItem.text;

  // Agrega botones
  const amountSpan = document.createElement('span');
  amountSpan.textContent = 'Cantidad: 1';
  listItem.appendChild(amountSpan);

  const addButton = createButton('+', function () {
    // Incrementa la cantidad
    const currentAmount = parseInt(amountSpan.textContent.split(' ')[1]);
    amountSpan.textContent = 'Cantidad: ' + (currentAmount + 1);
  });
  listItem.appendChild(addButton);

  const subtractButton = createButton('-', function () {
    // Decrementa la cantidad, pero no menos de 1
    const currentAmount = parseInt(amountSpan.textContent.split(' ')[1]);
    if (currentAmount > 1) {
      amountSpan.textContent = 'Cantidad: ' + (currentAmount - 1);
    }
  });
  listItem.appendChild(subtractButton);

  const editButton = createButton('Editar', function () {
    const newAmount = prompt('Ingrese una nueva cantidad:');
    if (newAmount !== null && !isNaN(newAmount) && parseInt(newAmount) >= 1) {
      amountSpan.textContent = 'Cantidad: ' + newAmount;
    }
  });
  listItem.appendChild(editButton);

  const deleteButton = createButton('Eliminar', function () {
    itemList.removeChild(listItem);
  });
  listItem.appendChild(deleteButton);

  return listItem;
}

// Función para crear botones
function createButton(text, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', onClick);
  return button;
}

// Resto de tu código para la lógica de los botones y otras funcionalidades







// Declarar la variable deferredPrompt
let deferredPrompt;

// Verifica si la API de instalación está disponible en el navegador
if ('serviceWorker' in navigator && 'PushManager' in window) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js').then(function () {
      // Registro exitoso del Service Worker
    }).catch(function () {
      // Error en el registro del Service Worker
    });
  });
}

// Verifica si el usuario ha instalado previamente la aplicación
if (window.matchMedia('(display-mode: standalone)').matches) {
  // La aplicación ya está instalada
} else {
  // Muestra el banner de instalación
  const installBanner = document.getElementById('installBanner');
  installBanner.style.display = 'block';

  // Maneja el evento del botón de instalación
  const installButton = document.getElementById('installButton');
  installButton.addEventListener('click', function () {
    // Intenta instalar la aplicación
    if (deferredPrompt) {
      deferredPrompt.prompt();
    }
  });
}

// Evento que se dispara cuando se puede instalar la PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Almacena el evento de instalación diferida
  deferredPrompt = event;

  // Muestra el botón de instalación si lo deseas
  showInstallButton();
});

// Función para mostrar el botón de instalación
function showInstallButton() {
  // Muestra el botón de instalación
  const installButton = document.getElementById('installButton');
  installButton.style.display = 'block';

  // Agrega un evento click al botón para iniciar la instalación
  installButton.addEventListener('click', () => {
    // Verifica que deferredPrompt esté definido
    if (deferredPrompt) {
      // Muestra el cuadro de diálogo de instalación
      deferredPrompt.prompt();

      // Espera a que el usuario responda
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó la instalación.');
        } else {
          console.log('El usuario canceló la instalación.');
        }

        // Limpia deferredPrompt después de la instalación
        deferredPrompt = null;
      });
    }
  });
}



// window.addEventListener('load', () => {
//   let deferredPrompt;

//   window.addEventListener('beforeinstallprompt', (e) => {
//     e.preventDefault();
//     deferredPrompt = e;
//     showInstallButton();
//   });

//   const installButton = document.getElementById('installButton');

//   installButton.addEventListener('click', () => {
//     if (deferredPrompt) {
//       deferredPrompt.prompt();

//       deferredPrompt.userChoice.then((choiceResult) => {
//         if (choiceResult.outcome === 'accepted') {
//           console.log('El usuario aceptó la instalación');
//         } else {
//           console.log('El usuario rechazó la instalación');
//         }

//         deferredPrompt = null;
//       });
//     }
//   });
// });















// // Variable para evitar la detección múltiple del mismo código de barras
// let codeDetected = false;

// // Configura el botón de escaneo
// document.getElementById('scanBarcodeButton').addEventListener('click', function () {
//   // Restablece la variable para permitir una nueva detección
//   codeDetected = false;

//   // Configura QuaggaJS para el escaneo de códigos de barras
//   Quagga.init({
//     inputStream: {
//       name: 'Live',
//       type: 'LiveStream',
//       target: document.querySelector('#camera'),
//       constraints: {
//         facingMode: 'environment', // Use la cámara trasera (si está disponible)
//       },
//     },
//     decoder: {
//       readers: ['ean_reader'], // Tipo de códigos de barras que Quagga debe buscar
//     },
//   }, function (err) {
//     if (err) {
//       console.error('Error al iniciar Quagga: ', err);
//       return;
//     }

//     // Inicia el escaneo
//     Quagga.start();
//   });

//   // Maneja eventos de escaneo
//   Quagga.onDetected(function (result) {
//     // Si ya se detectó un código, ignora detecciones adicionales
//     if (codeDetected) {
//       return;
//     }

//     codeDetected = true; // Marca que se detectó un código

//     const scannedCode = result.codeResult.code;

//     // Busca el número del código de barras en los códigos de los artículos
//     const selectedItemIndex = findItemIndexByBarcode(scannedCode);

//     if (selectedItemIndex !== -1) {
//       // Encuentra el artículo correspondiente en la lista
//       const selectedItem = items[selectedItemIndex];

//       // Agrega el artículo al DOM y a la lista de artículos seleccionados
//       const listItem = createListItem(selectedItem);

//       // Agrega el elemento al DOM
//       const itemList = document.getElementById('itemList');
//       itemList.appendChild(listItem);

//       // Agrega el artículo a la lista de artículos seleccionados
//       addItem(selectedItem);

//       // Coloca el número en el campo de búsqueda del select2
//       $("#itemSelect").val(scannedCode);

//       // Desencadena un evento de búsqueda para que se actualice automáticamente
//       $("#itemSelect").trigger("change");
//     } else {
//       // Si no se encuentra el artículo, muestra un mensaje de error
//       alert('Código de barras no encontrado en la lista de artículos.');
//     }

//     // Detén el escaneo después de encontrar un código
//     Quagga.stop();
//   });

//   // Función para encontrar el índice del artículo por su código de barras
//   function findItemIndexByBarcode(barcode) {
//     for (let i = 0; i < items.length; i++) {
//       const item = items[i];
//       // Supongamos que cada artículo tiene un atributo 'barcode' que almacena su código de barras
//       if (item.barcode === barcode) {
//         return i; // Devuelve el índice del artículo si coincide el código de barras
//       }
//     }
//     return -1; // Devuelve -1 si no se encuentra el código de barras
//   }
// });

// // Configura el evento de búsqueda en el select2
// $("#itemSelect").select2({
//   placeholder: "Buscar artículo",
//   allowClear: true,
// });

// // Maneja el evento de búsqueda para filtrar los resultados
// $("#itemSelect").on("select2:open", function () {
//   $(".select2-search__field").attr("placeholder", "Escanee o busque aquí");
// });