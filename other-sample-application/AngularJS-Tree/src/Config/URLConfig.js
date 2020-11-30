/**
 * Created by Amit Thakkar on 24/03/15.
 */
(function (ng) {
    var treeServiceApp = ng.module('tree.factory', []);
    treeServiceApp.factory("URLConfig", [function () {
        return {
            tree: "api/tree.json",
            topicsTreeData:"http://127.0.0.1:8080/ParentChildRelationsTopics/topics/tree/data"
        }
    }]);
})(angular);
