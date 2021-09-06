const categoriesEl = document.querySelectorAll(".item");
console.log(`В списке ${categoriesEl.length} категории.`);

const categorySubEl = (array) => {
  array.forEach((element) => {
    console.log(
      `Категория:${element.firstElementChild.textContent}. Количество элементов:${element.lastElementChild.children.length}`
    );
  });
};

categorySubEl(categoriesEl);
