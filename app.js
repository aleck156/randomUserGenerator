const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'gmail@johnDoe.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/1-/jpg',
    };
  },
});

app.mount('#app');
