import IFetch from "../interfaces/IFetch";

export default async ({ endpoint, method, token, body }: IFetch) => {
    try {
      const response = await fetch(`http://${process.env.REACT_APP_HOSTNAME}:${process.env.REACT_APP_BACKEND_PORT}/${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(body),
      });
      const result = await response.json();
      return { result, response };
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  