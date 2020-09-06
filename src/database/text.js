const Database = require("./db")
const createProffy = require("./createProffy")

Database.then(async (db) => {
  //inserir e consultar os dados
  proffyValue = {
    name: "lucas bellettini",
    avatar: "https://avatars2.githubusercontent.com/u/55991925?s=460&u=3aa18e2167a4c825d24823ccafd149b6e08051fe&v=4",
    whatsapp: "48954564561",
    bio: "heloo world"
  }

  classValue = {
    subject: 1,
    cost: "20"
  }

  classScheduleValues = [
    {
      weekday: [0],
      time_from: [720],
      time_to: [1120]
    },
    {
      weekday: [1],
      time_from: [520],
      time_to: [820]
    }
  ];

  /* await createProffy(db, {proffyValue, classValue, classScheduleValues}) */

  // consultar todos os proffys
  const selectedProffys =  await db.all("SELECT * FROM proffys")
  /* console.log(selectedProffys) */

  //consultar class de um determinado proffy e trazer os dados do proffy jnto
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1
  `)
  /* console.log(selectClassesAndProffys) */


  // consultar horario se é disponivel

  const selectClassSchedule =  await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = 1
    AND class_schedule.weekday = 0
    AND class_schedule.time_from <= 720
    AND class_schedule.time_to > 1100

  `)
  console.log(selectClassSchedule)

})
