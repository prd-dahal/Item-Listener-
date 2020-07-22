var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter');
//from submit event
form.addEventListener('submit', addItem);

//Delete Event
itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItem);

function addItem(e){
  e.preventDefault();

  //Get input value

  var newItem = document.getElementById('item');


  //create new li element
  var li = document.createElement('li');
  li.className = 'list-group-item';
  // add text node with input value
  li.appendChild(document.createTextNode(newItem.value));



  //create deleteButton Element
  var deleteButton = document.createElement('button')
  deleteButton.className = 'btn btn-danger btn-sm float-right delete'
  deleteButton.textContent = 'X'
  li.appendChild(deleteButton)

  // append li to Lister

  itemList.appendChild(li);
  newItem.value ='';

}

// function Remove Item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are your Sure')){
      var li = e.target.parentElement;
      itemList.removeChild(li)
    }
  }
}

//filter Items

function filterItem(e){
  // convert text to lower case
  var text = e.target.value.toLowerCase();
  console.log(text)

  var items = itemList.getElementsByTagName('li');
  // convert to array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1){
      item.style.display = 'block';

    }else{
      item.style.display = 'none'
    }
  })
}
