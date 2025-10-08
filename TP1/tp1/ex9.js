async function ex9() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    console.log("Ex9 - Titres des 5 premiers posts:");
    data.slice(0, 5).forEach(post => console.log("-", post.title));
  } catch (err) {
    console.error("Ex9 - Erreur:", err);
  }
}
