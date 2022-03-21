export const analizeAC = (data) => {
  return async (dispatch) => {
    //console.log('beforeFetch');
    try {
      const response = await fetch("/api/hh", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result);

      } else {
        
      }
    } catch (err) {
      console.log("Error analize: ", err);
    }
  };
};
