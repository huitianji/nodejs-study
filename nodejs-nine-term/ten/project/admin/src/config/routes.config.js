export default function routesConfig($urlRouterprovider){
    $urlRouterprovider.otherwise('/');
}

routesConfig.$inject = ['$urlRouterprovider'];