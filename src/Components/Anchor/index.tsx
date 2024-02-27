import { ReactElement } from "react";
type ButtonProps = {
  textButton: string;
  hrfe: string | undefined;
  css: string;
  icon?: ReactElement;
};

function Anchor({ textButton, hrfe, css, icon }: ButtonProps) {
  return (
    <a
      className={css}
      href={hrfe}
      target="_blank"
      rel="noreferrer"
    >
      {icon ? (
        <>
          {icon}
          {textButton}
        </>
      ) : (
        <>{textButton}</>
      )}
    </a>
  );
}

export { Anchor };
