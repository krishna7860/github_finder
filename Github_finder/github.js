class Github {
  constructor() {
    this.client_id = "94d099b8db8689bcbb11";
    this.client_secret = "5850f88c60d0e8f3a9462e040c7a166b29dd0e24";
    this.repos_count = 5;
    this.repos_sort = "created : asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profileData = await profileResponse.json();
    const reposData = await repoResponse.json();
    return {
      profile: profileData,
      repos: reposData
    };
  }
}
