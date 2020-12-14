const https = require("https");

async function avgRotorSpeed(statusQuery, parentId) {
  let values = {
    total: 0,
    nbObjects: 0,
  };

  for (let i = 1; i < Number.MAX_SAFE_INTEGER; i++) {
    const data = await fetch(
      `https://jsonmock.hackerrank.com/api/iot_devices/search?status=${statusQuery}&page=${i}`
    );

    if (data.data.length == 0) {
      break;
    }

    for (const object of data.data) {
      if (parentId) {
        if (parentId === (object.parent || {}).id) {
          values.total += object.operatingParams.rotorSpeed;
          values.nbObjects++;
        }
      } else if (!Number.isNaN((object.operatingParams || {}).rotorSpeed)) {
        values.total += object.operatingParams.rotorSpeed;
        values.nbObjects++;
      }
    }
  }

  return values.total === 0 ? 0 : parseInt(values.total / values.nbObjects);
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
  console.error(await avgRotorSpeed("RUNNING", 7));
}

main();
