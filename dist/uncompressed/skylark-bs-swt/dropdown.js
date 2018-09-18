/**
 * skylark-bs-swt - The old skylark bootstrap standard widget toolkit
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-bs-swt/
 * @license MIT
 */
define([
  "skylark-bootstrap3/dropdown",
  "./sbswt"
],function(dropdown,sbswt){

  sbswt.Dropdown = dropdown.Constructor;

  return dropdown;
});
