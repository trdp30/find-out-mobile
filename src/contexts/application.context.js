import React, { createContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { findAllCart } from '../store/actions/cart.action';

export const ApplicationContext = createContext();

ApplicationContext.displayName = 'ApplicationContext';

const ApplicationWrapper = ({ children, ...props }) => {
  const { session, fetchCart } = props;
  const { isAuthenticated } = session;

  useEffect(() => {
    if (isAuthenticated) {
      // fetchCart({});
    }
  }, [isAuthenticated]);

  return (
    <ApplicationContext.Provider value={{ isAuthenticated }}>
      {typeof children === 'function'
        ? children({ isAuthenticated })
        : children}
    </ApplicationContext.Provider>
  );
};

const mapStateToProps = () => {
  return (state) => ({
    session: state.session,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: (actions = {}) => dispatch(findAllCart({ actions })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationWrapper);
