angular.module('portainer.app')
  .directive('authorization', ['Authentication', function(Authentication) {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {

        elem.hide();

        var authorizations = attrs.authorization.split(",");
        for (var i = 0; i < authorizations.length; i++) {
          authorizations[i] = authorizations[i].trim();
        }

        if (Authentication.hasAuthorizations(authorizations)) {
          elem.show();
        }
      }
    }
  }]);