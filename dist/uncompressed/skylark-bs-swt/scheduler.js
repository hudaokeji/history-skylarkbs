/**
 * skylark-bs-swt - The old skylark bootstrap standard widget toolkit
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-bs-swt/
 * @license MIT
 */
define([
  "skylark-fuelux/scheduler",
  "./sbswt"
],function(scheduler,sbswt){
   sbswt.Scheduler = scheduler.Constructor;

   return scheduler;
});
