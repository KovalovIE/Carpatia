window.onload = function() {
  var photo = document.getElementById('photo-json');
  photo.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);

      xhr.send();
      xhr.onload = function () {
          if (xhr.status !== 200) {
            alert( xhr.status + ': ' + xhr.statusText );
          } else {
              console.log(typeof this.response)
              this.response.forEach(function (photo) {
                var img = new Image();
                img.src = photo.thumbnailUrl;
                document.getElementById("photo-list").appendChild(img);
              })
          }
      }

      photo.style.visibility = 'hidden';
  })
}


// var imgDelete = document.getElementByClassName('img-json')
// var xhr = new XMLHttpRequest();
// xhr.responseType = 'json';

// xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/photos', true);

// xhr.send();
// xhr.onload = function () {
//     if (xhr.status !== 200) {
//       alert( xhr.status + ': ' + xhr.statusText );
//     } else {
//       this.response.forEach(function (photo) {
//         var li = document.createElement('li'),
//             img = new Image ();
//         img.src = photo.thumbnailUrl;
//         li.appendChild(img);
//         photoList.appendChild(li);
//       });
//     }
// }