
/*

*/
const categoryList = document.getElementById('category-list');
const categoryForm = document.getElementById('category-form');
// Define key for category data in local storage
const CATEGORY_KEY = 'categories';
// Read category data from local storage
let categories = JSON.parse(localStorage.getItem(CATEGORY_KEY)) || [];
/*
// Display each category as a clickable element
{{{{       U-  Operation(Update) Number tow               }}}}
*/
function updateCategoryList() {
categoryList.innerHTML = '';
categories.forEach(category => {
const categoryElement = document.createElement('option');
categoryElement.classList.add('category');
categoryElement.textContent = category;
categoryList.appendChild(categoryElement);
});
}
updateCategoryList();


/*
// Create new category
{{{{              C-   Operation(create) Number one                       }}}}
*/
categoryForm.addEventListener('submit', function(event) {
event.preventDefault();
const newCategory = document.getElementById('new-category').value.trim();
if (!newCategory){
alert("some thing went wrong !!");
}
if (categories.includes(newCategory)) {
return;
}
categories.push(newCategory);
localStorage.setItem(CATEGORY_KEY, JSON.stringify(categories));
updateCategoryList();
categoryForm.reset();
});

/*
Edit function 
{{{{       U-  Operation(Edit) Number tow               }}}}
// Edit category
*/
function editCategory() {
  const selectedCategory = categoryList.value;
  const index = categories.indexOf(selectedCategory);
  if (index !== -1) {
  // document.getElementById("new-category").value =  selectedCategory;
  // newValue = document.getElementById("new-category").value;
  // const  = prompt('Enter the new value for the category:', selectedCategory);
    const newValue = prompt('Enter the new value for the category:', selectedCategory);
    if (newValue){
      categories[index] = newValue.trim();
      localStorage.setItem(CATEGORY_KEY, JSON.stringify(categories));
      updateCategoryList();
    }
  }
}
// Edit 
const editButton = document.getElementById('buttonEdit');
editButton.addEventListener('click',() => editCategory());


/*
// Delete category
Clicking "Delete" on a product item removes it from the categories array and updates local storage,
 reflecting the deletion in the displayed list.
{{{{       R-  Operation(Delete) Number four               }}}}
*/
function deleteCategory(){
  const selectedCategory = categoryList.value;
  const index = categories.indexOf(selectedCategory);
  if (index !== -1) {
    categories.splice(index, 1);
    localStorage.setItem(CATEGORY_KEY, JSON.stringify(categories));
    updateCategoryList();
  }
}


function searchProdctCategory(){
    searchValue = document.getElementById("Search");
    var productContainer = JSON.parse(localStorage.getItem('allproduct'))
    var trs='';
    for(var i =0 ; i<productContainer.length;i++){
      if(productContainer[i].category.toLowerCase().includes(searchValue.value.toLowerCase()) )
      {
        trs +=`<tr>
        <td>${i+1}</td>
        <td>${productContainer[i].pname}</td>
        <td>${productContainer[i].pimg}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td>${productContainer[i].Stock}</td>
      </tr>`
      }
    
    }
    document.getElementById('CategoryBody').innerHTML=trs;
    }
