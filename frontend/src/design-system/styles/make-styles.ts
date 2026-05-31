type StyleMap = Record<string, unknown>;

export function makeStyles<TStyles extends StyleMap>(styles: TStyles) {
  return function useStyles() {
    return styles;
  };
}
