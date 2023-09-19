const check = document.getElementById('check_user')
const output = document.getElementById('profile')
let firstValue
let newvalue

//
check.addEventListener('click', () => {
  const enter = document.querySelector('#enter').value

  firstValue = enter
  newvalue = firstValue
  console.log(newvalue)

  const url = 'https://api.github.com/users/' + newvalue
  fetch(url)

.then((res) => {
    return res.json()
      })
.then(data => {
    output.innerHTML = `<img src="${data.avatar_url}">
<a href='${data.html_url}'>View status</a>
`
})


} )