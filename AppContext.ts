import React from "react";

const context = {
  songId: null,
  setSongId: (id: string) => {}
}

export const AppContext = React.createContext(context);
