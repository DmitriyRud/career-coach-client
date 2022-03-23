//import { useNavigate } from "react-router-dom";

import { addRecomendation } from "../actions/recomendationAction";

export const analizeAC = (data) => {
  return async (dispatch) => {
    //let navigate = useNavigate();
    //console.log('beforeFetch');
    try {
      const response = await fetch("/api/hh", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const result = await response.json();
        //console.log('Результат, пришедший после анализа ===> ',result);
        //navigate(`/result/${result.resultId}`);
        //dispatch(addRecomendation(result.resultId));

        const resultId = result.resultId;
        //alert(`Отображаем результат ${resultId}`);
        return resultId;
        // const response2 = await fetch("/recommend", {
        //   method: "POST",
        //   headers: { "Content-type": "application/json" },
        //   body: JSON.stringify({ resultId }),
        // });
        // if (response2.ok) {
        //   console.log('response2 =====> ', response2);
        // }
      } else {

      }
    } catch (err) {
      console.log("Error analize: ", err);
    }
  };
};
