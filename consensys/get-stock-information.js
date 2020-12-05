const https = require("https");

async function getStockInformation(date) {
  if (date.startsWith("0")) {
    date = date.slice(1);
  }

  const data = await fetch(
    `https://jsonmock.hackerrank.com/api/stocks?date=${date}`
  );

  if (data.data.length == 0) {
    return {};
  }

  const values = data.data[0];
  delete values.date;

  return values;
}

function fetch(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (resp) => {
        let data = "";

        resp.on("data", (chunk) => {
          data += chunk;
        });

        resp.on("end", () => {
          resolve(JSON.parse(data));
        });
      })
      .on("error", (err) => {
        console.error("Error: " + err.message);
        reject();
      });
  });
}

async function main() {
  console.log(await getStockInformation("5-January-2000"));
}

main();
