export default {
  Query: {
    loggedUser: () => {
      return JSON.parse(localStorage.getItem('user')) || null;
    },
  }
}
