# network
网络图元素，用于实现网络图<br>
控制属性<br>
data--nodes	设置网络节点, 格式为数组字符串. 需要有id, label(节点显示名称), physics(物理效果, 就是动起来像果冻一样), 例如: [{"id":1,"label":"节点 1","physics":false}]	[{"id":1,"label":"节点 1","physics":false},{"id":2,"label":"节点 2","physics":false},{"id":3,"label":"节点 3","physics":false}]<br>
data--edges	设置边界, 格式为数组字符串. 需要有from(从哪个节点, 填节点的id), to(到哪个节点, 填写节点id), arrows(是否有箭头, 填写"to"表示指向到的那个节点), label(显示边的名称), physics(物理效果, 就是动起来像果冻一样), 例如[{"from":1,"to":3,"physics":false,"arrows":"to","label":"1-3"}]	[{"from":1,"to":3,"physics":false,"arrows":"to","label":"1-3"},{"from":1,"to":2,"physics":false,"arrows":"to","label":"1-2"}]<br>
# 说明
1、设置网络节点： 格式为数组字符串. 需要有id, label(节点显示名称), physics(物理效果, 就是动起来像果冻一样), 例如: [{"id":2,"label":"节点 2","physics":false}]<br>

设置完显示为：<img src="http://www.wware.org/img/161205_2.jpg?_8e71" width="100px"><br>
2、设置边界： 格式为数组字符串. 需要有from(从哪个节点, 填节点的id), to(到哪个节点, 填写节点id), arrows(是否有箭头, 填写"to"表示指向到的那个节点), label(显示边的名称), physics(物理效果, 就是动起来像果冻一样), 例如[{"from":1,"to":2,"physics":false,"arrows":"to","label":"1-2"}]<br>

设置完显示为：<img src="http://www.wware.org/img/161205_3.jpg?_cfac" width="300px"><br>

