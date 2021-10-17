const KEY = "23097756-2661a8d66efd3b5956221c710";
const URL = "https://pixabay.com/api/";
const pagePerPage = 12;

export default function apiServise(imgName, pageNum) {
  return fetch(
    `${URL}?q=${imgName}&page=${pageNum}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${pagePerPage}`,
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Картинки с именем ${imgName} отсутсвуют`));
  });
}
