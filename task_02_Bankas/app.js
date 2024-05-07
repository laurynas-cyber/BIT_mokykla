window.addEventListener("load", (_) => {
  const CreateBtn = document.querySelector(".--show-btn");
  const closeButtons = document.querySelectorAll(".--close");
  const FormModal = document.querySelector(".--modal");
  const storeButton = FormModal.querySelector(".--submit");
  const deleteModal = document.querySelector(".modal--delete");
  const destroybutton = deleteModal.querySelector(".--submit");
  const AddModal = document.querySelector(".modal--edit");
  const MessageModal = document.querySelector(".modal--notAllow");
  const OperationModal = document.querySelector(".modal--operation");
  const AddsumButton = AddModal.querySelector(".--addSum");
  const MinussumButton = AddModal.querySelector(".--WithdrawSum");
  const EditModalSum = AddModal.querySelector(".--IdSum");
  const Editinput = AddModal.querySelector("input");
  let timerId;
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
    localStorage.setItem(LAST_ID, parseFloat(id) + 1);
    return parseFloat(id) + 1;
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

  const getSumbyId = (id) => {
    const sum = read().find((p) => p.id == id).Sum;
    return sum;
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
    if (bolean == true) data.Sum = parseFloat(data.Sum) + parseFloat(value);
    if (bolean == false) data.Sum = parseFloat(data.Sum) - parseFloat(value);
    updateData(updateId, data);
    hideModal(AddModal);
    showList();
  };

  const TotalNumInfoAcc = () => {
    let accnum = 0;
    let data = read();
    data.forEach(() => {
      accnum++;
    });
    return accnum;
  };

  const TotalSumInfoAcc = () => {
    let accSum = 0;
    let data = read();
    data.forEach((a) => {
      accSum += a.Sum;
    });
    return accSum;
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
    document.querySelector(".AccNumber").innerHTML = TotalNumInfoAcc();
    document.querySelector(".AccSum").innerHTML = TotalSumInfoAcc();
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
    const sum = getSumbyId(id);
    modal.querySelector(".client--name").innerText = name + " " + Surname;
    EditModalSum.innerText = sum;
    EditModalSum.style.color = "black";
  };
  //events

  const registerDelete = (_) => {
    document.querySelectorAll(".--delete").forEach((b) => {
      b.addEventListener("click", (_) => {
        prepareDeleteModal(parseFloat(b.value), deleteModal);
        destroyId = parseFloat(b.value);
        if (getSumbyId(destroyId) <= 0) {
          showModal(MessageModal);
        } else showModal(deleteModal);
      });
    });
  };

  const registerEdit = (_) => {
    document.querySelectorAll(".--add").forEach((b) => {
      b.addEventListener("click", (_) => {
        showModal(AddModal);
        prepareEditModal(parseFloat(b.value), AddModal);
        AddModal.querySelector(".--change").innerText = "add";
        updateId = parseFloat(b.value);
        AddsumButton.style.display = "inline";
        MinussumButton.style.display = "none";

        let num = EditModalSum.innerText;

        Editinput.addEventListener("keyup", () => {
          EditModalSum.style.color = "green";
          EditModalSum.innerText = `+${
            parseFloat(num) + parseFloat(Editinput.value)
          }`;

          if (EditModalSum.innerText == "+NaN") {
            EditModalSum.innerText = num;
            EditModalSum.style.color = "black";
          }
        });
      });
    });
    document.querySelectorAll(".--withdraw").forEach((b) => {
      b.addEventListener("click", (_) => {
        showModal(AddModal);
        prepareEditModal(parseFloat(b.value), AddModal);
        AddModal.querySelector(".--change").innerText = "withdraw";
        updateId = parseFloat(b.value);
        AddsumButton.style.display = "none";
        MinussumButton.style.display = "inline";

        let num = EditModalSum.innerText;

        Editinput.addEventListener("keyup", () => {
          EditModalSum.style.color = "red";
          EditModalSum.innerText = `${
            parseFloat(num) - parseFloat(Editinput.value)
          }`;

          if (EditModalSum.innerText == "NaN") {
            EditModalSum.innerText = num;
            EditModalSum.style.color = "black";
          }
        });
      });
    });
  };

  //mygtukai

  storeButton.addEventListener("click", (_) => {
    storeLocalHost();
  });

  CreateBtn.addEventListener("click", (_) => showModal(FormModal));

  destroybutton.addEventListener("click", (_) => {
    setTimeout(showModal(OperationModal), 1000);
    setTimeout(() => hideModal(OperationModal), 1200);
    destroy();
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", (_) => {
      btn.closest(".--modal").style.display = "none";
    });
  });

  AddsumButton.addEventListener("click", () => {
    let flag = true;
    const InputValue = Editinput.value;

    if (Editinput.value == "") {
      flag = false;
    }
    if (flag == true) {
      setTimeout(showModal(OperationModal), 1000);
      setTimeout(() => hideModal(OperationModal), 1000);
      update(updateId, InputValue, true);
    }
  });
  // clearInterval(timerId);

  MinussumButton.addEventListener("click", () => {
    let flag = true;
    const InputValue = Editinput.value;
    if (Editinput.value == "") {
      flag = false;
    }

    if (
      getSumbyId(updateId) - parseFloat(Editinput.value) < 0 ||
      getSumbyId(updateId) <= 0
    ) {
      showModal(MessageModal);
      flag = false;
    }
    if (flag == true) {
      setTimeout(showModal(OperationModal), 1000);
      setTimeout(() => hideModal(OperationModal), 1000);
      update(updateId, InputValue, false);
    }
  });

  //mygtukai -----

  showList();
});
