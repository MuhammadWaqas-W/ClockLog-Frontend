import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialValue: any) => {

  useEffect(() => {
    const getData = window.localStorage.getItem(key);
    if (getData) {
      // setData(JSON.parse(getData));
    }
  }, [key]);

  const storeData = (updateValue: any) => {
    // setData(updateValue);
    // window.localStorage.setItem(key, JSON.stringify(updateValue));
  };

  return { data, storeData };
};

export default useLocalStorage;
