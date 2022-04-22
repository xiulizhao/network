(function(root, factory) {

  /* CommonJS */
  if (typeof exports == "object") module.exports = factory();

  /* AMD module */
  else if (typeof define == "function" && define.amd) define(factory);

  /* Browser global */
  else root.wwclass = factory();
}(this, function() {
  "use strict";

  var wwclassName = /*INSBEGIN:WWCLSNAME*/
    "network"
    /*INSEND:WWCLSNAME*/
  ;

  // 加载依赖资源, 如没有依赖资源可直接回调
  var loadDependence = function(fncallback) {
    //* 有依赖资源请使用本段代码
    // 添加标识以避免重复加载
    if (!window.wwload.vis) {
      window.wwload.vis = "wait";
      requirejs.config({
        paths: {
          "vis": "libs/vis/dist/vis.min"
        }
      });
      require(["vis", "css!libs/vis/dist/vis.min"], function(vis) {
        window.wwload.vis = true;
        window.vis = vis;
        replace();
        fncallback();
      });
    } else if (window.wwload.vis === "wait") {
      setTimeout(function() {
        loadDependence(fncallback);
      }, 100);
    } else {
      replace();
      fncallback();
    }

    function replace() {
      loadDependence = function(fncallback) {
        fncallback();
      }
    }
    //*/

    /* 无依赖资源请使用本段代码
    fncallback();
    //*/
  };

  // 本函数处理元素初始化动作
  var init = function() {
    init = function() {
      return true;
    };

    $.wwclass.addEvtinHandler(wwclassName, evtInHandler);

    // 如有其他初始化动作, 请继续在下方添加
  };

  // 处理元素, 传入了元素对象($前缀表明是一个jquery对象).
  var processElement = function($ele) {
    // 对 $ele 元素做对应处理
    var nodes = new vis.DataSet($.wwclass.helper.getJSONprop($ele, "data--nodes") || []);
    var edges = new vis.DataSet($.wwclass.helper.getJSONprop($ele, "data--edges") || []);
    // var nodes = new vis.DataSet([{
    //   "id": 1,
    //   "label": "Node 1",
    //   "physics": false
    // }, {
    //   "id": 2,
    //   "label": "Node 2",
    //   "physics": false
    // }, {
    //   "id": 3,
    //   "label": "Node 3",
    //   "physics": false
    // }, {
    //   "id": 4,
    //   "label": "Node 4",
    //   "physics": false
    // }, {
    //   "id": 5,
    //   "label": "Node 5",
    //   "physics": false
    // }]);

    // // create an array with edges
    // var edges = new vis.DataSet([{
    //   "from": 1,
    //   "to": 3,
    //   "physics": false,
    //   "arrows": "to",
    //   "label": "1-3"
    // }, {
    //   "from": 1,
    //   "to": 2,
    //   "physics": false,
    //   "arrows": "to",
    //   "label": "1-2"
    // }, {
    //   "from": 2,
    //   "to": 4,
    //   "physics": false,
    //   "arrows": "to",
    //   "label": "4-2"
    // }, {
    //   "from": 2,
    //   "to": 5,
    //   "physics": false,
    //   "arrows": "to",
    //   "label": "2-5"
    // }]);

    // create a network
    var container = $ele[0];

    // provide the data in the vis format
    var data = {
      nodes: nodes,
      edges: edges
    };
    var options = {};

    // initialize your network!
    var network = new vis.Network(container, data, options);
    $ele.data("network", network);
  };

  // 监听属性相关处理
  var evtInHandler = function($ele, attribute, value) {
    // 处理代码
    switch (attribute) {
      case "data--nodes":
      case "data--edges":
        $ele.data("network").setData({
          "nodes": $.wwclass.helper.getJSONprop($ele, "data--nodes") || [],
          "edges": $.wwclass.helper.getJSONprop($ele, "data--edges") || []
        });
        // 添加处理动作
        break;
      default: console.info("监听到 " + attribute + " 属性值改变为 " + value + ", 但是没找到对应处理动作.");
    }
  };

  // 以下部分不需要修改
  if (!$.wwclass) {
    console.error("Can not use without wwclass.js");
    return false;
  }

  var ret = /*INSBEGIN:WWCLSHANDLER*/
    function(set) {
      if (set.length > 0) {
        loadDependence(function() {
          init();
          $(set).each(function(index, targetDom) {
            processElement($(targetDom));
          });
        });
      }
    }
    /*INSEND:WWCLSHANDLER*/
  ;

  return ret;

}));
