import data from "./data.js";
import { normalize, schema } from "normalizr";

const item = new schema.Entity(
  "menu",
  {},
  {
    idAttribute: "absolute_url"
  }
);
const items = [item];
item.define({ submenu: items });

const normData = normalize(data, items);
console.log(normData.entities.menu["/catalog/"]);
const el = document.getElementById("root");
el.innerHTML = `<pre>${JSON.stringify(normData, null, 2)}</pre>`;
