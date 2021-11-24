import React from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
// function App() {
//   return (
//     <div>
//       <User name="Enes" state="online" metod={Konsol} />
//       <User name="Ali" state="offline" metod={Konsol} />
//       <User name="Emre" state="busy" metod={Konsol} />
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    idx: 4,
    users: [
      { name: "Mehmet", state: "online", id: 1 },
      { name: "Ömer", state: "offline", id: 2 },
      { name: "Osman", state: "online", id: 3 },
    ],
  };

  stateChangeHandler = (data) => {
    let tUsers = this.state.users.map((us) => {
      if (us.id === data.id) {
        us.state = data.state;
      }
      return us;
    });
    this.setState({
      users: tUsers,
    });
  };

  deleteMethod = (id) => {
    console.log(id);
    let tUsers = this.state.users.filter((us) => {
      return us.id !== id;
    });
    this.setState({
      users: tUsers,
    });
  };

  addMethod = (name) => {
    console.log("App modulü içerisinde", name);
    let id = this.state.idx;
    let user = {
      name: name,
      state: "online",
      id: id,
    };
    let tUsers = [...this.state.users, user];
    this.setState({
      users: tUsers,
      idx: id + 1,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            {/* userlist'e gönderilecekler: */}
            <UserList
              users={this.state.users}
              delMethod={this.deleteMethod}
              stateChange={this.stateChangeHandler}
            />
            <hr />
            <AddUser addMethod={this.addMethod} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
