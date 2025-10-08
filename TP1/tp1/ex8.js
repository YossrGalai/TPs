async function ex8() {
  const wait = ms => new Promise(res => setTimeout(res, ms));

  console.log("Ex8 - Début");
  await wait(2000);
  console.log("Ex8 - Fin");
}
