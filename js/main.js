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
Modal()
Hamburger()
StopWatch()