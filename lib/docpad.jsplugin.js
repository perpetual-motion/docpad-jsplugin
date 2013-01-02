var util = require('util');

// javascript version of the Coffeescript inheritance implementation.
var __hasProp = {}.hasOwnProperty;
var __extends = function (child, parent) {
    for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
    }

    function ctor() {
        this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
};


module.exports = {
    oldExportPlugin : function(pluginClass, pluginName ) {
        return function(_super) {
            __extends(pluginClass, _super);
            
            pluginClass.prototype.name = pluginName;
            
            pluginClass.prototype.constructor = function() {
                return pluginClass.__super__.constructor.apply(this, arguments);
            };
           
            console.log(util.inspect(pluginClass,true,3));
            console.log(util.inspect(pluginClass.prototype,true,3));
            return pluginClass;
        };
    },
    
    ExportPlugin : function(pluginName, pluginClass) {
        
        return function(_super) {
            function plugin() { 
                for(each in pluginClass) {
                    this[each] = pluginClass[each];
                }
               return plugin.__super__.constructor.apply(this, arguments)
            };
            __extends(plugin, _super);
            
            plugin.prototype.name = pluginName;
            
            return plugin;
        };
    }
}

/*
module.exports = function (BasePlugin) {
    var NewPlugin;
    return NewPlugin = (function (_super) {
        __extends(NewPlugin, _super);

        function NewPlugin() {
            return NewPlugin.__super__.constructor.apply(this, arguments);
        }

        NewPlugin.prototype.name = 'ejs';

        NewPlugin.prototype.render = function (opts, next) {
            var config, inExtension, outExtension;
            config = this.config;
            inExtension = opts.inExtension;
            outExtension = opts.outExtension;
            templateData = opts.templateData;
            
            if (inExtension === 'ejs' ) {
                opts.content = ejs.render(opts.content, templateData)
            } 
            return next();
        };
        return NewPlugin;
    })(BasePlugin);
};
*/