const Hamburger = () => {
  const hum = document.querySelector('.hum')
  const overlay = document.getElementById('overlay')
  
  hum.addEventListener('click', () => {
    hum.classList.toggle('anime-h')
    overlay.classList.toggle('anime-o')
  })
}
const Modal = () => {
  const modalBack = document.getElementById('modal-back')
  const modalOpne = document.getElementById('modal-open')
  const modalClose = document.getElementById('modal-close')
  const modal = document.getElementById('modal')
  modalOpne.addEventListener('click', () => {
    modalBack.classList.add('anime-m')
    modal.classList.add('anime-m')
  })
  modalClose.addEventListener('click', () => {
    modalBack.classList.remove('anime-m')
    modal.classList.remove('anime-m')
  })
}
const StopWatch = () => {
  const start = document.getElementById('start')
  const stop = document.getElementById('stop')
  const reset = document.getElementById('reset')
  const timer = document.getElementById('timer')
  let startTime
  let identifier
  let thenTime = 0
  const CountUp = () => {
    const day = new Date(Date.now() - startTime + thenTime)
    const min = String(day.getMinutes()).padStart(2, '0')
    const sec = String(day.getSeconds()).padStart(2, '0')
    const millisec = String(day.getMilliseconds()).padStart(3, '0')
    timer.textContent = `${min}:${sec}:${millisec}`
    identifier = setTimeout(() => {
      CountUp()
    }, 10)
  }
  start.addEventListener('click', () => {
    startTime = Date.now()
    CountUp()
  })
  stop.addEventListener('click', () => {
    clearTimeout(identifier)
    thenTime += Date.now() - startTime
  })
  reset.addEventListener('click', () => {
    timer.textContent = '00:00:000'
    thenTime = 0
  })
}
const getApi = () => {
  const getapi = document.getElementById('get-api')
  const usersUl = document.getElementById('users-ul')
  const showUsers = (users) => {
    users.forEach(user => {
      console.log(user)
      const name = user.name
      const username = user.username
      const email = user.email
      const id = user.id
      const li = document.createElement('li')
      li.classList.add('user-li')
      li.textContent = `id:${id}\nname:${name}\nusername:${username}\nemail:${email}`
      usersUl.appendChild(li)
    })
  }
  getapi.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res=>{
      return res.json()
    }).then(todos => {
      showUsers(todos)
    })
  })
}
const Observer = () => {
  const target = document.getElementById('ob-target')
  const callback = (entries, observer) => {
    if(entries.isIntersecting){
      entries.target.classList.add('anime-i')
      // observer.unobserve(entries.target)
      console.log('alerted')
    }else{
      return
    }
  }
  const options = {
    threshold: .8
  }
  const observer = new IntersectionObserver(callback, options)
  observer.observe(target)
}
Modal()
Hamburger()
StopWatch()
getApi()
Observer()