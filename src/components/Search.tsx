import React, { FC } from "react";
import { css } from "@emotion/core";

import { colorPrimary, colorBorder } from "./styles/config";
import Button from "./Button";

const Search: FC<{}> = () => {
    return (
        <div
            css={css`
                display: flex;
                height: 3rem;
                margin: 0 auto;
                width: 100%;
                max-width: 40rem;

                > div:first-of-type {
                    flex: 1 1 0;
                    margin-right: 0.5rem;

                    input {
                        width: 100%;
                        height: 100%;
                        padding: 0.5rem 0.75rem;
                        border: 1px solid ${colorBorder};

                        &:focus {
                            border-color: ${colorPrimary};
                            outline: none;
                        }
                    }
                }

                > div:last-of-type {
                    flex: 0 0 100px;
                    max-width: 100px;

                    button {
                        height: 100%;
                        width: 100%;
                    }
                }
            `}
        >
            <div>
                <input placeholder="Enter an address, city or Zip code" type="text" />
            </div>
            <div>
                <Button>SEARCH</Button>
            </div>
        </div>
    );
};

export default Search;
