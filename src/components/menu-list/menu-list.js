import React, { Component } from "react";
import MenuListItem from "../menu-list-item";
import { connect } from "react-redux";
import WithRestoService from "../hoc";
import { menuLoaded, menuRequested, menuError } from "../../actions";
import Spinner from "../spinner";
import Error from "../error";

import "./menu-list.scss";

class MenuList extends Component {
  componentDidMount() {
    const { menuRequested, menuError, RestoService, menuLoaded } = this.props;
    menuRequested();
    menuError();

    RestoService.getMenuItems() // props RestoService приходит из комп. высшего порядка WithRestoService, а точнее из провайдера, который находтся на самом верхнем уровне компонентов приложения.
      .then((res) => menuLoaded(res)) //теперь полученный массив объектов отправляем в state (который находится в Redax-store)
      .catch(() => menuError());
  }

  render() {
    const { menuItems, loading, error } = this.props; //здесь мы получаем данные из state (Redax-store).

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Error />;
    }

    return (
      <ul className="menu__list">
        {menuItems.map((menuItem) => {
          return <MenuListItem key={menuItem.id} menuItem={menuItem} />;
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  // этим методом мы получаем данные из state
  return {
    menuItems: state.menu, //записываем полученные данные в state. Эти данные будут получены компонентом MenuList в виде props.
    loading: state.loading,
    error: state.error,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     menuLoaded: (newMenu) => {//импортируем menuLoaded из actions и применим
//       dispatch(menuLoaded(newMenu));
//     },
//   };
// };

//испльзуем внутреннюю реализацию ф-ии connect. Передадим в нее даже не ф-ю, а просто объект и она сделает все за нас (мы толкьо передаем actionCreator во внутрь)
const mapDispatchToProps = {
  menuLoaded,
  menuRequested,
  menuError,
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(MenuList)
); //композиция из 2-х компонентов высшего порядка
