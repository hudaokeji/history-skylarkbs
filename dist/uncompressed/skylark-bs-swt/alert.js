/**
 * skylark-bs-swt - The old skylark bootstrap standard widget toolkit
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-bs-swt/
 * @license MIT
 */
define([
  "skylark-bootstrap3/alert",
  "./sbswt"
],function(alert,sbswt){

  sbswt.Alert = alert.Constructor;

  return alert;
});
