window.addEventListener("load", (_) => {
  const CreateBtn = document.querySelectorAll(".--show-btn");
  const closeButtons = document.querySelectorAll(".--close");
  const FormModal = document.querySelector(".--modal");
  const storeButton = FormModal.querySelector(".--submit");
  const LAST_ID = "AccLastSavedId";
  const ACC_LIST_LS = "AllAccList";

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

  const read = (_) => {
    const data = localStorage.getItem(ACC_LIST_LS);
    if (null === data) {
      return [];
    }
    return JSON.parse(data);
  };

  const storeLocalHost = (_) => {
    const getLocalHostData = read();
    const formData = getForm();
    getLocalHostData.push(formData);
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
});
