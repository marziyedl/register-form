import { Adapter } from "helpers/Adapter";
import { useState, useEffect, useRef } from "react";

const UsePost = (
  data = {
    url: "",
    callBack: (value: string) => {},
    body: {},
    onError: (value: string) => {},
  },
) => {
  const [postLoading, setPostLoading] = useState(false);
  const didMount = useRef(false);

  const postItem = async () => {
    setPostLoading(true);
    try {
      await Adapter.post(data.url, data.body).then((response) => {
        data.callBack(response.data);
        setPostLoading(false);
      });
    } catch (error) {
      if (data.onError) {
        data.onError(error as string);
      }
      setPostLoading(false);
    }
  };
  useEffect(() => {
    if (didMount.current && Object.keys(data.body).length !== 0) {
      postItem();
    } else {
      didMount.current = true;
    }
  }, [data]);

  return { postLoading };
};

export default UsePost;
