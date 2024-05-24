const data = [
    {
      id: 1,
      name: "Apple",
      category: "Fruits",
      price: 0.5,
      inStock: true,
      description: "A crisp, sweet red apple.",
      nutrition: {
        calories: 52,
        fat: 0.2,
        carbohydrates: 14,
        protein: 0.3
      }
    },
    {
      id: 2,
      name: "Banana",
      category: "Fruits",
      price: 0.3,
      inStock: true,
      description: "A ripe, yellow banana.",
      nutrition: {
        calories: 89,
        fat: 0.3,
        carbohydrates: 23,
        protein: 1.1
      }
    },
    {
      id: 3,
      name: "Carrot",
      category: "Vegetables",
      price: 0.2,
      inStock: true,
      description: "A fresh, crunchy carrot.",
      nutrition: {
        calories: 41,
        fat: 0.2,
        carbohydrates: 10,
        protein: 0.9
      }
    },
    {
      id: 4,
      name: "Bread",
      category: "Bakery",
      price: 2.5,
      inStock: true,
      description: "A loaf of freshly baked bread.",
      nutrition: {
        calories: 265,
        fat: 3.2,
        carbohydrates: 49,
        protein: 9
      }
    }
  ];
  
  function displayData(sortedData) {
    const tableBody = document.querySelector('#data-table');
    tableBody.innerHTML = '';
  
    sortedData.forEach(item => {
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td class="ab-3 xy-6">${item.id}</td>
        <td class="ab-3 xy-6">${item.name}</td>
        <td class="ab-3 xy-6">${item.category}</td>
        <td class="ab-3 xy-6">${item.price}</td>
        <td class="ab-3 xy-6">${item.inStock ? 'Yes' : 'No'}</td>
        <td class="ab-3 xy-6">${item.description}</td>
        <td class="ab-3 xy-6">${item.nutrition.calories}</td>
        <td class="ab-3 xy-6">${item.nutrition.fat}</td>
        <td class="ab-3 xy-6">${item.nutrition.carbohydrates}</td>
        <td class="ab-3 xy-6">${item.nutrition.protein}</td>
      `;
  
      tableBody.appendChild(row);
    });
  }
  
  function sortData(criteria) {
    const sortedData = data.sort((a, b) => {
      if (a[criteria] < b[criteria]) return -1;
      if (a[criteria] > b[criteria]) return 1;
      return 0;
    });
    displayData(sortedData);
  }
  
  // Initial display
  displayData(data);
  