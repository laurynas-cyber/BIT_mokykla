window.addEventListener("load", (_) => {
  const CreateBtn = document.querySelector(".--show-btn");
  const closeButtons = document.querySelectorAll(".--close");
  const FormModal = document.querySelector(".--modal");
  const storeButton = FormModal.querySelector(".--submit");
  const deleteModal = document.querySelector(".modal--delete");
  const destroybutton = deleteModal.querySelector(".--submit");
  const AddModal = document.querySelector(".modal--edit");
  const AddsumButton = AddModal.querySelector(".--addSum");
  const MinussumButton = AddModal.querySelector(".--WithdrawSum");
  const LAST_ID = "AccLastSavedId";
  const ACC_LIST_LS = "AllAccList";
  let destroyId = 0;
  let updateId = 0;
  let ClientList = document.querySelector(".clients-list");
  let html = `
  <div class="info-line client">
  <div class="number">{{id}}</div>
  <div class="name">{{AccName}}</div>
  <div class="surname">{{Surname}}</div>
  <div class="sum">{{Total}} eur</div>
  <div class="btnContainer">
    <button value="{{id}}" class="add --add clientbtn">Add funds</button>
    <button value="{{id}}" class="add --withdraw clientbtn">Withdraw funds</button>
    <button value="{{id}}" class="remove --delete clientbtn">Delete Account</button>
  </div>
</div>
  `;

  //localhost
  const getId = (_) => {
    const id = localStorage.getItem(LAST_ID);
    if (null === id) {
      localStorage.setItem(LAST_ID, 1);
      return 1;
    }
    localStorage.setItem(LAST_ID, parseInt(id) + 1);
    return parseInt(id) + 1;
  };

  const sortLocalHostData = (data) => {
    data.sort((a, b) => {
      const nameA = a.AccSurnName.toUpperCase(); // ignore upper and lowercase
      const nameB = b.AccSurnName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
    return data;
  };

  const read = (_) => {
    let data = localStorage.getItem(ACC_LIST_LS);

    if (null === data) {
      return [];
    }
    data = sortLocalHostData(JSON.parse(localStorage.getItem(ACC_LIST_LS)));

    return data;
  };

  const write = (data) => {
    localStorage.setItem(ACC_LIST_LS, JSON.stringify(data));
  };

  const storeLocalHost = (_) => {
    const getLocalHostData = read();
    const formData = getForm();
    getLocalHostData.push(formData);
    write(getLocalHostData);
    hideModal(FormModal);
    showList();
  };

  const destroyData = (id) => {
    const data = read();
    const deleteData = data.filter((d) => d.id !== id);
    write(deleteData);
  };
  //localhost ----

  // Forma Crud

  const getForm = (_) => {
    data = {};
    FormModal.querySelectorAll("[name]").forEach((inp) => {
      data[inp.getAttribute("name")] = inp.value;
    });
    data.id = getId();
    data.Sum = 0;
    return data;
  };

  const showModal = (modal) => (modal.style.display = "flex");

  const hideModal = (modal) => {
    modal.querySelectorAll("[name]").forEach((i) => {
      i.value = "";
    });
    modal.style.display = "none";
  };

  const destroy = (_) => {
    destroyData(destroyId);
    hideModal(deleteModal);
    showList();
  };

  const updateData = (id, data) => {
    const updateData = read().map((p) => (p.id == id ? { ...data, id } : p));
    write(updateData);
  };

  const update = (id, value, bolean) => {
    const data = read().find((p) => p.id == id);
    if (bolean == true) data.Sum = parseInt(data.Sum) + parseInt(value);
    if (bolean == false) data.Sum = parseInt(data.Sum) - parseInt(value);
    updateData(updateId, data);
    hideModal(AddModal);
    showList();
  };

  const showList = (_) => {
    let accHtml = "";
    read().forEach((acc) => {
      let temp = html;
      temp = temp.replaceAll("{{id}}", acc.id);
      temp = temp.replaceAll("{{AccName}}", acc.AccName);
      temp = temp.replaceAll("{{Surname}}", acc.AccSurnName);
      temp = temp.replaceAll("{{Total}}", acc.Sum);
      accHtml += temp;
    });
    ClientList.innerHTML = accHtml;
    registerDelete();
    registerEdit();
  };

  const prepareDeleteModal = (id, modal) => {
    const name = read().find((p) => p.id == id).AccName;
    const Surname = read().find((p) => p.id == id).AccSurnName;
    modal.querySelector(".client--name").innerText = name + " " + Surname;
  };

  const prepareEditModal = (id, modal) => {
    const name = read().find((p) => p.id == id).AccName;
    const Surname = read().find((p) => p.id == id).AccSurnName;
    const sum = read().find((p) => p.id == id).Sum;
    modal.querySelector(".client--name").innerText = name + " " + Surname;
    modal.querySelector(".--IdSum").innerText = sum;
  };
  //events

  const registerDelete = (_) => {
    document.querySelectorAll(".--delete").forEach((b) => {
      b.addEventListener("click", (_) => {
        showModal(deleteModal);
        prepareDeleteModal(parseInt(b.value), deleteModal);
        destroyId = parseInt(b.value);
      });
    });
  };

  const registerEdit = (_) => {
    document.querySelectorAll(".--add").forEach((b) => {
      b.addEventListener("click", (_) => {
        showModal(AddModal);
        prepareEditModal(parseInt(b.value), AddModal);
        AddModal.querySelector(".--change").innerText = "add";
        updateId = parseInt(b.value);
        AddsumButton.style.display = "inline";
        MinussumButton.style.display = "none";
      });
    });
    document.querySelectorAll(".--withdraw").forEach((b) => {
      b.addEventListener("click", (_) => {
        showModal(AddModal);
        prepareEditModal(parseInt(b.value), AddModal);
        AddModal.querySelector(".--change").innerText = "withdraw";
        updateId = parseInt(b.value);
        AddsumButton.style.display = "none";
        MinussumButton.style.display = "inline";
      });
    });
  };

  //mygtukai

  storeButton.addEventListener("click", (_) => {
    storeLocalHost();
  });

  CreateBtn.addEventListener("click", (_) => showModal(FormModal));

  destroybutton.addEventListener("click", (_) => destroy());

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", (_) => {
      btn.closest(".--modal").style.display = "none";
    });
  });

  AddsumButton.addEventListener("click", () => {
    const InputValue = AddModal.querySelector("input").value;
    update(updateId, InputValue, true);
  });

  MinussumButton.addEventListener("click", () => {
    const InputValue = AddModal.querySelector("input").value;
    update(updateId, InputValue, false);
  });
  //mygtukai -----

  // AddModal.querySelector("input").addEventListener("keyup", () => {
  //   AddModal.querySelector(".--IdSum") = input.value;

  // });

  showList();
});
