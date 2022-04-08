import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const hisoty = useHistory();

  const onClickBack = () => hisoty.goBack();

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
