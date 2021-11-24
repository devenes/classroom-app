import React from "react";

class AddUser extends React.Component {
  //kullanıcının girdileri için bir state oluşturmamız lazım:
  state = {
    name: " ",
  };
  //default olarak gelen, her tıklayışta (submit) sayfayı yenileme özellğini devre dışı bırakıyoruz:
  submitHandler = (iptal) => {
    iptal.preventDefault();
    this.props.addMethod(this.state.name);

    //güncelleme bittikten sonra name'i boşaltmak için boş bırakıyoruz:
    this.setState({
      name: "",
    });
    // console.log("submited", this.state.name);
  };

  changeHandler = (change) => {
    this.setState({
      name: change.target.value,
    });
    //console.log(this.state.name);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          className="form-control mb-2"
          type="text"
          id="name"
          onChange={this.changeHandler}
          value={this.state.name}
          placeholder="Kullanıcı Adı"
        />
        <button className="btn btn-outline-success btn-block"> Kaydet </button>
      </form>
    );
  }
}

export default AddUser;
