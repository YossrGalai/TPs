function ex1() {
  var a = 1;
  let b = 2;
  const c = 3;

  {
    var a = 10;
    let b = 20;
    const c = 30;
    console.log("Ex1 - Dans le bloc:", a, b, c);
  }

  console.log("Ex1 - Hors du bloc:", a, b, c);

}

