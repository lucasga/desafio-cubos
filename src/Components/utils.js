
const getGenre = (id) => {
  let name = "";
  switch (id) {
    case 28:
      name= "Ação";
      break
    case 12:
      name= "Aventura";
      break
    case 16:
      name= "Animação";
      break
    case 35:
      name= "Comédia";
      break
    case 80:
      name= "Crime";
      break
    case 99:
      name= "Documentário";
      break
    case 18:
      name= "Drama";
      break
    case 10751:
      name= "Família";
      break
    case 14:
      name= "Fantasia";
      break
    case 36:
      name= "História";
      break
    case 27:
      name= "Terror";
      break
    case 10402:
      name= "Música";
      break
    case 9648:
      name= "Mistério";
      break
    case 10749:
      name= "Romance";
      break
    case 878:
      name= "Ficção científica";
      break
    case 10770:
      name= "Cinema TV";
      break
    case 53:
      name= "Thriller";
      break
    case 10752:
      name= "Guerra";
      break
    case 37:
      name= "Faroeste";
      break
    default:
      name= "Não especificado"
  }
  return name;
}



  export default getGenre;
