const someThingsWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("esta todo correcto");
    } else {
      reject("esta maaaal");
    }
  });
};

someThingsWillHappen()
  .then((Response) => console.log(Response))
  .catch((error) => console.error(error));

const someThingsWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(true);
      }, 200);
    } else {
      const err = new Error("woops!");
      reject(err);
    }
  });
};

someThingsWillHappen2()
  .then((resolve) => console.log(resolve))
  .catch((err) => console.error(err));

Promise.all([someThingsWillHappen(), someThingsWillHappen2()])
  .then((response) => console.log("arrayof results", response))
  .catch((error) => {
    console.log("array error", error);
  });
