// Base plugin framework for DocPad plugins written in javascript.
var __hasProp = {}.hasOwnProperty;

module.exports = function(pluginName, pluginClass) {
    return function(_super) {
        var plugin;
        
        if( typeof pluginClass == 'function' ) {
            // works            
            plugin = function() { 
                // copy the members into this class.
                for(each in pluginClass.prototype) {
                    this[each] = pluginClass.prototype[each];
                }
                
               // the required constructor 
               return plugin.__super__.constructor.apply(this, arguments);
            };
        } else {
            
            plugin = function() { 
                // copy the members into this class.
                for(each in pluginClass) {
                    this[each] = pluginClass[each];
                }
                
               // the required constructor 
               return plugin.__super__.constructor.apply(this, arguments);
            };
        }
        
        // apply coffescript inheritance stuff.
        for (var key in _super) {
            if (__hasProp.call(_super, key)) plugin[key] = _super[key];
        }

        function ctor() {
            this.constructor = plugin;
        }
        ctor.prototype = _super.prototype;
        plugin.prototype = new ctor();
        plugin.__super__ = _super.prototype;
        plugin.prototype.name = pluginName;
        
        return plugin;
    };
}
