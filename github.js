class Github {
  constructor() {
    this.client_id = '72a50f5d13d5bbd4d5d3';
    this.client_secret = '9d7328ba4bcc96c4887d28d6cc4f10d6c624cbbd';
    this.repos_count = 7;
    this.repos_sort = 'Created: asc';
  }

  /** Fetch Users */
  async getUser(user) {
      /** Fetch Users */
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    /** Fetch users repos */
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}
