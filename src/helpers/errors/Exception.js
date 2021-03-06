const mergeMessage = (message, values) => {
  let ret = message || '';
  const replaces = { ...(values || {}) };
  Object.keys(replaces).forEach(key => {
    ret = ret.replace(new RegExp(key, 'g'), replaces[key]);
  });
  return ret;
};

class Exception {
  constructor(definition) {
    this.definition = definition;
    this.date = new Date();
    this.isArray = (definition || {}).constructor === Array;
  }

  static generateCustomError(errorDefinition) {
    const mergeDef = def => ({
      ...def,
      message: mergeMessage(def.message, def.values),
      detail: mergeMessage(def.detail, def.values)
    });

    const native = new Error();
    if ((errorDefinition || {}).constructor === Array) {
      return errorDefinition.map(def => mergeDef(def, native.stack));
    }
    return mergeDef(errorDefinition, native.stack);
  }

  static raise(errorDefinition) {
    return Exception.generateCustomError(errorDefinition);
  }
}

module.exports = Exception;
