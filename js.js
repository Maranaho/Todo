(function() {

  let data = ['Marshall','Beaner'];

  const form = document.getElementById('form');
  const list = document.getElementById('list');
  const input = document.getElementById('input');

  form.addEventListener('submit',addTodo);
  list.addEventListener('click',remove); //Set to remove to remove li


  function init() {
    populateList();
  }



  function remove(e) {
    let idx = Number(e.target.getAttribute('key'));
    data.splice(idx,1);
    populateList();
  }


  function markAsDone(e) {
    let li = e.target.parentNode;
    let isTodo = li.classList.length === 0;
    if (isTodo) {
      li.classList = 'isDone';
    } else {
      li.classList = '';
    }
  }

  function addTodo(e) {
    e.preventDefault();
    let newTodo = input.value;
    if (newTodo === '') { return }
    let currentList = data;
    currentList.push(newTodo);
    data = currentList;
    input.value = '';
    populateList(currentList);
  }

  function populateList() {
    list.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
      let singleTodo = document.createElement('li');
      let liSpan = document.createElement('span');
      let btn = document.createElement('button');
      liSpan.innerText = data[i];
      singleTodo.append(liSpan);
      btn.innerText = 'Remove';
      btn.setAttribute('key',i);
      btn.classList = 'remove';
      singleTodo.append(btn);
      list.append(singleTodo);
    }
  }


  init();




})();
