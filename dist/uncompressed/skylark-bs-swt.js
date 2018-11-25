/**
 * skylark-bs-swt - The old skylark bootstrap standard widget toolkit
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-bs-swt/
 * @license MIT
 */
(function(factory,globals) {
  var define = globals.define,
      require = globals.require,
      isAmd = (typeof define === 'function' && define.amd),
      isCmd = (!isAmd && typeof exports !== 'undefined');

  if (!isAmd && !define) {
    var map = {};
    function absolute(relative, base) {
        if (relative[0]!==".") {
          return relative;
        }
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); 
        for (var i=0; i<parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    }
    define = globals.define = function(id, deps, factory) {
        if (typeof factory == 'function') {
            map[id] = {
                factory: factory,
                deps: deps.map(function(dep){
                  return absolute(dep,id);
                }),
                exports: null
            };
            require(id);
        } else {
            map[id] = factory;
        }
    };
    require = globals.require = function(id) {
        if (!map.hasOwnProperty(id)) {
            throw new Error('Module ' + id + ' has not been defined');
        }
        var module = map[id];
        if (!module.exports) {
            var args = [];

            module.deps.forEach(function(dep){
                args.push(require(dep));
            })

            module.exports = module.factory.apply(globals, args);
        }
        return module.exports;
    };
  }
  
  if (!define) {
     throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");
  }

  factory(define,require);

  if (!isAmd) {
    var skylarkjs = require("skylark-langx/skylark");

    if (isCmd) {
      module.exports = skylarkjs;
    } else {
      globals.skylarkjs  = skylarkjs;
    }
  }

})(function(define,require) {

define('skylark-bs-swt/sbswt',[
  "skylark-langx/skylark"
],function(skylark){

	return skylark.sbswt = {};

});

define('skylark-bs-swt/affix',[
  "skylark-bootstrap3/affix",
  "./sbswt"
],function(affix,sbswt){

  sbswt.Affix = Affix.Constructor;

  return affix;
});

define('skylark-bs-swt/alert',[
  "skylark-bootstrap3/alert",
  "./sbswt"
],function(alert,sbswt){

  sbswt.Alert = alert.Constructor;

  return alert;
});

define('skylark-bs-swt/button',[
  "skylark-bootstrap3/button",
  "./sbswt"
],function(button,sbswt){

  sbswt.Button = button.Constructor;

  return button;
});

define('skylark-bs-swt/carousel',[
  "skylark-bootstrap3/carousel",
  "./sbswt"
],function(carousel,sbswt){

  sbswt.Carousel = carousel.Constructor;

  return carousel;
});

define('skylark-bs-swt/checkbox',[
  "skylark-fuelux/checkbox",
  "./sbswt"
],function(checkbox,sbswt){
   sbswt.Checkbox = checkbox.Constructor;

   return checkbox;
});

define('skylark-bs-swt/collapse',[
  "skylark-bootstrap3/collapse",
  "./sbswt"
],function(collapse,sbswt){

  sbswt.Collapse = collapse.Constructor;

  return collapse;
});

define('skylark-bs-swt/combobox',[
  "skylark-fuelux/combobox",
  "./sbswt"
],function(combobox,sbswt){
   sbswt.Combobox = combobox.Constructor;

   return combobox;
});

define('skylark-bs-swt/datepicker',[
  "skylark-fuelux/datepicker",
  "./sbswt"
],function(datepicker,sbswt){
   sbswt.Datepicker = datepicker.Constructor;

   return datepicker;
});

define('skylark-bs-swt/dropdown',[
  "skylark-bootstrap3/dropdown",
  "./sbswt"
],function(dropdown,sbswt){

  sbswt.Dropdown = dropdown.Constructor;

  return dropdown;
});

define('skylark-bs-swt/infinite-scroll',[
  "skylark-fuelux/infinite-scroll",
  "./sbswt"
],function(infiniteScroll,sbswt){
   sbswt.InfiniteScroll = infiniteScroll.Constructor;

   return infiniteScroll;
});

define('skylark-bs-swt/loader',[
  "skylark-fuelux/loader",
  "./sbswt"
],function(loader,sbswt){
   sbswt.Loader = loader.Constructor;

   return loader;
});

define('skylark-bs-swt/modal',[
  "skylark-bootstrap3/modal",
  "./sbswt"
],function(modal,sbswt){

  sbswt.Modal = modal.Constructor;

  return modal;
});

define('skylark-bs-swt/picker',[
  "skylark-fuelux/picker",
  "./sbswt"
],function(picker,sbswt){
   sbswt.Picker = picker.Constructor;

   return picker;
});

define('skylark-bs-swt/pillbox',[
  "skylark-fuelux/pillbox",
  "./sbswt"
],function(pillbox,sbswt){
   sbswt.Pillbox = pillbox.Constructor;

   return pillbox;
});

define('skylark-bs-swt/placard',[
  "skylark-fuelux/placard",
  "./sbswt"
],function(placard,sbswt){
   sbswt.Placard = placard.Constructor;

   return placard;
});

define('skylark-bs-swt/popover',[
  "skylark-bootstrap3/popover",
  "./sbswt"
],function(popover,sbswt){

  sbswt.Popover = popover.Constructor;

  return popover;
});

define('skylark-bs-swt/radio',[
  "skylark-fuelux/radio",
  "./sbswt"
],function(radio,sbswt){
   sbswt.Radio = radio.Constructor;

   return radio;
});

define('skylark-bs-swt/repeater',[
  "skylark-fuelux/repeater",
  "./sbswt"
],function(repeater,sbswt){
   sbswt.Repeater = repeater.Constructor;

   return repeater;
});

define('skylark-bs-swt/scheduler',[
  "skylark-fuelux/scheduler",
  "./sbswt"
],function(scheduler,sbswt){
   sbswt.Scheduler = scheduler.Constructor;

   return scheduler;
});

define('skylark-bs-swt/scrollspy',[
  "skylark-bootstrap3/scrollspy",
  "./sbswt"
],function(scrollspy,sbswt){

  sbswt.Scrollspy = scrollspy.Constructor;

  return scrollspy;
});

define('skylark-bs-swt/search',[
  "skylark-fuelux/search",
  "./sbswt"
],function(search,sbswt){
   sbswt.Search = search.Constructor;

   return search;
});

define('skylark-bs-swt/selectlist',[
  "skylark-fuelux/selectlist",
  "./sbswt"
],function(selectlist,sbswt){
   sbswt.Selectlist = selectlist.Constructor;

   return selectlist;
});

define('skylark-bs-swt/spinbox',[
  "skylark-fuelux/spinbox",
  "./sbswt"
],function(spinbox,sbswt){
   sbswt.Spinbox = spinbox.Constructor;

   return spinbox;
});

define('skylark-bs-swt/tab',[
  "skylark-bootstrap3/tab",
  "./sbswt"
],function(tab,sbswt){

  sbswt.Tab = tab.Constructor;

  return tab;
});

define('skylark-bs-swt/tooltip',[
  "skylark-bootstrap3/tooltip",
  "./sbswt"
],function(tooltip,sbswt){

  sbswt.Tooltip = tooltip.Constructor;

  return tooltip;
});

define('skylark-bs-swt/wizard',[
  "skylark-fuelux/wizard",
  "./sbswt"
],function(wizard,sbswt){
   sbswt.Wsizard = wizard.Constructor;

   return wizard;
});

define('skylark-bs-swt/main',[
    "skylark-utils-dom/query",
    "./affix",
    "./alert",
    "./button",
    "./carousel",
    "./checkbox",
    "./collapse",
    "./combobox",
    "./datepicker",
    "./dropdown",
    "./infinite-scroll",
    "./loader",
    "./modal",
    "./picker",
    "./pillbox",
    "./placard",
    "./popover",
    "./radio",
    "./repeater",
    "./scheduler",
    "./scrollspy",
    "./search",
    "./selectlist",
    "./spinbox",
    "./tab",
    "./tooltip",
    "./wizard"
], function($) {
    return $;
});
define('skylark-bs-swt', ['skylark-bs-swt/main'], function (main) { return main; });


},this);