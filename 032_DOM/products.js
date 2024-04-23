console.log("hello");

const html = `<div class="product">
    <div>
        <div class="id">ID:{{id}}</div>
        <div class="title">{{title}}</div>
        <div class="price">{{price}} eur</div>
    </div>
    <div>
        <button type="button" value="{{id}}" class="brown --edit">Edit</button>
        <button type="button" value="{{id}}" class="red --delete">Delete</button>
    </div>
</div>`;

window.addEventListener("load", (_) => {
  const listHtml = document.querySelector(".--list");
  const closeButtons = document.querySelectorAll(".--close");
  const CreateModal = document.querySelector(".modal--create");
  const storeButton = CreateModal.querySelector(".--submit");
  const createButton = document.querySelector(".--create");

  const LAST_ID_LS = "productsLastSavedId";

  const PRODUCTS_LS = "productsList";

  const getId = (_) => {
    //local storage nustatymas kad saugotu ateinanti prekes ID skaiciu
    const id = localStorage.getItem(LAST_ID_LS);
    if (null === id) {
      //jeigu pirma karta kreipsis i localstorage jo neras ir bus null
      localStorage.setItem(LAST_ID_LS, 1);
      return 1;
    }
    localStorage.setItem(LAST_ID_LS, parseInt(id) + 1);
    return parseInt(id) + 1;
  };

  const write = (data) => {
    localStorage.setItem(PRODUCTS_LS, JSON.stringify(data));
  };

  const read = (_) => {
    const data = localStorage.getItem(PRODUCTS_LS);
    if (null === data) {
      return [];
    }

    return JSON.parse(data);
  };

  const storeData = (data) => {
    const storeData = read();
    data.id = getId();
    storeData.push(data);
    write(storeData);
  };

  const showmodal = (modal) => {
    modal.style.display = "flex";
  };

  const hideModal = (modal) => {
    modal.querySelectorAll("[name]").forEach((i) => {
      i.value = "";
    });
    modal.style.display = "none";
  };

  const getDataFromForm = (form) => {
    const data = {};
    form.querySelectorAll("[name]").forEach((i) => {
      data[i.getAttribute("name")] = i.value;
    });
    return data;
  };

  const store = () => {
    data = getDataFromForm(CreateModal);
    storeData(data);
    hideModal(CreateModal);
    showList();
  };

  const showList = (_) => {
    let producthtml = "";
    read().forEach((p) => {
      let temp = html;
      temp = temp.replaceAll("{{id}}", p.id);
      temp = temp.replaceAll("{{price}}", p.productPrice);
      temp = temp.replaceAll("{{title}}", p.productTitle);
      producthtml += temp;
    });
    listHtml.innerHTML = producthtml;
  };

  ////////////////EVENTS/////////////
  closeButtons.forEach((b) => {
    b.addEventListener("click", (_) => {
      hideModal(b.closest(".--modal"));
    });
  });
  createButton.addEventListener("click", (_) => showmodal(CreateModal));

  storeButton.addEventListener("click", (_) => store());

  showList();
});
