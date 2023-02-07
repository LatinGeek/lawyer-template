"use strict";(self.webpackChunkendless=self.webpackChunkendless||[]).push([[419],{42419:(S,u,n)=>{n.r(u),n.d(u,{ToDoFirebaseModule:()=>D});var c=n(69808),l=n(93075),m=n(11238),d=n(46146),b=n(85863),e=n(5e3),k=n(22290),T=n(51995);let f=(()=>{class o{constructor(t){this.db=t}createTask(t){return this.db.collection("todo").add({task:t,completed:!1,nameToSearch:t.toLowerCase()})}getTasks(){return this.db.collection("todo").snapshotChanges()}deleteTask(t){return this.db.collection("todo").doc(t).delete()}updateTask(t,s){return this.db.collection("todo").doc(t).set({task:s.task,completed:s.completed,nameToSearch:s.nameToSearch})}markAll(t){this.db.collection("todo").get().forEach(s=>s.docs.map(a=>this.db.doc(`todo/${a.id}`).update({completed:t})))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(T.ST))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const h=function(o){return{completed:o}};function g(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"li",33)(1,"div",34)(2,"h4",35),e._uU(3),e.qZA(),e.TgZ(4,"span",36)(5,"span",37),e.NdJ("click",function(){const i=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.taskDeleted(i.payload.doc.id))}),e.TgZ(6,"i",14),e._UZ(7,"i",38),e.qZA()(),e.TgZ(8,"span",39),e.NdJ("click",function(){const i=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.taskCompleted(i))}),e.TgZ(9,"i",14),e._UZ(10,"i",15),e.qZA()()()()()}if(2&o){const t=r.$implicit;e.Q6J("ngClass",e.VKq(2,h,t.payload.doc.data().completed)),e.xp6(3),e.Oqu(t.payload.doc.data().task)}}const v=function(o){return{"move-up":o}},C=function(o){return{"move-down":o}},F=function(o){return{hide:o}},Z=function(o){return{visible:o}},_=[{path:"",children:[{path:"",component:(()=>{class o{constructor(t,s,a){this.toastrService=t,this.router=s,this.firebaseService=a,this.todos=b.o,this.redBorder=!1}addTask(t){if(!t)return this.redBorder=!0,!1;this.firebaseService.createTask(t).then(s=>{this.resetFields(),this.router.navigate(["/to-do-firebase"])}),this.redBorder=!1}resetFields(){this.text=""}taskCompleted(t){t.task=t.payload.doc.data().task,t.completed=t.payload.doc.data().completed,t.completed=!t.completed,t.nameToSearch=t.task.toLowerCase(),t.completed?this.toastrService.success(t.text,"Mark as completed"):this.toastrService.error(t.text,"Mark as Incompleted"),this.firebaseService.updateTask(t.payload.doc.id,t).then(s=>{this.router.navigate(["/to-do-firebase"])})}taskDeleted(t){this.firebaseService.deleteTask(t).then(s=>{this.router.navigate(["/to-do-firebase"])},s=>{})}markAllAction(t){this.firebaseService.markAll(t),this.completed=t,t?this.toastrService.success("All Task as Completed"):this.toastrService.error("All Task as Incompleted")}ngOnInit(){this.firebaseService.getTasks().subscribe(t=>{this.items=t})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(k._W),e.Y36(d.F0),e.Y36(f))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-to-do-firebase"]],decls:44,vars:16,consts:[[1,"container-fluid"],[1,"row"],[1,"col-xl-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"todo","todo-database"],[1,"todo-list-wrapper"],[1,"todo-list-container"],[1,"mark-all-tasks","mark-all-firebase"],[1,"mark-all-tasks-container","d-inline-block"],["id","mark-all-finished","role","button",1,"mark-all-btn",3,"ngClass"],[1,"btn-label"],[1,"action-box","completed",3,"click"],[1,"icon"],[1,"icon-check"],["id","mark-all-incomplete","role","button",1,"mark-all-btn",3,"ngClass"],[1,"action-box",3,"click"],[1,"todo-list-body","custom-scrollbar"],["id","todo-list"],["class","task",3,"ngClass",4,"ngFor","ngForOf"],[1,"todo-list-footer"],[1,"add-task-btn-wrapper"],[1,"add-task-btn",3,"ngClass"],[1,"btn","btn-primary",3,"click"],[1,"icon-plus","me-1"],[1,"new-task-wrapper",3,"ngClass"],["id","new-task","placeholder","Enter new task here. . .",3,"ngModel","ngModelChange"],["id","close-task-panel",1,"btn","btn-danger","cancel-btn","me-3",3,"click"],["id","add-task",1,"btn","btn-success","add-new-task-btn",3,"click"],[1,"notification-popup","hide"],[1,"task"],[1,"notification-text"],[1,"task",3,"ngClass"],[1,"task-container"],[1,"task-label"],[1,"task-action-btn"],["title","Delete Task",1,"action-box","large","delete-btn",3,"click"],[1,"icon-trash"],["title","Mark Complete",1,"action-box","large","complete-btn",3,"click"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h5"),e._uU(6,"To-Do"),e.qZA()(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"div",10)(13,"span",11)(14,"span",12),e._uU(15,"Mark all as finished"),e.qZA(),e.TgZ(16,"span",13),e.NdJ("click",function(){return s.markAllAction(!0)}),e.TgZ(17,"i",14),e._UZ(18,"i",15),e.qZA()()(),e.TgZ(19,"span",16)(20,"span",12),e._uU(21,"Mark all as completed"),e.qZA(),e.TgZ(22,"span",17),e.NdJ("click",function(){return s.markAllAction(!1)}),e.TgZ(23,"i",14),e._UZ(24,"i",15),e.qZA()()()()(),e.TgZ(25,"div",18)(26,"ul",19),e.YNc(27,g,11,4,"li",20),e.qZA()(),e.TgZ(28,"div",21)(29,"div",22)(30,"span",23)(31,"button",24),e.NdJ("click",function(){return s.visible=!0}),e._UZ(32,"i",25),e._uU(33,"Add new task "),e.qZA()()(),e.TgZ(34,"div",26)(35,"textarea",27),e.NdJ("ngModelChange",function(i){return s.text=i}),e.qZA(),e.TgZ(36,"button",28),e.NdJ("click",function(){return s.visible=!1}),e._uU(37,"Close"),e.qZA(),e.TgZ(38,"button",29),e.NdJ("click",function(){return s.addTask(s.text)}),e._uU(39,"Add Task"),e.qZA()()()()(),e.TgZ(40,"div",30)(41,"p"),e._UZ(42,"span",31)(43,"span",32),e.qZA()()()()()()()()),2&t&&(e.xp6(13),e.Q6J("ngClass",e.VKq(8,v,s.completed)),e.xp6(6),e.Q6J("ngClass",e.VKq(10,C,!s.completed)),e.xp6(8),e.Q6J("ngForOf",s.items),e.xp6(3),e.Q6J("ngClass",e.VKq(12,F,s.visible)),e.xp6(4),e.Q6J("ngClass",e.VKq(14,Z,s.visible)),e.xp6(1),e.ekj("border-danger",s.redBorder),e.Q6J("ngModel",s.text))},dependencies:[c.mk,c.sg,l.Fj,l.JJ,l.On]}),o})(),data:{title:"To-Do-Firebase",breadcrumb:""}}]}];let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(_),d.Bz]}),o})(),D=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,A,l.u5,m.IJ]}),o})()}}]);