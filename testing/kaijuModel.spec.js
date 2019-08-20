const db = require("../database/dbConfig");
const Kaiju = require("../kaiju/kaijuModel");

describe("kaiju model", () => {
  beforeEach(async () => {
    await db("kaiju").truncate();
  });
  describe("addKaiju()", () => {
    it("should insert the kaiju", async () => {
      await Kaiju.addKaiju({ kaiju: "Godzilla" });
      await Kaiju.addKaiju({ kaiju: "Destoroyah" });
      await Kaiju.addKaiju({ kaiju: "Biolante" });

      const kaijuTable = await db("kaiju");
      expect(kaijuTable).toHaveLength(3);
    });
    it("should insert the kaiju", async () => {
      await Kaiju.addKaiju({ kaiju: "Space Godzilla" });
      await Kaiju.addKaiju({ kaiju: "Rodan" });
      await Kaiju.addKaiju({ kaiju: "Mothra" });

      const kaijuTable = await db("kaiju");
      expect(kaijuTable).toHaveLength(3);
    });
    it('should insert the single kaiju, async () => {
        let kaijuTable = await Boardgames.insert({ kaiju: 'Zilla' });
        expect(kaijuTable.kaiju).toBe('Zilla');
  });
  describe("removeKaiju()", () => {
    beforeEach(async () => {
      await Kaiju.addKaiju({ kaiju: "Godzilla" });
      await Kaiju.addKaiju({ kaiju: "Destoroyah" });
      await Kaiju.addKaiju({ kaiju: "Biolante" });
    });
    it("should remove the kaiju with the provided id and check to see if it exists", async () => {
        await Kaiju.removeKaiju(2);
        const kaijuTable = await db("kaiju")
        .wbere({id: 2})
        .first()
        expect(kaijuTable).toBe(undefined);
      });
    it("should remove the kaiju with the provided id and check the length of the kaijuTable", async () => {
      await Kaiju.removeKaiju(1);
      const kaijuTable = await db("kaiju");
      expect(kaijuTable).toHaveLength(2);
    });
  });
});

//     beforeEach(async () => {
//       await db("kaiju").truncate();
//     });
//     it("should insert and remove the single kaiju", async () => {
//       let kaijuTable = await Kaiju.addKaiju({ kaiju: "Gigan" });
//       expect(kaijuTable.kaiju).toBe("Gigan");
//       await Kaiju.removeKaiju(1);
//       let kaijuTableWithDeletion = await db("kaiju");
//       expect(kaijuTable.kaiju).toHaveLength(5);
//     });
//   }); ...
