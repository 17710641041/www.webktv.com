
// var index = 1;
// var isGet = true;
// var str = ''

//  $.ajax({
//         type: "GET",
//         url: "/api/v1/article/get",
//         data: {
//           index: index
//         },
//         success: function (msg) {
//           console.log(msg);
//           if (msg.length < 10) {
//             isGet = false;
//           }
//           for (var i = 0; i < msg.length; i++) {
//             str += `
//               <a class="list-items" href="/activity?id=${msg[i].address}">
//                 <div class="list-items-title">${msg[i].title}</div>
//                 <div class="list-items-foot">
//                   <div class="users">
//                     <div class="user-info">
//                       <span class="name">作者: ${msg[i].u.nickname}</span>
//                       <span class="name">时间: ${msg[i].createdAt}</span>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             `

//           }
//           $(".list").append(str);
//         }
//  });




