const SERVER_URL = "https://sleepy-inlet-40566.herokuapp.com";

function ContactAddController ($scope, $http, $state) {
$scope.currentContact = null;


$scope.addContact = function (data) {
    var url = `${SERVER_URL}/contacts`;
    $http.post(url, data).then(resp => {
      $scope.currentContact = resp.data;
      $scope.contacts.push(resp.data);
      $state.go('contacts');

    })
  }
};

ContactAddController.$inject = ['$scope', '$http', '$state'];

export default ContactAddController;
