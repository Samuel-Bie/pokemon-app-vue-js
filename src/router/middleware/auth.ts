const auth = (next: any, store: any) => {
  if (!store.state.isUserLoggedIn) {
    next("/");
  } else {
    next(undefined);
  }
};

export default auth;
