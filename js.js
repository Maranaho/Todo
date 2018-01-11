
(function() {

  let data = [
  {
    label: 'Styleguide creation',
    done: false
  },
  {
    label: 'Send wireframe',
    done: true
  },
  {
    label: 'Readability About page',
    done: false
  },
  {
    label: 'Check color contrast',
    done: false
  }];

  const form = document.getElementById('form');
  const list = document.getElementById('list');
  const input = document.getElementById('input');
  const revealForm = document.getElementById('revealForm');
  const btn_ctn = document.getElementById('btn_ctn');

  form.addEventListener('submit',addTodo);
  list.addEventListener('click',markAsDone); //Set to remove to remove li
  revealForm.addEventListener('click',formRevealer);


  function init() {
    populateList();

    for (var i = 0; i < data.length; i++) {
      addDoneClass(list.children[i],true,i);
    }
  }


  function formRevealer() {
    btn_ctn.classList = 'addItem';
  }


  function remove(e) {
    let idx = Number(e.target.getAttribute('key'));
    data.splice(idx,1);
    populateList();
  }

  function addDoneClass(elt,bool,idx) {

      if (bool) {
        if (data[idx].done) {
          elt.classList = 'done';
        } else {
          elt.classList = '';
        }
      } else {
        if (data[idx].done) {
          elt.classList = '';
        } else {
          elt.classList = 'done';
        }
        data[idx].done = !data[idx].done;
      }

  }




  function markAsDone(e) {
    let current = e.target;
    let idx = Number(current.getAttribute('key'));
    addDoneClass(current.parentNode,false,idx);

  }

  function addTodo(e) {
    e.preventDefault();
    let newTodo = {
      label: input.value,
      done: false
    };
    if (newTodo.label === '') { return }
    let currentList = data;
    currentList.push(newTodo);
    data = currentList;
    input.value = '';
    init();
  }

  function populateList() {
    list.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
      let singleTodo = document.createElement('li');
      let liSpan = document.createElement('span');
      let btn = document.createElement('button');
      liSpan.innerText = data[i].label;
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
