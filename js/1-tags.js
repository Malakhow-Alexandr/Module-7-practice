// // №1 одна кнопка активная.

// const tagsContainer = document.querySelector(".js-tags");

// tagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(evt) {

//   let selectedTag = null;
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }

//     const currentActiveBtn = document.querySelector(".tags__btn--active");

//   //   if (currentActiveBtn) {
//   //     currentActiveBtn?.classList.remove("tags__btn--active");
//   //   }

//   currentActiveBtn?.classList.remove("tags__btn--active"); // замена if

//   const nextActiveBtn = evt.target;

//   nextActiveBtn.classList.add("tags__btn--active");
//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }

// №2 Моного відилений добавление в массив

const tagsContainer = document.querySelector(".js-tags");

tagsContainer.addEventListener("click", onTagsContainerClick);

const selectedTags = new Set();

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  const btn = evt.target;

  const isBtnActive = btn.classList.contains("tags__btn--active");

  if (isBtnActive) {
    selectedTags.delete(btn.dataset.value);
  } else {
    selectedTags.add(btn.dataset.value);
  }

  btn.classList.toggle("tags__btn--active");

  console.log(selectedTags);
}
