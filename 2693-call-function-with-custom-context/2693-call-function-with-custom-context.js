/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */


Function.prototype.callPolyfill = function(context, ...args) {
  const fn = this;

  Object.defineProperty(context, '__fn__', {
    value: fn,
    enumerable: false
  });
    
    let result = context.__fn__(...args)
    
    delete context.__fn__
    
    // const result = .__fn__(...args)

    if (result === undefined){
        return undefined
    }
    
    return result

    // delete context.__fn__;

  return typeof result !== 'undefined' ? result : undefined;
};

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */