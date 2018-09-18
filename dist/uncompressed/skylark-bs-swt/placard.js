/**
 * skylark-bs-swt - The old skylark bootstrap standard widget toolkit
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-bs-swt/
 * @license MIT
 */
define([
  "skylark-fuelux/placard",
  "./sbswt"
],function(placard,sbswt){
   sbswt.Placard = placard.Constructor;

   return placard;
});
