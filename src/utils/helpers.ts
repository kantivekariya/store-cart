/* get local storage data */
export const getLocalState = (key: string) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return serializedState;
  } catch (err) {
    return undefined;
  }
};

/* set local storage data */
export const setLocalState = (key: string, val: any) => {
  try {
    localStorage.setItem(key, val);
  } catch (err) {
    // Ignore write errors.
  }
};

export const loadUserFromLocal = () => {
  try {
    const access_token = getLocalState("access_token");
    console.log("access_token", access_token)
    if (access_token) {
      // authorize
      return {
        isAuthenticated: true,
      };
    } else {
      // unauth
      return {
        isAuthenticated: false,
      };
    }
  } catch (err) {
    return {
      isAuthenticated: false,
    };
  }
};
