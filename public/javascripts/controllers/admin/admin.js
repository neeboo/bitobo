/**
 * Created by DELL on 14-9-4.
 */
function AccordionCtrl($scope) {
    $scope.oneAtATime = true;
   var position="/m_admin#";
   var initGroups = [
        {
            title: 'Dynamic Group Header - 1',
            context:'panel-info',
            openStatus:'false',
            contents: [
                { name:'Dynamic Group Body - 1 - 1',active:false,link:position+"/11"},
                { name:'Dynamic Group Body - 1 - 2',active:false,link:position+"/12"},
                { name:'Dynamic Group Body - 1 - 3',active:false,link:position+"/13"}
            ]
        },
        {
            title: 'Dynamic Group Header - 2',
            context:'panel-success',
            openStatus:'false',
            contents: [
                { name:'Dynamic Group Body - 2 - 1',active:false,link:position+"/21"},
                { name:'Dynamic Group Body - 2 - 2',active:false,link:position+"/22"},
                { name:'Dynamic Group Body - 2 - 3',active:false,link:position+"/23"}
            ]
        },
        {
            title: 'Dynamic Group Header - 3',
            context:'panel-warning',
            openStatus:'false',
            contents: [
                { name:'Dynamic Group Body - 3 - 1',active:false,link:position+"/31"},
                { name:'Dynamic Group Body - 3 - 2',active:false,link:position+"/32"},
                { name:'Dynamic Group Body - 3 - 3',active:false,link:position+"/33"}
            ]
        }
    ];
    $scope.groups= initGroups;

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
    $scope.setFalse=function(){
        for( var x= 0; x < $scope.groups.length;x++){
            for(var y=0; y< $scope.groups[x].contents.length;y++){
            $scope.groups[x].contents[y].active=false;
            }
        }
    }

}