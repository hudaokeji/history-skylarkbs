define([
  "skylark-fuelux/infinite-scroll",
  "./sbswt"
],function(infiniteScroll,sbswt){
   sbswt.InfiniteScroll = infiniteScroll.Constructor;

   return infiniteScroll;
});
