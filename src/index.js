import data from "./data.js";
import { normalize, schema } from "normalizr";

const urlIndx = {};
const itemSch = new schema.Entity(
  "menu",
  {},
  {
    processStrategy: entity => {
      urlIndx[entity.absolute_url] = entity.id;
      return entity;
    }
  }
);
const itemsSch = [itemSch];
itemSch.define({ submenu: itemsSch });

const nData = normalize(data, itemsSch);
nData.urlIndx = urlIndx;

const el = document.getElementById("root");
el.innerHTML = `<pre>${JSON.stringify(nData, null, 2)}</pre>`;