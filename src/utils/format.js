const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Física",
  "Geográfia",
  "História",
  "Matemática",
  "Português",
  "Química",
]

const weekdays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
]

function getSubject ( data ) {
  const position = +data - 1
  return subjects[position]
}

function convertHoursToMinutes(time) { 
  const [hour, minutes] = time.split(':')
  return Number((hour * 60 ) + minutes)
}

module.exports = { subjects, weekdays, getSubject, convertHoursToMinutes }