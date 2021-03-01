class Github {
  constructor() {
    this.client_id = '72a50f5d13d5bbd4d5d3';
    this.client_secret = '9d7328ba4bcc96c4887d28d6cc4f10d6c624cbbd';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}
