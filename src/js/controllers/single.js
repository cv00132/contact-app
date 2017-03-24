const SERVER_URL = "https://sleepy-inlet-40566.herokuapp.com";

function SingleController ($scope, $http, $stateParams) {

   function getContact () {
     var contactId = $stateParams.id;
     $http.get(`${SERVER_URL}/contacts/${contactId}`).then(resp => {
             $scope.currentContact = resp.data;
        });
    };

   getContact();
};

SingleController.$inject = ['$scope', '$http', '$stateParams'];

export default SingleController;
