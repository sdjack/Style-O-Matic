/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint no-param-reassign: ["error", { "props": false }] */

export function objectClone(obj, overrides) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  const copy = obj.constructor();
  Object.entries(obj).forEach(([attr, prop]) => {
    if (overrides && typeof overrides[attr] !== "undefined") {
      copy[attr] = overrides[attr];
    } else {
      copy[attr] = prop;
    }
  });
  return copy;
}

const CoreDataModel = {
  templateSchema: {
    dependancy: {
      loaded: true,
      dependancies: [],
      dependanciesLoaded: true,
      queue: {}
    }
  },
  storeSchema: {},
  storeKeys: {},
  storeDependancies: {},

  addTemplateSchema(key, obj) {
    this.templateSchema[key] = objectClone(obj);
  },

  addStoreSchema(key, obj) {
    if (typeof this.storeSchema[key] === "undefined") {
      this.storeSchema[key] = objectClone(obj);
      this.storeDependancies[key] = {
        loaded: true,
        dependancies: [],
        dependanciesLoaded: true,
        queue: {}
      };
      return obj;
    }
    return objectClone(this.storeSchema[key]);
  },

  addStoreKeys(key, list) {
    this.storeKeys[key] = list;
  },

  addStoreDependancies(key, list) {
    if (typeof this.storeDependancies[key] === "undefined") {
      this.storeDependancies[key] = {
        loaded: true,
        dependancies: [],
        dependanciesLoaded: true,
        queue: {}
      };
    }
    this.storeDependancies[key].loaded = list.length === 0;
    this.storeDependancies[key].dependanciesLoaded = list.length === 0;
    this.storeDependancies[key].dependancies = list;
  },

  checkDependancies() {
    Object.values(this.storeDependancies).forEach(store => {
      const list = store.dependancies;
      let dependanciesLoaded = true;
      if (list.length > 0) {
        for (let i = 0; i < list.length; i += 1) {
          const depData = this.storeDependancies[list[i]];
          if (depData.loaded === false) {
            dependanciesLoaded = false;
          }
        }
      }
      store.dependanciesLoaded = dependanciesLoaded;
    });
  },

  initialized(key) {
    if (!this.storeDependancies[key].loaded) {
      this.storeDependancies[key].loaded = true;
      const { queue } = this.storeDependancies[key];
      Object.values(queue).forEach(fn => {
        fn();
      });
      this.storeDependancies[key].queue = {};
    }
    this.checkDependancies();
  },

  uninitialized(key) {
    this.storeDependancies[key].loaded = false;
    this.checkDependancies();
  },

  isLoaded(key) {
    return this.storeDependancies[key].loaded;
  },

  dependanciesLoaded(key) {
    const store = this.storeDependancies[key];
    const list = store.dependancies;
    if (list.length > 0) {
      for (let i = 0; i < list.length; i += 1) {
        const depData = this.storeDependancies[list[i]];
        if (depData.loaded === false) {
          return false;
        }
      }
    }
    return true;
  },

  callWhenReady(key, fn) {
    const store = this.storeDependancies[key];
    const list = store.dependancies;
    if (!store.dependanciesLoaded && list.length > 0) {
      for (let i = 0; i < list.length; i += 1) {
        const depData = this.storeDependancies[list[i]];
        if (depData.loaded === false) {
          depData.queue[key] = fn;
        }
      }
    } else {
      fn();
    }
  },

  data(key) {
    const obj = this.storeSchema[key];
    return objectClone(obj);
  },

  keys(key) {
    const obj = this.storeKeys[key];
    return objectClone(obj);
  },

  template(key) {
    const obj = this.templateSchema[key];
    return objectClone(obj);
  },

  templateMap(key, source) {
    const obj = this.templateSchema[key];
    return objectClone(obj, source);
  }
};

export default CoreDataModel;
