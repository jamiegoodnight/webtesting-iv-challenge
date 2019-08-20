const db = require("../database/dbConfig");
module.exports = {
  addKaiju,
  removeKaiju
};

async function addKaiju(kaiju) {
  const [id] = await db("kaiju").insert(kaiju);
  return db("kaiju")
    .where({ id })
    .first();
}

function removeKaiju(id) {
  return db("kaiju")
    .where("id", id)
    .del();
}
