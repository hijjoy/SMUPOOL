const COLOR = {
  MAIN: "#186DEC",
  BLUE: "#74A6D3",
  GRAY: "#E8EAEC",
  DARK_BLUE: "2D415F",
};

const ALIGN = {
  ROW_CENTER: `
            display: flex;
            justify-content: center;
            align-items: center
            `,
  COLUMN_CENTER: `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `,
  ROW_SPACE_BETWEEN: `
          display: flex;
          justify-content: space-between;
          align-items: center;
          `,
  ROW_SPACE_AROUND: `
          display: flex;
          justify-content: space-around;
          align-items: center;
          `,
  GRID_CENTER: `
          display: grid;
          place-items: center;
          `,
};

const theme = { COLOR, ALIGN };

export default theme;
