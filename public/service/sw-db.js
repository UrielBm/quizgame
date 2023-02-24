//Utilidades para guardar en indexDB
const db = new PouchDB("puntajes");

const saveRecord = (puntaje) => {
  puntaje._id = new Date().toISOString();
  return db.put(puntaje).then(() => {
    self.registration.sync.register("new-record");
    const newResp = { ok: true, offline: true };
    return new Response(JSON.stringify(newResp));
  });
};

const postRecords = () => {
  const puntajes = [];

  return db.allDocs({ include_docs: true }).then((docs) => {
    docs.rows.forEach((row) => {
      const doc = row.doc;

      const fetchPom = fetch(
        "https://backquizgame-production-395c.up.railway.app/newscore",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(doc),
        }
      ).then((res) => {
        return db.remove(doc);
      });

      puntajes.push(fetchPom);
    }); // fin del foreach

    return Promise.all(puntajes);
  });
};
