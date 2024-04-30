window.addEventListener("load", (_) => {
  const CreateBtn = document.querySelectorAll(".--show-btn");
  const closeButtons = document.querySelectorAll(".--close");
  const FormModal = document.querySelector(".--modal");
  const storeButton = FormModal.querySelector(".--submit");
  const LAST_ID = "AccLastSavedId";
  const ACC_LIST_LS = "AllAccList";
  let ClientList = document.querySelector(".clients-list");
  let html = `
  <div class="info-line client">
  <div class="number">{{id}}</div>
  <div class="name">{{AccName}}</div>
  <div class="surname">{{Surname}}</div>
  <div class="sum">{{Total}}</div>
  <div class="btnContainer">
    <button class="add clientbtn">Add funds</button>
    <button class="add clientbtn">Withdraw funds</button>
    <button class="remove clientbtn">Delete Account</button>
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
      const nameA = a.AccName.toUpperCase(); // ignore upper and lowercase
      const nameB = b.AccName.toUpperCase(); // ignore upper and lowercase
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

  const storeLocalHost = (_) => {
    const getLocalHostData = read();
    const formData = getForm();
    getLocalHostData.push(formData);
    localStorage.setItem(ACC_LIST_LS, JSON.stringify(getLocalHostData));
    hideModal(FormModal);
  };
  //localhost ----

  // Forma

  const getForm = (_) => {
    data = {};
    FormModal.querySelectorAll("[name]").forEach((inp) => {
      data[inp.getAttribute("name")] = inp.value;
    });
    data.id = getId();
    data.Sum = 0 + " eur";
    return data;
  };

  function ShowModal() {
    CreateBtn.forEach((btn) => {
      btn.addEventListener("click", (_) => {
        FormModal.style.display = "flex";
      });
    });
  }
  ShowModal();

  const hideModal = (modal) => {
    modal.querySelectorAll("[name]").forEach((i) => {
      i.value = "";
    });
    modal.style.display = "none";
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
  };

  //mygtukai
  storeButton.addEventListener("click", (_) => {
    storeLocalHost();
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", (_) => {
      btn.closest(".--modal").style.display = "none";
    });
  });
  //mygtukai -----

  showList();
});
