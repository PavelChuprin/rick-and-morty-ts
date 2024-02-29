import * as S from "./styles";

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
