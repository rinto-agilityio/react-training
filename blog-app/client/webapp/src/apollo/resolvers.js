export default {
  Query: {
    loggedUser: () => {
      return JSON.parse(localStorage.getItem('userLoged')) || null;
    }
  }
}
