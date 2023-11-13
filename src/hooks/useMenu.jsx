import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  // const {
  //   data: menu = [],
  //   isLoading: loading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["menu"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       "https://bistro-boss-server-fawn.vercel.app/menu"
  //     );
  //     return res.json();
  //   },
  // });

  return [menu, loading];
  // return [menu, loading, refetch];
};

export default useMenu;
