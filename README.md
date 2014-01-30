# Base plugin support for DocPad for writing plugins in javascript

## Install


```
npm install --save docpad-jsplugin
```


## History
You can discover the history inside the `History.md` file

## Usage
Add this package as a dependency to your plugin project, and create a script 
like:

``` javascript

// adds support for 
var exportPlugin = require('docpad-jsplugin');

module.exports = exportPlugin("foo", {

    // handle the render event
    render : function(opts, next) {
        var config = this.config;
        
        var outExtension = opts.outExtension;
        var templateData = opts.templateData;
        
        if (opts.inExtension == 'foo' ) {
            opts.content = /* something you want to do */
        } 
        
        // call next when yer done!
        return next();
    }
}); 


```




## License
Licensed under the Apache 2.0 license
<br/>Copyright &copy; 2013 [Garrett Serack](http://fearthecowboy.com)