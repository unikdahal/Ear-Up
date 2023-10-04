import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const json = {
      login: "unikdahal",
      id: 61407386,
      node_id: "MDQ6VXNlcjYxNDA3Mzg2",
      avatar_url: "https://avatars.githubusercontent.com/u/61407386?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/unikdahal",
      html_url: "https://github.com/unikdahal",
      followers_url: "https://api.github.com/users/unikdahal/followers",
      following_url:
        "https://api.github.com/users/unikdahal/following{/other_user}",
      gists_url: "https://api.github.com/users/unikdahal/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/unikdahal/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/unikdahal/subscriptions",
      organizations_url: "https://api.github.com/users/unikdahal/orgs",
      repos_url: "https://api.github.com/users/unikdahal/repos",
      events_url: "https://api.github.com/users/unikdahal/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/unikdahal/received_events",
      type: "User",
      site_admin: false,
      name: "Unik Dahal",
      company: null,
      blog: "www.unikdahal.com.np",
      location: "Biratnagar, Nepal",
      email: null,
      hireable: null,
      bio: null,
      twitter_username: "Unikdahal1",
      public_repos: 34,
      public_gists: 0,
      followers: 30,
      following: 30,
      created_at: "2020-02-24T08:11:37Z",
      updated_at: "2023-08-20T12:04:33Z",
    };

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card bg-white p-4 rounded-lg shadow-md text-center">
        <img
          src={avatar_url}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold">{name}</h2>
        <h3 className="text-lg">{location}</h3>
        <h4 className="text-gray-600">@unikdahal1</h4>
      </div>
    );
  }
}

export default UserClass;
