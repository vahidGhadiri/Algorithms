const timeConversion = (time) => {
  let partsOfTime = time.match(/(\d+):(\d+):(\d+)(..)/)
  let hour = ""
  let minute = partsOfTime[2]
  let second = partsOfTime[3]

  if (partsOfTime[4] === "PM" && partsOfTime[1] < 12) {
    hour = parseInt(partsOfTime[1]) + 12
  } else {
    hour = partsOfTime[1]
  }
  if (partsOfTime[4] === "AM" && partsOfTime[1] === "12") {
    hour = "00"
  }

  const militaryTime = `${hour}:${minute}:${second}`
  return militaryTime
}

console.log(timeConversion("12:45:00AM"))
