function createNewMdg(name, msg) {
  const list = document.getElementById('msg-list');
  list.innerHTML = ''; 

  const itemMsg = document.createElement('li');

  const itemTitle = document.createElement('h3');
  itemTitle.textContent = 'Имя: ' + name;

  const itemText = document.createElement('p');
  itemText.textContent = 'Сообщение: ' + msg;

  itemMsg.append(itemTitle);
  itemMsg.append(itemText);

  list.append(itemMsg);
}

document.querySelector('#add-msg-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const userNameInput = document.querySelector('#name-inp');
  const msgInput = document.querySelector('#msg-inp');

  const userName = userNameInput.value;
  const msg = msgInput.value;



  createNewMdg(userName, msg);

  userNameInput.value = '';
  msgInput.value = '';
  userNameInput.focus();

});






