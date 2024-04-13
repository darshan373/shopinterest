import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsactions } from "../store/itemSlice";
import { fetchStatusactions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusactions.markFetchStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusactions.markFetchDone());
        dispatch(fetchStatusactions.markFetchFinished());
        dispatch(itemsactions.addInitialitems(items));
        
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
