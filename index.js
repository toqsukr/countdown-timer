const targetDate = new Date('2025-04-30T13:52:00')

function getTimeRemaining(target) {
  const now = new Date()
  const diff = target - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds, isExpired: false }
}

const updateTime = () => {
  const { days, hours, minutes, seconds, isExpired } = getTimeRemaining(targetDate)

  document.getElementById('day-value').innerHTML = !days ? '💀' : days

  document.getElementById('hour-value').innerHTML = !days && !hours ? '💀' : hours

  document.getElementById('minute-value').innerHTML = !days && !hours && !minutes ? '💀' : minutes

  document.getElementById('second-value').innerHTML =
    !days && !hours && !minutes && !seconds ? '💀' : seconds

  if (isExpired) {
    document.getElementById('title').innerHTML = 'СМЕРТЬ'
    document.body.style.backgroundColor = '#550000'
  } else {
    setTimeout(updateTime, 1000)
  }
}

updateTime()
