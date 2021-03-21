import React, { createContext } from 'react';
import { connect } from 'react-redux';

export const ApplicationContext = createContext();

ApplicationContext.displayName = 'ApplicationContext';

const ApplicationWrapper = ({ children, ...props }) => {
  const { session } = props;
  const { isAuthenticated } = session;

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

export default connect(mapStateToProps)(ApplicationWrapper);
