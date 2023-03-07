import React, { createContext, useContext, useState } from "react";

const SettingContext = createContext();
const useSetting = () => useContext(SettingContext);

function SettingProvider({ children }) {
    const [contacts, setContacts] = useState([[" ", " ", " ",
    " ", " ", " ", " "]]);
    
    const [list, setList] = useState([[" ", " ", " ",
    " ", " ", " ", " "]]);
   

  
    return (
      <SettingContext.Provider
        value={{
          contacts,
          setContacts,
          list,
          setList,
        }}
      >
        {children}
      </SettingContext.Provider>
    );
  }

  export { SettingProvider, useSetting };