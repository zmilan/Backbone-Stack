(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'global', 'views/home/main'], function($, _, Backbone, global, mainHomeView) {
    var AppRouter;
    AppRouter = (function(_super) {

      __extends(AppRouter, _super);

      AppRouter.name = 'AppRouter';

      function AppRouter() {
        this.renderView = __bind(this.renderView, this);
        return AppRouter.__super__.constructor.apply(this, arguments);
      }

      AppRouter.prototype.currentView = null;

      AppRouter.prototype.viewArgs = null;

      AppRouter.prototype.routes = {
        "*actions": "defaultAction"
      };

      AppRouter.prototype.defaultAction = function(actions) {
        return this.prepareView(mainHomeView);
      };

      AppRouter.prototype.prepareView = function(view) {
        if ((this.currentView != null) && (this.currentView.destroy != null)) {
          this.currentView.destroy();
        }
        this.currentView = view;
        return $('#content').slideUp(200, this.renderView);
      };

      AppRouter.prototype.renderView = function() {
        this.currentView.render(this.viewArgs);
        return $('#content').slideDown(200);
      };

      return AppRouter;

    })(Backbone.Router);
    return {
      initialize: function() {
        var app_router;
        app_router = new AppRouter;
        return Backbone.history.start();
      }
    };
  });

}).call(this);