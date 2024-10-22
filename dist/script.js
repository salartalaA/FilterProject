const highPrice = document.getElementById("high-price");
const lowPrice = document.getElementById("low-price");
const priceRange = document.getElementById("price-range");
const prices = document.getElementById("prices");
const tenMil = document.getElementById("10mil");
const tenEleMil = document.getElementById("10-11mil");
const elMil = document.getElementById("11mil");
const elTweMil = document.getElementById("11-12mil");

priceRange.addEventListener("click", () => {
  prices.classList.toggle("hidden");
});

fetch("https://salarmhmdn.ir/filter/phones")
  .then((res) => {
    return res.json();
  })

  .then((data) => {
    const sortedDataAsc = data.slice().sort((a, b) => a.maxprice - b.maxprice);

    const sortedDataDesc = data.slice().sort((a, b) => b.maxprice - a.maxprice);
    const tenPrice = data.filter(
      (user) => user.maxprice >= 10000000 && user.maxprice < 11000000
    );
    const tenElPrice = data.filter(
      (user) => user.maxprice >= 11000000 && user.maxprice < 12000000
    );
    const elPrice = data.filter(
      (user) => user.maxprice >= 12000000 && user.maxprice < 13000000
    );
    const elTwePrice = data.filter(
      (user) => user.maxprice >= 13000000 && user.maxprice < 14000000
    );
    const renderData = (dataArray) => {
      dataArray.forEach((user) => {
        let markup = [
          `<div class="flex justify-between p-2">
            <div id="name" class="float-right cursor-pointer">${
              user.fullnamefa
            }</div>
            <div id="price" class="float-left cursor-pointer">${Math.round(
              user.maxprice
            )} تومان</div>
          </div>
          <hr class="hr-border my-4">`,
        ];

        document
          .getElementById("table")
          .insertAdjacentHTML("beforeend", markup);
      });
    };

    renderData(data);

    highPrice.addEventListener("click", () => {
      document.getElementById("table").innerHTML = "";
      renderData(sortedDataDesc);
      highPrice.classList.add("price-active");
      lowPrice.classList.remove("price-active");
      tenMil.classList.remove("price-active");
      tenEleMil.classList.remove("price-active");
      elMil.classList.remove("price-active");
      elTweMil.classList.remove("price-active");
    });

    lowPrice.addEventListener("click", () => {
      document.getElementById("table").innerHTML = "";
      renderData(sortedDataAsc);
      highPrice.classList.remove("price-active");
      lowPrice.classList.add("price-active");
      tenMil.classList.remove("price-active");
      tenEleMil.classList.remove("price-active");
      elMil.classList.remove("price-active");
      elTweMil.classList.remove("price-active");
    });

    tenMil.addEventListener("click", () => {
      document.getElementById("table").innerHTML = "";
      renderData(tenPrice);
      highPrice.classList.remove("price-active");
      lowPrice.classList.remove("price-active");
      tenEleMil.classList.remove("price-active");
      elMil.classList.remove("price-active");
      elTweMil.classList.remove("price-active");
      tenMil.classList.add("price-active");
    });
    tenEleMil.addEventListener("click", () => {
      document.getElementById("table").innerHTML = "";
      renderData(tenElPrice);
      highPrice.classList.remove("price-active");
      lowPrice.classList.remove("price-active");
      tenMil.classList.remove("price-active");
      elMil.classList.remove("price-active");
      elTweMil.classList.remove("price-active");
      tenEleMil.classList.add("price-active");
    });
    elMil.addEventListener("click", () => {
      document.getElementById("table").innerHTML = "";
      renderData(elPrice);
      highPrice.classList.remove("price-active");
      lowPrice.classList.remove("price-active");
      tenMil.classList.remove("price-active");
      tenEleMil.classList.remove("price-active");
      elTweMil.classList.remove("price-active");
      elMil.classList.add("price-active");
    });
    elTweMil.addEventListener("click", () => {
      document.getElementById("table").innerHTML = "";
      renderData(elTwePrice);
      highPrice.classList.remove("price-active");
      lowPrice.classList.remove("price-active");
      tenMil.classList.remove("price-active");
      tenEleMil.classList.remove("price-active");
      elMil.classList.remove("price-active");
      elTweMil.classList.add("price-active");
    });
  })
  .catch((error) => console.log(error));
