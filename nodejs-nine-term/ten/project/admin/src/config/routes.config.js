export default function routesConfig($stateprovider,$urlRouterprovider){
    $urlRouterprovider.otherwise('/');
}

routesConfig.$inject = ['$stateprovider','$urlRouterprovider'];