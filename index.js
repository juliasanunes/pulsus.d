app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://pulsus-d-julia-nunes-santos-projects.vercel.app"); // Substitua pela origem desejada
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
