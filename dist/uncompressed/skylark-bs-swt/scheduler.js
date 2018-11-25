define([
  "skylark-fuelux/scheduler",
  "./sbswt"
],function(scheduler,sbswt){
   sbswt.Scheduler = scheduler.Constructor;

   return scheduler;
});
