import React, { Component } from "react";
import MenuInner from "./MenuInner";

class Menu extends Component {

  state = {
    menuOpen: false
  }

  openMenu = () => {
    this.setState({menuOpen: true})
  }

  closeMenu = () => {
    this.setState({menuOpen: false})
  }

  render() {
    return (
      <div>
        <div className="menu" onClick={this.openMenu}>Menu</div>
        <MenuInner isOpen={this.state.menuOpen} onClose={() => this.closeMenu()}
          title={this.props.modalTitle} p1={this.props.modalInstructions1} p2={this.props.modalInstructions2} p3={this.props.modalInstructions3}>
        </MenuInner>
      </div>

    )
  }
}

export default Menu;